<script lang="ts">
	import IconSmile from '@lucide/svelte/icons/smile';
	import IconImage from '@lucide/svelte/icons/image';
	import IconSquarePen from '@lucide/svelte/icons/square-pen';
	import * as Dialog from '$lib/components/internals/dialog/index';
	import { buttonVariants } from '$lib/components/internals/button';
	import Button from '$lib/components/internals/button/button.svelte';
	import { Textarea } from '$lib/components/internals/textarea/index';
	import ScrollArea from '$lib/components/internals/scroll-area/scroll-area.svelte';
</script>

<Dialog.Root>
	<Dialog.Trigger class={buttonVariants({ variant: 'default', size: 'sm', class: 'w-fit' })}>
		<IconSquarePen class="size-4" />
		New Post
	</Dialog.Trigger>
	<Dialog.Content
		showCloseButton={false}
		onInteractOutside={(e) => e.preventDefault()}
		class="top-[2dvh] translate-y-[0%] p-0"
	>
		<div class="flex items-center justify-between gap-2 px-2 pt-2">
			<Dialog.Close class="text-sm text-primary px-2 py-1 rounded-full hover:bg-primary/10"
				>Cancel</Dialog.Close
			>

			<Button size="sm">Post</Button>
		</div>
		<ScrollArea class="max-h-[35dvh] px-1">
			<div class="grid grid-cols-[auto_1fr] gap-2 pl-3 pr-1 max-h-[35dvh]">
				<div class="size-10 bg-secondary rounded-full"></div>

				<Textarea
					placeholder="What's on your mind?"
					class="rounded-none border-none ring-0! focus-visible:ring-0! focus-visible:ring-offset-0!"
					rows={1}
				/>
			</div>
		</ScrollArea>

		<!--Uploaded Media-->
		<ScrollArea class="max-h-[25dvh] px-2">
			<div class="flex flex-wrap items-center gap-2 p-2">
				{#each Array(20)}
					<div
						class="aspect-square flex-1 min-w-20 max-w-40 rounded-lg bg-secondary flex flex-col items-center justify-center"
					>
						<p class="text-xs text-primary text-center">Image Sample</p>
					</div>
				{/each}
			</div>
		</ScrollArea>

		<div class="border-t p-2">
			<button class="p-2 rounded-full hover:bg-primary/50">
				<IconImage class="size-4" />
			</button>
			<button class="p-2 rounded-full hover:bg-primary/50">
				<IconSmile class="size-4" />
			</button>
		</div>
	</Dialog.Content>
</Dialog.Root>
