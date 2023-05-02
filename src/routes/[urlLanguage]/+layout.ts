import type { typeLanguage } from '$lib/index.js';

export const load = async ({ params }) => {
	return {
		urlLanguage: params.urlLanguage as typeLanguage
	};
};
