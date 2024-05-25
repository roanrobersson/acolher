import type { ThemeConfig } from "tailwindcss/types/config";

type FontSizeConfigObj = ThemeConfig["fontSize"];

const display = {
	"display-xs": [
		"1.5rem", // 24px
		{
			lineHeight: "1.2",
			fontWeight: "500"
		}
	],
	"display-sm": [
		"1.75rem", // 28px
		{
			lineHeight: "1.2",
			fontWeight: "500"
		}
	],
	"display-md": [
		"2rem", // 32px
		{
			lineHeight: "1.2",
			fontWeight: "500"
		}
	],
	"display-lg": [
		"2.25rem", // 36px
		{
			lineHeight: "1.2",
			fontWeight: "500"
		}
	],
	"display-xl": [
		"2.5rem", // 40px
		{
			lineHeight: "1",
			fontWeight: "500"
		}
	],
	"display-2xl": [
		"2.75rem", // 44px
		{
			lineHeight: "1",
			fontWeight: "500"
		}
	],
	"display-3xl": [
		"3rem", // 48px
		{
			lineHeight: "1",
			fontWeight: "500"
		}
	],
	"display-4xl": [
		"3.25rem", // 52px
		{
			lineHeight: "1",
			fontWeight: "500"
		}
	],
	"display-5xl": [
		"3.5rem", // 56px
		{
			lineHeight: "1",
			fontWeight: "500"
		}
	],
	"display-6xl": [
		"3.75rem", // 60px
		{
			lineHeight: "1",
			fontWeight: "500"
		}
	],
	"display-7xl": [
		"4.25rem", // 68px
		{
			lineHeight: "1",
			fontWeight: "500"
		}
	],
	"display-8xl": [
		"5rem", // 80px
		{
			lineHeight: "1",
			fontWeight: "500"
		}
	],
	"display-9xl": [
		"5.5rem", // 88px
		{
			lineHeight: "1",
			fontWeight: "500"
		}
	]
} satisfies FontSizeConfigObj;

const title = {
	"title-sm": [
		"0.875rem", // 14px
		{
			lineHeight: "1.2",
			fontWeight: "700"
		}
	],
	"title-md": [
		"1rem", // 16px
		{
			lineHeight: "1.2",
			fontWeight: "700"
		}
	],
	"title-lg": [
		"1.125rem", // 18px
		{
			lineHeight: "1.2",
			fontWeight: "600"
		}
	],
	"title-xl": [
		"1.25rem", // 20px
		{
			lineHeight: "1.2",
			fontWeight: "600"
		}
	],
	"title-2xl": [
		"1.5rem", // 24px
		{
			lineHeight: "1.2",
			fontWeight: "500"
		}
	],
	"title-3xl": [
		"1.625rem", // 26px
		{
			lineHeight: "1.3",
			fontWeight: "700"
		}
	],
	"title-4xl": [
		"2rem", // 32px
		{
			lineHeight: "1.3",
			fontWeight: "700"
		}
	],
	"title-5xl": [
		"2.25rem", // 36px
		{
			lineHeight: "1.3",
			fontWeight: "700"
		}
	],
	"title-6xl": [
		"3rem", //48px
		{
			lineHeight: "1.3",
			fontWeight: "700"
		}
	]
} satisfies FontSizeConfigObj;

const body = {
	"body-sm": [
		"0.875rem", // 14px
		{
			lineHeight: "1.5",
			fontWeight: "400"
		}
	],
	"body-md": [
		"1rem", // 16px
		{
			lineHeight: "1.5",
			fontWeight: "400"
		}
	],
	"body-lg": [
		"1.125rem", // 18px
		{
			lineHeight: "1.5",
			fontWeight: "400"
		}
	]
} satisfies FontSizeConfigObj;

const input = {
	"input-sm": [
		"1rem", // 16px
		{
			lineHeight: "1.3",
			fontWeight: "400"
		}
	],
	"input-md": [
		"1.25rem", // 20px
		{
			lineHeight: "1.3",
			fontWeight: "400"
		}
	]
} satisfies FontSizeConfigObj;

const action = {
	"action-sm": [
		"0.813rem", // 13px
		{
			lineHeight: "1.75",
			fontWeight: "400"
		}
	],
	"action-md": [
		"0.875rem", // 14px
		{
			lineHeight: "1.75",
			fontWeight: "500"
		}
	],
	"action-lg": [
		"0.938rem", // 15px
		{
			lineHeight: "1.75",
			fontWeight: "600"
		}
	]
} satisfies FontSizeConfigObj;

const sectiontitle = {
	"sectiontitle-md": [
		"0.75rem", // 12px
		{
			lineHeight: "1.2",
			fontWeight: "400",
			letterSpacing: "0.20rem"
		}
	]
} satisfies FontSizeConfigObj;

const hightlight = {
	"hightlight-sm": [
		"1.5rem", // 24px
		{
			lineHeight: "1.2",
			fontWeight: "500"
		}
	],
	"hightlight-md": [
		"1.75rem", // 28px
		{
			lineHeight: "1.2",
			fontWeight: "500"
		}
	]
} satisfies FontSizeConfigObj;

const link = {
	"link-sm": [
		"1rem", // 16px
		{
			lineHeight: "1.4",
			fontWeight: "400"
		}
	],
	"link-md": [
		"1.25rem", // 20px
		{
			lineHeight: "1.4",
			fontWeight: "400"
		}
	]
} satisfies FontSizeConfigObj;

const caption = {
	caption: [
		"0.75rem", // 12px
		{
			lineHeight: "1.3",
			fontWeight: "400"
		}
	]
} satisfies FontSizeConfigObj;

const badge = {
	badge: [
		"0.75rem", // 12px
		{
			lineHeight: "1.3",
			fontWeight: "700"
		}
	]
} satisfies FontSizeConfigObj;

const fontSize = {
	...display,
	...title,
	...body,
	...input,
	...action,
	...sectiontitle,
	...hightlight,
	...link,
	...caption,
	...badge
} satisfies FontSizeConfigObj;

export default fontSize;
