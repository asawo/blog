<script>
	export let posts;
</script>

<style>
	p {
		font-size: smaller;
		font-style: italic;
	}
</style>

{#each posts as post}
	<article>
		<a href={`/blog/${post.permalink}`}>
			<h3>✎ {post.title}</h3>
		</a>
		<p>{post.summary} - {post.date.toDateString()}</p>
	</article>
{/each}
