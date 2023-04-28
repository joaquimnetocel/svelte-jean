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
