<script context="module">
	import { findByTag } from '../../posts';
	import PostList from '../../components/PostList.svelte';

	export function preload(page) {
		const { tag } = page.params;
		const posts = findByTag(tag);

		return { tag, posts };
	}
</script>

<script>
	export let tag, posts;
</script>

<style>
	#box {
		margin-top: 30px;
		padding: 20px;
		border-style: solid;
		border-radius: 5px;
		border-color: rgb(114, 156, 156);
		border-width: thin;
	}
</style>

<br/>
<h1>#{tag}</h1>
<div id="box">
	<PostList {posts} />
</div>
