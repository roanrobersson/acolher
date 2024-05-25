import { useState } from "react";
import resolveConfig from "tailwindcss/resolveConfig";

import { isBrowser } from "utils/misc";

import tailwindConfig from "../../tailwind.config";
import useIsomorphicEffect from "./useIsomorphicEffect";

export type BreakpointKey = keyof typeof config.theme.screens;

export type BreakpointStates = Record<BreakpointKey, boolean>;

type BreakpointsData = Record<BreakpointKey, number | false>;

type ThemeScreenValue = string | { min?: string; max?: string; raw?: string };

type ThemeScreenConfig = Record<BreakpointKey, ThemeScreenValue>;

type UseBreakpointsReturn<T extends BreakpointKey> = {
	current: T | null;
	states: Pick<BreakpointStates, T>;
};

const config = resolveConfig(tailwindConfig);

const breakpointConfigs = config.theme.screens as ThemeScreenConfig;

const breakpointKeys = Object.keys(breakpointConfigs) as BreakpointKey[];

let count = 0;

/**
 * Hook to get the current breakpoint and states of all breakpoints
 *
 * @param list - Array of breakpoints to monitor (default: all breakpoints)
 * @returns
 * - `current`: the current breakpoint key
 * - `states`: an object containing the state of all breakpoints
 */
const useBreakpoints = <T extends BreakpointKey>(
	list: T[] = breakpointKeys as T[]
): UseBreakpointsReturn<T> => {
	const [data, setData] = useState<Pick<BreakpointsData, T>>(() => {
		const obj = {} as Pick<BreakpointsData, T>;
		for (const key of list) {
			obj[key] = false;
		}
		return obj;
	});

	const getStates = (): Pick<BreakpointStates, T> => {
		const states = {} as Pick<BreakpointStates, T>;
		for (const key of list) {
			states[key] = Boolean(data[key]);
		}
		return states;
	};

	const getCurrent = (): T | null => {
		let currentKey: T | null = null;
		for (const key of list) {
			if (!data[key]) continue;
			if (currentKey === null || data[key] > data[currentKey]) {
				currentKey = key;
			}
		}
		return currentKey;
	};

	const updateStates = (key: T, value: boolean): void => {
		let newValue: number | false;
		if (value) {
			newValue = count + 1;
			count += 1;
		} else {
			newValue = false;
		}
		setData((prev) => ({ ...prev, [key]: newValue }));
	};

	const buildQueryString = (value: ThemeScreenValue): string => {
		let str = "";
		if (typeof value === "string") {
			value = {
				min: value
			};
		}
		if (value.raw) return value.raw;
		if (value.min !== undefined) str += `(min-width: ${value.min})`;
		if (value.min !== undefined && value.max !== undefined) str += " and ";
		if (value.max !== undefined) str += `(max-width: ${value.max})`;
		return str;
	};

	useIsomorphicEffect(() => {
		if (!(isBrowser && "matchMedia" in window && window.matchMedia)) {
			return undefined;
		}

		const cleanupList = list.map((key) => {
			const queryString = buildQueryString(breakpointConfigs[key]);
			const query = window.matchMedia(queryString);
			const listener = (event: MediaQueryListEvent) => {
				updateStates(key, event.matches);
			};
			updateStates(key, query.matches);
			query.addEventListener("change", listener);
			return { query, listener };
		});

		return () => {
			cleanupList.forEach(({ query, listener }) => {
				query.removeEventListener("change", listener);
			});
		};
	}, []);

	return { current: getCurrent(), states: getStates() };
};

export default useBreakpoints;
