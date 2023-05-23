// MODULES:
import type { typeMenuArray } from '$lib/index.js';

// EXPORTS:
export type typeMenuArrayUsersNames =
	| 'menuUsers'
	| 'menuAdministrators'
	| 'menuManagers'
	| 'menuSellers';

export const objectMenuUsers: typeMenuArray<typeMenuArrayUsersNames>[number] = {
	objectMenu: {
		stringHref: undefined,
		stringSlot: 'USERS',
		stringName: 'menuUsers',
		stringIcon: `<i style='font-size: 16px;' class='bx bx-user bx-tada-hover mt-1'></i>`,
	},
	arraySubmenus: [
		{
			objectMenu: {
				stringSlot: 'ADMINISTRATORS',
				stringName: 'menuAdministrators',
				stringHref: undefined,
				stringIcon: undefined,
			},
			arraySubmenus: [
				{
					objectMenu: {
						stringSlot: 'MANAGERS',
						stringName: 'menuManagers',
						stringHref: undefined,
						stringIcon: undefined,
					},
				},
				{
					objectMenu: {
						stringSlot: 'SELLERS',
						stringName: 'menuSellers',
					},
				},
			],
		},
	],
};
