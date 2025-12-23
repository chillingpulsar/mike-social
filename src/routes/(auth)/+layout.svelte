<script lang="ts">
	const { children } = $props();
</script>

<main class="relative">
	{@render children()}
	<!--Sponsor me!-->

	<div class="fixed top-4 right-4 flex items-center gap-2">
		<a
			href="/"
			class="text-xs underline underline-offset-4 px-2 py-1 transition-all duration-300 dark:hover:text-primary hover:bg-primary rounded-lg"
			>Home</a
		>

		<a
			href="mailto:chillingpulsar@gmail.com"
			class="text-xs underline underline-offset-4 px-2 py-1 transition-all duration-300 dark:hover:text-primary hover:bg-primary rounded-lg"
			>Sponsor me!</a
		>
	</div>
</main>
