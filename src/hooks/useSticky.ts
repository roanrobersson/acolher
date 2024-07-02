import { RefCallback, useCallback, useRef, useState } from "react";

import useScrollY from "./useScrollY";

type UseStickyOptions = {
	/**
	 * The debounce time in milliseconds
	 * default: 100
	 */
	debounce?: number;
};

const useSticky = ({ debounce = 100 }: UseStickyOptions = {}) => {
	const ref = useRef<HTMLElement | null>(null);
	const [offsetTop, setOffsetTop] = useState(0);
	const scrollY = useScrollY({ debounce });
	const sticky = scrollY > offsetTop;

	const refHandler: RefCallback<HTMLElement> = useCallback((instance) => {
		ref.current = instance;
		if (instance) {
			setOffsetTop(instance.offsetTop);
		}
	}, []);

	return { sticky, refHandler };
};

export default useSticky;
