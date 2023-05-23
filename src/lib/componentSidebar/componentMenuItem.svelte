<script lang="ts">
	// COMPONENTS:
	import ComponentSubmenuItem from './componentSubmenuItem.svelte';
	// NPM MODULES:
	import { slide } from 'svelte/transition';
	// MODULES:
	import { functionReadActiveMenuStore } from '../stores/storeActiveMenu.js';
	import { functionReadSidebarStore } from '../stores/storeSidebar.js';
	import type { typeActiveMenu } from './typeActiveMenu.js';
	import type { typeMenuArray } from './typeMenuArray.js';
	// STATES:
	let stateCollapsed = true;
	// STORES:
	const storeSidebar = functionReadSidebarStore();
	const storeActiveMenu = functionReadActiveMenuStore();
	// PROPS:
	export let propMenuItem: typeMenuArray[number];
	export let propActiveMenu: typeActiveMenu;
	// STATES:
	let stateWindowWidth: number;
</script>

<svelte:window bind:innerWidth={stateWindowWidth} />

<li class="nav-item">
	<div class="nav-item-wrapper">
		{#if propMenuItem.arraySubmenus === undefined}
			<a
				on:click={() => ($storeActiveMenu = propMenuItem.objectMenu.stringName)}
				class:classActiveGradient={$storeActiveMenu === propMenuItem.objectMenu.stringName &&
					propActiveMenu.stringBackgroundSecondaryColor !== undefined}
				class:classActive={$storeActiveMenu === propMenuItem.objectMenu.stringName &&
					propActiveMenu.stringBackgroundSecondaryColor === undefined}
				class="nav-link label-1"
				href={propMenuItem.objectMenu.stringHref ?? ''}
				role="button"
				data-bs-toggle=""
				aria-expanded="false"
			>
				<div class="d-flex align-items-center">
					<!-- ICON -->
					{#if propMenuItem.objectMenu.stringIcon !== undefined}
						<span class="nav-link-icon">
							<!-- eslint-disable svelte/no-at-html-tags -->
							{@html propMenuItem.objectMenu.stringIcon}
						</span>
					{/if}
					<!---->
					<!-- TEXT -->
					<span class="nav-link-text-wrapper">
						<span class="nav-link-text">{propMenuItem.objectMenu.stringSlot}</span>
					</span>
					<!---->
				</div>
			</a>
		{:else}
			<!-- svelte-ignore a11y-invalid-attribute -->
			<a
				on:click={() => {
					stateCollapsed = !stateCollapsed;
				}}
				class:collapsed={stateCollapsed}
				class="nav-link d-flex label-1"
				href="javascript:void(0);"
				role="button"
				data-bs-toggle=""
				aria-expanded={!stateCollapsed}
			>
				<div class="d-flex align-items-center">
					<!-- <span class="fas fa-caret-right"></span> Font Awesome fontawesome.com -->
					<div class="dropdown-indicator-icon me-2">
						{#if stateCollapsed}
							<i style="font-size: medium;" class="bx bx-caret-down mt-1" />
						{:else}
							<i style="font-size: medium;" class="bx bx-caret-right mt-1" />
						{/if}
					</div>
					<!---->
					<!-- ICON -->
					{#if propMenuItem.objectMenu.stringIcon !== undefined}
						<span class="nav-link-icon">
							{@html propMenuItem.objectMenu.stringIcon}
						</span>
					{/if}
					<!---->
					<!-- TEXT -->
					<span class="nav-link-text">{propMenuItem.objectMenu.stringSlot}</span>
					<!---->
				</div>
			</a>
			{#if !stateCollapsed || ($storeSidebar && stateWindowWidth >= 992)}
				<div transition:slide class="parent-wrapper label-1">
					<ul class="nav collapse parent show" data-bs-parent="#navbarVerticalCollapse" id="home">
						<li class="collapsed-nav-item-title d-none">{propMenuItem.objectMenu.stringSlot}</li>
						<ComponentSubmenuItem {propActiveMenu} propSubmenu={propMenuItem.arraySubmenus} />
					</ul>
				</div>
			{/if}
		{/if}
	</div>
</li>

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
		background-color: var(--cssvarActiveBackgroundColor) !important;
		color: var(--cssvarActiveColor) !important;
	}
</style>
