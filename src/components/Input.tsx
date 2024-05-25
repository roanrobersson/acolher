"use client";

import { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";

import useCombinedRefs from "hooks/useCombinedRefs";
import { combineClasses } from "utils/tailwind";

export const inputVariants = cva("", {
	variants: {
		size: {
			md: "text-action-sm min-h-[42px]", // height = 42px
			lg: "text-action-md min-h-[52px]" // height = 52px
		}
	},
	defaultVariants: {
		size: "md"
	}
});

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> &
	VariantProps<typeof inputVariants> & {
		label?: string;
		inputClassName?: string;
		leftIcon?: ReactNode;
		rightIcon?: ReactNode;
	};

const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{ className, label, leftIcon, rightIcon, size = "md", ...restProps },
		ref
	) => {
		const { refCallback, ref: inputRef } = useCombinedRefs([ref]);

		return (
			<div className={combineClasses("grid", className)}>
				{label && (
					<label className="mb-2 text-title-sm" htmlFor={restProps.id}>
						{label}
					</label>
				)}

				<div
					className={combineClasses(
						inputVariants({ size }),
						"text-sm ring-offset-background flex h-full rounded-lg bg-gray-50 px-5",
						"focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2",
						"file:bg-transparent",
						"disabled:cursor-not-allowed disabled:opacity-50"
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
							"bg-transparent placeholder:text-gray-400"
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
			</div>
		);
	}
);

Input.displayName = "Input";

export default Input;
