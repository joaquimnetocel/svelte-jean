// MODULES:
import { functionIsRunningOnBrowser } from '../functionIsRunningOnBrowser.js';
// NPM MODULES:
import { getContext, setContext } from 'svelte';
import { writable, type Writable } from 'svelte/store';

export function functionCreateSidebarStore(parInitialValue: boolean) {
	const storeReturn = writable<boolean>(parInitialValue);
	if (functionIsRunningOnBrowser()) {
		storeReturn.set(localStorage.booleanSidebarCollapsed === 'true' ? true : parInitialValue);
		storeReturn.subscribe((value) => {
			localStorage.booleanSidebarCollapsed = value;
		});
	}
	setContext('contextSidebarCollapsedStore', storeReturn);
}
export function functionReadSidebarStore() {
	return getContext<Writable<boolean>>('contextSidebarCollapsedStore');
}
