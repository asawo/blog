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

<h1>#{tag}</h1>
<PostList {posts} />
