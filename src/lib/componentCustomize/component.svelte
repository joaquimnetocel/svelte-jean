<script lang="ts">
	// IMAGES
	import imageDark from './folderImages/imageDark.png';
	import imageLight from './folderImages/imageLight.png';
	import imageNavbarTopStyleLight from './folderImages/imageNavbarTopStyleLight.png';
	import imageTop from './folderImages/imageTop.png';
	import imageTopStyleDarker from './folderImages/imageTopStyleDarker.png';
	import imageTopStyleLighter from './folderImages/imageTopStyleLighter.png';
	import imageVerticalDarker from './folderImages/imageVerticalDarker.png';
	import imageVerticalLighter from './folderImages/imageVerticalLighter.png';
	/////
	// MODULES
	import { functionReadColorSchemeStore } from '../stores/storeColorScheme.js';
	import { functionReadHeaderColorStore } from '../stores/storeHeaderColor.js';
	import { functionReadRightBottomStore } from '../stores/storeRightBottom.js';
	import { functionReadSidebarStore } from '../stores/storeSidebar.js';
	import { functionReadSidebarColorStore } from '../stores/storeSidebarColor.js';
	import type { typeInitialProps } from '../typeInitialProps.js';
	/////
	// NPM MODULES
	import { getContext } from 'svelte';
	/////

	// CONSTANTS
	const objectInitialProps = getContext<typeInitialProps>('contextInitialProps');
	/////
	// PROPS
	export let propAnimationDuration: `${number}ms` | `${number}s` = '3s';
	/////
	// STORES
	const storeColorScheme = functionReadColorSchemeStore();
	const storeSidebarColor = functionReadSidebarColorStore();
	const storeHeaderColor = functionReadHeaderColorStore();
	const storeSidebar = functionReadSidebarStore();
	const storeRightBottom = functionReadRightBottomStore();
	/////
	// STATES
	let stateCollapsed = true;
	/////
	// FUNCTIONS
	const functionReset = function () {
		$storeColorScheme = objectInitialProps.propColorScheme;
		$storeHeaderColor = objectInitialProps.propHeaderColor;
		$storeSidebarColor = objectInitialProps.propSidebarColor;
		$storeSidebar = objectInitialProps.propSidebar;
	};
	/////
</script>

<div
	class:show={!stateCollapsed}
	aria-modal={!stateCollapsed}
	role={stateCollapsed ? '' : 'dialog'}
	class="offcanvas offcanvas-end settings-panel border-0"
	id="settings-offcanvas"
	tabindex="-1"
	aria-labelledby="settings-offcanvas"
	style:right="0px"
>
	<!-- {$storeTextDirection === 'enumRightToLeft' ? 'unset' : '0px'} -->
	<div class="offcanvas-header align-items-start border-bottom flex-column">
		<div class="pt-1 w-100 mb-6 d-flex justify-content-between align-items-start">
			<div>
				<h5 class="mb-2 me-2 lh-sm">
					<i
						style="font-size: 18px; animation-duration: {propAnimationDuration};"
						class="bx bxs-cog bx-spin mt-1"
					/>
					THEME CUSTOMIZER
				</h5>
				<p class="mb-0 fs--1">Explore different styles according to your preferences.</p>
			</div>
			<button
				class="btn p-1 fw-bolder"
				type="button"
				data-bs-dismiss="offcanvas"
				aria-label="Close"
				on:click={() => (stateCollapsed = true)}
			>
				<i style="font-size: 20px;" class="bx bx-x mt-1" />
			</button>
		</div>
		<!-- RESET BUTTON -->
		<button
			on:click={functionReset}
			class="btn btn-jean-secondary w-100 d-flex justify-content-center align-items-center"
			data-theme-control="reset"
		>
			<i style="font-size: 20px;" class="bx bx-refresh" />
			RESET TO DEFAULT
		</button>
		<!---->
	</div>
	<div class="offcanvas-body scrollbar px-card" id="themeController">
		<!-- COLOR SCHEME -->
		<div class="setting-panel-item mt-0">
			<h5 class="setting-panel-item-title">COLOR SCHEME</h5>
			<div class="row gx-2">
				<div class="col-6">
					<input
						bind:group={$storeColorScheme}
						class="btn-check"
						id="themeSwitcherLight"
						name="theme-color"
						type="radio"
						value="enumLight"
						data-theme-control="jeanTheme"
					/>
					<label class="btn d-inline-block btn-navbar-style fs--1" for="themeSwitcherLight">
						<span class="mb-2 rounded d-block"
							><img class="img-fluid img-prototype mb-0" src={imageLight} alt="" />
						</span>
						<span class="label-text">LIGHT</span>
					</label>
				</div>
				<div class="col-6">
					<input
						bind:group={$storeColorScheme}
						class="btn-check"
						id="themeSwitcherDark"
						name="theme-color"
						type="radio"
						value="enumDark"
						data-theme-control="jeanTheme"
					/>
					<label class="btn d-inline-block btn-navbar-style fs--1" for="themeSwitcherDark">
						<span class="mb-2 rounded d-block">
							<img class="img-fluid img-prototype mb-0" src={imageDark} alt="" />
						</span>
						<span class="label-text"> DARK</span>
					</label>
				</div>
			</div>
		</div>
		<!---->
		<!-- RIGHT BOTTOM CONTENT -->
		<div class="border rounded-3 p-4 setting-panel-item bg-white">
			<p class="mb-0 text-700">RIGHT BOTTOM CONTENT</p>
			<div class="d-flex justify-content-between align-items-center">
				<h5 class="setting-panel-item-title mb-1">{$storeRightBottom ? 'VISIBLE' : 'HIDDEN'}</h5>
				<div class="form-check form-switch mb-0">
					<input
						class="form-check-input ms-auto"
						type="checkbox"
						data-theme-control="jeanSupportChat"
						bind:checked={$storeRightBottom}
					/>
				</div>
			</div>
		</div>
		<!---->
		<!-- <div class="setting-panel-item">
			<h5 class="setting-panel-item-title">Navigation Type</h5>
			<div class="row gx-2">
				<div class="col-6">
					<input
						class="btn-check"
						id="navbarPositionVertical"
						name="navigation-type"
						type="radio"
						value="vertical"
						data-theme-control="jeanNavbarPosition"
						checked
					/>
					<label class="btn d-inline-block btn-navbar-style fs--1" for="navbarPositionVertical">
						<span class="mb-2 rounded d-block">
							<img class="img-fluid img-prototype d-dark-none" src={imageLight} alt="" /><img
								class="img-fluid img-prototype d-light-none"
								src={imageDark}
								alt=""
							/>
						</span>
						<span class="label-text">Vertical</span>
					</label>
				</div>
				<div class="col-6">
					<input
						class="btn-check"
						id="navbarPositionHorizontal"
						name="navigation-type"
						type="radio"
						value="horizontal"
						data-theme-control="jeanNavbarPosition"
					/>
					<label class="btn d-inline-block btn-navbar-style fs--1" for="navbarPositionHorizontal">
						<span class="mb-2 rounded d-block">
							<img class="img-fluid img-prototype d-dark-none" src={imageTop} alt="" />
							<img class="img-fluid img-prototype d-light-none" src={imageTopDark} alt="" />
						</span>
						<span class="label-text"> Horizontal</span>
					</label>
				</div>
				<div class="col-6">
					<input
						class="btn-check"
						id="navbarPositionCombo"
						name="navigation-type"
						type="radio"
						value="combo"
						data-theme-control="jeanNavbarPosition"
					/>
					<label class="btn d-inline-block btn-navbar-style fs--1" for="navbarPositionCombo">
						<span class="mb-2 rounded d-block">
							<img class="img-fluid img-prototype d-dark-none" src={imageNavComboLight} alt="" />
							<img class="img-fluid img-prototype d-light-none" src={imageNavComboDark} alt="" />
						</span>
						<span class="label-text"> Combo</span>
					</label>
				</div>
			</div>
		</div> -->
		<!-- SIDEBAR APPEARANCE -->
		<div class="setting-panel-item">
			<h5 class="setting-panel-item-title">SIDEBAR APPEARANCE</h5>
			<div class="row gx-2">
				<div class="col-6">
					<input
						bind:group={$storeSidebarColor}
						class="btn-check"
						id="navbar-style-default"
						type="radio"
						name="config.name"
						value="enumLight"
						data-theme-control="jeanNavbarVerticalStyle"
					/>
					<label class="btn d-block w-100 btn-navbar-style fs--1" for="navbar-style-default">
						<img class="img-fluid img-prototype d-dark-none" src={imageLight} alt="" /><img
							class="img-fluid img-prototype d-light-none"
							src={imageDark}
							alt=""
						/>
						<span class="label-text d-dark-none"> LIGHT</span>
						<span class="label-text d-light-none">LIGHT</span>
					</label>
				</div>
				<div class="col-6">
					<input
						bind:group={$storeSidebarColor}
						class="btn-check"
						id="navbar-style-dark"
						type="radio"
						name="config.name"
						value="enumDark"
						data-theme-control="jeanNavbarVerticalStyle"
					/>
					<label class="btn d-block w-100 btn-navbar-style fs--1" for="navbar-style-dark">
						<img class="img-fluid img-prototype d-dark-none" src={imageVerticalDarker} alt="" />
						<img class="img-fluid img-prototype d-light-none" src={imageVerticalLighter} alt="" />
						<span class="label-text d-dark-none"> DARK</span>
						<span class="label-text d-light-none">LIGHT</span>
					</label>
				</div>
			</div>
		</div>
		<!-- HEADER APPEARANCE -->
		<div class="setting-panel-item">
			<h5 class="setting-panel-item-title">HEADER APPEARANCE</h5>
			<div class="row gx-2">
				<div class="col-6">
					<input
						bind:group={$storeHeaderColor}
						class="btn-check"
						id="navbarTopDefault"
						name="navbar-top-style"
						type="radio"
						value="enumLight"
						data-theme-control="jeanNavbarTopStyle"
					/>
					<label class="btn d-inline-block btn-navbar-style fs--1" for="navbarTopDefault">
						<span class="mb-2 rounded d-block">
							<img class="img-fluid img-prototype d-dark-none mb-0" src={imageTop} alt="" /><img
								class="img-fluid img-prototype d-light-none mb-0"
								src={imageTopStyleDarker}
								alt=""
							/>
						</span>
						<span class="label-text">LIGHT</span>
					</label>
				</div>
				<div class="col-6">
					<input
						bind:group={$storeHeaderColor}
						class="btn-check"
						id="navbarTopDarker"
						name="navbar-top-style"
						type="radio"
						value="enumDark"
						data-theme-control="jeanNavbarTopStyle"
					/>
					<label class="btn d-inline-block btn-navbar-style fs--1" for="navbarTopDarker">
						<span class="mb-2 rounded d-block">
							<img
								class="img-fluid img-prototype d-dark-none mb-0"
								src={imageNavbarTopStyleLight}
								alt=""
							/>
							<img
								class="img-fluid img-prototype d-light-none mb-0"
								src={imageTopStyleLighter}
								alt=""
							/>
						</span>
						<span class="label-text d-dark-none">DARK</span>
						<span class="label-text d-light-none">LIGHT</span>
					</label>
				</div>
			</div>
		</div>
		<!---->
		<!-- HEADER SHAPE -->
		<!-- <div class="setting-panel-item">
			<h5 class="setting-panel-item-title">HEADER SHAPE</h5>
			<div class="row gx-2">
				<div class="col-6">
					<input
						class="btn-check"
						id="navbarShapeDefault"
						name="navbar-shape"
						type="radio"
						value="default"
						data-theme-control="jeanNavbarTopShape"
						checked
					/><label class="btn d-inline-block btn-navbar-style fs--1" for="navbarShapeDefault">
						<span class="mb-2 rounded d-block"
							><img class="img-fluid img-prototype d-dark-none mb-0" src={imageTop} alt="" /><img
								class="img-fluid img-prototype d-light-none mb-0"
								src={imageTopDark}
								alt=""
							/></span
						><span class="label-text">DEFAULT</span></label
					>
				</div>
				<div class="col-6">
					<input
						class="btn-check"
						id="navbarShapeSlim"
						name="navbar-shape"
						type="radio"
						value="slim"
						data-theme-control="jeanNavbarTopShape"
					/><label class="btn d-inline-block btn-navbar-style fs--1" for="navbarShapeSlim">
						<span class="mb-2 rounded d-block"
							><img
								class="img-fluid img-prototype d-dark-none mb-0"
								src={imageTopSlim}
								alt=""
							/><img
								class="img-fluid img-prototype d-light-none mb-0"
								src={imageTopSlimDark}
								alt=""
							/></span
						><span class="label-text"> SLIM</span></label
					>
				</div>
			</div>
		</div> -->
		<!---->
		<!-- <a
			class="bun btn-primary d-grid mb-3 text-white dark__text-100 mt-5 btn btn-primary"
			href="https://themes.getbootstrap.com/product/jean-admin-dashboard-webapp-template/"
			target="_blank">Purchase template</a
		> -->
	</div>
</div>
<!-- svelte-ignore a11y-invalid-attribute -->
<a
	class="card setting-toggle"
	href="javascript:void(0);"
	data-bs-toggle="offcanvas"
	on:click={() => (stateCollapsed = !stateCollapsed)}
>
	<div class="card-body d-flex align-items-center px-2 py-1">
		<div class="position-relative rounded-start" style="height: 34px; width: 28px">
			<div class="settings-popover">
				<span class="ripple">
					<span class="fa-spin position-absolute all-0 d-flex flex-center">
						<span class="icon-spin position-absolute all-0 d-flex flex-center">
							<i
								style="font-size: 24px; animation-duration: {propAnimationDuration};"
								class="bx bxs-cog bx-spin"
							/>
						</span>
					</span>
				</span>
			</div>
		</div>
		<small class="text-uppercase text-700 fw-bold py-2 pe-2 ps-1 rounded-end">customize</small>
	</div>
</a>

<style>
	.dark .settings-panel .btn {
		--jean-btn-color: #8a94ad;
	}
	:global(.dark) .offcanvas {
		--jean-offcanvas-bg: #141824;
	}
	.col-6 {
		width: 50%;
	}
	.form-switch {
		padding-left: 2.5em;
	}
	.form-switch .form-check-input {
		width: 2em;
		margin-left: -2.5em;
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
		background-position: left center;
		border-radius: 2em;
		-webkit-transition: background-position 0.15s ease-in-out;
		-o-transition: background-position 0.15s ease-in-out;
		transition: background-position 0.15s ease-in-out;
	}
	@media (prefers-reduced-motion: reduce) {
		.form-switch .form-check-input {
			-webkit-transition: none;
			-o-transition: none;
			transition: none;
		}
	}
	.form-switch .form-check-input:focus {
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
	}
	.form-switch .form-check-input:checked {
		background-position: right center;
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
	}
	.fs--1 {
		font-size: 0.8rem !important;
	}
	:global(.dark) .d-dark-none {
		display: none;
	}
	.all-0 {
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}
	.flex-center {
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
	}
	.form-switch .form-check-input:checked {
		background-color: #3874ff;
	}
	.setting-toggle:hover {
		text-decoration: none !important;
	}
	@media (max-width: 575.98px) {
		.setting-toggle {
			-webkit-transform: rotate(-90deg);
			-ms-transform: rotate(-90deg);
			transform: rotate(-90deg);
			outline: none;
		}
		.setting-toggle small {
			display: none;
		}
	}
	.setting-toggle {
		position: fixed;
		top: 50%;
		right: -3px;
		text-decoration: none;
		z-index: 1016;
		-webkit-transform: rotate(-90deg) translate3d(-25px, 39px, 0);
		transform: rotate(-90deg) translate3d(-25px, 39px, 0);
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
		margin-top: -83px;
		-webkit-box-shadow: var(--jean-setting-toggle-shadow);
		box-shadow: var(--jean-setting-toggle-shadow);
	}

	.settings-panel {
		max-width: 28.62rem;
		width: 100% !important;
	}
	.setting-panel-item {
		border-radius: 0.5rem;
		background-color: var(--jean-gray-soft);
		margin-top: 1rem;
		border: 1px solid var(--jean-border-color);
		padding: 1rem 1rem 0 1rem;
	}
	@media (min-width: 768px) {
		.setting-panel-item {
			padding: 1.5rem 1.5rem 0.25rem 1.5rem;
		}
	}
	.setting-panel-item-title {
		line-height: 1.2;
		color: var(--jean-gray-900);
		margin-bottom: 0.5rem;
	}
	.setting-panel-item .btn-check + .btn-navbar-style {
		-webkit-box-shadow: none;
		box-shadow: none;
		padding: 0;
		margin-bottom: 1rem;
		text-align: left;
	}
	.setting-panel-item .btn-check + .btn-navbar-style .img-prototype {
		border: 2px solid var(--jean-gray-200);
		border-radius: 0.5rem;
		-webkit-transition: border 0.2s ease;
		-o-transition: border 0.2s ease;
		transition: border 0.2s ease;
		margin-bottom: 0.5rem;
		background-color: var(--jean-gray-100);
	}
	.setting-panel-item .btn-check + .btn-navbar-style .label-text {
		position: relative;
		padding-left: 1.5rem;
	}
	.setting-panel-item .btn-check + .btn-navbar-style .label-text:after {
		position: absolute;
		content: '';
		left: 0;
		width: 1rem;
		height: 1rem;
		border: 1px solid var(--jean-gray-500);
		border-radius: 50%;
		top: 50%;
		-webkit-transform: translateY(-50%);
		-ms-transform: translateY(-50%);
		transform: translateY(-50%);
		-webkit-transition: border 0.2s ease;
		-o-transition: border 0.2s ease;
		transition: border 0.2s ease;
	}
	.setting-panel-item .btn-check:checked:not([disabled]) + .btn-navbar-style .img-prototype {
		border-color: var(--jean-primary);
	}
	.setting-panel-item .btn-check:checked:not([disabled]) + .btn-navbar-style .label-text::after {
		border: 5px solid var(--jean-primary);
	}
	.setting-panel-item .btn-check:disabled + .btn-navbar-style {
		opacity: 0.5;
	}
</style>
