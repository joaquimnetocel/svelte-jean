import type { typeColorScheme } from './stores/storeColorScheme.js';
import type { typeHeaderColor } from './stores/storeHeaderColor.js';
import type { typeSidebarColor } from './stores/storeSidebarColor.js';
import type { typeTextDirection } from './stores/storeTextDirection.js';

export type typeInitialProps = {
	propColorScheme: typeColorScheme;
	propHeaderColor: typeHeaderColor;
	propSidebarColor: typeSidebarColor;
	propTextDirection: typeTextDirection;
	propSidebar: boolean;
	propRightBottom: boolean;
};
