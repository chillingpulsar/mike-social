<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import { resetPwdSchema } from '../schema';
	import { zod4Client } from 'sveltekit-superforms/adapters';
	import * as Form from '$lib/components/internals/form/index';
	import { Input } from '$lib/components/internals/input/index';
	import Spinner from '$lib/components/externals/spinner/spinner.svelte';
	import Button from '$lib/components/internals/button/button.svelte';

	const { data } = $props();

	// svelte-ignore state_referenced_locally
	const form = superForm(data.resetPwdForm, {
		validators: zod4Client(resetPwdSchema),
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
		<h1 class="text-4xl font-bold text-primary text-right">Reset Password</h1>
		<p class="text-muted-foreground text-right">Enter your email to reset your password</p>
	</section>
	<section class="flex items-start justify-center p-4 md:p-10 flex-col gap-11">
		<form method="POST" use:enhance class="max-w-sm w-full flex flex-col gap-4">
			<p class="text-sm text-muted-foreground">You are resetting your password for MikeSocial</p>

			<Form.Field {form} name="email">
				<Form.Control>
					{#snippet children({ props })}
						<Form.Label>Email</Form.Label>
						<Input
							type="email"
							{...props}
							bind:value={$formData.email}
							placeholder="sample@youremail.com"
						/>
					{/snippet}
				</Form.Control>

				<Form.FieldErrors />
			</Form.Field>

			<Form.Button disabled={$submitting || $delayed} class="relative min-w-40">
				<Spinner isLoading={$submitting || $delayed}>SendReset Password</Spinner>
			</Form.Button>
		</form>

		<a
			href="/login"
			class="text-xs px-2 py-1 transition-all duration-300 dark:hover:text-primary hover:bg-primary rounded-lg"
		>
			Back to Login
		</a>
	</section>
</main>
