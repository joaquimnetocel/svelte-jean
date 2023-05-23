import type { typeColorScheme } from './stores/storeColorScheme.js';
import type { typeHeaderColor } from './stores/storeHeaderColor.js';
import type { typeSidebarColor } from './stores/storeSidebarColor.js';

export type typeInitialProps = {
	propColorScheme: typeColorScheme;
	propHeaderColor: typeHeaderColor;
	propSidebarColor: typeSidebarColor;
	propSidebar: boolean;
	propRightBottom: boolean;
};
