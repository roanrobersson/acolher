import type { RecursiveKeyValuePair } from "tailwindcss/types/config";

const borderRadius = {
	lg: `var(--radius)`,
	md: `calc(var(--radius) - 2px)`,
	sm: "calc(var(--radius) - 4px)"
} satisfies RecursiveKeyValuePair;

export default borderRadius;
