<script lang="ts">
	import Header from './Header.svelte';
	import '../app.pcss';
	import './styles.css';

</script>

<div class="app">
	<Header></Header>

	<main>
		<slot />
	</main>
</div>
