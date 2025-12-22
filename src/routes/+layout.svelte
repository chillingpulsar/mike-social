<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import MobileNav from '$lib/components/externals/nav/mobile-nav.svelte';
	import TabletNav from '$lib/components/externals/nav/tablet-nav.svelte';
	import LeftSidebar from '$lib/components/externals/nav/left-sidebar.svelte';
	import RightSidebar from '$lib/components/externals/nav/right-sidebar.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<MobileNav />

<main class="grid sm:grid-cols-[1fr_576px_1fr] max-w-6xl mx-auto">
	<LeftSidebar />
	<section class="">
		{@render children()}
	</section>
	<RightSidebar />
</main>
<TabletNav />
