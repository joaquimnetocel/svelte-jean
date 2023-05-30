import type { typeAllLanguages } from '$lib/index.js'; // import type { typeAllLanguages } from 'svelte-jean';

export const load = async ({ params }) => {
	return {
		urlLanguage: <typeAllLanguages>params.urlLanguage,
	};
};
