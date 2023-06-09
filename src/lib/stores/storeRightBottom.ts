// MODULES:
import { functionIsRunningOnBrowser } from '../functionIsRunningOnBrowser.js';
// NPM MODULES:
import { getContext, setContext } from 'svelte';
import { writable, type Writable } from 'svelte/store';

const symbolContextKey = Symbol();

export function functionCreateRightBottomStore(parInitialValue: boolean) {
	const storeReturn = writable<boolean>(parInitialValue);
	if (functionIsRunningOnBrowser()) {
		storeReturn.set(localStorage.booleanRightBottom === 'true' ? true : parInitialValue);
		storeReturn.subscribe((value) => {
			localStorage.booleanRightBottom = value;
		});
	}
	setContext(symbolContextKey, storeReturn);
}
export function functionReadRightBottomStore() {
	return getContext<Writable<boolean>>(symbolContextKey);
}
