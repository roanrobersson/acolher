import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { Loader2 } from "lucide-react";

import { combineClasses } from "utils/tailwind";

import type { VariantProps } from "class-variance-authority";

export const iconButtonVariants = cva(
	[
		"inline-flex items-center justify-center whitespace-nowrap rounded-lg transition-colors",
		"focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none",
		"disabled:pointer-events-none disabled:opacity-50",
		"dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300"
	],
	{
		variants: {
			variant: {
				solid: null,
				outline: "border",
				ghost: null,
				link: "underline-offset-4 hover:underline"
			},
			color: {
				primary: null,
				secondary: null
			},
			size: {
				sm: "text-action-sm min-w-[32px] min-h-[32px]", // height = 32px
				md: "text-action-sm min-w-[42px] min-h-[42px]", // height = 42px
				lg: "text-action-md min-w-[52px] min-h-[52px]" // height = 52px
			}
		},
		compoundVariants: [
			// Solid
			{
				variant: "solid",
				color: "primary",
				className: [
					"bg-gradient-to-br from-blue-400 to-blue-500 text-white",
					"hover:from-blue-500 hover:to-blue-600"
				]
			},
			{
				variant: "solid",
				color: "secondary",
				className: "bg-gray-900 hover:bg-black text-white"
			},

			// Outline
			{
				variant: "outline",
				color: "primary",
				className: [
					"border-blue-300 text-blue-500",
					"hover:bg-blue-100 hover:border-blue-500 hover:bg-opacity-50"
				]
			},
			{
				variant: "outline",
				color: "secondary",
				className: [
					"border-gray-700",
					"hover:bg-gray-100 hover:border-gray-900  hover:bg-opacity-50"
				]
			},

			// Ghost
			{
				variant: "ghost",
				color: "primary",
				className: "text-blue-500 hover:bg-blue-100 hover:bg-opacity-50"
			},
			{
				variant: "ghost",
				color: "secondary",
				className: "text-black hover:bg-gray-200 hover:bg-opacity-50"
			},

			// Link
			{
				variant: "link",
				color: "primary",
				className: "text-blue-500 hover:bg-blue-100 hover:bg-opacity-50"
			},
			{
				variant: "link",
				color: "secondary",
				className: "text-black hover:bg-gray-200 hover:bg-opacity-50"
			}
		],
		defaultVariants: {
			variant: "solid",
			color: "primary",
			size: "md"
		}
	}
);

export type IconButtonProps = Omit<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	"color"
> &
	VariantProps<typeof iconButtonVariants> & {
		asChild?: boolean;
		loading?: boolean;
	};

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
	(
		{
			className,
			variant = "solid",
			size = "md",
			color = "primary",
			asChild = false,
			loading,
			children,
			...restProps
		},
		ref
	) => {
		const Comp = asChild ? Slot : "button";

		return (
			<Comp
				className={combineClasses(
					iconButtonVariants({ variant, size, color, className })
				)}
				ref={ref}
				{...restProps}
			>
				<>
					{loading && (
						<Loader2 className="mr-2 h-[1.5em] w-[1.5em] animate-spin" />
					)}

					{!loading && children}
				</>
			</Comp>
		);
	}
);

IconButton.displayName = "Button";

export default IconButton;