// NPM MODULES
import { getContext, setContext } from 'svelte';
import { writable, type Writable } from 'svelte/store';
/////

export function functionCreateMobileMenuStore() {
	const storeReturn = writable<boolean>(true);
	setContext('contextMobileMenuCollapsedStore', storeReturn);
}
export function functionReadMobileMenuStore() {
	return getContext<Writable<boolean>>('contextMobileMenuCollapsedStore');
}
