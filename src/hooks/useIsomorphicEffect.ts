import { useEffect, useLayoutEffect } from "react";

import { isBrowser } from "utils/misc";

const useIsomorphicEffect = isBrowser ? useLayoutEffect : useEffect;

export default useIsomorphicEffect;
