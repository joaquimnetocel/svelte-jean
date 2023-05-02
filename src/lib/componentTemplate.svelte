<script lang="ts">
	// MODULES
	import type { typeColorScheme } from './stores/storeColorScheme.js';
	import { functionCreateColorSchemeStore } from './stores/storeColorScheme.js';
	import type { typeHeaderColor } from './stores/storeHeaderColor.js';
	import { functionCreateHeaderColorStore } from './stores/storeHeaderColor.js';
	import { functionCreateMobileMenuStore } from './stores/storeMobileMenu.js';
	import {
		functionCreateRightBottomStore,
		functionReadRightBottomStore
	} from './stores/storeRightBottom.js';
	import { functionCreateSidebarStore } from './stores/storeSidebar.js';
	import type { typeSidebarColor } from './stores/storeSidebarColor.js';
	import { functionCreateSidebarColorStore } from './stores/storeSidebarColor.js';
	import type { typeTextDirection } from './stores/storeTextDirection.js';
	import {
		functionCreateTextDirectionStore,
		functionReadTextDirectionStore
	} from './stores/storeTextDirection.js';
	import type { typeInitialProps } from './typeInitialProps.js';
	/////
	// NPM MODULES
	import { setContext } from 'svelte';
	/////

	// PROPS
	export let propHeaderColor: typeHeaderColor = 'enumLight';
	export let propSidebarColor: typeSidebarColor = 'enumDark';
	export let propColorScheme: typeColorScheme = 'enumLight';
	export let propSidebar = false;
	export let propRightBottom = true;
	export let propTextDirection: typeTextDirection = 'enumLeftToRight';
	/////
	// CONSTANTS
	const objectInitialProps: typeInitialProps = {
		propHeaderColor,
		propSidebarColor,
		propColorScheme,
		propSidebar,
		propRightBottom,
		propTextDirection
	};
	setContext<typeInitialProps>('contextInitialProps', objectInitialProps);
	/////
	// STORES
	functionCreateColorSchemeStore(propColorScheme);
	functionCreateHeaderColorStore(propHeaderColor);
	functionCreateSidebarColorStore(propSidebarColor);
	functionCreateSidebarStore(propSidebar);
	functionCreateTextDirectionStore(propTextDirection);
	functionCreateRightBottomStore(propRightBottom);
	functionCreateMobileMenuStore();
	const storeTextDirection = functionReadTextDirectionStore();
	const storeRightBottom = functionReadRightBottomStore();
	/////
</script>

<svelte:head>
	<link href="/css/solto.css" rel="stylesheet" type="text/css" />
	<link href="/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
	<!-- <link
		href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
		rel="stylesheet"
		integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
		crossorigin="anonymous"
	/> -->

	{#if $storeTextDirection === 'enumRightToLeft'}
		<link href="/css/theme-rtl.css" rel="stylesheet" type="text/css" />
	{:else}
		<link href="/css/theme.css" rel="stylesheet" type="text/css" />
	{/if}
</svelte:head>

<div dir={$storeTextDirection === 'enumRightToLeft' ? 'rtl' : 'ltr'}>
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
		padding-top: var(--phoenix-navbar-top-height);
		padding-left: 0px !important;
		padding-right: 0px;
	}
</style>
