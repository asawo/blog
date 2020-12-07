<script>
	export let tags;
</script>

<style>
	a {
		background-color: rgb(78, 75, 75);
		color: rgb(200, 170, 150);
		border-radius: 5px;
		font-size: smaller;
		padding: 3px;
		margin-right: 5px;
		text-decoration: none;
	}
	section {
		display: flex;
		flex-flow: row wrap;
	}

	section > a {
		margin-top: 5px;
	}
</style>

<section>
	{#each tags as tag}<a href="/tag/{tag}">#{tag}</a>{/each}
</section>
