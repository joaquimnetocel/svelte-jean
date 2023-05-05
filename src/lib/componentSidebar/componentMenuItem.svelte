<script lang="ts">
	// COMPONENTS
	import ComponentSubmenuItem from './componentSubmenuItem.svelte';
	/////
	// NPM MODULE
	import { slide } from 'svelte/transition';
	/////
	// MODULES
	import { functionReadActiveMenuStore } from '../stores/storeActiveMenu.js';
	import { functionReadSidebarStore } from '../stores/storeSidebar.js';
	import type { typeMenu } from '../typeMenu.js';
	/////
	// STATES
	let stateCollapsed = true;
	/////
	// STORES
	const storeSidebar = functionReadSidebarStore();
	const storeActiveMenu = functionReadActiveMenuStore();
	/////
	// PROPS
	export let propMenuItem: typeMenu[number];
	/////
</script>

<li class="nav-item">
	<div class="nav-item-wrapper">
		{#if propMenuItem.arraySubmenus === undefined}
			<a
				on:click={() => ($storeActiveMenu = propMenuItem.objectMenu.stringName)}
				class:active={$storeActiveMenu === propMenuItem.objectMenu.stringName}
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
				class="nav-link dropdown-indicator label-1"
				href="javascript:void(0);"
				role="button"
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
			{#if !stateCollapsed || $storeSidebar}
				<div transition:slide class="parent-wrapper label-1">
					<ul class="nav collapse parent show" data-bs-parent="#navbarVerticalCollapse" id="home">
						<li class="collapsed-nav-item-title d-none">{propMenuItem.objectMenu.stringSlot}</li>
						<ComponentSubmenuItem propSubmenu={propMenuItem.arraySubmenus} />
					</ul>
				</div>
			{/if}
		{/if}
	</div>
</li>
