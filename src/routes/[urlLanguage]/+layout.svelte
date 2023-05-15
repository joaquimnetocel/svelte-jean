<script lang="ts">
	// COMPONENTS:
	import { Language, Links, Notifications, User } from '$lib/index.js';
	import ComponentChat from './folderComponents/componentChat/component.svelte';
	import ComponentSearch from './folderComponents/folderHeader/componentSearch/component.svelte';
	// DATA:
	import { arrayLanguages } from './folderData/arrayLanguages.js';
	import { arrayLinks } from './folderData/arrayLinks.js';
	import { arrayMenus } from './folderData/arrayMenus.js';
	import { arrayNotifications } from './folderData/arrayNotifications.js';
	import { arrayUserMenu } from './folderData/arrayUserMenu.js';
	// NPM MODULES:
	import { ColorScheme, Customize, Footer, Header, Logo, Sidebar, Template } from '$lib/index.js';

	// PROPS:
	export let data;
</script>

<svelte:head>
	<link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
</svelte:head>

<Template propLanguage={data.urlLanguage}>
	<svelte:fragment slot="slotSidebar">
		<Sidebar propMenu={arrayMenus} />
	</svelte:fragment>
	<svelte:fragment slot="slotHeader">
		<Header>
			<svelte:fragment slot="slotLeft">
				<Logo propTitle="jean" propLanguage={data.urlLanguage} />
			</svelte:fragment>
			<svelte:fragment slot="slotCenter">
				<ComponentSearch />
			</svelte:fragment>
			<svelte:fragment slot="slotRight">
				<ColorScheme />
				<Language propLanguages={arrayLanguages} propSelected={data.urlLanguage} />
				<Notifications propNotifications={arrayNotifications} />
				<Links propLinks={arrayLinks} />
				<User propUserMenu={arrayUserMenu} />
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
