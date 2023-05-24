// NPM MODULES
import { getContext, setContext } from 'svelte';
import { writable, type Writable } from 'svelte/store';
/////

const symbolContextKey = Symbol();

export function functionCreateMobileMenuStore() {
	const storeReturn = writable<boolean>(true);
	setContext(symbolContextKey, storeReturn);
}
export function functionReadMobileMenuStore() {
	return getContext<Writable<boolean>>(symbolContextKey);
}
