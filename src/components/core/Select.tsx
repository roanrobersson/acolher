"use client";

import { ComponentPropsWithoutRef, ElementRef, FC, forwardRef } from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

import { combineClasses } from "utils/tailwind";

import type {
	SelectContentProps,
	SelectGroupProps,
	SelectItemProps,
	SelectProps,
	SelectScrollDownButtonProps,
	SelectScrollUpButtonProps,
	SelectSeparatorProps,
	SelectTriggerProps,
	SelectValueProps
} from "@radix-ui/react-select";

const Select: FC<SelectProps> = ({ ...props }) => (
	<SelectPrimitive.Root {...props} />
);
Select.displayName = SelectPrimitive.Root.displayName;

const SelectGroup = forwardRef<
	ElementRef<typeof SelectPrimitive.Group>,
	SelectGroupProps
>(({ className, ...props }, ref) => (
	<SelectPrimitive.Group
		ref={ref}
		className={combineClasses("py-1", className)}
		{...props}
	/>
));
SelectGroup.displayName = SelectPrimitive.Group.displayName;

const SelectValue = forwardRef<
	ElementRef<typeof SelectPrimitive.Value>,
	SelectValueProps
>(({ className, ...props }, ref) => (
	<SelectPrimitive.Value
		ref={ref}
		className={combineClasses("text-input-sm", className)}
		{...props}
	/>
));
SelectValue.displayName = SelectPrimitive.Value.displayName;

const SelectTrigger = forwardRef<
	ElementRef<typeof SelectPrimitive.Trigger>,
	SelectTriggerProps
>(({ className, children, ...props }, ref) => (
	<SelectPrimitive.Trigger
		ref={ref}
		className={combineClasses(
			"border-input bg-background border px-5 py-2 text-input-sm",
			"flex min-h-[52px] w-full items-center justify-between rounded-lg",
			"placeholder:text-muted-foreground [&>span]:line-clamp-1",
			"focus-within:ring-ring focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2",
			"disabled:cursor-not-allowed disabled:opacity-50",
			className
		)}
		{...props}
	>
		{children}
		<SelectPrimitive.Icon asChild>
			<ChevronDown className="h-4 w-4 opacity-50" />
		</SelectPrimitive.Icon>
	</SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = forwardRef<
	ElementRef<typeof SelectPrimitive.ScrollUpButton>,
	SelectScrollUpButtonProps
>(({ className, ...props }, ref) => (
	<SelectPrimitive.ScrollUpButton
		ref={ref}
		className={combineClasses(
			"flex cursor-default items-center justify-center py-1",
			className
		)}
		{...props}
	>
		<ChevronUp className="h-4 w-4" />
	</SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = forwardRef<
	ElementRef<typeof SelectPrimitive.ScrollDownButton>,
	SelectScrollDownButtonProps
>(({ className, ...props }, ref) => (
	<SelectPrimitive.ScrollDownButton
		ref={ref}
		className={combineClasses(
			"flex cursor-default items-center justify-center py-1",
			className
		)}
		{...props}
	>
		<ChevronDown className="h-4 w-4" />
	</SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName =
	SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = forwardRef<
	ElementRef<typeof SelectPrimitive.Content>,
	SelectContentProps
>(({ className, children, position = "popper", ...props }, ref) => (
	<SelectPrimitive.Portal>
		<SelectPrimitive.Content
			ref={ref}
			className={combineClasses(
				"bg-popover text-popover-foreground relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border shadow-md",
				"data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
				position === "popper" &&
					"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
				className
			)}
			position={position}
			{...props}
		>
			<SelectScrollUpButton />
			<SelectPrimitive.Viewport
				className={combineClasses(
					"p-1",
					position === "popper" &&
						"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
				)}
			>
				{children}
			</SelectPrimitive.Viewport>
			<SelectScrollDownButton />
		</SelectPrimitive.Content>
	</SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = forwardRef<
	ElementRef<typeof SelectPrimitive.Label>,
	ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
	<SelectPrimitive.Label
		ref={ref}
		className={combineClasses(
			"py-1.5 pl-8 pr-2 text-input-sm font-semibold",
			className
		)}
		{...props}
	/>
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = forwardRef<
	ElementRef<typeof SelectPrimitive.Item>,
	SelectItemProps
>(({ className, children, ...props }, ref) => (
	<SelectPrimitive.Item
		ref={ref}
		className={combineClasses(
			"relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-input-sm outline-none",
			"focus:bg-accent focus:text-accent-foreground",
			"data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
			className
		)}
		{...props}
	>
		<span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
			<SelectPrimitive.ItemIndicator>
				<Check className="h-4 w-4" />
			</SelectPrimitive.ItemIndicator>
		</span>

		<SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
	</SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = forwardRef<
	ElementRef<typeof SelectPrimitive.Separator>,
	SelectSeparatorProps
>(({ className, ...props }, ref) => (
	<SelectPrimitive.Separator
		ref={ref}
		className={combineClasses("bg-muted -mx-1 my-1 h-px", className)}
		{...props}
	/>
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectScrollDownButton,
	SelectScrollUpButton,
	SelectSeparator,
	SelectTrigger,
	SelectValue
};

export type {
	SelectContentProps,
	SelectItemProps,
	SelectProps,
	SelectScrollDownButtonProps,
	SelectScrollUpButtonProps,
	SelectSeparatorProps,
	SelectTriggerProps
};
