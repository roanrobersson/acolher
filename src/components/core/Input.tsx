"use client";

import { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";

import useCombinedRefs from "hooks/useCombinedRefs";
import { cc } from "utils/tailwind";

export const inputVariants = cva("", {
	variants: {
		size: {
			md: "text-input-sm min-h-[42px]", // height = 42px
			lg: "text-input-md min-h-[52px]" // height = 52px
		}
	},
	defaultVariants: {
		size: "md"
	}
});

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> &
	VariantProps<typeof inputVariants> & {
		inputClassName?: string;
		leftIcon?: ReactNode;
		rightIcon?: ReactNode;
	};

const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{
			className,
			leftIcon,
			rightIcon,
			size = "md",
			inputClassName,
			...restProps
		},
		ref
	) => {
		const { refCallback, ref: inputRef } = useCombinedRefs([ref]);

		return (
			<div
				className={cc(
					inputVariants({ size }),
					"flex h-full rounded-lg border border-input bg-background px-5",
					"focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
					"disabled:cursor-not-allowed disabled:opacity-50",
					{
						"border-0 bg-transparent": restProps.type === "file"
					},
					className
				)}
				onClick={() => {
					inputRef.current?.focus();
				}}
			>
				{leftIcon && (
					<div className="mr-4 flex items-center justify-center">
						{leftIcon}
					</div>
				)}

				<input
					className={cc(
						"w-full overflow-ellipsis text-input-sm focus:outline-none",
						"bg-transparent placeholder:text-muted-foreground",
						inputClassName
					)}
					ref={refCallback}
					{...restProps}
				/>

				{rightIcon && (
					<div className="ml-4 flex items-center justify-center">
						{rightIcon}
					</div>
				)}
			</div>
		);
	}
);

Input.displayName = "Input";

export { Input };

export type { InputProps };
