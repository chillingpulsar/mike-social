<script lang="ts">
	import type { RegSchema } from '../../../schema';
	import type { SuperForm } from 'sveltekit-superforms';
	import * as Form from '$lib/components/internals/form/index';
	import { Input } from '$lib/components/internals/input/index';
	import Button from '$lib/components/internals/button/button.svelte';

	interface Props {
		form: SuperForm<RegSchema>;
		buttonState: {
			first: boolean;
			second: boolean;
		};
	}

	let { form, buttonState = $bindable() }: Props = $props();

	const { form: formData, allErrors } = $derived(form);

	const formErrorChecks = $derived(
		$formData.firstName.length > 0 &&
			$formData.middleName.length > 0 &&
			$formData.lastName.length > 0 &&
			!$allErrors.map((item) => item.path).includes('firstName') &&
			!$allErrors.map((item) => item.path).includes('middleName') &&
			!$allErrors.map((item) => item.path).includes('lastName')
	);
</script>

<Form.Field {form} name="firstName">
	<Form.Control>
		{#snippet children({ props })}
			<Form.Label>First Name</Form.Label>
			<Input {...props} bind:value={$formData.firstName} placeholder="Enter your first name" />
		{/snippet}
	</Form.Control>

	<Form.FieldErrors />
</Form.Field>

<Form.Field {form} name="middleName">
	<Form.Control>
		{#snippet children({ props })}
			<Form.Label>Middle Name</Form.Label>
			<Input {...props} bind:value={$formData.middleName} placeholder="Enter your middle name" />
		{/snippet}
	</Form.Control>

	<Form.FieldErrors />
</Form.Field>

<Form.Field {form} name="lastName">
	<Form.Control>
		{#snippet children({ props })}
			<Form.Label>Last Name</Form.Label>
			<Input {...props} bind:value={$formData.lastName} placeholder="Enter your last name" />
		{/snippet}
	</Form.Control>

	<Form.FieldErrors />
</Form.Field>

{#if formErrorChecks}
	<div class="flex items-center justify-between">
		<a
			href="/login"
			class="text-xs px-2 py-1 transition-all duration-300 dark:hover:text-primary hover:bg-primary rounded-lg"
		>
			Back to Login
		</a>

		<Button
			type="button"
			onclick={() => {
				buttonState.second = true;
				buttonState.first = false;
			}}
		>
			Next
		</Button>
	</div>
{:else}
	<a
		href="/login"
		class="text-xs px-2 py-1 mr-auto transition-all duration-300 dark:hover:text-primary hover:bg-primary rounded-lg"
	>
		Back to Login
	</a>
{/if}
