<script lang="ts">
	// MODULES:
	import { functionClickOutside } from '../functionClickOutside.js';
	import type { typeNotificationsArray } from './typeNotificationsArray.js';
	// NPM MODULES:
	import { slide } from 'svelte/transition';
	// IMAGES:
	import imageUserWithoutPicture from './imageUserWithoutPicture.webp';

	// PROPS:
	export let propNotifications: typeNotificationsArray = [];
	export let propTitle = 'NOTIFICATIONS';
	// STATES:
	let stateCollapsed = true;
	// FUNCTIONS:
	const functionClick = function () {
		stateCollapsed = !stateCollapsed;
	};
</script>

<li class="nav-item dropdown">
	<!-- svelte-ignore a11y-invalid-attribute -->
	<a
		on:click={functionClick}
		use:functionClickOutside={() => (stateCollapsed = true)}
		class:show={!stateCollapsed}
		class="nav-link"
		href="javascript:void(0);"
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
		<svg
			fill="var(--phoenix-body-color)"
			width="8"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 320 512"
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
					<div class="d-flex justify-content-between align-content-center">
						<span class="text-black fw-bold">{propTitle}</span>
						<slot name="slotTitleLink">
							<button class="btn btn-link p-0 fs--1 fw-normal" type="button">
								MARK ALL AS READ
							</button>
						</slot>
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
												{#each propNotifications as currentNotification}
													<div
														class:read={currentNotification.booleanRead}
														class:unread={!currentNotification.booleanRead}
														class="px-2 px-sm-3 py-3 border-300 notification-card position-relative border-bottom"
													>
														<div
															class="d-flex align-items-center justify-content-between position-relative"
														>
															<div class="d-flex">
																{#if currentNotification.stringImage === undefined}
																	<div
																		class:status-on-line={currentNotification.booleanOnline}
																		class="avatar avatar-m me-3"
																	>
																		<img
																			class="rounded-circle avatar-placeholder"
																			src={imageUserWithoutPicture}
																			alt=""
																		/>
																	</div>
																{:else}
																	<div
																		class:status-online={currentNotification.booleanOnline}
																		class="avatar avatar-m me-3"
																	>
																		{#if currentNotification.stringImage.length === 1}
																			<div class="avatar-name rounded-circle">
																				<span>{currentNotification.stringImage}</span>
																			</div>
																		{:else}
																			<img
																				class="rounded-circle"
																				src={currentNotification.stringImage}
																				alt=""
																			/>
																		{/if}
																	</div>
																{/if}
																<div class="flex-1 me-sm-3">
																	{#if currentNotification.stringTitle !== undefined}
																		<h4 class="fs--1 text-black">
																			{currentNotification.stringTitle}
																		</h4>
																	{/if}
																	{#if currentNotification.stringText !== undefined}
																		<p class="fs--1 text-1000 mb-2 mb-sm-3 fw-normal">
																			{#if currentNotification.stringIcon !== undefined}
																				<span class="me-1 fs--2">
																					{currentNotification.stringIcon}
																				</span>
																			{/if}
																			{currentNotification.stringText}
																			{#if currentNotification.stringSecondaryText !== undefined}
																				<span class="ms-2 text-400 fw-bold fs--2">
																					{currentNotification.stringSecondaryText}
																				</span>
																			{/if}
																		</p>
																	{/if}
																	{#if currentNotification.stringDate !== undefined}
																		<p class="text-800 fs--1 mb-0">
																			<!-- <span class="me-1 fas fa-clock"></span> Font Awesome fontawesome.com -->
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
																			>
																				<path
																					fill="currentColor"
																					d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"
																				/>
																			</svg>
																			<!-- eslint-disable svelte/no-at-html-tags -->
																			{@html currentNotification.stringDate}
																		</p>
																	{/if}
																</div>
															</div>
															<!-- <div class="font-sans-serif d-none d-sm-block">
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
																>
															</button>
															<div class="dropdown-menu dropdown-menu-end py-2">
																<a class="dropdown-item" href="#">Mark as unread</a>
															</div>
														</div> -->
														</div>
													</div>
												{/each}
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
					<slot name="slotFooter">
						<div class="my-2 text-center fw-bold fs--2 text-600">
							<!-- svelte-ignore a11y-invalid-attribute -->
							<a class="fw-bolder" href="javascript:void(0);">Notification history</a>
						</div>
					</slot>
				</div>
			</div>
		</div>
	{/if}
</li>

<style>
	.notification-card.unread {
		background-color: var(--phoenix-gray-100);
	}
	:global(.dark) .notification-card.unread {
		background-color: var(--phoenix-white);
	}
	.notification-card:hover {
		background-color: var(--phoenix-gray-200) !important;
	}
	.fs--1 {
		font-size: 0.8rem !important;
	}
	.flex-1 {
		-webkit-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
	}
	.simplebar-scrollbar::before {
		background: var(--phoenix-scrollbar-bg);
	}
	.simplebar-content-wrapper::-webkit-scrollbar {
		display: none;
		width: 0;
		height: 0;
	}
	.simplebar-track.simplebar-vertical {
		width: 10px;
	}
	.scrollbar-overlay:hover::-webkit-scrollbar,
	.scrollbar-overlay:hover::-webkit-scrollbar-thumb,
	.scrollbar-overlay:focus::-webkit-scrollbar,
	.scrollbar-overlay:focus::-webkit-scrollbar-thumb {
		visibility: visible;
	}
	.scrollbar-overlay {
		overflow: auto;
	}
	.scrollbar-overlay::-webkit-scrollbar {
		visibility: hidden;
		-webkit-appearance: none;
		width: 6px;
		height: 6px;
		background-color: rgba(0, 0, 0, 0);
	}
	.scrollbar-overlay::-webkit-scrollbar-thumb {
		visibility: hidden;
		border-radius: 3px;
		background-color: var(--phoenix-scrollbar-bg);
	}
	.avatar {
		position: relative;
		display: inline-block;
		vertical-align: middle;
	}
	.avatar-name {
		font-size: 1.5789473684rem;
		line-height: 1.2;
	}
	.avatar-m {
		height: 2rem;
		width: 2rem;
	}
	.status-online:before {
		background-color: var(--phoenix-success);
	}
	.avatar .avatar-name {
		width: 100%;
		height: 100%;
		position: absolute;
		text-align: center;
		color: var(--phoenix-avatar-name-color);
		background-color: var(--phoenix-primary-100);
		font-weight: bold;
		text-transform: uppercase;
		display: block;
	}

	.avatar img {
		width: 100%;
		height: 100%;
		-o-object-fit: cover;
		object-fit: cover;
		display: block;
	}
	.avatar-name > span {
		position: absolute;
		top: 53%;
		left: 50%;
		-webkit-transform: translate3d(-50%, -50%, 0);
		transform: translate3d(-50%, -50%, 0);
		font-weight: 900 !important;
	}
	.avatar .avatar-placeholder {
		background: var(--phoenix-gray-200);
	}
</style>
