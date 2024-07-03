"use client";

import { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";

import useCombinedRefs from "hooks/useCombinedRefs";
import { combineClasses } from "utils/tailwind";

import { Label } from "./Label";

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
		label?: string;
		helperText?: string;
		inputClassName?: string;
		leftIcon?: ReactNode;
		rightIcon?: ReactNode;
		error?: boolean;
	};

const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{
			className,
			label,
			helperText,
			leftIcon,
			rightIcon,
			error,
			size = "md",
			inputClassName,
			...restProps
		},
		ref
	) => {
		const { refCallback, ref: inputRef } = useCombinedRefs([ref]);

		return (
			<div className={combineClasses("grid", className)}>
				{label && (
					<Label
						className={combineClasses("mb-2 text-title-sm", {
							"text-destructive": error
						})}
						htmlFor={restProps.id}
					>
						{label}
					</Label>
				)}

				<div
					className={combineClasses(
						inputVariants({ size }),
						"border-input bg-background flex h-full rounded-lg border px-5",
						"focus-within:ring-ring focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2",
						"disabled:cursor-not-allowed disabled:opacity-50",
						{
							"border-0 bg-transparent": restProps.type === "file",
							"focus-within:destructive bg-destructive/20": error
						}
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
						className={combineClasses(
							"w-full overflow-ellipsis text-input-sm focus:outline-none",
							"placeholder:text-muted-foreground bg-transparent",
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

				{helperText && (
					<p
						className={combineClasses("text-muted-foreground text-body-sm", {
							"text-destructive": error
						})}
					>
						{helperText}
					</p>
				)}
			</div>
		);
	}
);

Input.displayName = "Input";

export { Input };

export type { InputProps };
