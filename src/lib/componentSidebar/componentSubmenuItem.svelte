<script lang="ts">
	// MODULES
	import { functionReadActiveMenuStore } from '../stores/storeActiveMenu.js';
	import type { typeActiveMenu } from './typeActiveMenu.js';
	import type { typeMenuArray } from './typeMenuArray.js';
	/////
	// PROPS
	export let propSubmenu: typeMenuArray;
	export let propActiveMenu: typeActiveMenu;
	/////
	// STATES
	let stateCollapsed = true;
	/////
	// STORES
	const storeActiveMenu = functionReadActiveMenuStore();
	/////
</script>

{#each propSubmenu as currentSubmenu}
	<li class="nav-item">
		{#if currentSubmenu.arraySubmenus === undefined}
			<!-- class:active={$storeActiveMenu === currentSubmenu.objectMenu.stringName} -->
			<a
				on:click={() => ($storeActiveMenu = currentSubmenu.objectMenu.stringName)}
				class="nav-link"
				href={currentSubmenu.objectMenu.stringHref ?? ''}
				data-bs-toggle=""
				aria-expanded="false"
			>
				<!-- <div class="d-flex align-items-center"> -->
				<div
					style="border-radius: 20px;padding-bottom:2px;"
					class:classActiveGradient={$storeActiveMenu === currentSubmenu.objectMenu.stringName &&
						propActiveMenu.stringBackgroundSecondaryColor !== undefined}
					class:classActive={$storeActiveMenu === currentSubmenu.objectMenu.stringName &&
						propActiveMenu.stringBackgroundSecondaryColor === undefined}
					class="d-flex align-items-center ps-2 ps-lg-0 pe-lg-3 pe-2"
				>
					<span class="nav-link-text">
						{currentSubmenu.objectMenu.stringSlot}
					</span>
				</div>
			</a>
		{:else}
			<!-- svelte-ignore a11y-invalid-attribute -->
			<a
				on:click={() => {
					stateCollapsed = !stateCollapsed;
				}}
				class="nav-link dropdown-indicator"
				href="javascript:void(0);"
				data-bs-toggle="collapse"
				aria-expanded={!stateCollapsed}
			>
				<div class="d-flex align-items-center">
					<div class="dropdown-indicator-icon">
						{#if stateCollapsed}
							<i style="font-size: medium;" class="bx bx-caret-down mt-1" />
						{:else}
							<i style="font-size: medium;" class="bx bx-caret-right mt-1" />
						{/if}
					</div>
					<!---->

					<span class="nav-link-text">
						{#if currentSubmenu.objectMenu.stringIcon !== undefined}
							<!-- eslint-disable svelte/no-at-html-tags -->
							{@html currentSubmenu.objectMenu.stringIcon}
						{/if}
						{currentSubmenu.objectMenu.stringSlot}
					</span>
				</div>
			</a><!-- more inner pages-->
			{#if !stateCollapsed}
				<div class="parent-wrapper">
					<ul class="nav collapse parent show" data-bs-parent="#e-commerce" id="admin">
						<svelte:self {propActiveMenu} propSubmenu={currentSubmenu.arraySubmenus} />
					</ul>
				</div>
			{/if}
		{/if}
	</li>
{/each}

<style>
	.classActiveGradient {
		background-image: linear-gradient(
			var(--cssvarActiveBackgroundGradientDirection),
			var(--cssvarActiveBackgroundColor) 0%,
			var(--cssvarActiveBackgroundSecondaryColor) 100%
		);
		color: var(--cssvarActiveColor) !important;
	}
	.classActive {
		background-color: var(--cssvarActiveBackgroundColor);
		color: var(--cssvarActiveColor) !important;
	}
</style>
