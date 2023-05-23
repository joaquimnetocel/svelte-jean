// MODULES:
import type { typeMenuArray } from '$lib/index.js';

// EXPORTS:
export type typeMenuStoreNames = 'menuStore' | 'menuProducts' | 'menuClients' | 'menuOrders';

export const objectMenuStore: typeMenuArray<typeMenuStoreNames>[number] = {
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
