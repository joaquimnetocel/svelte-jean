<script lang="ts">
	import { ColorScheme, Customize, Footer, Header, Logo, Sidebar, Template } from '$lib/index.js';
	import ComponentBlocks from './folderComponents/componentBlocks/component.svelte';
	import ComponentChat from './folderComponents/componentChat/component.svelte';
	import ComponentMenu from './folderComponents/componentMenu/component.svelte';
	import ComponentNotifications from './folderComponents/componentNotifications/component.svelte';
	import ComponentSearch from './folderComponents/componentSearch/component.svelte';
	import ComponentUser from './folderComponents/componentUser/component.svelte';
</script>

<Template>
	<svelte:fragment slot="slotSidebar">
		<Sidebar>
			<ComponentMenu />
		</Sidebar>
	</svelte:fragment>
	<svelte:fragment slot="slotHeader">
		<Header>
			<svelte:fragment slot="slotLeft">
				<Logo />
			</svelte:fragment>
			<svelte:fragment slot="slotCenter">
				<ComponentSearch />
			</svelte:fragment>
			<svelte:fragment slot="slotRight">
				<ColorScheme />
				<ComponentNotifications />
				<ComponentBlocks />
				<ComponentUser />
			</svelte:fragment>
		</Header>
	</svelte:fragment>
	<svelte:fragment slot="slotBody">
		<slot />
	</svelte:fragment>
	<svelte:fragment slot="slotFooter">
		<Footer>
			<svelte:fragment slot="slotLeft">
				Thank you for creating with Jean<span class="d-none d-sm-inline-block" />
				<span class="d-none d-sm-inline-block mx-1">| </span>
				<br class="d-sm-none" />20XX ©
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
