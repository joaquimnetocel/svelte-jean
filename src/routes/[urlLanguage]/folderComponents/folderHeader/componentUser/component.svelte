<script lang="ts">
	// IMAGES
	import image57 from './folderImages/image57.webp';
	import image571 from './folderImages/image571.webp';
	/////
	// MODULES
	import { functionClickOutside } from '../functionClickOutside.js';
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
			<img class="rounded-circle" src={image57} alt="PROFILE" />
			<svg
				fill="var(--phoenix-body-color)"
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
							<img class="rounded-circle" src={image571} alt="" />
						</div>
						<h6 class="mt-2 text-black">Jerry Seinfield</h6>
					</div>
					<div class="mb-3 mx-3">
						<input
							class="form-control form-control-sm"
							id="statusUpdateInput"
							type="text"
							placeholder="Update your status"
						/>
					</div>
				</div>
				<div class="overflow-auto scrollbar" style="height: 10rem">
					<ul class="nav d-flex flex-column mb-2 pb-1">
						<li class="nav-item">
							<a
								class="nav-link px-3"
								href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#!"
							>
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
									class="feather feather-user me-2 text-900"
								>
									<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
									<circle cx="12" cy="7" r="4" /></svg
								><span>Profile</span></a
							>
						</li>
						<li class="nav-item">
							<a
								class="nav-link px-3"
								href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#!"
								><svg
									xmlns="http://www.w3.org/2000/svg"
									width="16px"
									height="16px"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="feather feather-pie-chart me-2 text-900"
								>
									<path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
									<path d="M22 12A10 10 0 0 0 12 2v10z" /></svg
								>Dashboard</a
							>
						</li>
						<li class="nav-item">
							<a
								class="nav-link px-3"
								href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#!"
							>
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
									class="feather feather-lock me-2 text-900"
								>
									<rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
									<path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg
								>Posts &amp; Activity</a
							>
						</li>
						<li class="nav-item">
							<a
								class="nav-link px-3"
								href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#!"
							>
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
									class="feather feather-settings me-2 text-900"
								>
									<circle cx="12" cy="12" r="3" />
									<path
										d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
									/></svg
								>Settings &amp; Privacy
							</a>
						</li>
						<li class="nav-item">
							<a
								class="nav-link px-3"
								href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#!"
							>
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
									class="feather feather-help-circle me-2 text-900"
								>
									<circle cx="12" cy="12" r="10" />
									<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
									<line x1="12" y1="17" x2="12.01" y2="17" /></svg
								>Help Center</a
							>
						</li>
						<li class="nav-item">
							<a
								class="nav-link px-3"
								href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#!"
							>
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
									class="feather feather-globe me-2 text-900"
								>
									<circle cx="12" cy="12" r="10" />
									<line x1="2" y1="12" x2="22" y2="12" />
									<path
										d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
									/></svg
								>Language</a
							>
						</li>
					</ul>
				</div>
				<div class="card-footer p-0 border-top">
					<ul class="nav d-flex flex-column my-3">
						<li class="nav-item">
							<a
								class="nav-link px-3"
								href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#!"
							>
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
									class="feather feather-user-plus me-2 text-900"
								>
									<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
									<circle cx="8.5" cy="7" r="4" />
									<line x1="20" y1="8" x2="20" y2="14" />
									<line x1="23" y1="11" x2="17" y2="11" /></svg
								>Add another account</a
							>
						</li>
					</ul>
					<hr />
					<div class="px-3">
						<a
							class="btn btn-phoenix-secondary d-flex flex-center w-100"
							href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#!"
						>
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
								<line x1="21" y1="12" x2="9" y2="12" /></svg
							>Sign out</a
						>
					</div>
					<div class="my-2 text-center fw-bold fs--2 text-600">
						<a
							class="text-600 me-1"
							href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#!"
							>Privacy policy</a
						>•<a
							class="text-600 mx-1"
							href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#!"
							>Terms</a
						>•<a
							class="text-600 ms-1"
							href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#!"
							>Cookies</a
						>
					</div>
				</div>
			</div>
		</div>
	{/if}
</li>

<style>
	.classAvatar {
		position: relative;
		display: inline-block;
		vertical-align: middle;
	}
	.classAvatar-l {
		height: 2.5rem;
		/* width: 2.5rem; */
	}
</style>
