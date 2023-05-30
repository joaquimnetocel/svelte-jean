<script lang="ts">
	// NPM MODULES:
	import { functionReadActiveMenuStore } from '$lib/index.js';
	// import { functionReadActiveMenuStore } from 'svelte-jean';

	// STORES:
	const storeActiveMenu = functionReadActiveMenuStore();
	$storeActiveMenu = 'menuProducts';
</script>

<div class="row">
	<div class="col">
		<h2 class="mb-2">ROUTE PRODUCTS</h2>
		<h5 class="text-700 fw-semi-bold">Here’s what’s going on at your business right now</h5>
	</div>
</div>
