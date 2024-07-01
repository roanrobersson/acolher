"use client";

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { combineClasses } from "utils/tailwind";

export type SwitchProps = ComponentPropsWithoutRef<
	typeof SwitchPrimitives.Root
>;

const Switch = forwardRef<
	ElementRef<typeof SwitchPrimitives.Root>,
	SwitchProps
>(({ className, ...props }, ref) => (
	<SwitchPrimitives.Root
		className={combineClasses(
			"peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors",
			"data-[state=checked]:bg-blue-400 data-[state=unchecked]:bg-gray-300",
			"focus-visible:ring-ring focus-visible:ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
			"disabled:cursor-not-allowed disabled:opacity-50",
			className
		)}
		{...props}
		ref={ref}
	>
		<SwitchPrimitives.Thumb
			className={combineClasses(
				"pointer-events-none block h-5 w-5 rounded-full bg-blue-400 shadow-lg ring-0 transition-transform",
				"data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 data-[state=checked]:bg-white"
			)}
		/>
	</SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export default Switch;
