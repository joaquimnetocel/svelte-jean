// NPM PACKAGES:
import type { typeLanguagesArray } from '$lib/index.js';
// IMAGES:
import imageGermany from '../folderImages/folderFlags/imageGermany.jpg';
import imageItaly from '../folderImages/folderFlags/imageItaly.jpg';
import imageRussia from '../folderImages/folderFlags/imageRussia.jpg';
import imageSpain from '../folderImages/folderFlags/imageSpain.jpg';
import imageUs from '../folderImages/folderFlags/imageUs.jpg';

export const arrayLanguages: typeLanguagesArray = [
	{
		stringCode: 'en',
		stringImage: imageUs,
		stringText: 'English',
		stringLink: '/en',
	},
	{
		stringCode: 'es',
		stringImage: imageSpain,
		stringText: 'Spanish',
		stringLink: '/es',
	},
	{
		stringCode: 'it',
		stringImage: imageItaly,
		stringText: 'Italian',
		stringLink: '/it',
	},
	{
		stringCode: 'ru',
		stringImage: imageRussia,
		stringText: 'Russian',
		stringLink: '/ru',
	},
	{
		stringCode: 'de',
		stringImage: imageGermany,
		stringText: 'German',
		stringLink: '/de',
	},
];
