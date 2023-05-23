// MODULES:
import type { typeMenuArray } from '$lib/index.js';

// EXPORTS:
export type typeMenuHomeNames = 'menuHome';

export const objectMenuHome: typeMenuArray<typeMenuHomeNames>[number] = {
	objectMenu: {
		stringIcon: `<i style='font-size: 16px;' class='bx bx-home bx-tada-hover mt-1'></i>`,
		stringSlot: 'Home',
		stringName: 'menuHome',
		stringHref: '/',
	},
};
