<script lang="ts">
	// MODULES
	import { functionCreateColorSchemeStore } from './stores/storeColorScheme.js';
	import { functionCreateHeaderColorStore } from './stores/storeHeaderColor.js';
	import { functionCreateMobileMenuStore } from './stores/storeMobileMenu.js';
	import { functionCreateRtlStore, functionReadRtlStore } from './stores/storeRtl.js';
	import { functionCreateSidebarStore } from './stores/storeSidebar.js';
	import { functionCreateSidebarColorStore } from './stores/storeSidebarColor.js';
	/////
	// STORES
	functionCreateColorSchemeStore();
	functionCreateHeaderColorStore();
	functionCreateSidebarColorStore();
	functionCreateSidebarStore();
	functionCreateMobileMenuStore();
	functionCreateRtlStore();
	const storeRtl = functionReadRtlStore();
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

	{#if $storeRtl}
		<link href="/css/theme-rtl.css" rel="stylesheet" type="text/css" />
	{:else}
		<link href="/css/theme.css" rel="stylesheet" type="text/css" />
	{/if}
</svelte:head>

<div dir={$storeRtl ? 'rtl' : 'ltr'}>
	<main class="main" id="top">
		<div class="container-fluid px-0" data-layout="container">
			<slot name="slotSidebar" />
			<slot name="slotHeader" />
			<slot name="slotFooter" />
		</div>
	</main>
	<slot name="slotCustomize" />
</div>
