<script lang="ts">
	import * as Form from '$lib/components/internals/form/index';
	import { Input } from '$lib/components/internals/input/index';
	import type { RegSchema } from '../../../schema';
	import type { SuperForm } from 'sveltekit-superforms';
	import Spinner from '$lib/components/externals/spinner/spinner.svelte';

	interface Props {
		form: SuperForm<RegSchema>;
		buttonState: {
			first: boolean;
			second: boolean;
		};
	}

	let { form, buttonState = $bindable() }: Props = $props();

	const { form: formData, submitting, delayed } = $derived(form);
</script>

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

<Form.Field {form} name="pwd">
	<Form.Control>
		{#snippet children({ props })}
			<Form.Label>Password</Form.Label>
			<Input
				type="password"
				{...props}
				bind:value={$formData.pwd}
				placeholder="Enter your password"
			/>
		{/snippet}
	</Form.Control>

	<Form.FieldErrors />
</Form.Field>

<Form.Field {form} name="confirmPwd">
	<Form.Control>
		{#snippet children({ props })}
			<Form.Label>Confirm Password</Form.Label>
			<Input
				type="password"
				{...props}
				bind:value={$formData.confirmPwd}
				placeholder="Confirm your password"
			/>
		{/snippet}
	</Form.Control>

	<Form.FieldErrors />
</Form.Field>

<div class="flex items-center justify-between">
	<button
		type="button"
		onclick={() => {
			buttonState.first = true;
			buttonState.second = false;
		}}
		class="text-xs px-2 py-1 mr-auto transition-all duration-300 dark:hover:text-primary hover:bg-primary rounded-lg"
	>
		Back to Step 1
	</button>

	<Form.Button disabled={$submitting || $delayed} class="relative min-w-40">
		<Spinner isLoading={$submitting || $delayed}>Create Account</Spinner>
	</Form.Button>
</div>
