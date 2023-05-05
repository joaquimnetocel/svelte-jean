// type typeName = 'home' | 'home2' | 'home3' | 'home4';
type typeMenuElement<genericMenuName> = {
	stringSlot: string;
	stringIcon?: string;
	stringHref?: string;
	stringName: genericMenuName;
};
type typeRecursive<genericType> = {
	objectMenu: genericType;
	arraySubmenus?: typeRecursive<genericType>;
}[];
type typeMenu<genericMenuName = string> = typeRecursive<typeMenuElement<genericMenuName>>;

export type { typeMenu };
