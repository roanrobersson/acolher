import useBreakpoints, { BreakpointKey } from "./useBreakpoints";

export type UseBreakpointValueConfig<T> = Partial<
	Record<BreakpointKey | "default", T>
>;

/**
 * Hook to get the value based on the current breakpoint
 *
 * @param config - Object containing values for each breakpoint
 * @returns The value based on the current breakpoint
 */
const useBreakpointValue = <T>(
	config: UseBreakpointValueConfig<T>
): T | undefined => {
	const { current } = useBreakpoints(
		Object.keys(config).filter((k) => k !== "default") as BreakpointKey[]
	);

	const getValue = (): T | undefined => {
		if (current === null) return config.default;
		if (current in config) return config[current] as T;
		return config.default;
	};

	return getValue();
};

export default useBreakpointValue;
