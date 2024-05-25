import { cva } from "class-variance-authority";
import clsx from "clsx";
import { extendTailwindMerge } from "tailwind-merge";
import resolveConfig from "tailwindcss/resolveConfig";

import twConfig from "../../tailwind.config";
import backgroundImage from "../../tokens/backgroundImage";
import colors from "../../tokens/colors";
import fontFamily from "../../tokens/fontFamily";
import fontSize from "../../tokens/fontSize";

type ClassArg = Parameters<typeof clsx>;

const customTwMerge = extendTailwindMerge({
	override: {
		classGroups: {
			"font-size": [{ text: Object.keys(fontSize) }],
			"font-family": [{ font: Object.keys(fontFamily) }],
			"text-color": [{ text: Object.keys(colors) }]
		}
	},
	extend: {
		classGroups: {
			"bg-image": [{ bg: Object.keys(backgroundImage) }]
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

export const tailwindConfig = resolveConfig(twConfig);
