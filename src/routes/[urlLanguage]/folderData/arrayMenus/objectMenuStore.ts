// NPM MODULES:
import type { typeMenuArray } from '$lib/index.js'; // import type { typeMenuArray } from 'svelte-jean';

type typeMenuNames = 'menuStore' | 'menuProducts' | 'menuClients' | 'menuOrders';

export const objectMenuStore: typeMenuArray<typeMenuNames>[number] = {
	objectMenu: {
		stringIcon: `<i style='font-size: 16px;' class='bx bx-store bx-tada-hover align-middle'></i>`,
		stringSlot: 'STORE',
		stringName: 'menuStore',
		stringHref: undefined,
		stringPreload: undefined,
	},
	arraySubmenus: [
		{
			objectMenu: {
				stringSlot: `PRODUCTS`,
				stringName: 'menuProducts',
				stringHref: '/en/folderRoutes/routeProducts',
				stringIcon: ``,
				stringPreload: undefined,
			},
		},
		{
			objectMenu: {
				stringSlot: `CLIENTS <i style='font-size: 16px;' class='bx bx-wrench bx-tada-hover align-middle'></i>`,
				stringName: 'menuClients',
				stringHref: '/en/folderRoutes/routeClients',
				stringIcon: undefined,
				stringPreload: undefined,
			},
		},
		{
			objectMenu: {
				stringSlot: 'ORDERS',
				stringName: 'menuOrders',
				stringHref: '/en/folderRoutes/routeOrders',
				stringIcon: undefined,
				stringPreload: undefined,
			},
		},
	],
};
