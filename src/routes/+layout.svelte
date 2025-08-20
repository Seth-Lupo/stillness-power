<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	
	let { children } = $props();
	let mobileMenuOpen = $state(false);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<div class="min-h-screen flex flex-col">
	<Header bind:mobileMenuOpen />
	
	<main class="flex-1">
		{@render children?.()}
	</main>
	
	<Footer />
</div>
