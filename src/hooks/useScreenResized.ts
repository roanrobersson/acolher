import { useLayoutEffect } from "react";

const useScreenResized = (callback: () => void) => {
	useLayoutEffect(() => {
		const handleResize = () => {
			callback();
		};

		handleResize();

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return;
};

export default useScreenResized;
