import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { Loader2 } from "lucide-react";

import { cc } from "utils/tailwind";

import type { VariantProps } from "class-variance-authority";

const buttonVariants = cva(
	[
		"inline-flex items-center justify-center whitespace-nowrap rounded-lg transition-colors",
		"focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none",
		"disabled:pointer-events-none disabled:opacity-50"
	],
	{
		variants: {
			hierarchy: {
				primary: [
					"bg-[--button-primary-background] text-[--button-primary-foreground]",
					"hover:bg-[--button-primary-background_hover] hover:text-[--button-primary-foreground_hover]"
				],
				secondary: [
					"border text-[--button-secondary-foreground] border-[--button-secondary-border]",
					"hover:bg-[--button-secondary-background_hover] hover:border-[--button-secondary-border_hover] hover:text-[--button-secondary-foreground_hover]"
				],
				tertiary: [
					"text-[--button-tertiary-foreground]",
					"hover:bg-[--button-tertiary-background_hover] hover:text-[--button-tertiary-foreground_hover]"
				],
				link: [
					"underline-offset-4 text-[--button-link-foreground]",
					"hover:underline"
				]
			},
			size: {
				sm: "text-action-sm min-h-[32px] px-3", // height = 32px
				md: "text-action-sm min-h-[42px] px-4", // height = 42px
				lg: "text-action-md min-h-[52px] px-5" // height = 52px
			}
		},
		defaultVariants: {
			hierarchy: "primary",
			size: "md"
		}
	}
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
		leftIcon?: ReactNode;
		rightIcon?: React.ReactNode;
		loading?: boolean;
	};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			hierarchy = "primary",
			size = "md",
			asChild = false,
			leftIcon,
			rightIcon,
			loading,
			children,
			...restProps
		},
		ref
	) => {
		const Comp = asChild ? Slot : "button";

		return (
			<Comp
				className={cc(buttonVariants({ hierarchy, size, className }))}
				ref={ref}
				{...restProps}
			>
				<>
					{loading && (
						<Loader2 className="mr-2 h-[1.5em] w-[1.5em] animate-spin" />
					)}

					{leftIcon && (
						<div className="mr-2 flex items-center justify-center">
							{leftIcon}
						</div>
					)}

					{children}

					{rightIcon && (
						<div className="ml-2 flex items-center justify-center">
							{rightIcon}
						</div>
					)}
				</>
			</Comp>
		);
	}
);

Button.displayName = "Button";

export { Button, buttonVariants };

export type { ButtonProps };
