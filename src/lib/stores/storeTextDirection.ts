// NPM MODULES
import { browser } from '$app/environment';
import { getContext, setContext } from 'svelte';
import { writable, type Writable } from 'svelte/store';
/////

export type typeTextDirection = 'enumRightToLeft' | 'enumLeftToRight';

export function functionCreateTextDirectionStore(
	parInitialValue: typeTextDirection = 'enumLeftToRight'
) {
	const storeReturn = writable<typeTextDirection>(parInitialValue);
	if (browser) {
		storeReturn.set(localStorage.stringTextDirection ?? parInitialValue);
		storeReturn.subscribe((value) => {
			localStorage.stringTextDirection = value;
		});
	}
	setContext('contextTextDirectionStore', storeReturn);
}
export function functionReadTextDirectionStore() {
	return getContext<Writable<typeTextDirection>>('contextTextDirectionStore');
}
