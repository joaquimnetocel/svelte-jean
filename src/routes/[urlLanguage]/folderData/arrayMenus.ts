// NPM MODULES:
import type { typeMenuArray } from '$lib/index.js';
import type { typeMenuName } from './folderMenus/typeMenuName.js';
// MODULES:
import { objectMenuEcommerce } from './folderMenus/objectMenuEcommerce.js';
import { objectMenuHome } from './folderMenus/objectMenuHome.js';
import { objectMenuStore } from './folderMenus/objectMenuStore.js';

// EXPORTS:
export const arrayMenus: typeMenuArray<typeMenuName> = [
	objectMenuHome,
	objectMenuStore,
	objectMenuEcommerce,
];
