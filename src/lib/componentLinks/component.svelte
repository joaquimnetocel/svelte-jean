<script lang="ts">
	// MODULES:
	import { functionClickOutside } from '../functionClickOutside.js';
	import type { typeLinksArray } from './typeLinksArray.js';
	// NPM MODULES:
	import { slide } from 'svelte/transition';
	// IMAGES:
	import imageGoogleCloud from './imageGoogleCloud.webp';

	// STATES:
	let stateCollapsed = true;
	// PROPS:
	export let propLinks: typeLinksArray;
	//FUNCTIONS:
	const functionClick = function () {
		stateCollapsed = !stateCollapsed;
	};
</script>

<li class="nav-item dropdown">
	<!-- svelte-ignore a11y-invalid-attribute -->
	<a
		class:show={!stateCollapsed}
		on:click={functionClick}
		use:functionClickOutside={() => (stateCollapsed = true)}
		class="nav-link"
		id="navbarDropdownNindeDots"
		href="javascript:void(0);"
		role="button"
		data-bs-toggle="dropdown"
		aria-haspopup="true"
		data-bs-auto-close="outside"
		aria-expanded={!stateCollapsed}
	>
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="2" cy="2" r="2" fill="currentColor" />
			<circle cx="2" cy="8" r="2" fill="currentColor" />
			<circle cx="2" cy="14" r="2" fill="currentColor" />
			<circle cx="8" cy="8" r="2" fill="currentColor" />
			<circle cx="8" cy="14" r="2" fill="currentColor" />
			<circle cx="14" cy="8" r="2" fill="currentColor" />
			<circle cx="14" cy="14" r="2" fill="currentColor" />
			<circle cx="8" cy="2" r="2" fill="currentColor" />
			<circle cx="14" cy="2" r="2" fill="currentColor" /></svg
		>
		<svg
			width="8"
			fill="var(--jean-body-color)"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 320 512"
		>
			<!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
				d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
			/>
		</svg>
	</a>
	{#if !stateCollapsed}
		<div
			transition:slide
			class="show dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-nide-dots shadow border border-300"
			aria-labelledby="navbarDropdownNindeDots"
			data-bs-popper="static"
		>
			<div class="card bg-white position-relative border-0">
				<div class="card-body pt-3 px-3 pb-0 overflow-auto scrollbar" style="height: 20rem">
					<div class="row text-center align-items-center gx-0 gy-0">
						{#each propLinks as currentLink}
							<div class="col-4" style="width: 33.33333333%;">
								<a
									class="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
									href={currentLink.stringLink}
								>
									{#if currentLink.stringImage === 'default image'}
										<img src={imageGoogleCloud} alt="" width="30" />
									{:else if currentLink.stringImage !== undefined}
										<img src={currentLink.stringImage} alt="" width="30" />
									{/if}
									<p
										class:mb-0={currentLink.stringImage !== undefined}
										class:mt-2={currentLink.stringImage === undefined}
										class:mt-1={currentLink.stringImage !== undefined}
										class="text-black text-truncate fs--2 pt-1"
									>
										{currentLink.stringText}
									</p>
								</a>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	{/if}
</li>

<style>
	.hover-bg-200:hover {
		background-color: var(--jean-gray-200) !important;
	}
	.dropdown-nide-dots {
		min-width: 15.375rem;
	}
	.dropdown-nide-dots.dropdown-menu-end:after {
		right: 0.75rem !important;
	}
</style>
