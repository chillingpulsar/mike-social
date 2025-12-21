<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import { regSchema } from '../schema.js';
	import { zod4Client } from 'sveltekit-superforms/adapters';
	import StepOne from './(components)/(step-one)/step-one.svelte';
	import StepTwo from './(components)/(step-two)/step-two.svelte';

	const { data } = $props();

	let buttonState = $state({
		first: true,
		second: false
	});

	// svelte-ignore state_referenced_locally
	const form = superForm(data.regForm, {
		validators: zod4Client(regSchema),
		id: crypto.randomUUID(),
		onUpdate: async ({ result }) => {
			const { data, status } = result;
			switch (status) {
				case 200:
					console.log(data.msg);
					break;
				case 401:
					console.log(data.msg);
					break;
			}
		}
	});

	const { form: formData, enhance, delayed, submitting } = form;
</script>

<main class="grid md:grid-cols-[1fr_2fr] place-items-center md:place-items-stretch min-h-screen">
	<section
		class="w-full hidden md:flex border-r border-muted-foreground/50 items-end justify-center flex-col gap-2 p-10"
	>
		<h1 class="text-4xl font-bold text-primary text-right">Create Account</h1>
		<p class="text-muted-foreground text-right">We're thrilled to have you here!</p>
	</section>

	<section class="flex items-start justify-center p-4 md:p-10 flex-col gap-11">
		<div class="">
			<p class="text-xs text-muted-foreground">Step {buttonState.first ? 1 : 2} of 2</p>
			<h2 class="text-lg font-medium">Your Account</h2>
		</div>

		<form method="POST" use:enhance class="max-w-sm w-full flex flex-col gap-4">
			<p class="text-sm text-muted-foreground">You are creating an account for MikeSocial</p>

			<input hidden name="email" value={$formData.email} />
			<input hidden name="firstName" value={$formData.firstName} />
			<input hidden name="middleName" value={$formData.middleName} />
			<input hidden name="lastName" value={$formData.lastName} />
			<input hidden name="pwd" value={$formData.pwd} />
			<input hidden name="confirmPwd" value={$formData.confirmPwd} />

			{#if buttonState.first}
				<StepOne {form} bind:buttonState />
			{:else if buttonState.second}
				<StepTwo {form} bind:buttonState />
			{/if}
		</form>
	</section>
</main>
