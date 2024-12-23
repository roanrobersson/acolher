"use client";

import { ElementRef, forwardRef } from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import CheckCircleIcon from "public/icons/solid/check-circle.svg";

import { cc } from "utils/tailwindUtils";

import type {
	RadioGroupItemProps,
	RadioGroupProps
} from "@radix-ui/react-radio-group";

const RadioGroup = forwardRef<
	ElementRef<typeof RadioGroupPrimitive.Root>,
	RadioGroupProps
>(({ className, ...props }, ref) => {
	return (
		<RadioGroupPrimitive.Root
			className={cc("grid gap-2", className)}
			{...props}
			ref={ref}
		/>
	);
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = forwardRef<
	ElementRef<typeof RadioGroupPrimitive.Item>,
	RadioGroupItemProps
>(({ className, ...props }, ref) => {
	return (
		<RadioGroupPrimitive.Item
			ref={ref}
			className={cc(
				"aspect-square h-5 w-5 rounded-full border-input text-success",
				"focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
				"disabled:cursor-not-allowed disabled:opacity-50",
				"data-[state=unchecked]:border",
				className
			)}
			{...props}
		>
			<RadioGroupPrimitive.Indicator className="flex items-center justify-center">
				<CheckCircleIcon className="h-full w-full" viewBox="2 2 20 20" />
			</RadioGroupPrimitive.Indicator>
		</RadioGroupPrimitive.Item>
	);
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };

export type { RadioGroupItemProps, RadioGroupProps };
