<script lang="ts">
	// MODULES:
	import { functionClickOutside } from '../functionClickOutside.js';
	import type { typeUserMenuArray } from './typeUserMenuArray.js';
	// NPM MODULES:
	import { slide } from 'svelte/transition';
	// IMAGES:
	import imageUser from './imageUser.webp';

	// PROPS:
	export let propImage = imageUser;
	export let propName = 'John Smith';
	export let propUserMenu: typeUserMenuArray = [];
	export let propSignOutButtonText = 'SIGN OUT';
	export let propSignOutButtonHref = '';
	// STATES:
	let stateCollapsed = true;
	//FUNCTIONS:
	const functionClick = function () {
		stateCollapsed = !stateCollapsed;
	};
</script>

<li use:functionClickOutside={() => (stateCollapsed = true)} class="nav-item dropdown">
	<!-- svelte-ignore a11y-invalid-attribute -->
	<a
		on:click={functionClick}
		class:show={!stateCollapsed}
		class="nav-link lh-1 pe-0"
		id="navbarDropdownUser"
		href="javascript:void(0);"
		role="button"
		data-bs-toggle="dropdown"
		data-bs-auto-close="outside"
		aria-haspopup="true"
		aria-expanded={!stateCollapsed}
	>
		<div class="classAvatar classAvatar-l">
			<img width="40" class="rounded-circle" src={propImage} alt="" />
			<svg
				fill="var(--jean-body-color)"
				width="8"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 320 512"
			>
				<!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
				<path
					d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
				/>
			</svg>
		</div>
	</a>
	{#if !stateCollapsed}
		<div
			transition:slide
			class="show dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-profile shadow border border-300"
			aria-labelledby="navbarDropdownUser"
			data-bs-popper="static"
		>
			<div class="card position-relative border-0">
				<div class="card-body p-0">
					<div class="text-center pt-4 pb-3">
						<div class="avatar avatar-xl">
							<img width="72" class="rounded-circle" src={propImage} alt="" />
						</div>
						<h6 class="mt-2 text-black">{propName}</h6>
					</div>
					<slot name="slotBeforeOptions" />
				</div>
				<div class="overflow-auto border-top classBorderColor scrollbar" style="max-height: 10rem;">
					<ul class="nav d-flex flex-column mb-2 pb-1">
						{#each propUserMenu as currentUserMenu}
							<li class="nav-item">
								<a class="nav-link px-3" href={currentUserMenu.stringHref}>
									<span>
										<!-- eslint-disable svelte/no-at-html-tags -->
										{@html currentUserMenu.stringText}
									</span>
								</a>
							</li>
						{/each}
					</ul>
				</div>
				<div class="card-footer border-top classBorderColor p-0">
					<div class="px-3 mt-3 mb-3">
						<a class="btn btn-secondary btn-sm w-100" href={propSignOutButtonHref}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16px"
								height="16px"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="feather feather-log-out me-2"
							>
								<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
								<polyline points="16 17 21 12 16 7" />
								<line x1="21" y1="12" x2="9" y2="12" />
							</svg>
							{propSignOutButtonText}
						</a>
						<slot name="slotFooter" />
					</div>
				</div>
			</div>
		</div>
	{/if}
</li>

<style>
	.avatar {
		position: relative;
		display: inline-block;
		vertical-align: middle;
	}
	.classAvatar {
		position: relative;
		display: inline-block;
		vertical-align: middle;
	}
	.classAvatar-l {
		height: 2.5rem;
		/* width: 2.5rem; */
	}
	.avatar-xl {
		height: 3rem;
		width: 3rem;
	}
	.avatar img {
		width: 100%;
		height: 100%;
		-o-object-fit: cover;
		object-fit: cover;
		display: block;
	}
	.card-footer {
		color: var(--jean-card-cap-color);
		background-color: var(--jean-card-cap-bg);
	}
	.card-footer:last-child {
		border-radius: 0 0 var(--jean-card-inner-border-radius) var(--jean-card-inner-border-radius);
	}
	.classBorderColor {
		border-color: var(--jean-border-color) !important;
	}
</style>
