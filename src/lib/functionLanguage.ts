// MODULES
import type { typeLanguage } from './typeLanguage.js';
/////
// NPM MODULES
import { getContext } from 'svelte';
/////

export function functionLanguage() {
	return getContext<typeLanguage>('contextLanguage');
}
