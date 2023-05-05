// type typeName = 'home' | 'home2' | 'home3' | 'home4';
type typeMenuElement = {
	stringSlot: string;
	stringIcon?: string;
	stringHref?: string;
	stringName: string;
};
type typeRecursive<genericType> = {
	objectMenu: genericType;
	arraySubmenus?: typeRecursive<genericType>;
}[];
type typeMenu = typeRecursive<typeMenuElement>;

export type { typeMenu };
