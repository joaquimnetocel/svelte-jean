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
			<slot name="slotCenter">SLOT (slotCenter)</slot>
		</div>
		<ul class="navbar-nav navbar-nav-icons flex-row">
			<slot name="slotRight" />
		</ul>
	</div>
</nav>

<style>
	:global(.dark) .navbar-darker {
		--phoenix-navbar-top-dropdown-hover-bg: #31374a;
		--phoenix-navbar-vertical-bg-color: #222834;
		--phoenix-navbar-vertical-label-color: #6e7891;
		--phoenix-navbar-vertical-link-color: #9fa6bc;
		--phoenix-navbar-vertical-link-hover-color: #eff2f6;
		--phoenix-navbar-vertical-link-hover-bg: #31374a;
		--phoenix-navbar-vertical-link-active-color: #fff;
		--phoenix-navbar-vertical-link-disable-color: #8a94ad;
		--phoenix-navbar-vertical-link-icon-color: #9fa6bc;
		--phoenix-navbar-vertical-collapsed-menu-bg: #222834;
		--phoenix-navbar-vertical-collapsed-menu-color: #9fa6bc;
		--phoenix-navbar-top-bg-color: #222834;
		--phoenix-nav-link-color: #8a94ad;
		--phoenix-input-bg: #222834;
		--phoenix-input-border-color: #373e53;
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
		background: var(--phoenix-navbar-top-bg-color);
		min-height: var(--phoenix-navbar-top-height);
		color: var(--phoenix-nav-link-color);
		padding: 0 1.5rem 0 1.5rem;
		border-bottom: 1px solid var(--phoenix-navbar-vertical-border-color);
	}
</style>
