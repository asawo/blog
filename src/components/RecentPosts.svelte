<script>
	import { posts } from '../posts';
	import PostList from '../components/PostList.svelte';
</script>

<style>
	#recent-posts {
		margin-top: 30px;
		padding: 20px;
		border-style: solid;
		border-radius: 5px;
		border-color: rgb(114, 156, 156);
		border-width: thin;
	}
</style>

<div id="box">
	<div id="recent-posts">
		<h2>Blog posts</h2>
		<PostList {posts} />
	</div>
</div>
