// NPM MODULES:
import type { typeMenuArray } from '$lib/index.js'; // import type { typeMenuArray } from 'svelte-jean';

type typeMenuNames = 'menuStore' | 'menuProducts' | 'menuClients' | 'menuOrders';

export const objectMenuStore: typeMenuArray<typeMenuNames>[number] = {
	objectMenu: {
		stringIcon: `<i style='font-size: 16px;' class='bx bx-store bx-tada-hover mt-1'></i>`,
		stringSlot: 'STORE',
		stringName: 'menuStore',
		stringHref: undefined,
	},
	arraySubmenus: [
		{
			objectMenu: {
				stringSlot: 'PRODUCTS',
				stringName: 'menuProducts',
				stringHref: '/en/folderRoutes/routeProducts',
				stringIcon: undefined,
			},
		},
		{
			objectMenu: {
				stringSlot: 'CLIENTS',
				stringName: 'menuClients',
				stringHref: '/en/folderRoutes/routeClients',
				stringIcon: undefined,
			},
		},
		{
			objectMenu: {
				stringSlot: 'ORDERS',
				stringName: 'menuOrders',
				stringHref: '/en/folderRoutes/routeOrders',
			},
		},
	],
};
