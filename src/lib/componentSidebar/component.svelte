<script lang="ts">
	// COMPONENTS
	import ComponentFooter from './componentFooter.svelte';
	import ComponentMenuItem from './componentMenuItem.svelte';
	/////
	// MODULES
	import { functionReadMobileMenuStore } from '../stores/storeMobileMenu.js';
	import { functionReadSidebarColorStore } from '../stores/storeSidebarColor.js';
	import type { typeMenu } from '../typeMenu.js';
	import type { typeActiveMenu } from './typeActiveMenu.js';
	/////
	// NPM MODULES
	import { slide } from 'svelte/transition';
	/////
	// PROPS
	export let propMenu: typeMenu = [];
	export let propActiveMenu: typeActiveMenu = {
		stringBackgroundColor: '#ffecd2',
		stringBackgroundSecondaryColor: '#fcb69f',
		stringBackgroundGradientDirection: '270deg',
		stringColor: 'black'
	};
	/////

	// STORES
	const storeMobileMenu = functionReadMobileMenuStore();
	const storeSidebarColor = functionReadSidebarColorStore();
	/////
</script>

<nav
	style:--cssvarActiveBackgroundColor={propActiveMenu.stringBackgroundColor}
	style:--cssvarActiveBackgroundSecondaryColor={propActiveMenu.stringBackgroundSecondaryColor}
	style:--cssvarActiveBackgroundGradientDirection={propActiveMenu.stringBackgroundGradientDirection}
	style:--cssvarActiveColor={propActiveMenu.stringColor}
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
					<ComponentMenuItem {propActiveMenu} propMenuItem={currentMenu} />
				{/each}
			</ul>
		</div>
	</div>
	<ComponentFooter />
</nav>
