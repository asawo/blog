<script>
	import { posts } from '../posts';
</script>

<style>
	#recent-posts {
		padding: 20px;
		border-style: solid;
		border-radius: 5px;
		border-color: rgb(114, 156, 156);
		border-width: thin;
	}

	p {
		font-size: smaller;
		font-style: italic;
	}
</style>

<div id="box">
	<div id="recent-posts">
		<h2>Blog posts</h2>
		{#each posts as post}
			<article>
				<a href={`/blog/${post.permalink}`}>
					<h3>✎ {post.title}</h3>
				</a>
				<p>{post.summary} - {post.date}</p>
			</article>
		{/each}
	</div>
</div>
