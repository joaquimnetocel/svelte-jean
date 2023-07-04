// https://github.com/Th1nkK1D/svelte-use-click-outside
export function functionClickOutside(node: HTMLElement, handler: () => void) {
	const handleClick = (event: MouseEvent) => {
		if (node && !node.contains(event.target as HTMLElement) && !event.defaultPrevented) {
			handler();
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		},
	};
}
