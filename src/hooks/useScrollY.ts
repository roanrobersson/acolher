import { useLayoutEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

type UseScrollYOptions = {
	/** A callback that will be called when the scrollY changes */
	callback?: (scrollY: number) => void;
	/**
	 * The debounce time in milliseconds
	 * default: 0
	 */
	debounce?: number;
};

const useScrollY = ({ callback, debounce = 0 }: UseScrollYOptions = {}) => {
	const [scrollY, setScrollY] = useState(0);

	const handleScroll = useDebouncedCallback(() => {
		setScrollY(window.scrollY);
		callback?.(window.scrollY);
	}, debounce);

	useLayoutEffect(() => {
		handleScroll();

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [handleScroll]);

	return scrollY;
};

export default useScrollY;
