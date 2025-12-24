<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import MobileNav from '$lib/components/externals/nav/mobile-nav.svelte';
	import TabletNav from '$lib/components/externals/nav/tablet-nav.svelte';
	import LeftSidebar from '$lib/components/externals/nav/left-sidebar.svelte';
	import RightSidebar from '$lib/components/externals/nav/right-sidebar/right-sidebar.svelte';
	import { page } from '$app/state';
	import { hasUser } from '$lib';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

{#if ['/login', '/register', '/forgot-password'].includes(page.url.pathname)}
	{@render children()}
{:else}
	<MobileNav />

	<main class="grid sm:grid-cols-[auto_576px_1fr] lg:grid-cols-[1fr_576px_1fr] max-w-6xl mx-auto">
		<LeftSidebar class={[hasUser ? 'sm:h-screen' : 'sm:h-[calc(100vh-4rem)]']} />
		<section class="">
			{@render children()}
		</section>
		<RightSidebar class={[hasUser ? 'sm:h-screen' : 'sm:h-[calc(100vh-4rem)]']} />
	</main>
	{#if !hasUser}
		<TabletNav />
	{/if}
{/if}
