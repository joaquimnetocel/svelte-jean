<script lang="ts">
	// COMPONENTS
	import ComponentMobileMenuButton from './componentMobileMenuButton/component.svelte';
	/////
	// MODULES
	import { functionReadHeaderColorStore } from '../stores/storeHeaderColor.js';
	/////

	// STORES
	const storeHeaderColor = functionReadHeaderColorStore();
	/////
</script>

<nav
	class:navbar-darker={$storeHeaderColor === 'enumDark'}
	class="navbar navbar-top fixed-top navbar-expand"
	id="navbarDefault"
>
	<div class="collapse navbar-collapse justify-content-between">
		<div class="navbar-logo">
			<ComponentMobileMenuButton />
			<slot name="slotLeft" />
		</div>
		<div class="d-none d-lg-block">
			<slot name="slotCenter" />
		</div>
		<ul class="navbar-nav navbar-nav-icons flex-row">
			<slot name="slotRight" />
		</ul>
	</div>
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
	.navbar .navbar-logo {
		height: 4rem;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
	}
	.navbar-top {
		font-size: 0.8rem;
		font-weight: 600;
		padding: 0;
		background: var(--jean-navbar-top-bg-color);
		min-height: var(--jean-navbar-top-height);
		color: var(--jean-nav-link-color);
		padding: 0 1.5rem 0 1.5rem;
		border-bottom: 1px solid var(--jean-navbar-vertical-border-color);
	}
</style>
