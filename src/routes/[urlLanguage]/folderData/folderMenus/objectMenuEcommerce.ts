// MODULES:
import type { typeMenuArray } from '$lib/index.js';

// EXPORTS:
export type typeMenuArrayEcommerceName =
	| 'menuEcommerce'
	| 'menuAdmin'
	| 'menuAddProduct'
	| 'menuProducts';

export const objectMenuEcommerce: typeMenuArray<typeMenuArrayEcommerceName>[number] = {
	objectMenu: {
		stringHref: undefined,
		stringSlot: 'E-commerce',
		stringName: 'menuEcommerce',
		stringIcon: `<i style='font-size: 16px;' class='bx bx-cart bx-tada-hover mt-1'></i>`,
	},
	arraySubmenus: [
		{
			objectMenu: {
				stringSlot: 'Admin',
				stringName: 'menuAdmin',
				stringHref: undefined,
				stringIcon: undefined,
			},
			arraySubmenus: [
				{
					objectMenu: {
						stringSlot: 'Add Product',
						stringName: 'menuAddProduct',
						stringHref: undefined,
						stringIcon: undefined,
					},
				},
				{
					objectMenu: {
						stringSlot: 'Products',
						stringName: 'menuProducts',
					},
				},
			],
		},
	],
};
