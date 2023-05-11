// NPM MODULES:
import type { typeMenuArray } from '$lib/index.js';
import type { typeMenuName } from './typeMenuName.js';
// MODULES:
import { objectMenuEcommerce } from './objectMenuEcommerce.js';
import { objectMenuHome } from './objectMenuHome.js';
import { objectMenuStore } from './objectMenuStore.js';

// EXPORTS:
export const arrayMenus: typeMenuArray<typeMenuName> = [
	objectMenuHome,
	objectMenuStore,
	objectMenuEcommerce
];
