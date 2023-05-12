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
					<!-- <span class="fas fa-caret-right"></span> Font Awesome fontawesome.com -->
					<div class="dropdown-indicator-icon">
						<svg
							class="svg-inline--fa fa-caret-right"
							aria-hidden="true"
							focusable="false"
							data-prefix="fas"
							data-icon="caret-right"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 256 512"
							data-fa-i2svg=""
						>
							<path
								fill="currentColor"
								d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"
							/>
						</svg>
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
