"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva } from "class-variance-authority";

import { cc } from "utils/tailwindUtils";

import type { LabelProps as LabelPrimitiveProps } from "@radix-ui/react-label";
import type { VariantProps } from "class-variance-authority";

const labelVariants = cva(
	"text-title-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

type LabelProps = LabelPrimitiveProps & VariantProps<typeof labelVariants>;

const Label = React.forwardRef<
	React.ElementRef<typeof LabelPrimitive.Root>,
	LabelProps
>(({ className, ...props }, ref) => (
	<LabelPrimitive.Root
		ref={ref}
		className={cc(labelVariants(), className)}
		{...props}
	/>
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };

export type { LabelProps };
