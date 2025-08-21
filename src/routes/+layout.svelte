<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { asset } from '$lib/utils/paths';
	
	let { children } = $props();
	let mobileMenuOpen = $state(false);
</script>

<svelte:head>
	<link rel="icon" href={asset("/favicon.png")} />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="description" content="Stillness Power® offers holistic wellness practices combining meditation, gentle movement, and breathwork in North Chelmsford, MA." />
	<meta name="keywords" content="yoga, meditation, wellness, holistic health, breathwork, North Chelmsford, Massachusetts, stillness power" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Stillness Power® - Breathe to have Bliss" />
	<meta property="og:description" content="Holistic wellness practices combining meditation, gentle movement, and breathwork. All levels welcome." />
	<meta property="og:image" content={asset("/images/group.jpg")} />
	
	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:title" content="Stillness Power® - Breathe to have Bliss" />
	<meta property="twitter:description" content="Holistic wellness practices combining meditation, gentle movement, and breathwork. All levels welcome." />
	<meta property="twitter:image" content={asset("/images/group.jpg")} />
	
	<!-- Material Symbols Font -->
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
</svelte:head>

<div class="min-h-screen flex flex-col">
	<Header bind:mobileMenuOpen />
	
	<main class="flex-1">
		{@render children?.()}
	</main>
	
	<Footer />
</div>
