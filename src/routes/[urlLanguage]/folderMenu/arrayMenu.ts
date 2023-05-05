// NPM MODULES
import type { typeMenu } from '$lib/typeMenu.js';
/////
// MODULES
import { objectMenuEcommerce, type typeMenuEcommerceName } from './objectMenuEcommerce.js';
import { objectMenuHome, type typeMenuHomeName } from './objectMenuHome.js';
/////

export type typeMenuName = typeMenuHomeName | typeMenuEcommerceName;

export const arrayMenu: typeMenu<typeMenuName> = [objectMenuHome, objectMenuEcommerce];
