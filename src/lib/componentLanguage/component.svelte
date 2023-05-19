<script lang="ts">
	// MODULES:
	import { functionClickOutside } from '../functionClickOutside.js';
	import type { typeLanguagesArray } from './typeLanguagesArray.js';
	// NPM MODULES:
	import { slide } from 'svelte/transition';

	// PROPS:
	export let propLanguages: typeLanguagesArray;
	export let propSelected: typeLanguagesArray[number]['stringCode'];
	// STATES:
	let stateCollapsed = true;
	// FUNCTIONS:
	const functionClick = function () {
		stateCollapsed = !stateCollapsed;
	};

	$: objectSelectedLanguage =
		propLanguages.find((current) => current.stringCode === propSelected) ?? propLanguages[0];
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
		{#if objectSelectedLanguage.stringImage !== undefined}
			<img src={objectSelectedLanguage.stringImage} alt="" class="me-0 me-sm-1" height="12" />
		{:else}
			{objectSelectedLanguage.stringCode.toUpperCase()}
		{/if}
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
			class="show dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 shadow border border-300"
			aria-labelledby="navbarDropdownNindeDots"
			data-bs-popper="static"
		>
			<div class="card bg-white position-relative border-0">
				{#each propLanguages as currentLanguage}
					<a href={currentLanguage.stringLink} class="dropdown-item">
						{#if currentLanguage.stringImage !== undefined}
							<img src={currentLanguage.stringImage} alt="" class="me-1" height="12" />
						{/if}
						<span class="align-middle">{currentLanguage.stringText}</span>
					</a>
				{/each}
			</div>
		</div>
	{/if}
</li>
