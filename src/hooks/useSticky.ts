import { RefCallback, useCallback, useRef, useState } from "react";

import useScrollY from "./useScrollY";

const useSticky = () => {
	const ref = useRef<HTMLElement | null>(null);
	const [offsetTop, setOffsetTop] = useState(0);
	const scrollY = useScrollY();
	const sticky = scrollY > offsetTop;

	const refHandler: RefCallback<HTMLElement> = useCallback((instance) => {
		ref.current = instance;
		if (instance) {
			setOffsetTop(instance.offsetTop);
		}
	}, []);

	return {
		sticky,
		refHandler
	};
};

export default useSticky;
