// NPM MODULES
import { browser } from '$app/environment';
import { getContext, setContext } from 'svelte';
import { writable, type Writable } from 'svelte/store';
/////

export function functionCreateColorSchemeStore() {
	const storeReturn = writable<'enumLight' | 'enumDark'>('enumLight');
	if (browser) {
		storeReturn.set(localStorage.stringColorScheme ?? 'enumLight');
		storeReturn.subscribe((value) => {
			localStorage.stringColorScheme = value;
		});
	}
	setContext('contextColorSchemeStore', storeReturn);
}
export function functionReadColorSchemeStore() {
	return getContext<Writable<'enumLight' | 'enumDark'>>('contextColorSchemeStore');
}
