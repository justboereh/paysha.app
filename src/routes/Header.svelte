<script>
	import { page } from '$app/stores';
	import { pb } from '$lib/pb';
	import Logo from '$lib/logo/Full.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<header class="sticky top-0 h-14 border-b border-zinc-200 p-4 backdrop-blur">
	<div class="relative mx-auto flex h-full max-w-7xl items-center justify-between">
		<a class="h-full" href="/"> <Logo class="h-full max-w-full" /></a>

		<div class="absolute left-1/2 -translate-x-1/2 transform">
			<Button variant="link" href="/docs">Docs</Button>
			<Button variant="link" href="https://github.com/justboereh/paysha.app">Github</Button>
			<Button variant="link" href="/pricing">Pricing</Button>
		</div>

		{#if pb.authStore.token}
			<Button href="/dash">Dashboard</Button>
		{:else}
			<Button href="/signin">Sign in</Button>
		{/if}
	</div>
</header>
