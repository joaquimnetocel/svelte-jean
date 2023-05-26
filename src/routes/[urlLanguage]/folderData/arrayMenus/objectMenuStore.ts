// NPM MODULES:
import type { typeMenuArray } from '$lib/index.js';

type typeMenuNames = 'menuStore' | 'menuProducts' | 'menuClients' | 'menuOrders';

export const objectMenuStore: typeMenuArray<typeMenuNames>[number] = {
	objectMenu: {
		stringIcon: `<i style='font-size: 16px;' class='bx bx-store bx-tada-hover mt-1'></i>`,
		stringSlot: 'STORE',
		stringName: 'menuStore',
	},
	arraySubmenus: [
		{
			objectMenu: {
				stringSlot: 'PRODUCTS',
				stringName: 'menuProducts',
			},
		},
		{
			objectMenu: {
				stringSlot: 'CLIENTS',
				stringName: 'menuClients',
			},
		},
		{
			objectMenu: {
				stringSlot: 'ORDERS',
				stringName: 'menuOrders',
			},
		},
	],
};
