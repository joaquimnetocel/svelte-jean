// MODULES
import type { objectColorNames } from './objectColorNames.js';
/////

type typeRGB = `rgb(${number}, ${number}, ${number})`;
type typeRGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type typeHEX = `#${string}`;
type typeColorNames = keyof typeof objectColorNames;
export type typeColor = typeRGB | typeRGBA | typeHEX | typeColorNames;
