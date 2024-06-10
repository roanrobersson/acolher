"use client";

import {
	ComponentProps,
	ComponentPropsWithoutRef,
	ElementRef,
	FC,
	forwardRef,
	HTMLAttributes
} from "react";
import { Drawer as DrawerPrimitive } from "vaul"; // https://vaul.emilkowal.ski/

import { combineClasses } from "utils/tailwind";

export type DrawerProps = ComponentProps<typeof DrawerPrimitive.Root>;

const Drawer: FC<DrawerProps> = ({
	shouldScaleBackground = true,
	...props
}) => (
	<DrawerPrimitive.Root
		shouldScaleBackground={shouldScaleBackground}
		{...props}
	/>
);
Drawer.displayName = "Drawer";

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerClose = forwardRef<
	ElementRef<typeof DrawerPrimitive.Close>,
	ComponentPropsWithoutRef<typeof DrawerPrimitive.Close>
>(({ children, ...props }, ref) => (
	<DrawerPrimitive.Close ref={ref} asChild {...props}>
		{children}
	</DrawerPrimitive.Close>
));
DrawerClose.displayName = DrawerPrimitive.Close.displayName;

const DrawerTrigger = forwardRef<
	ElementRef<typeof DrawerPrimitive.Trigger>,
	ComponentPropsWithoutRef<typeof DrawerPrimitive.Trigger>
>(({ children, ...props }, ref) => (
	<DrawerPrimitive.Trigger ref={ref} asChild {...props}>
		{children}
	</DrawerPrimitive.Trigger>
));
DrawerTrigger.displayName = DrawerPrimitive.Trigger.displayName;

const DrawerOverlay = forwardRef<
	ElementRef<typeof DrawerPrimitive.Overlay>,
	ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
	<DrawerPrimitive.Overlay
		ref={ref}
		className={combineClasses("fixed inset-0 z-50 bg-black/60", className)}
		{...props}
	/>
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const DrawerContent = forwardRef<
	ElementRef<typeof DrawerPrimitive.Content>,
	ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
	<DrawerPortal>
		<DrawerOverlay />
		<DrawerPrimitive.Content
			ref={ref}
			className={combineClasses(
				"fixed inset-y-0 right-0 z-50 ml-24 flex h-auto flex-col border bg-white",
				className
			)}
			{...props}
		>
			{children}
		</DrawerPrimitive.Content>
	</DrawerPortal>
));
DrawerContent.displayName = "DrawerContent";

const DrawerHeader: FC<HTMLAttributes<HTMLDivElement>> = ({
	className,
	...props
}) => (
	<div
		className={combineClasses(
			"grid gap-1.5 p-4 text-center sm:text-left",
			className
		)}
		{...props}
	/>
);
DrawerHeader.displayName = "DrawerHeader";

const DrawerFooter: FC<HTMLAttributes<HTMLDivElement>> = ({
	className,
	...props
}) => (
	<div
		className={combineClasses("mt-auto flex flex-col gap-2 p-4", className)}
		{...props}
	/>
);
DrawerFooter.displayName = "DrawerFooter";

const DrawerTitle = forwardRef<
	ElementRef<typeof DrawerPrimitive.Title>,
	ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
	<DrawerPrimitive.Title
		ref={ref}
		className={combineClasses(
			"text-lg font-semibold leading-none tracking-tight",
			className
		)}
		{...props}
	/>
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = forwardRef<
	ElementRef<typeof DrawerPrimitive.Description>,
	ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
	<DrawerPrimitive.Description
		ref={ref}
		className={combineClasses("text-sm text-muted-foreground", className)}
		{...props}
	/>
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

export {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerPortal,
	DrawerTitle,
	DrawerTrigger
};
