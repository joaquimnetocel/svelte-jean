// MODULES:
import type { typeMenuArray } from '$lib/index.js';

// EXPORTS:
export type typeMenuStoreName =
	| 'menuStore'
	| 'menuEcommerce'
	| 'menuProjectManagement'
	| 'menuCRM'
	| 'menuSocialFeed';

export const objectMenuStore: typeMenuArray<typeMenuStoreName>[number] = {
	objectMenu: {
		stringIcon: `<i style='font-size: 16px;' class='bx bx-store bx-tada-hover mt-1'></i>`,
		stringSlot: 'Store',
		stringName: 'menuStore',
	},
	arraySubmenus: [
		{
			objectMenu: {
				stringSlot: 'E-commerce',
				stringName: 'menuEcommerce',
			},
		},
		{
			objectMenu: {
				stringSlot: 'Project Management',
				stringName: 'menuProjectManagement',
			},
		},
		{
			objectMenu: {
				stringSlot: 'CRM',
				stringName: 'menuCRM',
			},
		},
		{
			objectMenu: {
				stringSlot: 'Social Feed',
				stringName: 'menuSocialFeed',
			},
		},
	],
};
