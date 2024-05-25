// https://github.com/pmndrs/zustand/blob/833f57ed131e94f3ed48627d4cfbf09cb9c7df03/src/react.ts#L20-L23
export const isSSR =
	typeof window === "undefined" ||
	!window.navigator ||
	/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);

export const isBrowser = !isSSR;

export const debounce = <F extends (...args: any[]) => any>(
	func: F,
	delay: number
): ((...args: Parameters<F>) => void) => {
	let inDebounce: ReturnType<typeof setTimeout> | null;

	return function (...args: Parameters<F>) {
		if (inDebounce) clearTimeout(inDebounce);

		inDebounce = setTimeout(() => func(...args), delay);
	};
};
