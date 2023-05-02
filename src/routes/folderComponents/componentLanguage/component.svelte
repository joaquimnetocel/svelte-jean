<script lang="ts">
	// IMAGES
	import imageGermany from './folderImages/imageGermany.jpg';
	import imageItaly from './folderImages/imageItaly.jpg';
	import imageRussia from './folderImages/imageRussia.jpg';
	import imageSpain from './folderImages/imageSpain.jpg';
	import imageUs from './folderImages/imageUs.jpg';
	/////
	// MODULES
	import { functionClickOutside } from '$lib/functionClickOutside.js';
	/////
	// NPM MODULE
	import { slide } from 'svelte/transition';
	/////

	// STATES
	let stateCollapsed = true;
	/////
	// FUNCTIONS
	const functionClick = function () {
		stateCollapsed = !stateCollapsed;
	};
	/////
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
		<img src={imageUs} alt="" class="me-0 me-sm-1" height="12" />
		<!-- <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="2" cy="2" r="2" fill="currentColor" />
			<circle cx="2" cy="8" r="2" fill="currentColor" />
			<circle cx="2" cy="14" r="2" fill="currentColor" />
			<circle cx="8" cy="8" r="2" fill="currentColor" />
			<circle cx="8" cy="14" r="2" fill="currentColor" />
			<circle cx="14" cy="8" r="2" fill="currentColor" />
			<circle cx="14" cy="14" r="2" fill="currentColor" />
			<circle cx="8" cy="2" r="2" fill="currentColor" />
			<circle cx="14" cy="2" r="2" fill="currentColor" />
		</svg> -->
		<svg
			fill="var(--phoenix-body-color)"
			width="8"
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
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="javascript:void(0);" class="dropdown-item">
					<img src={imageUs} alt="" class="me-1" height="12" />
					<span class="align-middle">English</span>
				</a>
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="javascript:void(0);" class="dropdown-item">
					<img src={imageGermany} alt="" class="me-1" height="12" />
					<span class="align-middle">German</span>
				</a>
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="javascript:void(0);" class="dropdown-item">
					<img src={imageItaly} alt="" class="me-1" height="12" />
					<span class="align-middle">Italian</span>
				</a>
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="javascript:void(0);" class="dropdown-item">
					<img src={imageRussia} alt="" class="me-1" height="12" />
					<span class="align-middle">Russian</span>
				</a>
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="javascript:void(0);" class="dropdown-item">
					<img src={imageSpain} alt="" class="me-1" height="12" />
					<span class="align-middle">Spanish</span>
				</a>
			</div>
		</div>
	{/if}
</li>
