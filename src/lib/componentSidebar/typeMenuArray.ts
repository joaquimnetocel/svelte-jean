// type typeName = 'home' | 'home2' | 'home3' | 'home4';
type typeMenuElement<genericMenuName> = {
	stringSlot: string;
	stringIcon?: string;
	stringHref?: string;
	stringName: genericMenuName;
	stringPreload?: 'tap' | 'hover' | 'off';
};
type typeRecursive<genericType> = {
	objectMenu: genericType;
	arraySubmenus?: typeRecursive<genericType>;
}[];
type typeMenuArray<genericMenuName = string> = typeRecursive<typeMenuElement<genericMenuName>>;

export type { typeMenuArray };
