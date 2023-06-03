<script lang="ts">
	// MODULES:
	import { functionCreateActiveMenuStore } from './stores/storeActiveMenu.js';
	import type { typeColorScheme } from './stores/storeColorScheme.js';
	import { functionCreateColorSchemeStore } from './stores/storeColorScheme.js';
	import type { typeHeaderColor } from './stores/storeHeaderColor.js';
	import { functionCreateHeaderColorStore } from './stores/storeHeaderColor.js';
	import { functionCreateMobileMenuStore } from './stores/storeMobileMenu.js';
	import {
		functionCreateRightBottomStore,
		functionReadRightBottomStore,
	} from './stores/storeRightBottom.js';
	import { functionCreateSidebarStore, functionReadSidebarStore } from './stores/storeSidebar.js';
	import type { typeSidebarColor } from './stores/storeSidebarColor.js';
	import { functionCreateSidebarColorStore } from './stores/storeSidebarColor.js';
	import type { typeAllLanguages } from './typeAllLanguages.js';
	import type { typeInitialProps } from './typeInitialProps.js';
	// NPM MODULES:
	import { setContext } from 'svelte';

	// PROPS:
	export let propHeaderColor: typeHeaderColor = 'enumLight';
	export let propSidebarColor: typeSidebarColor = 'enumDark';
	export let propColorScheme: typeColorScheme = 'enumLight';
	export let propSidebar = false;
	export let propRightBottom = true;
	export let propLanguage: typeAllLanguages = 'en';
	// CONSTANTS:
	const objectInitialProps: typeInitialProps = {
		propHeaderColor,
		propSidebarColor,
		propColorScheme,
		propSidebar,
		propRightBottom,
	};
	// CONTEXT:
	setContext<typeAllLanguages>('contextLanguage', propLanguage);
	setContext<typeInitialProps>('contextInitialProps', objectInitialProps);
	// CREATE STORES:
	functionCreateColorSchemeStore(propColorScheme);
	functionCreateHeaderColorStore(propHeaderColor);
	functionCreateSidebarColorStore(propSidebarColor);
	functionCreateSidebarStore(propSidebar);
	functionCreateRightBottomStore(propRightBottom);
	functionCreateMobileMenuStore();
	functionCreateActiveMenuStore();
	// READ STORES:
	const storeRightBottom = functionReadRightBottomStore();
	const storeSidebar = functionReadSidebarStore();
</script>

<div>
	<main class="main">
		<div class="container-fluid px-0">
			<slot name="slotSidebar" />
			<slot name="slotHeader" />
			<div class:classSidebarCollapsed={$storeSidebar} class="classContent">
				<div class="d-flex flex-column h-100">
					<div class="flex-grow-1">
						<slot name="slotBody" />
					</div>
					<slot name="slotFooter" />
				</div>
			</div>
		</div>
		{#if $storeRightBottom}
			<slot name="slotRightBottom" />
		{/if}
	</main>
	<slot name="slotCustomize" />
</div>

<style>
	.classContent {
		height: 100vh;
		padding-top: 4rem;
		/* position: relative; */
	}
	@media (min-width: 992px) {
		.classContent:not(.classSidebarCollapsed) {
			margin-left: 15.875rem;
		}
		.classSidebarCollapsed.classContent {
			margin-left: 4rem;
		}
	}
</style>
