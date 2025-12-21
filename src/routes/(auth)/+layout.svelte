<script lang="ts">
	const { children } = $props();
</script>

<main class="relative">
	{@render children()}
	<!--Sponsor me!-->

	<a
		href="mailto:chillingpulsar@gmail.com"
		class="text-xs underline underline-offset-4 bottom-4 right-4 fixed px-2 py-1 transition-all duration-300 dark:hover:text-primary hover:bg-primary rounded-lg"
		>Sponsor me!</a
	>
</main>
