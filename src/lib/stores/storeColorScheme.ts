// NPM MODULES
import { browser } from '$app/environment';
import { getContext, setContext } from 'svelte';
import { writable, type Writable } from 'svelte/store';
/////

export type typeColorScheme = 'enumLight' | 'enumDark';

export function functionCreateColorSchemeStore(parInitialValue: typeColorScheme = 'enumLight') {
	const storeReturn = writable<typeColorScheme>(parInitialValue);
	if (browser) {
		storeReturn.set(localStorage.stringColorScheme ?? parInitialValue);
		storeReturn.subscribe((value) => {
			localStorage.stringColorScheme = value;
		});
	}
	setContext('contextColorSchemeStore', storeReturn);
}
export function functionReadColorSchemeStore() {
	return getContext<Writable<typeColorScheme>>('contextColorSchemeStore');
}
