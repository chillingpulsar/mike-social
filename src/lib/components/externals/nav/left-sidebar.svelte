<script lang="ts">
	import Button from '$lib/components/internals/button/button.svelte';
	import UserNav from './user-nav.svelte';
	import { cn } from '$lib/utils';
	import type { ClassNameValue } from 'tailwind-merge';
	import { hasUser } from '$lib';

	interface Props {
		class?: ClassNameValue;
	}

	const { class: className }: Props = $props();
</script>

<aside
	class={cn(
		'sticky top-0 border-r border-muted-foreground/50 sm:h-[calc(100vh-4rem)] lg:h-screen overflow-y-auto hidden sm:block',
		className
	)}
>
	{#if hasUser}
		<div class="flex justify-end">
			<UserNav class="hidden sm:flex mix-blend-saturation p-4 flex-col gap-2" />
		</div>
	{:else}
		<div class="max-w-[200px] hidden lg:flex ml-auto p-4 flex-col gap-2">
			<div class="size-5 bg-primary rounded-full"></div>
			<h4 class="text-xl font-medium">Join the <br />conversation</h4>

			<Button href="/register" size="sm" class="w-fit mt-4">Sign up Free</Button>
			<Button href="/login" variant="outline" size="sm" class="w-fit">Sign in</Button>
		</div>
	{/if}
</aside>
