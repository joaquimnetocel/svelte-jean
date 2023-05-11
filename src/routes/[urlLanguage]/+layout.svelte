<script lang="ts">
	// COMPONENTS:
	import { Language, Links } from '$lib/index.js';
	import ComponentChat from './folderComponents/componentChat/component.svelte';
	import ComponentNotifications from './folderComponents/folderHeader/componentNotifications/component.svelte';
	import ComponentSearch from './folderComponents/folderHeader/componentSearch/component.svelte';
	import ComponentUser from './folderComponents/folderHeader/componentUser/component.svelte';
	// MODULES:
	import { arrayLanguages } from './arrayLanguages.js';
	import { arrayLinks } from './arrayLinks.js';
	import { arrayMenus } from './folderMenu/arrayMenus.js';
	// NPM MODULES:
	import { ColorScheme, Customize, Footer, Header, Logo, Sidebar, Template } from '$lib/index.js';

	// PROPS:
	export let data;
</script>

<Template propLanguage={data.urlLanguage}>
	<svelte:fragment slot="slotSidebar">
		<Sidebar propMenu={arrayMenus} />
	</svelte:fragment>
	<svelte:fragment slot="slotHeader">
		<Header>
			<svelte:fragment slot="slotLeft">
				<Logo propTitle="jean" />
			</svelte:fragment>
			<svelte:fragment slot="slotCenter">
				<ComponentSearch />
			</svelte:fragment>
			<svelte:fragment slot="slotRight">
				<ColorScheme />
				<Language propLanguages={arrayLanguages} propSelected={data.urlLanguage} />
				<ComponentNotifications />
				<Links propLinks={arrayLinks} />
				<ComponentUser />
			</svelte:fragment>
		</Header>
	</svelte:fragment>
	<svelte:fragment slot="slotBody">
		<div class="mx-4 my-4">
			<slot />
		</div>
	</svelte:fragment>
	<svelte:fragment slot="slotFooter">
		<Footer>
			<svelte:fragment slot="slotLeft">
				Thank you for creating with Jean<span class="d-none d-sm-inline-block" />
				<span class="d-none d-sm-inline-block mx-1">| </span>
				<br class="d-sm-none" />{new Date().getFullYear()} ©
				<a class="mx-1" href="https://themewagon.com/"> GitHub </a>
			</svelte:fragment>
			<svelte:fragment slot="slotRight">v0.0.0</svelte:fragment>
		</Footer>
	</svelte:fragment>
	<svelte:fragment slot="slotCustomize">
		<Customize />
	</svelte:fragment>
	<svelte:fragment slot="slotRightBottom">
		<ComponentChat />
	</svelte:fragment>
</Template>
