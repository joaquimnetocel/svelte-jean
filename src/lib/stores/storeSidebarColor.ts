// MODULES:
import { functionIsRunningOnBrowser } from '../functionIsRunningOnBrowser.js';
// NPM MODULES:
import { getContext, setContext } from 'svelte';
import { writable, type Writable } from 'svelte/store';

export type typeSidebarColor = 'enumLight' | 'enumDark';

export function functionCreateSidebarColorStore(parInitialValue: typeSidebarColor = 'enumDark') {
	const storeReturn = writable<typeSidebarColor>(parInitialValue);
	if (functionIsRunningOnBrowser()) {
		storeReturn.set(
			localStorage.stringSidebarColor === 'enumLight' ? 'enumLight' : parInitialValue,
		);
		storeReturn.subscribe((value) => {
			localStorage.stringSidebarColor = value;
		});
	}

	setContext('contextSidebarColorStore', storeReturn);
}
export function functionReadSidebarColorStore() {
	return getContext<Writable<typeSidebarColor>>('contextSidebarColorStore');
}
