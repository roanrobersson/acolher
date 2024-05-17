import { cva } from "class-variance-authority";
import clsx from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

import colors from "../../tokens/colors";
import fontFamily from "../../tokens/fontFamily";
import fontSize from "../../tokens/fontSize";

type ClassArg = Parameters<typeof clsx>;

const customTwMerge = extendTailwindMerge({
	extend: {
		classGroups: {
			"font-size": [{ text: Object.keys(fontSize) }],
			"font-family": [{ font: Object.keys(fontFamily) }],
			"text-color": [{ text: Object.keys(colors) }]
		}
	}
});

export const customCva: typeof cva = (base, config) => {
	const result = cva(base, config);
	return (props) => customTwMerge(result(props));
};

export const combineClasses = (...classes: ClassArg) => {
	return customTwMerge(clsx(...classes));
};
