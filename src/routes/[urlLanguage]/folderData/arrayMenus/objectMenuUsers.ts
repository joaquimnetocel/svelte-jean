// NPM MODULES:
import type { typeMenuArray } from '$lib/index.js'; // import type { typeMenuArray } from 'svelte-jean';

type typeMenuNames = 'menuUsers' | 'menuAdministrators' | 'menuManagers' | 'menuSellers';

export const objectMenuUsers: typeMenuArray<typeMenuNames>[number] = {
	objectMenu: {
		stringHref: undefined,
		stringSlot: 'USERS',
		stringName: 'menuUsers',
		stringIcon: `<i style='font-size: 16px;' class='bx bx-user bx-tada-hover align-middle'></i>`,
		stringPreload: undefined,
	},
	arraySubmenus: [
		{
			objectMenu: {
				stringSlot: 'ADMINISTRATORS',
				stringName: 'menuAdministrators',
				stringHref: undefined,
				stringIcon: undefined,
				stringPreload: undefined,
			},
			arraySubmenus: [
				{
					objectMenu: {
						stringSlot: 'MANAGERS',
						stringName: 'menuManagers',
						stringHref: '/en/folderRoutes/routeManagers',
						stringIcon: undefined,
						stringPreload: undefined,
					},
				},
				{
					objectMenu: {
						stringSlot: 'SELLERS',
						stringName: 'menuSellers',
						stringHref: '/en/folderRoutes/routeSellers',
						stringIcon: undefined,
						stringPreload: undefined,
					},
				},
			],
		},
	],
};
