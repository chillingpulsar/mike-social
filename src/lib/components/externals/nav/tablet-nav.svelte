<script lang="ts">
	import Button from '$lib/components/internals/button/button.svelte';
</script>

<nav
	class="sticky bottom-0 py-4 px-7 hidden sm:block lg:hidden bg-background border-t border-t-muted-foreground/50"
>
	<section class="flex items-center justify-between">
		<div class="size-5 bg-primary rounded-full"></div>
		<div class="">
			<Button href="/register" size="sm" class="w-fit">Sign up Free</Button>
			<Button href="/login" variant="outline" size="sm" class="w-fit">Sign in</Button>
		</div>
	</section>
</nav>
