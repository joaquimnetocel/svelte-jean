import type { typeAllLanguages } from '$lib/index.js';

export const load = async ({ params }) => {
	return {
		urlLanguage: <typeAllLanguages>params.urlLanguage,
	};
};
