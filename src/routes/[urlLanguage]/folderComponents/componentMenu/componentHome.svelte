<script lang="ts">
	// MODULES
	import { functionReadSidebarStore } from '$lib/stores/storeSidebar.js';
	/////
	// NPM MODULE
	import { slide } from 'svelte/transition';
	/////
	// STATES
	let stateCollapsed = true;
	/////
	// STORES
	const storeSidebarCollapsed = functionReadSidebarStore();
	/////
</script>

<li class="nav-item">
	<div class="nav-item-wrapper">
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
			aria-controls="home"
		>
			<div class="d-flex align-items-center">
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
					<!-- <span class="fas fa-caret-right"></span> Font Awesome fontawesome.com -->
				</div>
				<span class="nav-link-icon">
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
						class="feather feather-pie-chart"
					>
						<path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
						<path d="M22 12A10 10 0 0 0 12 2v10z" />
					</svg>
				</span>
				<span class="nav-link-text">Home</span>
			</div>
		</a>
		{#if !stateCollapsed || $storeSidebarCollapsed}
			<div transition:slide class="parent-wrapper label-1">
				<ul class="nav collapse parent show" data-bs-parent="#navbarVerticalCollapse" id="home">
					<li class="collapsed-nav-item-title d-none">Home</li>
					<li class="nav-item">
						<!-- svelte-ignore a11y-invalid-attribute -->
						<a
							class="nav-link active"
							href="javascript:void(0);"
							data-bs-toggle=""
							aria-expanded="false"
						>
							<div class="d-flex align-items-center">
								<span class="nav-link-text">E commerce</span>
							</div>
						</a><!-- more inner pages-->
					</li>
					<li class="nav-item">
						<!-- svelte-ignore a11y-invalid-attribute -->
						<a class="nav-link" href="javascript:void(0);" data-bs-toggle="" aria-expanded="false">
							<div class="d-flex align-items-center">
								<span class="nav-link-text">Project management</span>
							</div>
						</a><!-- more inner pages-->
					</li>
					<li class="nav-item">
						<!-- svelte-ignore a11y-invalid-attribute -->
						<a class="nav-link" href="javascript:void(0);" data-bs-toggle="" aria-expanded="false">
							<div class="d-flex align-items-center">
								<span class="nav-link-text">CRM</span><span
									class="badge ms-2 badge badge-phoenix badge-phoenix-info">New</span
								>
							</div>
						</a><!-- more inner pages-->
					</li>
					<li class="nav-item">
						<!-- svelte-ignore a11y-invalid-attribute -->
						<a class="nav-link" href="javascript:void(0);" data-bs-toggle="" aria-expanded="false">
							<div class="d-flex align-items-center">
								<span class="nav-link-text">Social feed</span>
							</div>
						</a><!-- more inner pages-->
					</li>
				</ul>
			</div>
		{/if}
	</div>
</li>
<!-- parent pages-->
