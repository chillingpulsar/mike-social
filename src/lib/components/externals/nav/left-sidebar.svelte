<script lang="ts">
	import Button from '$lib/components/internals/button/button.svelte';
</script>

<aside
	class="sticky top-0 border-r border-muted-foreground/50 sm:h-[calc(100vh-4rem)] lg:h-screen overflow-y-auto hidden sm:block"
>
	<div class="max-w-[200px] hidden lg:flex ml-auto p-4 flex-col gap-2">
		<div class="size-5 bg-primary rounded-full"></div>
		<h4 class="text-xl font-medium">Join the <br />conversation</h4>

		<Button size="sm" class="w-fit mt-4">Sign up Free</Button>
		<Button variant="outline" size="sm" class="w-fit">Sign in</Button>
	</div>
</aside>
