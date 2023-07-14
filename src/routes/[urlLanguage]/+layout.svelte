<script lang="ts">
	// DATA:
	import { arrayLanguages } from './folderData/arrayLanguages.js';
	import { arrayLinks } from './folderData/arrayLinks.js';
	import { arrayMenus } from './folderData/arrayMenus/arrayMenus.js';
	import { arrayNotifications } from './folderData/arrayNotifications.js';
	import { arrayUserMenu } from './folderData/arrayUserMenu.js';
	// NPM MODULES:
	import {
		ColorScheme,
		Customize,
		Footer,
		Header,
		Language,
		Links,
		Logo,
		Notifications,
		Search,
		Sidebar,
		Template,
		User,
		Whatsapp,
	} from '$lib/index.js';
	// REPLACE $lib/index.js WITH svelte-jean

	// PROPS:
	export let data;
</script>

<Template propLanguage={data.urlLanguage}>
	<svelte:fragment slot="slotSidebar">
		<Sidebar propMenu={arrayMenus} propStartCollapsed={true} />
	</svelte:fragment>
	<svelte:fragment slot="slotHeader">
		<Header>
			<svelte:fragment slot="slotLeft">
				<Logo propTitle="jean" propLanguage={data.urlLanguage} />
			</svelte:fragment>
			<svelte:fragment slot="slotCenter">
				<Search />
			</svelte:fragment>
			<svelte:fragment slot="slotRight">
				<ColorScheme />
				<Language propLanguages={arrayLanguages} propSelected={data.urlLanguage} />
				<Notifications propNotifications={arrayNotifications} />
				<Links propLinks={arrayLinks} />
				<User propUserMenu={arrayUserMenu}>
					<span slot="slotBeforeOptions">
						<div class="text-center mb-3 mx-3">SLOT (slotBeforeOptions)</div>
					</span>
					<span slot="slotFooter">
						<div class="my-2 text-center fw-bold fs--2 text-600">SLOT (slotFooter)</div>
					</span>
				</User>
			</svelte:fragment>
		</Header>
	</svelte:fragment>
	<svelte:fragment slot="slotBody">
		<div class="px-4 py-4 h-100">
			<slot />
		</div>
	</svelte:fragment>
	<svelte:fragment slot="slotFooter">
		<Footer>
			<svelte:fragment slot="slotLeft">
				Thank you for creating with svelteJean {new Date().getFullYear()} ©
				<a class="mx-1" href="https://github.com/"> GitHub </a>
			</svelte:fragment>
			<svelte:fragment slot="slotRight">v0.0.31</svelte:fragment>
		</Footer>
	</svelte:fragment>
	<svelte:fragment slot="slotCustomize">
		<Customize />
	</svelte:fragment>
	<svelte:fragment slot="slotRightBottom">
		<Whatsapp propHref="" />
	</svelte:fragment>
</Template>

<style>
	@import 'bootstrap/dist/css/bootstrap.min.css';
	@import 'boxicons/css/boxicons.min.css';
	@import '$lib/folderCss/theme.min.css'; /* @import 'svelte-jean/dist/folderCss/theme.min.css'; */
</style>
