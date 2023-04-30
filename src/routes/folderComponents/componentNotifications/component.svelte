<script lang="ts">
	// IMAGES
	import image30 from './folderImages/image30.webp';
	import image57 from './folderImages/image57.webp';
	import image58 from './folderImages/image58.webp';
	import image59 from './folderImages/image59.webp';
	import imageAvatar from './folderImages/imageAvatar.webp';
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
		on:click={functionClick}
		use:functionClickOutside={() => (stateCollapsed = true)}
		class:show={!stateCollapsed}
		class="nav-link"
		href="#"
		role="button"
		data-bs-toggle="dropdown"
		aria-haspopup="true"
		aria-expanded={!stateCollapsed}
		data-bs-auto-close="outside"
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
			class="feather feather-bell"
			style="height: 20px; width: 20px"
		>
			<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
			<path d="M13.73 21a2 2 0 0 1-3.46 0" />
		</svg>
		<svg width="8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
			><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
				d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
			/>
		</svg>
	</a>
	{#if !stateCollapsed}
		<div
			transition:slide
			class="show dropdown-menu dropdown-menu-end notification-dropdown-menu py-0 shadow border border-300 navbar-dropdown-caret"
			id="navbarDropdownNotfication"
			aria-labelledby="navbarDropdownNotfication"
			data-bs-popper="static"
		>
			<div class="card position-relative border-0">
				<div class="card-header p-2">
					<div class="d-flex justify-content-between">
						<h5 class="text-black mb-0">Notificatons</h5>
						<button class="btn btn-link p-0 fs--1 fw-normal" type="button">Mark all as read</button>
					</div>
				</div>
				<div class="card-body p-0">
					<div class="scrollbar-overlay" style="height: 27rem" data-simplebar="init">
						<div class="simplebar-wrapper" style="margin: 0px">
							<div class="simplebar-height-auto-observer-wrapper">
								<div class="simplebar-height-auto-observer" />
							</div>
							<div class="simplebar-mask">
								<div class="simplebar-offset" style="right: 0px; bottom: 0px">
									<div
										class="simplebar-content-wrapper"
										tabindex="-1"
										role="region"
										aria-label="scrollable content"
										style="height: auto; overflow: hidden"
									>
										<div class="simplebar-content" style="padding: 0px">
											<div class="border-300">
												<div
													class="px-2 px-sm-3 py-3 border-300 notification-card position-relative read border-bottom"
												>
													<div
														class="d-flex align-items-center justify-content-between position-relative"
													>
														<div class="d-flex">
															<div class="avatar avatar-m status-online me-3">
																<img class="rounded-circle" src={image30} alt="" />
															</div>
															<div class="flex-1 me-sm-3">
																<h4 class="fs--1 text-black">Jessie Samson</h4>
																<p class="fs--1 text-1000 mb-2 mb-sm-3 fw-normal">
																	<span class="me-1 fs--2">💬</span>Mentioned you in a comment.<span
																		class="ms-2 text-400 fw-bold fs--2">10m</span
																	>
																</p>
																<p class="text-800 fs--1 mb-0">
																	<svg
																		class="svg-inline--fa fa-clock me-1"
																		aria-hidden="true"
																		focusable="false"
																		data-prefix="fas"
																		data-icon="clock"
																		role="img"
																		xmlns="http://www.w3.org/2000/svg"
																		viewBox="0 0 512 512"
																		data-fa-i2svg=""
																		><path
																			fill="currentColor"
																			d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"
																		/></svg
																	><!-- <span class="me-1 fas fa-clock"></span> Font Awesome fontawesome.com --><span
																		class="fw-bold"
																		>10:41 AM
																	</span>August 7,2021
																</p>
															</div>
														</div>
														<div class="font-sans-serif d-none d-sm-block">
															<button
																class="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
																type="button"
																data-stop-propagation="data-stop-propagation"
																data-bs-toggle="dropdown"
																data-boundary="window"
																aria-haspopup="true"
																aria-expanded="false"
																data-bs-reference="parent"
															>
																<svg
																	class="svg-inline--fa fa-ellipsis fs--2 text-900"
																	aria-hidden="true"
																	focusable="false"
																	data-prefix="fas"
																	data-icon="ellipsis"
																	role="img"
																	xmlns="http://www.w3.org/2000/svg"
																	viewBox="0 0 448 512"
																	data-fa-i2svg=""
																	><path
																		fill="currentColor"
																		d="M120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200C94.93 200 120 225.1 120 256zM280 256C280 286.9 254.9 312 224 312C193.1 312 168 286.9 168 256C168 225.1 193.1 200 224 200C254.9 200 280 225.1 280 256zM328 256C328 225.1 353.1 200 384 200C414.9 200 440 225.1 440 256C440 286.9 414.9 312 384 312C353.1 312 328 286.9 328 256z"
																	/></svg
																><!-- <span class="fas fa-ellipsis-h fs--2 text-900"></span> Font Awesome fontawesome.com -->
															</button>
															<div class="dropdown-menu dropdown-menu-end py-2">
																<!-- svelte-ignore a11y-invalid-attribute -->
																<a class="dropdown-item" href="#">Mark as unread</a>
															</div>
														</div>
													</div>
												</div>
												<div
													class="px-2 px-sm-3 py-3 border-300 notification-card position-relative unread border-bottom"
												>
													<div
														class="d-flex align-items-center justify-content-between position-relative"
													>
														<div class="d-flex">
															<div class="avatar avatar-m status-online me-3">
																<div class="avatar-name rounded-circle">
																	<span>J</span>
																</div>
															</div>
															<div class="flex-1 me-sm-3">
																<h4 class="fs--1 text-black">Jane Foster</h4>
																<p class="fs--1 text-1000 mb-2 mb-sm-3 fw-normal">
																	<span class="me-1 fs--2">📅</span>Created an event.<span
																		class="ms-2 text-400 fw-bold fs--2">20m</span
																	>
																</p>
																<p class="text-800 fs--1 mb-0">
																	<svg
																		class="svg-inline--fa fa-clock me-1"
																		aria-hidden="true"
																		focusable="false"
																		data-prefix="fas"
																		data-icon="clock"
																		role="img"
																		xmlns="http://www.w3.org/2000/svg"
																		viewBox="0 0 512 512"
																		data-fa-i2svg=""
																		><path
																			fill="currentColor"
																			d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"
																		/></svg
																	><!-- <span class="me-1 fas fa-clock"></span> Font Awesome fontawesome.com --><span
																		class="fw-bold"
																		>10:20 AM
																	</span>August 7,2021
																</p>
															</div>
														</div>
														<div class="font-sans-serif d-none d-sm-block">
															<button
																class="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
																type="button"
																data-stop-propagation="data-stop-propagation"
																data-bs-toggle="dropdown"
																data-boundary="window"
																aria-haspopup="true"
																aria-expanded="false"
																data-bs-reference="parent"
															>
																<svg
																	class="svg-inline--fa fa-ellipsis fs--2 text-900"
																	aria-hidden="true"
																	focusable="false"
																	data-prefix="fas"
																	data-icon="ellipsis"
																	role="img"
																	xmlns="http://www.w3.org/2000/svg"
																	viewBox="0 0 448 512"
																	data-fa-i2svg=""
																	><path
																		fill="currentColor"
																		d="M120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200C94.93 200 120 225.1 120 256zM280 256C280 286.9 254.9 312 224 312C193.1 312 168 286.9 168 256C168 225.1 193.1 200 224 200C254.9 200 280 225.1 280 256zM328 256C328 225.1 353.1 200 384 200C414.9 200 440 225.1 440 256C440 286.9 414.9 312 384 312C353.1 312 328 286.9 328 256z"
																	/></svg
																><!-- <span class="fas fa-ellipsis-h fs--2 text-900"></span> Font Awesome fontawesome.com -->
															</button>
															<div class="dropdown-menu dropdown-menu-end py-2">
																<!-- svelte-ignore a11y-invalid-attribute -->
																<a class="dropdown-item" href="#">Mark as unread</a>
															</div>
														</div>
													</div>
												</div>
												<div
													class="px-2 px-sm-3 py-3 border-300 notification-card position-relative unread border-bottom"
												>
													<div
														class="d-flex align-items-center justify-content-between position-relative"
													>
														<div class="d-flex">
															<div class="avatar avatar-m status-online me-3">
																<img
																	class="rounded-circle avatar-placeholder"
																	src={imageAvatar}
																	alt=""
																/>
															</div>
															<div class="flex-1 me-sm-3">
																<h4 class="fs--1 text-black">Jessie Samson</h4>
																<p class="fs--1 text-1000 mb-2 mb-sm-3 fw-normal">
																	<span class="me-1 fs--2">👍</span>Liked your comment.<span
																		class="ms-2 text-400 fw-bold fs--2">1h</span
																	>
																</p>
																<p class="text-800 fs--1 mb-0">
																	<svg
																		class="svg-inline--fa fa-clock me-1"
																		aria-hidden="true"
																		focusable="false"
																		data-prefix="fas"
																		data-icon="clock"
																		role="img"
																		xmlns="http://www.w3.org/2000/svg"
																		viewBox="0 0 512 512"
																		data-fa-i2svg=""
																		><path
																			fill="currentColor"
																			d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"
																		/></svg
																	><!-- <span class="me-1 fas fa-clock"></span> Font Awesome fontawesome.com --><span
																		class="fw-bold"
																		>9:30 AM
																	</span>August 7,2021
																</p>
															</div>
														</div>
														<div class="font-sans-serif d-none d-sm-block">
															<button
																class="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
																type="button"
																data-stop-propagation="data-stop-propagation"
																data-bs-toggle="dropdown"
																data-boundary="window"
																aria-haspopup="true"
																aria-expanded="false"
																data-bs-reference="parent"
															>
																<svg
																	class="svg-inline--fa fa-ellipsis fs--2 text-900"
																	aria-hidden="true"
																	focusable="false"
																	data-prefix="fas"
																	data-icon="ellipsis"
																	role="img"
																	xmlns="http://www.w3.org/2000/svg"
																	viewBox="0 0 448 512"
																	data-fa-i2svg=""
																	><path
																		fill="currentColor"
																		d="M120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200C94.93 200 120 225.1 120 256zM280 256C280 286.9 254.9 312 224 312C193.1 312 168 286.9 168 256C168 225.1 193.1 200 224 200C254.9 200 280 225.1 280 256zM328 256C328 225.1 353.1 200 384 200C414.9 200 440 225.1 440 256C440 286.9 414.9 312 384 312C353.1 312 328 286.9 328 256z"
																	/></svg
																><!-- <span class="fas fa-ellipsis-h fs--2 text-900"></span> Font Awesome fontawesome.com -->
															</button>
															<div class="dropdown-menu dropdown-menu-end py-2">
																<!-- svelte-ignore a11y-invalid-attribute -->
																<a class="dropdown-item" href="#">Mark as unread</a>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div class="border-300">
												<div
													class="px-2 px-sm-3 py-3 border-300 notification-card position-relative unread border-bottom"
												>
													<div
														class="d-flex align-items-center justify-content-between position-relative"
													>
														<div class="d-flex">
															<div class="avatar avatar-m status-online me-3">
																<img class="rounded-circle" src={image57} alt="" />
															</div>
															<div class="flex-1 me-sm-3">
																<h4 class="fs--1 text-black">Kiera Anderson</h4>
																<p class="fs--1 text-1000 mb-2 mb-sm-3 fw-normal">
																	<span class="me-1 fs--2">💬</span>Mentioned you in a comment.<span
																		class="ms-2 text-400 fw-bold fs--2"
																	/>
																</p>
																<p class="text-800 fs--1 mb-0">
																	<svg
																		class="svg-inline--fa fa-clock me-1"
																		aria-hidden="true"
																		focusable="false"
																		data-prefix="fas"
																		data-icon="clock"
																		role="img"
																		xmlns="http://www.w3.org/2000/svg"
																		viewBox="0 0 512 512"
																		data-fa-i2svg=""
																		><path
																			fill="currentColor"
																			d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"
																		/></svg
																	><!-- <span class="me-1 fas fa-clock"></span> Font Awesome fontawesome.com --><span
																		class="fw-bold"
																		>9:11 AM
																	</span>August 7,2021
																</p>
															</div>
														</div>
														<div class="font-sans-serif d-none d-sm-block">
															<button
																class="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
																type="button"
																data-stop-propagation="data-stop-propagation"
																data-bs-toggle="dropdown"
																data-boundary="window"
																aria-haspopup="true"
																aria-expanded="false"
																data-bs-reference="parent"
															>
																<svg
																	class="svg-inline--fa fa-ellipsis fs--2 text-900"
																	aria-hidden="true"
																	focusable="false"
																	data-prefix="fas"
																	data-icon="ellipsis"
																	role="img"
																	xmlns="http://www.w3.org/2000/svg"
																	viewBox="0 0 448 512"
																	data-fa-i2svg=""
																	><path
																		fill="currentColor"
																		d="M120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200C94.93 200 120 225.1 120 256zM280 256C280 286.9 254.9 312 224 312C193.1 312 168 286.9 168 256C168 225.1 193.1 200 224 200C254.9 200 280 225.1 280 256zM328 256C328 225.1 353.1 200 384 200C414.9 200 440 225.1 440 256C440 286.9 414.9 312 384 312C353.1 312 328 286.9 328 256z"
																	/></svg
																><!-- <span class="fas fa-ellipsis-h fs--2 text-900"></span> Font Awesome fontawesome.com -->
															</button>
															<div class="dropdown-menu dropdown-menu-end py-2">
																<!-- svelte-ignore a11y-invalid-attribute -->
																<a class="dropdown-item" href="#">Mark as unread</a>
															</div>
														</div>
													</div>
												</div>
												<div
													class="px-2 px-sm-3 py-3 border-300 notification-card position-relative unread border-bottom"
												>
													<div
														class="d-flex align-items-center justify-content-between position-relative"
													>
														<div class="d-flex">
															<div class="avatar avatar-m status-online me-3">
																<img class="rounded-circle" src={image59} alt="" />
															</div>
															<div class="flex-1 me-sm-3">
																<h4 class="fs--1 text-black">Herman Carter</h4>
																<p class="fs--1 text-1000 mb-2 mb-sm-3 fw-normal">
																	<span class="me-1 fs--2">👤</span>Tagged you in a comment.<span
																		class="ms-2 text-400 fw-bold fs--2"
																	/>
																</p>
																<p class="text-800 fs--1 mb-0">
																	<svg
																		class="svg-inline--fa fa-clock me-1"
																		aria-hidden="true"
																		focusable="false"
																		data-prefix="fas"
																		data-icon="clock"
																		role="img"
																		xmlns="http://www.w3.org/2000/svg"
																		viewBox="0 0 512 512"
																		data-fa-i2svg=""
																		><path
																			fill="currentColor"
																			d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"
																		/></svg
																	><!-- <span class="me-1 fas fa-clock"></span> Font Awesome fontawesome.com --><span
																		class="fw-bold"
																		>10:58 PM
																	</span>August 7,2021
																</p>
															</div>
														</div>
														<div class="font-sans-serif d-none d-sm-block">
															<button
																class="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
																type="button"
																data-stop-propagation="data-stop-propagation"
																data-bs-toggle="dropdown"
																data-boundary="window"
																aria-haspopup="true"
																aria-expanded="false"
																data-bs-reference="parent"
															>
																<svg
																	class="svg-inline--fa fa-ellipsis fs--2 text-900"
																	aria-hidden="true"
																	focusable="false"
																	data-prefix="fas"
																	data-icon="ellipsis"
																	role="img"
																	xmlns="http://www.w3.org/2000/svg"
																	viewBox="0 0 448 512"
																	data-fa-i2svg=""
																	><path
																		fill="currentColor"
																		d="M120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200C94.93 200 120 225.1 120 256zM280 256C280 286.9 254.9 312 224 312C193.1 312 168 286.9 168 256C168 225.1 193.1 200 224 200C254.9 200 280 225.1 280 256zM328 256C328 225.1 353.1 200 384 200C414.9 200 440 225.1 440 256C440 286.9 414.9 312 384 312C353.1 312 328 286.9 328 256z"
																	/></svg
																><!-- <span class="fas fa-ellipsis-h fs--2 text-900"></span> Font Awesome fontawesome.com -->
															</button>
															<div class="dropdown-menu dropdown-menu-end py-2">
																<!-- svelte-ignore a11y-invalid-attribute -->
																<a class="dropdown-item" href="#">Mark as unread</a>
															</div>
														</div>
													</div>
												</div>
												<div
													class="px-2 px-sm-3 py-3 border-300 notification-card position-relative read"
												>
													<div
														class="d-flex align-items-center justify-content-between position-relative"
													>
														<div class="d-flex">
															<div class="avatar avatar-m status-online me-3">
																<img class="rounded-circle" src={image58} alt="" />
															</div>
															<div class="flex-1 me-sm-3">
																<h4 class="fs--1 text-black">Benjamin Button</h4>
																<p class="fs--1 text-1000 mb-2 mb-sm-3 fw-normal">
																	<span class="me-1 fs--2">👍</span>Liked your comment.<span
																		class="ms-2 text-400 fw-bold fs--2"
																	/>
																</p>
																<p class="text-800 fs--1 mb-0">
																	<svg
																		class="svg-inline--fa fa-clock me-1"
																		aria-hidden="true"
																		focusable="false"
																		data-prefix="fas"
																		data-icon="clock"
																		role="img"
																		xmlns="http://www.w3.org/2000/svg"
																		viewBox="0 0 512 512"
																		data-fa-i2svg=""
																		><path
																			fill="currentColor"
																			d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"
																		/></svg
																	><!-- <span class="me-1 fas fa-clock"></span> Font Awesome fontawesome.com --><span
																		class="fw-bold"
																		>10:18 AM
																	</span>August 7,2021
																</p>
															</div>
														</div>
														<div class="font-sans-serif d-none d-sm-block">
															<button
																class="btn fs--2 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
																type="button"
																data-stop-propagation="data-stop-propagation"
																data-bs-toggle="dropdown"
																data-boundary="window"
																aria-haspopup="true"
																aria-expanded="false"
																data-bs-reference="parent"
															>
																<svg
																	class="svg-inline--fa fa-ellipsis fs--2 text-900"
																	aria-hidden="true"
																	focusable="false"
																	data-prefix="fas"
																	data-icon="ellipsis"
																	role="img"
																	xmlns="http://www.w3.org/2000/svg"
																	viewBox="0 0 448 512"
																	data-fa-i2svg=""
																	><path
																		fill="currentColor"
																		d="M120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200C94.93 200 120 225.1 120 256zM280 256C280 286.9 254.9 312 224 312C193.1 312 168 286.9 168 256C168 225.1 193.1 200 224 200C254.9 200 280 225.1 280 256zM328 256C328 225.1 353.1 200 384 200C414.9 200 440 225.1 440 256C440 286.9 414.9 312 384 312C353.1 312 328 286.9 328 256z"
																	/></svg
																><!-- <span class="fas fa-ellipsis-h fs--2 text-900"></span> Font Awesome fontawesome.com -->
															</button>
															<div class="dropdown-menu dropdown-menu-end py-2">
																<!-- svelte-ignore a11y-invalid-attribute -->
																<a class="dropdown-item" href="#">Mark as unread</a>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="simplebar-placeholder" style="width: 0px; height: 0px" />
						</div>
						<div class="simplebar-track simplebar-horizontal" style="visibility: hidden">
							<div class="simplebar-scrollbar" style="width: 0px; display: none" />
						</div>
						<div class="simplebar-track simplebar-vertical" style="visibility: hidden">
							<div class="simplebar-scrollbar" style="height: 0px; display: none" />
						</div>
					</div>
				</div>
				<div class="card-footer p-0 border-top border-0">
					<div class="my-2 text-center fw-bold fs--2 text-600">
						<!-- svelte-ignore a11y-invalid-attribute -->
						<a class="fw-bolder" href="#">Notification history</a>
					</div>
				</div>
			</div>
		</div>
	{/if}
</li>
