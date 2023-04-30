// NPM MODULES
import { browser } from '$app/environment';
import { getContext, setContext } from 'svelte';
import { writable, type Writable } from 'svelte/store';
/////

export function functionCreateSidebarColorStore() {
	const storeReturn = writable<'enumLight' | 'enumDark'>('enumDark');
	if (browser) {
		storeReturn.set(localStorage.stringSidebarColor === 'enumLight' ? 'enumLight' : 'enumDark');
		storeReturn.subscribe((value) => {
			localStorage.stringSidebarColor = value;
		});
	}

	setContext('contextSidebarColorStore', storeReturn);
}
export function functionReadSidebarColorStore() {
	return getContext<Writable<'enumLight' | 'enumDark'>>('contextSidebarColorStore');
}
