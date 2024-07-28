"use client";

import {
	ComponentPropsWithoutRef,
	createContext,
	ElementRef,
	forwardRef,
	HTMLAttributes,
	useContext,
	useId
} from "react";
import {
	Controller,
	ControllerProps,
	FieldPath,
	FieldValues,
	FormProvider,
	useFormContext
} from "react-hook-form";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";

import { cc } from "utils/tailwind";

import { Label } from "./Label";

const Form = FormProvider;

type FormFieldContextValue<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
	name: TName;
};

const FormFieldContext = createContext<FormFieldContextValue>(
	{} as FormFieldContextValue
);

type FormFieldProps<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = ControllerProps<TFieldValues, TName>;

const FormField = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
	...props
}: FormFieldProps<TFieldValues, TName>) => {
	return (
		<FormFieldContext.Provider value={{ name: props.name }}>
			<Controller {...props} />
		</FormFieldContext.Provider>
	);
};

const useFormField = () => {
	const fieldContext = useContext(FormFieldContext);
	const itemContext = useContext(FormItemContext);
	const { getFieldState, formState } = useFormContext();

	const fieldState = getFieldState(fieldContext.name, formState);

	if (!fieldContext) {
		throw new Error("useFormField should be used within <FormField>");
	}

	const { id } = itemContext;

	return {
		id,
		name: fieldContext.name,
		formItemId: `${id}-form-item`,
		formDescriptionId: `${id}-form-item-description`,
		formMessageId: `${id}-form-item-message`,
		...fieldState
	};
};

type FormItemContextValue = {
	id: string;
};

const FormItemContext = createContext<FormItemContextValue>(
	{} as FormItemContextValue
);

type FormItemProps = HTMLAttributes<HTMLDivElement>;

const FormItem = forwardRef<HTMLDivElement, FormItemProps>(
	({ className, ...props }, ref) => {
		const id = useId();

		return (
			<FormItemContext.Provider value={{ id }}>
				<div ref={ref} className={cc("space-y-2", className)} {...props} />
			</FormItemContext.Provider>
		);
	}
);
FormItem.displayName = "FormItem";

type FormLabelProps = ComponentPropsWithoutRef<typeof LabelPrimitive.Root>;

const FormLabel = forwardRef<
	ElementRef<typeof LabelPrimitive.Root>,
	FormLabelProps
>(({ className, ...props }, ref) => {
	const { error, formItemId } = useFormField();

	return (
		<Label
			ref={ref}
			className={cc(error && "text-destructive", className)}
			htmlFor={formItemId}
			{...props}
		/>
	);
});
FormLabel.displayName = "FormLabel";

type FormControlProps = ComponentPropsWithoutRef<typeof Slot>;

const FormControl = forwardRef<ElementRef<typeof Slot>, FormControlProps>(
	({ ...props }, ref) => {
		const { error, formItemId, formDescriptionId, formMessageId } =
			useFormField();

		return (
			<Slot
				ref={ref}
				id={formItemId}
				aria-describedby={
					!error
						? `${formDescriptionId}`
						: `${formDescriptionId} ${formMessageId}`
				}
				aria-invalid={!!error}
				{...props}
			/>
		);
	}
);
FormControl.displayName = "FormControl";

type FormDescriptionProps = HTMLAttributes<HTMLParagraphElement>;

const FormDescription = forwardRef<HTMLParagraphElement, FormDescriptionProps>(
	({ className, ...props }, ref) => {
		const { formDescriptionId } = useFormField();

		return (
			<p
				ref={ref}
				id={formDescriptionId}
				className={cc("text-sm text-muted-foreground", className)}
				{...props}
			/>
		);
	}
);
FormDescription.displayName = "FormDescription";

type FormMessageProps = HTMLAttributes<HTMLParagraphElement>;

const FormMessage = forwardRef<HTMLParagraphElement, FormMessageProps>(
	({ className, children, ...props }, ref) => {
		const { error, formMessageId } = useFormField();
		const body = error ? String(error?.message) : children;

		if (!body) {
			return null;
		}

		return (
			<p
				ref={ref}
				id={formMessageId}
				className={cc("text-sm font-medium text-destructive", className)}
				{...props}
			>
				{body}
			</p>
		);
	}
);
FormMessage.displayName = "FormMessage";

export {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	useFormField
};

export type {
	FormControlProps,
	FormDescriptionProps,
	FormFieldContextValue,
	FormFieldProps,
	FormItemContextValue,
	FormItemProps,
	FormLabelProps,
	FormMessageProps
};
