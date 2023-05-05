<script lang="ts">
	// COMPONENTS
	import ComponentMenuItem from './componentMenuItem.svelte';
	/////
	// MODULES
	import type { typeMenu } from '../typeMenu.js';
	/////
	// PROPS
	export let propMenu: typeMenu = [];
	/////
</script>

{#each propMenu as currentMenu}
	<ComponentMenuItem propMenuItem={currentMenu} />
{/each}
