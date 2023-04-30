// NPM MODULES
import { getContext, setContext } from 'svelte';
import { writable, type Writable } from 'svelte/store';
/////

export function functionCreateMobileMenuStore() {
	const storeReturn = writable<boolean>(true);
	setContext('contextMobileMenuStore', storeReturn);
}
export function functionReadMobileMenuStore() {
	return getContext<Writable<boolean>>('contextMobileMenuStore');
}
