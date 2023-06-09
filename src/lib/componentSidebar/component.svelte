<script lang="ts">
	// COMPONENTS:
	import ComponentFooter from './componentFooter.svelte';
	import ComponentMenuItem from './componentMenuItem.svelte';
	// MODULES:
	import { functionReadMobileMenuStore } from '../stores/storeMobileMenu.js';
	import { functionReadSidebarColorStore } from '../stores/storeSidebarColor.js';
	import type { typeActiveMenu } from './typeActiveMenu.js';
	import type { typeMenuArray } from './typeMenuArray.js';
	// NPM MODULES:
	import { slide } from 'svelte/transition';
	// PROPS:
	export let propStartCollapsed = false;
	export let propMenu: typeMenuArray = [];
	export let propActiveMenu: typeActiveMenu = {
		stringBackgroundColor: '#ffecd2',
		stringBackgroundSecondaryColor: '#fcb69f',
		stringBackgroundGradientDirection: '270deg',
		stringColor: 'black',
	};
	export let propFooterText = 'COLLAPSED VIEW';
	// STORES:
	const storeMobileMenu = functionReadMobileMenuStore();
	const storeSidebarColor = functionReadSidebarColorStore();
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
					<ComponentMenuItem
						propCollapsed={propStartCollapsed}
						{propActiveMenu}
						propMenuItem={currentMenu}
					/>
				{/each}
			</ul>
		</div>
	</div>
	<ComponentFooter {propFooterText} />
</nav>

<style>
	:global(.dark) .navbar-darker {
		--jean-navbar-top-dropdown-hover-bg: #31374a;
		--jean-navbar-vertical-bg-color: #222834;
		--jean-navbar-vertical-label-color: #6e7891;
		--jean-navbar-vertical-link-color: #9fa6bc;
		--jean-navbar-vertical-link-hover-color: #eff2f6;
		--jean-navbar-vertical-link-hover-bg: #31374a;
		--jean-navbar-vertical-link-active-color: #fff;
		--jean-navbar-vertical-link-disable-color: #8a94ad;
		--jean-navbar-vertical-link-icon-color: #9fa6bc;
		--jean-navbar-vertical-collapsed-menu-bg: #222834;
		--jean-navbar-vertical-collapsed-menu-color: #9fa6bc;
		--jean-navbar-top-bg-color: #222834;
		--jean-nav-link-color: #8a94ad;
		--jean-input-bg: #222834;
		--jean-input-border-color: #373e53;
	}
	.navbar-vertical-content {
		padding: 1rem 0;
		overflow-y: auto;
	}
	:global(html:not(.navbar-vertical-collapsed)) .navbar-vertical-content:hover::-webkit-scrollbar,
	:global(html:not(.navbar-vertical-collapsed))
		.navbar-vertical-content:hover::-webkit-scrollbar-thumb,
	:global(html:not(.navbar-vertical-collapsed)) .navbar-vertical-content:focus::-webkit-scrollbar,
	:global(html:not(.navbar-vertical-collapsed))
		.navbar-vertical-content:focus::-webkit-scrollbar-thumb {
		visibility: visible;
	}
	:global(html:not(.navbar-vertical-collapsed)) .navbar-vertical-content::-webkit-scrollbar-thumb {
		visibility: hidden;
		border-radius: 3px;
		background-color: var(--jean-scrollbar-bg);
	}
	:global(html:not(.navbar-vertical-collapsed)) .navbar-vertical-content::-webkit-scrollbar {
		visibility: hidden;
		-webkit-appearance: none;
		width: 6px;
		height: 6px;
		background-color: rgba(0, 0, 0, 0);
	}
	:global(html:not(.navbar-vertical-collapsed)) .navbar-vertical-content {
		overflow: auto;
	}
	@media (min-width: 992px) {
		:global(.navbar-vertical-collapsed) .navbar-vertical.navbar-expand-lg {
			position: absolute;
			top: 0;
			height: auto;
			min-height: 100%;
			padding-top: var(--jean-navbar-top-height);
			padding-bottom: 4rem;
			width: 4rem;
		}
	}
</style>
