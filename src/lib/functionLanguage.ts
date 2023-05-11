// NPM MODULES
import { getContext } from 'svelte';
/////

export function functionLanguage<genericType>() {
	return getContext<genericType>('contextLanguage');
}
