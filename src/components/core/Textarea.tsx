import * as React from "react";

import { cc } from "utils/tailwindUtils";

import { Label } from "./Label";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
	label?: string;
	helperText?: string;
	textareaClassName?: string;
	error?: boolean;
};

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
	(
		{ className, label, helperText, error, textareaClassName, ...restProps },
		ref
	) => {
		return (
			<div className={cc("grid", className)}>
				{label && (
					<Label
						className={cc("mb-2 text-title-sm", {
							"text-destructive": error
						})}
						htmlFor={restProps.id}
					>
						{label}
					</Label>
				)}

				<textarea
					className={cc(
						"flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-input-sm placeholder:text-muted-foreground",
						"focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
						"disabled:cursor-not-allowed disabled:opacity-50",
						{
							"focus-within:destructive bg-destructive/20": error
						},
						textareaClassName
					)}
					ref={ref}
					{...restProps}
				/>

				{helperText && (
					<p
						className={cc("text-body-sm text-muted-foreground", {
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
Textarea.displayName = "Textarea";

export { Textarea };

export type { TextareaProps };
