import type { typeLanguage } from '$lib/index.js';

export const load = async () => {
	const stringLanguage: typeLanguage = 'en';
	return {
		urlLanguage: stringLanguage
	};
};
