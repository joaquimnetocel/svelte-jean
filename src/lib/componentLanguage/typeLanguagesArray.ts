import type { typeAllLanguages } from '../typeAllLanguages.js';

export type typeLanguagesArray = {
	stringText: string;
	stringImage?: string;
	stringCode: typeAllLanguages;
	stringLink: string;
}[];
