import type { RecursiveKeyValuePair } from "tailwindcss/types/config";

const colors = {
	inherit: "inherit",
	current: "currentColor",
	transparent: "transparent",
	white: "#ffffff",
	black: "#000000",
	primary: {
		DEFAULT: "var(--primary)",
		"100": "var(--primary-100)",
		"200": "var(--primary-200)",
		"300": "var(--primary-300)",
		"400": "var(--primary-400)",
		"500": "var(--primary-500)",
		"600": "var(--primary-600)",
		"700": "var(--primary-700)",
		"800": "var(--primary-800)",
		"900": "var(--primary-900)",
		foreground: "var(--primary-foreground)"
	},
	secondary: {
		DEFAULT: "var(--secondary)",
		"100": "var(--secondary-100)",
		"200": "var(--secondary-200)",
		"300": "var(--secondary-300)",
		"400": "var(--secondary-400)",
		"500": "var(--secondary-500)",
		"600": "var(--secondary-600)",
		"700": "var(--secondary-700)",
		"800": "var(--secondary-800)",
		"900": "var(--secondary-900)",
		foreground: "var(--secondary-foreground)"
	},
	neutral: {
		DEFAULT: "var(--neutral)",
		"100": "var(--neutral-100)",
		"200": "var(--neutral-200)",
		"300": "var(--neutral-300)",
		"400": "var(--neutral-400)",
		"500": "var(--neutral-500)",
		"600": "var(--neutral-600)",
		"700": "var(--neutral-700)",
		"800": "var(--neutral-800)",
		"900": "var(--neutral-900)",
		foreground: "var(--neutral-foreground)"
	},
	"dark-gray": {
		DEFAULT: "var(--dark-gray)",
		"100": "var(--dark-gray-100)",
		"200": "var(--dark-gray-200)",
		"300": "var(--dark-gray-300)",
		"400": "var(--dark-gray-400)",
		"500": "var(--dark-gray-500)",
		"600": "var(--dark-gray-600)",
		"700": "var(--dark-gray-700)",
		"800": "var(--dark-gray-800)",
		"900": "var(--dark-gray-900)",
		foreground: "var(--dark-gray-foreground)"
	},
	"blue-gray": {
		DEFAULT: "var(--blue-gray)",
		"100": "var(--blue-gray-100)",
		"200": "var(--blue-gray-200)",
		"300": "var(--blue-gray-300)",
		"400": "var(--blue-gray-400)",
		"500": "var(--blue-gray-500)",
		"600": "var(--blue-gray-600)",
		"700": "var(--blue-gray-700)",
		"800": "var(--blue-gray-800)",
		"900": "var(--blue-gray-900)",
		foreground: "var(--blue-gray-foreground)"
	},
	success: {
		DEFAULT: "var(--success)",
		foreground: "var(--success-foreground)"
	},
	danger: {
		DEFAULT: "var(--danger)",
		foreground: "var(--danger-foreground)"
	},
	destructive: {
		DEFAULT: "var(--destructive)",
		foreground: "var(--destructive-foreground)"
	},
	border: "var(--border)",
	input: "var(--input)",
	ring: "var(--ring)",
	background: "var(--background)",
	foreground: "var(--foreground)",
	muted: {
		DEFAULT: "var(--muted)",
		foreground: "var(--muted-foreground)"
	},
	accent: {
		DEFAULT: "var(--accent)",
		foreground: "var(--accent-foreground)"
	},
	popover: {
		DEFAULT: "var(--popover)",
		foreground: "var(--popover-foreground)"
	},
	card: {
		DEFAULT: "var(--card)",
		foreground: "var(--card-foreground)"
	},
	"button-primary": {
		background: "var(--button-primary)",
		background_hover: "var(--button-primary_hover)",
		foreground: "var(--button-primary-foreground)",
		foreground_hover: "var(--button-primary-foreground_hover)"
	},
	"button-secondary": {
		background_hover: "var(--button-secondary_hover)",
		border: "var(--button-secondary-border)",
		border_hover: "var(--button-secondary-border_hover)",
		foreground: "var(--button-secondary-foreground)",
		foreground_hover: "var(--button-secondary-foreground_hover)"
	},
	"button-tertiary": {
		background_hover: "var(--button-tertiary_hover)",
		foreground: "var(--button-tertiary-foreground)",
		foreground_hover: "var(--button-tertiary-foreground_hover)"
	},
	"button-link": {
		background: "var(--button-link)",
		background_hover: "var(--button-link_hover)",
		border: "var(--button-link-border)",
		border_hover: "var(--button-link-border_hover)",
		foreground: "var(--button-link-foreground)",
		foreground_hover: "var(--button-link-foreground_hover)"
	}
} satisfies RecursiveKeyValuePair;

export default colors;
