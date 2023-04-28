// NPM MODULES
import { browser } from '$app/environment';
import { getContext, setContext } from 'svelte';
import { writable, type Writable } from 'svelte/store';
/////

export function functionCreateHeaderColorStore() {
	const storeReturn = writable<'enumLight' | 'enumDark'>('enumLight');
	if (browser) {
		if (localStorage.stringHeaderColor === 'enumDark') {
			storeReturn.set('enumDark');
		}
		storeReturn.subscribe((value) => {
			localStorage.stringHeaderColor = value;
		});
	}

	setContext('contextHeaderColorStore', storeReturn);
}
export function functionReadHeaderColorStore() {
	return getContext<Writable<'enumLight' | 'enumDark'>>('contextHeaderColorStore');
}
