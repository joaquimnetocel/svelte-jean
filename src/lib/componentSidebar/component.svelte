<script lang="ts">
	// COMPONENTS
	import ComponentFooter from './componentFooter.svelte';
	/////
	// MODULES
	import { functionReadMobileMenuStore } from '../stores/storeMobileMenu.js';
	import { functionReadSidebarColorStore } from '../stores/storeSidebarColor.js';
	/////
	// NPM MODULES
	import { slide } from 'svelte/transition';
	/////
	const storeMobileMenu = functionReadMobileMenuStore();
	const storeSidebarColor = functionReadSidebarColorStore();
</script>

<nav
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
				<slot />
				<!-- <li class="nav-item">
					<ComponentHome />
				</li> -->
			</ul>
		</div>
	</div>
	<ComponentFooter />
</nav>
