// NPM MODULES:
import type { typeMenuArray } from '$lib/index.js';
import type { typeMenuName } from './folderMenus/typeMenuName.js';
// MODULES:
import { objectMenuHome } from './folderMenus/objectMenuHome.js';
import { objectMenuStore } from './folderMenus/objectMenuStore.js';
import { objectMenuUsers } from './folderMenus/objectMenuUsers.js';

// EXPORTS:
export const arrayMenus: typeMenuArray<typeMenuName> = [
	objectMenuHome,
	objectMenuStore,
	objectMenuUsers,
];
