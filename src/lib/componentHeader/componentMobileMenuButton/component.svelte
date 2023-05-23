<script lang="ts">
	// MODULES
	import { functionReadMobileMenuStore } from '../../stores/storeMobileMenu.js';
	/////
	// STORES
	const storeMobileMenu = functionReadMobileMenuStore();
	/////
</script>

<button
	on:click={() => ($storeMobileMenu = !$storeMobileMenu)}
	class="btn navbar-toggler navbar-toggler-humburger-icon hover-bg-transparent"
	class:collapsed={$storeMobileMenu}
	type="button"
	data-bs-toggle="collapse"
	data-bs-target="#navbarVerticalCollapse"
	aria-controls="navbarVerticalCollapse"
	aria-expanded={!$storeMobileMenu}
	aria-label="Toggle Navigation"
>
	<span class="navbar-toggle-icon"><span class="toggle-line" /></span>
</button>

<style>
	.hover-bg-transparent:hover,
	.hover-bg-transparent:focus {
		background-color: rgba(0, 0, 0, 0) !important;
	}
	.navbar-toggle-icon {
		position: relative;
		height: 0.125rem;
		width: 1.125rem;
		-webkit-transition: all 0.2s ease-in-out;
		-o-transition: all 0.2s ease-in-out;
		transition: all 0.2s ease-in-out;
		display: block;
		top: -0.3125rem;
		padding-right: 0;
	}
	.navbar-toggle-icon .toggle-line {
		display: block;
		height: 100%;
		border-radius: 0.375rem;
		-webkit-transition: all 0.2s ease-in-out;
		-o-transition: all 0.2s ease-in-out;
		transition: all 0.2s ease-in-out;
		background-color: var(--jean-hamburger-menu-color);
	}
	.navbar-toggle-icon:after,
	.navbar-toggle-icon:before {
		content: '';
		position: absolute;
		height: 0.125rem;
		background-color: var(--jean-hamburger-menu-color);
		left: 0;
		-webkit-transition: all 0.2s ease-in-out;
		-o-transition: all 0.2s ease-in-out;
		transition: all 0.2s ease-in-out;
		border-radius: 0.375rem;
		width: 100%;
	}
	.navbar-toggle-icon:before {
		top: 0.3125rem;
	}
	.navbar-toggle-icon:after {
		top: 0.625rem;
	}
	.navbar-toggler-humburger-icon {
		height: 2.25rem;
		width: 2.25rem;
		padding: 0.3125rem;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		border-radius: 50%;
		border: 0;
		margin-right: 0.6125rem;
	}
	.navbar-toggler-humburger-icon:hover,
	.navbar-toggler-humburger-icon:focus {
		background-color: var(--jean-gray-300);
	}
</style>
