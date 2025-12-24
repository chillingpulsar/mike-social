<script lang="ts">
	import IconHouse from '@lucide/svelte/icons/house';
	import IconHash from '@lucide/svelte/icons/hash';
	import IconSearch from '@lucide/svelte/icons/search';
	import IconMessageCircle from '@lucide/svelte/icons/message-circle';
	import IconBell from '@lucide/svelte/icons/bell';
	import IconList from '@lucide/svelte/icons/list';
	import IconSave from '@lucide/svelte/icons/save';
	import IconUser from '@lucide/svelte/icons/user';
	import IconSettings from '@lucide/svelte/icons/settings';
	import IconLogOut from '@lucide/svelte/icons/log-out';
	import { page } from '$app/state';
	import { cn } from '$lib/utils';
	import type { ClassNameValue } from 'tailwind-merge';
	import * as DropdownMenu from '$lib/components/internals/dropdown-menu/index';

	interface Props {
		class?: ClassNameValue;
	}

	const { class: className }: Props = $props();

	let activeRoute = $derived(page.url.pathname);

	const routes = [
		{
			label: 'Search',
			href: '/search',
			icon: IconSearch
		},
		{
			label: 'Discover',
			href: '/discover',
			icon: IconHouse
		},
		{
			label: 'Chat',
			href: '/Chat',
			icon: IconMessageCircle
		},
		{
			label: 'Notifications',
			href: '/notifications',
			icon: IconBell
		},
		{
			label: 'Feeds',
			href: '/feeds',
			icon: IconHash
		},
		{
			label: 'Lists',
			href: '/lists',
			icon: IconList
		},
		{
			label: 'Saved',
			href: '/saved',
			icon: IconSave
		},
		{
			label: 'Profile',
			href: '/profile',
			icon: IconUser
		},
		{
			label: 'Settings',
			href: '/settings',
			icon: IconSettings
		}
	];
</script>

{#snippet countTemplate({ count, label }: { count: number; label: string })}
	<div class="grid grid-cols-[auto_1fr] w-fit items-center gap-1.5">
		<span class="text-xs font-medium">{count}</span>
		<span class="text-xs text-muted-foreground">{label}</span>
	</div>
{/snippet}
<section class={cn('', className)}>
	<div class="py-4 flex flex-col sm:hidden">
		<div class="size-10 bg-secondary rounded-full mb-2"></div>
		<h4 class="">John doe</h4>
		<p class="">@yoursample.com</p>
		<div class="items-center mt-1.5 gap-2.5 flex flex-wrap">
			{@render countTemplate({ count: 10, label: 'Followers' })}
			{@render countTemplate({ count: 10, label: 'Following' })}
		</div>
	</div>

	<div
		class="py-4 border-y border-muted-foreground/50 sm:border-y-0 flex flex-col sm:gap-4.5 lg:gap-2.5"
	>
		<DropdownMenu.Root>
			<DropdownMenu.Trigger
				class="hidden sm:flex gap-1.5 group cursor-pointer lg:px-3 items-center justify-center lg:items-center lg:justify-start"
			>
				<div class="size-10 bg-secondary rounded-full"></div>

				<div class="flex-col hidden lg:flex">
					<h4 class="text-sm font-medium text-left">John doe</h4>
					<p class="text-xs text-muted-foreground text-left">@yoursample.com</p>
				</div>
			</DropdownMenu.Trigger>
			<DropdownMenu.Content
				side="right"
				align="start"
				class="bg-background border-muted-foreground/50"
			>
				<DropdownMenu.Group>
					<DropdownMenu.Item class="text-white group hover:bg-primary! hover:text-white!">
						<IconUser class="size-4 text-white group-hover:text-white" />
						Go to profile
					</DropdownMenu.Item>
					<DropdownMenu.Item class="text-white group hover:bg-primary! hover:text-white!">
						<IconLogOut class="size-4 text-white group-hover:text-white" />
						Sign out
					</DropdownMenu.Item>
				</DropdownMenu.Group>
			</DropdownMenu.Content>
		</DropdownMenu.Root>

		{#each routes as route}
			<button
				onclick={async () => {}}
				class={[
					'grid grid-cols-[auto_1fr] transition-all hover:bg-primary w-full gap-1.5 items-center p-2 text-sm text-left',
					activeRoute === route.href &&
						'underline underline-offset-13 decoration-primary decoration-4'
				]}
			>
				<route.icon class="size-4.5 sm:ml-1.5" />
				<span class="sm:hidden lg:block">{route.label}</span>
			</button>
		{/each}
	</div>
</section>
