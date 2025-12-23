<script lang="ts">
	import { cn } from '$lib/utils';
	import type { ClassNameValue } from 'tailwind-merge';

	interface Props {
		class?: ClassNameValue;
	}

	const { class: className }: Props = $props();
</script>

<aside
	class={cn(
		'border-l sticky top-0 border-muted-foreground/50 sm:h-[calc(100vh-4rem)] lg:h-screen overflow-y-auto px-7 py-4',
		className
	)}
>
	<div class="hidden md:block">Search here and other things</div>
</aside>
