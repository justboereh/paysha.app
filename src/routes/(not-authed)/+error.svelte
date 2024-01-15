<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="flex w-full flex-col items-center justify-center">
	<span class="font-3xl">{$page.status}</span>
</div>
