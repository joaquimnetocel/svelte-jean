// NPM MODULES
import type { typeColor } from './typeColor.js';
/////

export type typeActiveMenu = {
	stringBackgroundColor: typeColor;
	stringColor: typeColor;
	stringBackgroundSecondaryColor?: typeColor;
	stringBackgroundGradientDirection?: `${number}deg`;
};
