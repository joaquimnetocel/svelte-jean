<script lang="ts">
	// MODULES
	import { functionReadColorSchemeStore } from '../stores/storeColorScheme.js';
	/////
	// NPM MODULES
	import { Body } from 'svelte-body';
	/////
	// STORES
	const storeColorScheme = functionReadColorSchemeStore();
	/////
</script>

<Body class={$storeColorScheme === 'enumDark' ? 'dark' : ''} />

<li class="nav-item">
	<div class="theme-control-toggle afa-icon-wait px-2">
		<input
			on:click={() => {
				$storeColorScheme = $storeColorScheme === 'enumDark' ? 'enumLight' : 'enumDark';
			}}
			class="form-check-input ms-0 theme-control-toggle-input"
			type="checkbox"
			data-theme-control="jeanTheme"
			value="dark"
			id="themeControlToggle"
		/>
		<label
			class="mb-0 theme-control-toggle-label theme-control-toggle-light"
			for="themeControlToggle"
			data-bs-toggle="tooltip"
			data-bs-placement="left"
			aria-label="Switch theme"
			data-bs-original-title="Switch theme"
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
				class="feather feather-moon icon"
				><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg
			>
		</label>
		<label
			class="mb-0 theme-control-toggle-label theme-control-toggle-dark"
			for="themeControlToggle"
			data-bs-toggle="tooltip"
			data-bs-placement="left"
			aria-label="Switch theme"
			data-bs-original-title="Switch theme"
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
				class="feather feather-sun icon"
			>
				<circle cx="12" cy="12" r="5" />
				<line x1="12" y1="1" x2="12" y2="3" />
				<line x1="12" y1="21" x2="12" y2="23" />
				<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
				<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
				<line x1="1" y1="12" x2="3" y2="12" />
				<line x1="21" y1="12" x2="23" y2="12" />
				<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
				<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg
			>
		</label>
	</div>
</li>

<style>
	.theme-control-toggle-input:not(:checked) ~ .theme-control-toggle-light {
		display: none;
	}
	.theme-control-toggle-input:checked ~ .theme-control-toggle-dark {
		display: none;
	}
	.theme-control-toggle .theme-control-toggle-input {
		display: none;
	}
	.theme-control-toggle .theme-control-toggle-label:hover {
		background-color: var(--jean-theme-control-toggle-hover-bg);
		color: var(--jean-theme-control-toggle-hover-color);
	}
	.theme-control-toggle .theme-control-toggle-label {
		height: 2rem;
		width: 2rem;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		background-color: var(--jean-theme-control-toggle-bg);
		color: var(--jean-theme-control-toggle-color);
		border-radius: 50%;
		cursor: pointer;
		-webkit-transition: all 0.2s ease-in-out;
		-o-transition: all 0.2s ease-in-out;
		transition: all 0.2s ease-in-out;
	}
</style>
