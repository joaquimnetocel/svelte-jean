// NPM MODULES
import { browser } from '$app/environment';
import { getContext, setContext } from 'svelte';
import { writable, type Writable } from 'svelte/store';
/////

export function functionCreateRightBottomStore(parInitialValue: boolean) {
	const storeReturn = writable<boolean>(parInitialValue);
	if (browser) {
		storeReturn.set(localStorage.booleanRightBottom === 'true' ? true : parInitialValue);
		storeReturn.subscribe((value) => {
			localStorage.booleanRightBottom = value;
		});
	}
	setContext('contextRightBottomStore', storeReturn);
}
export function functionReadRightBottomStore() {
	return getContext<Writable<boolean>>('contextRightBottomStore');
}
