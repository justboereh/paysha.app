<script lang="ts">
	import { pb } from '$lib/pb';
	import { Button } from '$lib/components/ui/button';
	import { GithubLogo } from 'radix-icons-svelte';
	import { goto } from '$app/navigation';

	if (pb.authStore.token) goto('/dash');

	async function SignIn() {
		const auth = await pb.collection('users').authWithOAuth2({ provider: 'github' });

		if (!auth) return;

		goto('/dash');
	}
</script>

<div>
	<Button on:click={SignIn}>
		<GithubLogo class="mr-2 h-6 w-6" />

		Sign in with Github
	</Button>
</div>
