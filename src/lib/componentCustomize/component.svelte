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
	import { functionReadSidebarStore } from '../stores/storeSidebar.js';
	import { functionReadSidebarColorStore } from '../stores/storeSidebarColor.js';
	import { functionReadTextDirectionStore } from '../stores/storeTextDirection.js';
	import type { typeInitialProps } from '../typeInitialProps.js';
	/////
	// NPM MODULES
	import { getContext } from 'svelte';
	/////

	// CONSTANTS
	const objectInitialProps = getContext<typeInitialProps>('contextInitialProps');
	/////
	// STORES
	const storeColorScheme = functionReadColorSchemeStore();
	const storeTextDirection = functionReadTextDirectionStore();
	const storeSidebarColor = functionReadSidebarColorStore();
	const storeHeaderColor = functionReadHeaderColorStore();
	const storeSidebar = functionReadSidebarStore();
	/////
	// STATES
	let stateCollapsed = true;
	let stateRtl = $storeTextDirection === 'enumLeftToRight' ? false : true;
	/////
	// FUNCTIONS
	const functionReset = function () {
		$storeColorScheme = objectInitialProps.propColorScheme;
		$storeHeaderColor = objectInitialProps.propHeaderColor;
		$storeSidebarColor = objectInitialProps.propSidebarColor;
		$storeTextDirection = objectInitialProps.propTextDirection;
		$storeSidebar = objectInitialProps.propSidebar;
	};
	/////
	// REACTIVITY
	$: $storeTextDirection = stateRtl ? 'enumRightToLeft' : 'enumLeftToRight';
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
	style:right={$storeTextDirection === 'enumRightToLeft' ? 'unset' : '0px'}
>
	<div class="offcanvas-header align-items-start border-bottom flex-column">
		<div class="pt-1 w-100 mb-6 d-flex justify-content-between align-items-start">
			<div>
				<h5 class="mb-2 me-2 lh-sm">
					<svg
						class="svg-inline--fa fa-palette me-2 fs-0"
						aria-hidden="true"
						focusable="false"
						data-prefix="fas"
						data-icon="palette"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						data-fa-i2svg=""
					>
						<path
							fill="currentColor"
							d="M512 255.1C512 256.9 511.1 257.8 511.1 258.7C511.6 295.2 478.4 319.1 441.9 319.1H344C317.5 319.1 296 341.5 296 368C296 371.4 296.4 374.7 297 377.9C299.2 388.1 303.5 397.1 307.9 407.8C313.9 421.6 320 435.3 320 449.8C320 481.7 298.4 510.5 266.6 511.8C263.1 511.9 259.5 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256V255.1zM96 255.1C78.33 255.1 64 270.3 64 287.1C64 305.7 78.33 319.1 96 319.1C113.7 319.1 128 305.7 128 287.1C128 270.3 113.7 255.1 96 255.1zM128 191.1C145.7 191.1 160 177.7 160 159.1C160 142.3 145.7 127.1 128 127.1C110.3 127.1 96 142.3 96 159.1C96 177.7 110.3 191.1 128 191.1zM256 63.1C238.3 63.1 224 78.33 224 95.1C224 113.7 238.3 127.1 256 127.1C273.7 127.1 288 113.7 288 95.1C288 78.33 273.7 63.1 256 63.1zM384 191.1C401.7 191.1 416 177.7 416 159.1C416 142.3 401.7 127.1 384 127.1C366.3 127.1 352 142.3 352 159.1C352 177.7 366.3 191.1 384 191.1z"
						/>
					</svg>
					<!-- <span class="fas fa-palette me-2 fs-0"></span> Font Awesome fontawesome.com -->
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
				<svg
					class="svg-inline--fa fa-xmark fs-0"
					aria-hidden="true"
					focusable="false"
					data-prefix="fas"
					data-icon="xmark"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 320 512"
					data-fa-i2svg=""
				>
					<path
						fill="currentColor"
						d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
					/>
				</svg>
				<!-- <span class="fas fa-times fs-0"> </span> Font Awesome fontawesome.com -->
			</button>
		</div>
		<!-- RESET BUTTON -->
		<button
			on:click={functionReset}
			class="btn btn-phoenix-secondary w-100"
			data-theme-control="reset"
		>
			<svg
				class="svg-inline--fa fa-arrows-rotate me-2 fs--2"
				aria-hidden="true"
				focusable="false"
				data-prefix="fas"
				data-icon="arrows-rotate"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 512 512"
				data-fa-i2svg=""
			>
				<path
					fill="currentColor"
					d="M464 16c-17.67 0-32 14.31-32 32v74.09C392.1 66.52 327.4 32 256 32C161.5 32 78.59 92.34 49.58 182.2c-5.438 16.81 3.797 34.88 20.61 40.28c16.89 5.5 34.88-3.812 40.3-20.59C130.9 138.5 189.4 96 256 96c50.5 0 96.26 24.55 124.4 64H336c-17.67 0-32 14.31-32 32s14.33 32 32 32h128c17.67 0 32-14.31 32-32V48C496 30.31 481.7 16 464 16zM441.8 289.6c-16.92-5.438-34.88 3.812-40.3 20.59C381.1 373.5 322.6 416 256 416c-50.5 0-96.25-24.55-124.4-64H176c17.67 0 32-14.31 32-32s-14.33-32-32-32h-128c-17.67 0-32 14.31-32 32v144c0 17.69 14.33 32 32 32s32-14.31 32-32v-74.09C119.9 445.5 184.6 480 255.1 480c94.45 0 177.4-60.34 206.4-150.2C467.9 313 458.6 294.1 441.8 289.6z"
				/>
			</svg>
			<!-- <span class="fas fa-arrows-rotate me-2 fs--2"></span> Font Awesome fontawesome.com -->
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
						data-theme-control="phoenixTheme"
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
						data-theme-control="phoenixTheme"
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
		<!-- TEXT DIRECTION -->
		<div class="border rounded-3 p-4 setting-panel-item bg-white">
			<p class="mb-0 text-700">TEXT DIRECTION</p>
			<div class="d-flex justify-content-between align-items-center">
				<h5 class="setting-panel-item-title mb-1">
					{$storeTextDirection === 'enumRightToLeft' ? 'RIGHT TO LEFT' : 'LEFT TO RIGHT'}
				</h5>
				<div class="form-check form-switch mb-0">
					<input
						class="form-check-input ms-auto"
						type="checkbox"
						data-theme-control="phoenixIsRTL"
						bind:checked={stateRtl}
					/>
				</div>
			</div>
		</div>
		<!---->
		<!-- RIGHT BOTTOM CONTENT -->
		<div class="border rounded-3 p-4 setting-panel-item bg-white">
			<div class="d-flex justify-content-between align-items-center">
				<h5 class="setting-panel-item-title mb-1">RIGHT BOTTOM CONTENT</h5>
				<div class="form-check form-switch mb-0">
					<input
						class="form-check-input ms-auto"
						type="checkbox"
						data-theme-control="phoenixSupportChat"
					/>
				</div>
			</div>
			<!-- <p class="mb-0 text-700">RIGHT BOTTOM CONTENT</p> -->
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
						data-theme-control="phoenixNavbarPosition"
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
						data-theme-control="phoenixNavbarPosition"
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
						data-theme-control="phoenixNavbarPosition"
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
						data-theme-control="phoenixNavbarVerticalStyle"
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
						data-theme-control="phoenixNavbarVerticalStyle"
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
						value="enumDefault"
						data-theme-control="phoenixNavbarTopStyle"
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
						data-theme-control="phoenixNavbarTopStyle"
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
						data-theme-control="phoenixNavbarTopShape"
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
						data-theme-control="phoenixNavbarTopShape"
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
			href="https://themes.getbootstrap.com/product/phoenix-admin-dashboard-webapp-template/"
			target="_blank">Purchase template</a
		> -->
	</div>
</div>
<!-- svelte-ignore a11y-invalid-attribute -->
<a
	class="card setting-toggle"
	href="#"
	data-bs-toggle="offcanvas"
	on:click={() => (stateCollapsed = !stateCollapsed)}
>
	<div class="card-body d-flex align-items-center px-2 py-1">
		<div class="position-relative rounded-start" style="height: 34px; width: 28px">
			<div class="settings-popover">
				<span class="ripple"
					><span class="fa-spin position-absolute all-0 d-flex flex-center"
						><span class="icon-spin position-absolute all-0 d-flex flex-center"
							><svg
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="#ffffff"
								xmlns="http://www.w3.org/2000/svg"
								><path
									d="M19.7369 12.3941L19.1989 12.1065C18.4459 11.7041 18.0843 10.8487 18.0843 9.99495C18.0843 9.14118 18.4459 8.28582 19.1989 7.88336L19.7369 7.59581C19.9474 7.47484 20.0316 7.23291 19.9474 7.03131C19.4842 5.57973 18.6843 4.28943 17.6738 3.20075C17.5053 3.03946 17.2527 2.99914 17.0422 3.12011L16.393 3.46714C15.6883 3.84379 14.8377 3.74529 14.1476 3.3427C14.0988 3.31422 14.0496 3.28621 14.0002 3.25868C13.2568 2.84453 12.7055 2.10629 12.7055 1.25525V0.70081C12.7055 0.499202 12.5371 0.297594 12.2845 0.257272C10.7266 -0.105622 9.16879 -0.0653007 7.69516 0.257272C7.44254 0.297594 7.31623 0.499202 7.31623 0.70081V1.23474C7.31623 2.09575 6.74999 2.8362 5.99824 3.25599C5.95774 3.27861 5.91747 3.30159 5.87744 3.32493C5.15643 3.74527 4.26453 3.85902 3.53534 3.45302L2.93743 3.12011C2.72691 2.99914 2.47429 3.03946 2.30587 3.20075C1.29538 4.28943 0.495411 5.57973 0.0322686 7.03131C-0.051939 7.23291 0.0322686 7.47484 0.242788 7.59581L0.784376 7.8853C1.54166 8.29007 1.92694 9.13627 1.92694 9.99495C1.92694 10.8536 1.54166 11.6998 0.784375 12.1046L0.242788 12.3941C0.0322686 12.515 -0.051939 12.757 0.0322686 12.9586C0.495411 14.4102 1.29538 15.7005 2.30587 16.7891C2.47429 16.9504 2.72691 16.9907 2.93743 16.8698L3.58669 16.5227C4.29133 16.1461 5.14131 16.2457 5.8331 16.6455C5.88713 16.6767 5.94159 16.7074 5.99648 16.7375C6.75162 17.1511 7.31623 17.8941 7.31623 18.7552V19.2891C7.31623 19.4425 7.41373 19.5959 7.55309 19.696C7.64066 19.7589 7.74815 19.7843 7.85406 19.8046C9.35884 20.0925 10.8609 20.0456 12.2845 19.7729C12.5371 19.6923 12.7055 19.4907 12.7055 19.2891V18.7346C12.7055 17.8836 13.2568 17.1454 14.0002 16.7312C14.0496 16.7037 14.0988 16.6757 14.1476 16.6472C14.8377 16.2446 15.6883 16.1461 16.393 16.5227L17.0422 16.8698C17.2527 16.9907 17.5053 16.9504 17.6738 16.7891C18.7264 15.7005 19.4842 14.4102 19.9895 12.9586C20.0316 12.757 19.9474 12.515 19.7369 12.3941ZM10.0109 13.2005C8.1162 13.2005 6.64257 11.7893 6.64257 9.97478C6.64257 8.20063 8.1162 6.74905 10.0109 6.74905C11.8634 6.74905 13.3792 8.20063 13.3792 9.97478C13.3792 11.7893 11.8634 13.2005 10.0109 13.2005Z"
									fill="#2A7BE4"
								/></svg
							></span
						></span
					></span
				>
			</div>
		</div>
		<small class="text-uppercase text-700 fw-bold py-2 pe-2 ps-1 rounded-end">customize</small>
	</div>
</a>
