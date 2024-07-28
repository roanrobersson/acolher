import plugin from "tailwindcss/plugin";

import backgroundImage from "./tokens/backgroundImage";
import colors from "./tokens/colors";
import fontFamily from "./tokens/fontFamily";
import fontSize from "./tokens/fontSize";
import screens from "./tokens/screens";

import type { Config } from "tailwindcss";

const config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}"
	],
	darkMode: "selector",
	theme: {
		screens,
		fontFamily,
		fontSize,
		container: {
			center: true
		},
		extend: {
			backgroundImage,
			colors,
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" }
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" }
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out"
			}
		}
	},
	plugins: [
		plugin(function ({ addComponents }) {
			addComponents({
				".___example-class": {
					"background-color": "green",
					"@apply bg-red-600 text-primary-500 font-bold": {}
				}
			});
		}),
		require("tailwindcss-animate")
	]
} satisfies Config;

export default config;
