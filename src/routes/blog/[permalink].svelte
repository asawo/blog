<script context="module">
	import { findPost } from '../../posts';
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

	button {
		border-radius: 3px;
		border-style: solid;
		border-width: 1px;
		border-color: rgb(114, 156, 156);
		background-color: rgb(35, 43, 43);
		padding: 8px 12px;
		cursor: pointer;
		transition-duration: 0.4s;

	}

	button span {
		cursor: pointer;
		display: inline-block;
		position: relative;
		transition: 0.4s;
	}

	button span:after {
		content: '⇠';
		position: absolute;
		opacity: 0;
		top: 0;
		left: -20px;
		padding-bottom:1em;
		transition: 0.4s;
	}

	button:hover span {
  		padding-left: 20px;
	}

	button:hover span:after {
  		opacity: 1;
  		left: 0;
	}

	a {
		text-decoration: none;
	}

	#mkdwn :global(img) {
		max-width: 100%;
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

	#mkdwn :global(em, ul, li) {
		color: #b47239;
	}

	#mkdwn :global(hr){
		border-color: rgb(114, 156, 156)
	}
</style>

<h1>{post.title}</h1>
<Tags tags={post.tags} />
<div id="mkdwn">
	{@html post.html}
</div>
<button><a href={`/`}><span>Home</span></a></button>

