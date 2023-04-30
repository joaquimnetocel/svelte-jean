// NPM MODULES
import { browser } from '$app/environment';
import { getContext, setContext } from 'svelte';
import { writable, type Writable } from 'svelte/store';
/////

export function functionCreateRtlStore() {
	const storeReturn = writable<boolean>(false);
	if (browser) {
		storeReturn.set(localStorage.booleanRtl === 'true' ? true : false);
		storeReturn.subscribe((value) => {
			localStorage.booleanRtl = value;
		});
	}
	setContext('contextRtlStore', storeReturn);
}
export function functionReadRtlStore() {
	return getContext<Writable<boolean>>('contextRtlStore');
}
