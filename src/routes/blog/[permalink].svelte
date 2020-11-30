<script context="module">
	import { findPost } from '../../posts';
	import Footer from '../../components/Footer.svelte';
	import Tags from '../../components/Tags.svelte';

	export function preload(page) {
		const post = findPost(page.params.permalink);

		return { post };
	}
</script>

<script>
	export let post;
</script>

<style>
	h1 {
		padding-top: 1em;
	}
	#mkdwn :global(img) {
		max-width: 90%;
		margin: 0 auto;
		margin-top: 2em;
		padding-bottom: 0;
		border-radius: 5px;
	}

	#mkdwn :global(code) {
		font-family: menlo, inconsolata, monospace;
		font-size: calc(1em - 2px);
		color: #b47239;
		background-color: #363331;
		padding: 0.2em 0.4em;
		border-radius: 2px;
	}
	#mkdwn :global(em) {
		color: #b47239;
	}
</style>

<a href={`/`}><h3>⬅ Home</h3></a>
<h1>{post.title}</h1>
<Tags tags={post.tags} />
<div id="mkdwn">
	{@html post.html}
</div>
<a href={`/`}><h3>⬅ Back</h3></a>
<Footer />
