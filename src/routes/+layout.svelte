<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import MobileNav from '$lib/components/externals/nav/mobile-nav.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<MobileNav />
{@render children()}
