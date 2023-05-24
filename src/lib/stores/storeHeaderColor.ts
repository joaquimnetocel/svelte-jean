// MODULES:
import { functionIsRunningOnBrowser } from '../functionIsRunningOnBrowser.js';
// NPM MODULES:
import { getContext, setContext } from 'svelte';
import { writable, type Writable } from 'svelte/store';

export type typeHeaderColor = 'enumLight' | 'enumDark';

export function functionCreateHeaderColorStore(parInitialValue: typeHeaderColor = 'enumLight') {
	const storeReturn = writable<typeHeaderColor>(parInitialValue);
	if (functionIsRunningOnBrowser()) {
		storeReturn.set(localStorage.stringHeaderColor ?? parInitialValue);
		storeReturn.subscribe((value) => {
			localStorage.stringHeaderColor = value;
		});
	}
	setContext('contextHeaderColorStore', storeReturn);
}

export function functionReadHeaderColorStore() {
	return getContext<Writable<typeHeaderColor>>('contextHeaderColorStore');
}
