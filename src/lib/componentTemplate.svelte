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
	import { functionCreateSidebarStore } from './stores/storeSidebar.js';
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
</script>

<div>
	<main class="main" id="top">
		<div class="container-fluid px-0" data-layout="container">
			<slot name="slotSidebar" />
			<slot name="slotHeader" />
			<div class="content classContent">
				<slot name="slotBody" />
				<slot name="slotFooter" />
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
		padding-top: var(--jean-navbar-top-height);
		padding-left: 0px !important;
		padding-right: 0px;
	}
</style>
