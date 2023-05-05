<script lang="ts">
	import { functionReadActiveMenuStore } from '$lib/index.js';
	import type { typeMenuName } from './folderMenu/arrayMenu.js';
	const storeActiveMenu = functionReadActiveMenuStore<typeMenuName>();
	$storeActiveMenu = 'menuEcommerce';
</script>

<div class="row">
	<div class="col">
		<h2 class="mb-2">JEAN TEMPLATE</h2>
		<h5 class="text-700 fw-semi-bold">Here’s what’s going on at your business right now</h5>
	</div>
</div>
