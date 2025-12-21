<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { ClassNameValue } from 'tailwind-merge';
	import IconLoaderCircle from '@lucide/svelte/icons/loader-circle';
	import { cn } from '$lib/utils';

	interface Props {
		class?: ClassNameValue;
		isLoading: boolean;
		children: Snippet;
	}

	const { class: ClassName, isLoading, children }: Props = $props();
</script>

<!--@component
# Spinner Component

A loading spinner component that overlays content while loading.

## Props

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `isLoading` | `boolean` | ✅ | Whether the spinner is currently loading |
| `children` | `Snippet` | ✅ | The content to render behind the spinner |
| `class` | `ClassNameValue` | ❌ | Additional CSS classes for styling |

## Usage

```svelte
<Spinner isLoading={loading}>
  <YourContent />
</Spinner>
```

## Features

- Shows "Please wait" message with animated loading icon
- Overlays content with semi-transparent background
- Uses Tabler Icons for the spinner animation
- Fully accessible and responsive
-->

{#if isLoading}
	<div
		class={cn('absolute inset-0 flex items-center justify-center rounded-lg bg-primary', ClassName)}
	>
		<div class="flex items-center gap-2">
			<span class="text-sm">Please wait</span>
			<IconLoaderCircle class="size-4 animate-spin" />
		</div>
	</div>
{/if}
{@render children()}
