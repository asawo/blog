<style>
	nav {
		/* border-bottom: 1px solid rgb(114, 156, 156); */
		margin: -1.7em 0 1em 0;
	}
	.nav-items {
		display: none;
		font-size: 1em;
	}
	@media (min-width: 500px) {
		.burger {
			display: none;
		}

		.nav-items {
			/* display: flex; */
			display: none;
		}
	}
	ul {
		padding: 0;
		display: flex;
		justify-content: space-between;
		align-items: baseline;
	}
	#asawo {
		font-size: 2em;
	}

	li {
		display: inline;
		list-style: none;
	}

	div > li {
		padding-left: 1em;
	}

	a {
		text-decoration: none;
	}
</style>

<nav>
	<ul>
		<li><a id="asawo" href="/">asawo.dev</a></li>
		<div class="nav-items">
			<li><a href="/">blog</a></li>
			<li><a href="/">contact</a></li>
		</div>
	</ul>
</nav>
