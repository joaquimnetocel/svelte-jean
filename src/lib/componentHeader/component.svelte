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
		<slot name="slotCenter" />
		<ul class="navbar-nav navbar-nav-icons flex-row">
			<slot name="slotRight" />
		</ul>
	</div>
</nav>
