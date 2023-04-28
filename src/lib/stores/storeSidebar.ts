// NPM MODULES
import { browser } from '$app/environment';
import { getContext, setContext } from 'svelte';
import { writable, type Writable } from 'svelte/store';
/////

export function functionCreateSidebarStore() {
	const storeReturn = writable<boolean>(false);
	if (browser) {
		if (localStorage.booleanSidebarCollapsed === 'true') {
			storeReturn.set(true);
			document.body.classList.add('navbar-vertical-collapsed');
		}
		storeReturn.subscribe((value) => {
			localStorage.booleanSidebarCollapsed = value;
		});
	}
	setContext('contextSidebarCollapsedStore', storeReturn);
}
export function functionReadSidebarStore() {
	return getContext<Writable<boolean>>('contextSidebarCollapsedStore');
}
