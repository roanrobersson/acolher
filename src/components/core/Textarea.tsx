import * as React from "react";

import { combineClasses } from "utils/tailwind";

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

				<textarea
					className={combineClasses(
						"border-input bg-background placeholder:text-muted-foreground flex min-h-[80px] w-full rounded-md border px-3 py-2 text-input-sm",
						"focus-within:ring-ring focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2",
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
Textarea.displayName = "Textarea";

export { Textarea };

export type { TextareaProps };
