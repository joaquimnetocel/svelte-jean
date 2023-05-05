<script lang="ts">
	// COMPONENTS
	import ComponentFooter from './componentFooter.svelte';
	import ComponentMenuItem from './componentMenuItem.svelte';
	/////
	// MODULES
	import { functionReadMobileMenuStore } from '../stores/storeMobileMenu.js';
	import { functionReadSidebarColorStore } from '../stores/storeSidebarColor.js';
	import type { typeMenu } from '../typeMenu.js';
	/////
	// NPM MODULES
	import { slide } from 'svelte/transition';
	/////
	// PROPS
	export let propMenu: typeMenu = [];
	/////

	// STORES
	const storeMobileMenu = functionReadMobileMenuStore();
	const storeSidebarColor = functionReadSidebarColorStore();
	/////
</script>

<nav
	class:navbar-darker={$storeSidebarColor === 'enumDark'}
	class="navbar navbar-vertical navbar-expand-lg"
>
	<div
		transition:slide
		class:show={!$storeMobileMenu}
		class="collapse navbar-collapse"
		id="navbarVerticalCollapse"
	>
		<!-- scrollbar removed-->
		<div class="navbar-vertical-content">
			<ul class="navbar-nav flex-column" id="navbarVerticalNav">
				{#each propMenu as currentMenu}
					<ComponentMenuItem propMenuItem={currentMenu} />
				{/each}
			</ul>
		</div>
	</div>
	<ComponentFooter />
</nav>
