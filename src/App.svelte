<script>
	export let name;
</script>

<main>
	<h1>Hello {name}!!</h1>
	<button class='btn'>Click</button>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style global>


.btn {
    @apply px-4 py-2 bg-blue-600 text-white rounded;
}
</style>