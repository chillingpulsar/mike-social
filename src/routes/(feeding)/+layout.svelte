<script lang="ts">
	const { children } = $props();

	import { page } from '$app/state';

	const activeRoute = $derived(page.url.pathname);

	const navItems = [
		{
			label: 'Discover',
			href: '/'
		},
		{
			label: 'Feeds',
			href: '/feeds'
		}
	];
</script>

<nav class="grid grid-cols-2 border-b border-muted-foreground/50 sticky top-0 bg-background z-10">
	{#each navItems as item}
		<a href={item.href} class="p-2 text-center text-sm">
			<span
				class={[
					activeRoute === item.href &&
						'underline underline-offset-14 decoration-primary decoration-3'
				]}
			>
				{item.label}
			</span>
		</a>
	{/each}
</nav>
{@render children()}
