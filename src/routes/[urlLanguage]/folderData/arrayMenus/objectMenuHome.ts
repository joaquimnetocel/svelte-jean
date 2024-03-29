// NPM MODULES:
import type { typeMenuArray } from '$lib/index.js'; // import type { typeMenuArray } from 'svelte-jean';

type typeMenuNames = 'menuHome';

export const objectMenuHome: typeMenuArray<typeMenuNames>[number] = {
	objectMenu: {
		stringIcon: `<i style='font-size: 16px;' class='bx bx-home bx-tada-hover'></i>`,
		stringSlot: 'HOME',
		stringName: 'menuHome',
		stringHref: '/',
		stringPreload: 'tap',
	},
};
