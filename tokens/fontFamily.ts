import type { ThemeConfig } from "tailwindcss/types/config";

type FontFamilyConfigObj = ThemeConfig["fontFamily"];

const fontFamily = {
	plusJakartaSans: ["var(--font-plus-jakarta-sans)", "sans-serif"],
	clashDisplay: ["var(--font-clash-display)", "sans-serif"]
} satisfies FontFamilyConfigObj;

export default fontFamily;
