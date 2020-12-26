<script>
	import Navbar from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		padding: 4em;
		margin: 0 auto;
		box-sizing: border-box;
	}

	:global(html) {
		background-color: rgb(35, 43, 43);
		font-size: 12px;
		font-family: 'Roboto Mono', monospace;
	}

	:global(h1) {
		font-size: 2em;
		color: rgb(166, 124, 105);
	}

	:global(a) {
		color: rgb(166, 124, 105);
	}

	:global(a:hover) {
		color: rgb(196, 106, 101);
	}

	:global(h2, p) {
		color: rgb(114, 156, 156);
	}

	:global(footer > a) {
		line-height: 25px;
	}

	:global(footer > a:hover) {
		font-size: larger;
	}
</style>

<main>
	<Navbar />
	<slot />
	<Footer />
</main>
