<script lang="ts">
	import IconTextAlignJustify from '@lucide/svelte/icons/text-align-justify';
	import IconHouse from '@lucide/svelte/icons/house';
	import IconHash from '@lucide/svelte/icons/hash';
	import IconSearch from '@lucide/svelte/icons/search';
	import IconBrain from '@lucide/svelte/icons/brain';
	import Button from '$lib/components/internals/button/button.svelte';
	import * as Sheet from '$lib/components/internals/sheet/index';
	import { page } from '$app/state';
	import { buttonVariants } from '$lib/components/internals/button/button.svelte';
	import { goto } from '$app/navigation';
	import { ScrollArea } from '$lib/components/internals/scroll-area/index';
	import UserNav from './user-nav.svelte';
	import { hasUser } from '$lib';

	let activeRoute = $derived(page.url.pathname);

	const routes = [
		{
			label: 'Discover',
			href: '/',
			icon: IconHouse
		},
		{
			label: 'Feeds',
			href: '/feeds',
			icon: IconHash
		},
		{
			label: 'Search',
			href: '/search',
			icon: IconSearch
		}
	];

	let navOpen = $state(false);

	const getCurrentRouteLabel = $derived(routes.find((item) => item.href === activeRoute)?.label);
</script>

<nav class="sm:hidden">
	<section class="relative p-2">
		<div class="flex items-center gap-2">
			<Sheet.Root bind:open={navOpen}>
				<Sheet.Trigger class={buttonVariants({ variant: 'ghost', class: 'size-6' })}>
					<IconTextAlignJustify class="size-4.5" />
				</Sheet.Trigger>

				<Sheet.Content side="left" class="border-r-muted-foreground/50">
					<ScrollArea class="p-4 h-[calc(100vh-4rem)]">
						<div class="flex flex-col gap-2">
							{#if hasUser}
								<UserNav />
							{:else}
								<div class="size-5 bg-primary rounded-full"></div>
								<h4 class="text-xl font-medium">Join the <br />conversation</h4>

								<Button size="sm" class="w-fit mt-4">Sign up Free</Button>
								<Button variant="outline" size="sm" class="w-fit">Sign in</Button>
								<div class="border-y border-muted-foreground/50 mt-4 flex flex-col gap-2 py-4">
									{#each routes as route}
										<button
											onclick={async () => {
												navOpen = false;
												await goto(route.href);
											}}
											class={[
												'text-center grid grid-cols-[auto_1fr] gap-1.5 items-center p-2 text-sm w-fit',
												activeRoute === route.href &&
													'underline underline-offset-13 decoration-primary decoration-4'
											]}
										>
											<route.icon class="size-4.5" />
											{route.label}
										</button>
									{/each}
								</div>
							{/if}

							<div class="mt-4 flex flex-col gap-1.5">
								<a href="/terms-of-service" class="text-xs text-blue-400">Terms of Service</a>
								<a href="/privacy-policy" class="text-xs text-blue-400">Privacy Policy</a>
							</div>
						</div>
					</ScrollArea>
					<div class="absolute bottom-4 mx-4 flex items-center gap-1.5">
						<button
							class="text-xs bg-primary hover:opacity-90 border-primary border px-2 py-1 grid grid-cols-[auto_1fr] gap-1.5 items-center"
						>
							<IconBrain class="size-3" />
							Feedback
						</button>
						<button class="text-xs border px-2 py-1"> Help </button>
					</div>
				</Sheet.Content>
			</Sheet.Root>

			{#if getCurrentRouteLabel && getCurrentRouteLabel !== 'Discover'}
				<p class="text-sm font-medium">{getCurrentRouteLabel}</p>
			{/if}
		</div>

		<div
			class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-5 bg-primary rounded-full"
		></div>
	</section>
</nav>
