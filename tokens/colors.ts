import type { RecursiveKeyValuePair } from "tailwindcss/types/config";

const mainColors = {
	inherit: "inherit",
	current: "currentColor",
	transparent: "transparent",
	white: "#ffffff",
	black: "#000000",
	primary: {
		"50": "#eef2ff",
		"100": "#dae2ff",
		"200": "#bdccff",
		"300": "#90acff",
		"400": "#587dff", // main
		"500": "#3554fc",
		"600": "#1f31f1",
		"700": "#171ede",
		"800": "#191bb4",
		"900": "#1a1e8e",
		"950": "#151556"
	},
	gray: {
		"50": "#FAFAFA",
		"100": "#F5F5F5",
		"200": "#EEEEEE",
		"300": "#E0E0E0",
		"400": "#BDBDBD",
		"500": "#9E9E9E",
		"600": "#757575",
		"700": "#616161",
		"800": "#424242",
		"900": "#212121"
	},
	dark: {
		"50": "#f5f6fa",
		"100": "#eaedf4",
		"200": "#d0d8e7",
		"300": "#a7b7d2",
		"400": "#7890b8",
		"500": "#5772a0",
		"600": "#435a86",
		"700": "#384a6c",
		"800": "#313f5b",
		"900": "#262f42", // main
		"950": "#1e2433"
	},
	"dark-gray": {
		"50": "#f6f7f9",
		"100": "#eceef2",
		"200": "#d4d8e3",
		"300": "#afb7ca",
		"400": "#8491ac",
		"500": "#657392",
		"600": "#505b79",
		"700": "#414a63",
		"800": "#383f52", // main
		"900": "#333847",
		"950": "#22252f"
	},
	"light-blue": {
		"50": "#f1f9fe",
		"100": "#e2f3fc",
		"200": "#bee7f9",
		"300": "#96daf6", // main
		"400": "#43beed",
		"500": "#1ba6dc",
		"600": "#0e85bb",
		"700": "#0c6a98",
		"800": "#0e5a7e",
		"900": "#124b68",
		"950": "#0c3045"
	},
	blue: {
		"50": "#eef2ff",
		"100": "#dae2ff",
		"200": "#bdccff",
		"300": "#90acff",
		"400": "#587dff", // main
		"500": "#3554fc",
		"600": "#1f31f1",
		"700": "#171ede",
		"800": "#191bb4",
		"900": "#1a1e8e",
		"950": "#151556"
	},
	success: {
		"50": "#edfcf3",
		"100": "#d4f7e1",
		"200": "#adedc8",
		"300": "#78dda9",
		"400": "#49c88b", // main
		"500": "#1eab6c",
		"600": "#118a56",
		"700": "#0e6e48",
		"800": "#0d583a",
		"900": "#0c4831",
		"950": "#06281c"
	},
	warning: {
		"50": "#fef9ee",
		"100": "#fdf2d7",
		"200": "#fae0ae",
		"300": "#f6c97b",
		"400": "#f2ad51", // main
		"500": "#ed8e22",
		"600": "#df7417",
		"700": "#b95915",
		"800": "#934719",
		"900": "#773c17",
		"950": "#401d0a"
	},
	danger: {
		"50": "#fef2f2",
		"100": "#ffe1e1",
		"200": "#ffc9c9",
		"300": "#fea3a3",
		"400": "#fa5757", // main
		"500": "#f24141",
		"600": "#e02222",
		"700": "#bc1919",
		"800": "#9c1818",
		"900": "#811b1b",
		"950": "#460909"
	}
} satisfies RecursiveKeyValuePair;

const semanticColors = {
	background: "#ffffff",
	foreground: "#191c25",
	muted: "#e8ebf5",
	"muted-foreground": "#BDBDBD",
	card: "#ffffff",
	"card-foreground": "#191c25",
	popover: "#ffffff",
	"popover-foreground": "#191c25",
	border: "#d6dbe7",
	input: "#d6dbe7",
	"primary-foreground": "#f7faff",
	secondary: "#e8ebf5",
	"secondary-foreground": "#191c25",
	accent: "#e8ebf5",
	"accent-foreground": "#191c25",
	destructive: "#f24141",
	"destructive-foreground": "#f7faff",
	ring: "#3554fc"
} satisfies RecursiveKeyValuePair;

const colors = { ...mainColors, ...semanticColors };

export default colors;
