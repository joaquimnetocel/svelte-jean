<script lang="ts">
	// MODULES
	import { functionReadSidebarStore } from '../stores/storeSidebar.js';
	/////
	// NPM MODULES
	import { Body } from 'svelte-body';
	/////
	// STORES
	const storeSidebar = functionReadSidebarStore();
	/////
</script>

<Body class={$storeSidebar ? 'navbar-vertical-collapsed' : ''} />

<div class="navbar-vertical-footer">
	<button
		on:click={() => ($storeSidebar = !$storeSidebar)}
		class="btn navbar-vertical-toggle border-0 fw-semi-bold w-100 white-space-nowrap d-flex align-items-center"
	>
		<span class="uil uil-left-arrow-to-left fs-0" />
		<span class="uil uil-arrow-from-right fs-0" />
		{#if $storeSidebar}
			<svg
				fill="var(--jean-body-color)"
				width="16"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 512 512"
			>
				<!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
				<path
					d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
				/>
			</svg>
		{:else}
			<span class="navbar-vertical-footer-text ms-2">
				Collapsed View
				<svg
					fill="var(--jean-navbar-vertical-link-color)"
					width="16"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
				>
					<!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
					<path
						d="M48 256a208 208 0 1 1 416 0A208 208 0 1 1 48 256zm464 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM217.4 376.9c4.2 4.5 10.1 7.1 16.3 7.1c12.3 0 22.3-10 22.3-22.3V304h96c17.7 0 32-14.3 32-32V240c0-17.7-14.3-32-32-32H256V150.3c0-12.3-10-22.3-22.3-22.3c-6.2 0-12.1 2.6-16.3 7.1L117.5 242.2c-3.5 3.8-5.5 8.7-5.5 13.8s2 10.1 5.5 13.8l99.9 107.1z"
					/>
				</svg>
			</span>
		{/if}
	</button>
</div>

<style>
	.navbar-vertical-footer {
		position: fixed;
		width: 15.875rem;
		height: 4rem;
		display: none;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		bottom: 0;
		border-top: 1px solid var(--jean-navbar-footer-border-color);
		-webkit-transition: width 0.2s ease;
		-o-transition: width 0.2s ease;
		transition: width 0.2s ease;
	}
	.btn {
		color: var(--jean-navbar-vertical-link-color);
		text-decoration: none;
	}
	.btn:hover {
		color: var(--jean-navbar-vertical-link-hover-color);
	}
	.white-space-nowrap {
		white-space: nowrap;
	}
	@media (min-width: 992px) {
		:global(.navbar-vertical-collapsed)
			:global(.navbar-vertical.navbar-expand-lg)
			.navbar-vertical-footer {
			bottom: 0;
			width: calc(4rem - 1px);
			background-color: var(--jean-navbar-vertical-bg-color);
			padding-left: 0rem !important;
			padding-right: 0rem !important;
			-webkit-transition: width 0.2s ease;
			-o-transition: width 0.2s ease;
			transition: width 0.2s ease;
		}
		:global(.navbar-vertical-collapsed)
			:global(.navbar-vertical.navbar-expand-lg)
			:global(.navbar-vertical-footer)
			.uil-arrow-from-right {
			display: inline;
		}
		:global(.navbar-vertical-collapsed)
			:global(.navbar-vertical.navbar-expand-lg)
			:global(.navbar-vertical-footer)
			.uil-left-arrow-to-left {
			display: none;
		}
	}
</style>
