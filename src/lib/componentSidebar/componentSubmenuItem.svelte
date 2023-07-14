<script lang="ts">
	// MODULES
	import { functionReadActiveMenuStore } from '../stores/storeActiveMenu.js';
	import { functionReadMobileMenuStore } from '../stores/storeMobileMenu.js';
	import type { typeActiveMenu } from './typeActiveMenu.js';
	import type { typeMenuArray } from './typeMenuArray.js';
	/////
	// PROPS
	export let propSubmenu: typeMenuArray;
	export let propActiveMenu: typeActiveMenu;
	export let propCollapsed = false;
	/////
	// STORES
	const storeActiveMenu = functionReadActiveMenuStore();
	const storeMobileMenu = functionReadMobileMenuStore();
	/////
</script>

{#each propSubmenu as currentSubmenu}
	<li class="nav-item">
		{#if currentSubmenu.arraySubmenus === undefined}
			<!-- class:active={$storeActiveMenu === currentSubmenu.objectMenu.stringName} -->
			<a
				data-sveltekit-preload-data={currentSubmenu.objectMenu.stringPreload ?? 'hover'}
				on:click={() => {
					$storeActiveMenu = currentSubmenu.objectMenu.stringName;
					$storeMobileMenu = true;
				}}
				class="nav-link"
				href={currentSubmenu.objectMenu.stringHref ?? ''}
				data-bs-toggle=""
				aria-expanded="false"
			>
				<div
					class:classActiveGradient={$storeActiveMenu === currentSubmenu.objectMenu.stringName &&
						propActiveMenu.stringBackgroundSecondaryColor !== undefined}
					class:classActive={$storeActiveMenu === currentSubmenu.objectMenu.stringName &&
						propActiveMenu.stringBackgroundSecondaryColor === undefined}
					class="rounded-2 px-2 py-1"
				>
					<!-- eslint-disable-next-line svelte/no-at-html-tags -->
					{@html currentSubmenu.objectMenu.stringSlot}
				</div>
			</a>
		{:else}
			<!-- svelte-ignore a11y-invalid-attribute -->
			<a
				on:click={() => {
					propCollapsed = !propCollapsed;
				}}
				class="nav-link dropdown-indicator"
				href="javascript:void(0);"
				data-bs-toggle="collapse"
				aria-expanded={!propCollapsed}
			>
				<div class="d-flex align-items-center">
					<div class="dropdown-indicator-icon">
						{#if propCollapsed}
							<i style="font-size: medium;" class="bx bx-caret-down mt-1" />
						{:else}
							<i style="font-size: medium;" class="bx bx-caret-right mt-1" />
						{/if}
					</div>
					<!---->

					<span class="nav-link-text">
						{#if currentSubmenu.objectMenu.stringIcon !== undefined}
							<!-- eslint-disable-next-line svelte/no-at-html-tags -->
							{@html currentSubmenu.objectMenu.stringIcon}
						{/if}
						{currentSubmenu.objectMenu.stringSlot}
					</span>
				</div>
			</a><!-- more inner pages-->
			{#if !propCollapsed}
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
