<script lang="ts">
	// IMAGES
	import imageBehance from './folderImages/imageBehance.webp';
	import imageBitbucket from './folderImages/imageBitbucket.webp';
	import imageFigma from './folderImages/imageFigma.webp';
	import imageGitlab from './folderImages/imageGitlab.webp';
	import imageGoogleCloud from './folderImages/imageGoogleCloud.webp';
	import imageGoogleDrive from './folderImages/imageGoogleDrive.webp';
	import imageGoogleMaps from './folderImages/imageGoogleMaps.webp';
	import imageGooglePhotos from './folderImages/imageGooglePhotos.webp';
	import imageLn from './folderImages/imageLn.webp';
	import imagePinterest from './folderImages/imagePinterest.webp';
	import imageSlack from './folderImages/imageSlack.webp';
	import imageSpotify from './folderImages/imageSpotify.webp';
	import imageTrello from './folderImages/imageTrello.webp';
	import imageTwitter from './folderImages/imageTwitter.webp';
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
		<svg width="8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
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
						<div class="col-4">
							<!-- svelte-ignore a11y-invalid-attribute -->
							<a
								class="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
								href="javascript:void(0);"
							>
								<img src={imageBehance} alt="" width="30" />
								<p class="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Behance</p>
							</a>
						</div>
						<div class="col-4">
							<!-- svelte-ignore a11y-invalid-attribute -->
							<a
								class="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
								href="javascript:void(0);"
							>
								<img src={imageGoogleCloud} alt="" width="30" />
								<p class="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Cloud</p>
							</a>
						</div>
						<div class="col-4">
							<!-- svelte-ignore a11y-invalid-attribute -->
							<a
								class="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
								href="javascript:void(0);"
							>
								<img src={imageSlack} alt="" width="30" />
								<p class="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Slack</p>
							</a>
						</div>
						<div class="col-4">
							<!-- svelte-ignore a11y-invalid-attribute -->
							<a
								class="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
								href="javascript:void(0);"
							>
								<img src={imageGitlab} alt="" width="30" />
								<p class="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Gitlab</p>
							</a>
						</div>
						<div class="col-4">
							<!-- svelte-ignore a11y-invalid-attribute -->
							<a
								class="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
								href="javascript:void(0);"
							>
								<img src={imageBitbucket} alt="" width="30" />
								<p class="mb-0 text-black text-truncate fs--2 mt-1 pt-1">BitBucket</p>
							</a>
						</div>
						<div class="col-4">
							<!-- svelte-ignore a11y-invalid-attribute -->
							<a
								class="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
								href="javascript:void(0);"
							>
								<img src={imageGoogleDrive} alt="" width="30" />
								<p class="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Drive</p>
							</a>
						</div>
						<div class="col-4">
							<!-- svelte-ignore a11y-invalid-attribute -->
							<a
								class="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
								href="javascript:void(0);"
							>
								<img src={imageTrello} alt="" width="30" />
								<p class="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Trello</p>
							</a>
						</div>
						<div class="col-4">
							<!-- svelte-ignore a11y-invalid-attribute -->
							<a
								class="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
								href="javascript:void(0);"
							>
								<img src={imageFigma} alt="" width="20" />
								<p class="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Figma</p>
							</a>
						</div>
						<div class="col-4">
							<!-- svelte-ignore a11y-invalid-attribute -->
							<a
								class="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
								href="javascript:void(0);"
							>
								<img src={imageTwitter} alt="" width="30" />
								<p class="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Twitter</p>
							</a>
						</div>
						<div class="col-4">
							<!-- svelte-ignore a11y-invalid-attribute -->
							<a
								class="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
								href="javascript:void(0);"
							>
								<img src={imagePinterest} alt="" width="30" />
								<p class="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Pinterest</p>
							</a>
						</div>
						<div class="col-4">
							<!-- svelte-ignore a11y-invalid-attribute -->
							<a
								class="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
								href="javascript:void(0);"
							>
								<img src={imageLn} alt="" width="30" />
								<p class="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Linkedin</p>
							</a>
						</div>
						<div class="col-4">
							<!-- svelte-ignore a11y-invalid-attribute -->
							<a
								class="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
								href="javascript:void(0);"
							>
								<img src={imageGoogleMaps} alt="" width="30" />
								<p class="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Maps</p>
							</a>
						</div>
						<div class="col-4">
							<!-- svelte-ignore a11y-invalid-attribute -->
							<a
								class="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
								href="javascript:void(0);"
							>
								<img src={imageGooglePhotos} alt="" width="30" />
								<p class="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Photos</p>
							</a>
						</div>
						<div class="col-4">
							<!-- svelte-ignore a11y-invalid-attribute -->
							<a
								class="d-block hover-bg-200 p-2 rounded-3 text-center text-decoration-none mb-3"
								href="javascript:void(0);"
							>
								<img src={imageSpotify} alt="" width="30" />
								<p class="mb-0 text-black text-truncate fs--2 mt-1 pt-1">Spotify</p>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}
</li>
