<script lang="ts">
	export let data;

	const functionClick = function () {
		document.cookie = 'cookieDarkMode=true';
	};
</script>

<button on:click={functionClick}>CLIQUE AQUI</button>

{data.aa}
