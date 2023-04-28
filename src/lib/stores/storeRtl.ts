// NPM MODULES
import { browser } from '$app/environment';
import { getContext, setContext } from 'svelte';
import { writable, type Writable } from 'svelte/store';
/////

export function functionCreateRtlStore() {
	const storeReturn = writable<boolean>(false);
	if (browser) {
		if (localStorage.booleanRtl === 'true') {
			storeReturn.set(true);
		}
		storeReturn.subscribe((value) => {
			document.body.setAttribute('dir', value === true ? 'rtl' : 'ltr');
			localStorage.booleanRtl = value;
		});
	}
	setContext('contextRtlStore', storeReturn);
}
export function functionReadRtlStore() {
	return getContext<Writable<boolean>>('contextRtlStore');
}
