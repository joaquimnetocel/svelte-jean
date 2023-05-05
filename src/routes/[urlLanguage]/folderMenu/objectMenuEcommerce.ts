import type { typeMenu } from '$lib/typeMenu.js';

const stringIcon = `
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="16px"
		height="16px"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		class="feather feather-pie-chart"
	>
		<path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
		<path d="M22 12A10 10 0 0 0 12 2v10z" />
	</svg>
`;

export const objectMenuEcommerce: typeMenu[number] = {
	objectMenu: {
		stringIcon: stringIcon,
		stringSlot: 'Home',
		stringName: 'menuHome'
	},
	arraySubmenus: [
		{
			objectMenu: {
				stringHref: 'https://www.google.com.br',
				stringSlot: 'E-commerce',
				stringName: 'menuEcommerce'
			},
			arraySubmenus: [
				{
					objectMenu: {
						stringSlot: 'Admin',
						stringName: 'menuAdmin'
					},
					arraySubmenus: [
						{
							objectMenu: {
								stringSlot: 'Add Product',
								stringName: 'menuAddProduct',
								stringHref: 'https://www.google.com.br'
							}
						},
						{
							objectMenu: {
								stringSlot: 'Products',
								stringName: 'menuProducts',
								stringHref: 'https://www.google.com.br'
							}
						}
					]
				}
			]
		}
	]
};
