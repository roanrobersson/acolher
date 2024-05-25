import { useLayoutEffect, useState } from "react";

const useScrollY = (callback?: (scrollY: number) => void) => {
	const [scrollY, setScrollY] = useState(0);

	useLayoutEffect(() => {
		const handleScroll = () => {
			callback?.(window.scrollY);
			setScrollY(window.scrollY);
		};

		handleScroll();

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return scrollY;
};

export default useScrollY;
