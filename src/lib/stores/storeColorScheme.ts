// MODULES:
import { functionIsRunningOnBrowser } from '../functionIsRunningOnBrowser.js';
// NPM MODULES:
import { getContext, setContext } from 'svelte';
import { writable, type Writable } from 'svelte/store';

export type typeColorScheme = 'enumLight' | 'enumDark';

const symbolContextKey = Symbol();

export function functionCreateColorSchemeStore(parInitialValue: typeColorScheme = 'enumLight') {
	const storeReturn = writable<typeColorScheme>(parInitialValue);
	if (functionIsRunningOnBrowser()) {
		storeReturn.set(localStorage.stringColorScheme ?? parInitialValue);
		storeReturn.subscribe((value) => {
			localStorage.stringColorScheme = value;
		});
	}
	setContext(symbolContextKey, storeReturn);
}
export function functionReadColorSchemeStore() {
	return getContext<Writable<typeColorScheme>>(symbolContextKey);
}
