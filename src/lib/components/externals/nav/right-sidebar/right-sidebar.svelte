<script lang="ts">
	import { cn } from '$lib/utils';
	import type { ClassNameValue } from 'tailwind-merge';
	import IconSearch from '@lucide/svelte/icons/search';
	import Input from '$lib/components/internals/input/input.svelte';
	import { page } from '$app/state';

	interface Props {
		class?: ClassNameValue;
	}

	const { class: className }: Props = $props();

	let activeRoute = $derived(page.url.pathname);

	const routes = [
		{
			label: 'Discover',
			href: '/'
		},
		{
			label: 'Following',
			href: '/following'
		},
		{
			label: 'More Feeds',
			href: '/more-feeds'
		}
	];

	const alternativeRoutes = [
		{
			label: 'Feedback',
			href: '/feedback'
		},
		{
			label: 'Terms',
			href: '/terms-of-service'
		},
		{
			label: 'Privacy',
			href: '/privacy-policy'
		},
		{
			label: 'Help',
			href: '/help'
		}
	];

	const trendings = [
		{
			label: 'Greenland Policy',
			href: '/search?q=greenland+policy'
		},
		{
			label: 'CBS News',
			href: '/search?q=cbs+news'
		},
		{
			label: 'CineMon',
			href: '/search?q=cinemon'
		},
		{
			label: 'Pam Bondi',
			href: '/search?q=pam+bondi'
		},
		{
			label: 'Epstein Files',
			href: '/search?q=epstein+files'
		},
		{
			label: 'SeaHawks',
			href: '/search?q=seahawks'
		}
	];
</script>

<aside
	class={cn(
		'border-l sticky top-0 border-muted-foreground/50 sm:h-[calc(100vh-4rem)] lg:h-screen overflow-y-auto px-7 py-4',
		className
	)}
>
	<div class="hidden md:block">
		<div class="py-4 border-b border-b-muted-foreground/50 flex flex-col gap-4">
			<div class="relative">
				<IconSearch
					class="size-4 absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground"
				/>
				<Input type="text" placeholder="Search" class="pl-8" />
			</div>

			<div class="flex flex-col gap-1.5">
				{#each routes as route}
					<button
						onclick={async () => {}}
						class={[
							'grid grid-cols-[auto_1fr] w-fit gap-1.5 items-center text-sm text-left',
							activeRoute === route.href && 'text-primary'
						]}
					>
						{route.label}
					</button>
				{/each}
			</div>
		</div>

		<div class="py-4 border-b border-b-muted-foreground/50">
			<h4 class="text-sm font-medium text-muted-foreground">Trendings</h4>

			<div class="flex flex-wrap items-center gap-2.5 mt-2">
				{#each trendings as trending}
					<a href={trending.href} class="text-white text-xs font-light px-2 py-1 rounded-xl border">
						{trending.label}
					</a>
				{/each}
			</div>
		</div>

		<div class="py-4 flex flex-wrap items-center gap-2.5">
			{#each alternativeRoutes as alternativeRoute}
				<a
					href={alternativeRoute.href}
					class="text-xs text-blue-400 hover:text-primary transition-all hover:underline underline-offset-4"
				>
					{alternativeRoute.label}
				</a>
			{/each}
		</div>
	</div>
</aside>
