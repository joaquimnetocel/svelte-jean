// NPM MODULES
import type { typeMenu } from '$lib/index.js';
import type { typeMenuName } from './typeMenuName.js';
/////
// MODULES
import { objectMenuEcommerce } from './objectMenuEcommerce.js';
import { objectMenuHome } from './objectMenuHome.js';
import { objectMenuStore } from './objectMenuStore.js';
/////

export const arrayMenu: typeMenu<typeMenuName> = [
	objectMenuHome,
	objectMenuStore,
	objectMenuEcommerce
];
