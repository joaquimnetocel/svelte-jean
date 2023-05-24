// MODULES:
import { functionIsRunningOnBrowser } from '../functionIsRunningOnBrowser.js';
// NPM MODULES:
import { getContext, setContext } from 'svelte';
import { writable, type Writable } from 'svelte/store';

const symbolContextKey = Symbol();

export function functionCreateActiveMenuStore() {
	const storeReturn = writable<string>('');
	if (functionIsRunningOnBrowser()) {
		storeReturn.set(localStorage.stringActiveMenu ?? '');
		storeReturn.subscribe((value) => {
			localStorage.stringActiveMenu = value;
		});
	}
	setContext(symbolContextKey, storeReturn);
}

export function functionReadActiveMenuStore<genericT = string>() {
	return getContext<Writable<genericT>>(symbolContextKey);
}
