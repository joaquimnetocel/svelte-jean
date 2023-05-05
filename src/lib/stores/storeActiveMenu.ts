// NPM MODULES
import { browser } from '$app/environment';
import { getContext, setContext } from 'svelte';
import { writable, type Writable } from 'svelte/store';
/////

export function functionCreateActiveMenuStore() {
	const storeReturn = writable<string>('');
	if (browser) {
		storeReturn.set(localStorage.stringActiveMenu ?? '');
		storeReturn.subscribe((value) => {
			localStorage.stringActiveMenu = value;
		});
	}
	setContext('contextActiveMenuStore', storeReturn);
}

export function functionReadActiveMenuStore<genericT = string>() {
	return getContext<Writable<genericT>>('contextActiveMenuStore');
}
