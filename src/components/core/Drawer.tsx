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

import { cc } from "utils/tailwind";

type DrawerProps = ComponentProps<typeof DrawerPrimitive.Root>;

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

type DrawerCloseProps = ComponentPropsWithoutRef<typeof DrawerPrimitive.Close>;

const DrawerClose = forwardRef<
	ElementRef<typeof DrawerPrimitive.Close>,
	DrawerCloseProps
>(({ children, ...props }, ref) => (
	<DrawerPrimitive.Close ref={ref} asChild {...props}>
		{children}
	</DrawerPrimitive.Close>
));
DrawerClose.displayName = DrawerPrimitive.Close.displayName;

type DrawerTriggerProps = ComponentPropsWithoutRef<
	typeof DrawerPrimitive.Trigger
>;

const DrawerTrigger = forwardRef<
	ElementRef<typeof DrawerPrimitive.Trigger>,
	DrawerTriggerProps
>(({ children, ...props }, ref) => (
	<DrawerPrimitive.Trigger ref={ref} asChild {...props}>
		{children}
	</DrawerPrimitive.Trigger>
));
DrawerTrigger.displayName = DrawerPrimitive.Trigger.displayName;

type DrawerOverlayProps = ComponentPropsWithoutRef<
	typeof DrawerPrimitive.Overlay
>;

const DrawerOverlay = forwardRef<
	ElementRef<typeof DrawerPrimitive.Overlay>,
	DrawerOverlayProps
>(({ className, ...props }, ref) => (
	<DrawerPrimitive.Overlay
		ref={ref}
		className={cc("fixed inset-0 z-50 bg-black/60", className)}
		{...props}
	/>
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

type DrawerContentProps = ComponentPropsWithoutRef<
	typeof DrawerPrimitive.Content
>;

const DrawerContent = forwardRef<
	ElementRef<typeof DrawerPrimitive.Content>,
	DrawerContentProps
>(({ className, children, ...props }, ref) => (
	<DrawerPortal>
		<DrawerOverlay />
		<DrawerPrimitive.Content
			ref={ref}
			className={cc(
				"fixed inset-y-0 right-0 z-50 ml-24 flex h-auto flex-col border bg-card",
				className
			)}
			{...props}
		>
			{children}
		</DrawerPrimitive.Content>
	</DrawerPortal>
));
DrawerContent.displayName = "DrawerContent";

type DrawerHeaderProps = HTMLAttributes<HTMLDivElement>;

const DrawerHeader: FC<DrawerHeaderProps> = ({ className, ...props }) => (
	<div
		className={cc("grid gap-1.5 p-4 text-center sm:text-left", className)}
		{...props}
	/>
);
DrawerHeader.displayName = "DrawerHeader";

type DrawerFooterProps = HTMLAttributes<HTMLDivElement>;

const DrawerFooter: FC<DrawerFooterProps> = ({ className, ...props }) => (
	<div
		className={cc("mt-auto flex flex-col gap-2 p-4", className)}
		{...props}
	/>
);
DrawerFooter.displayName = "DrawerFooter";

type DrawerTitleProps = ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>;

const DrawerTitle = forwardRef<
	ElementRef<typeof DrawerPrimitive.Title>,
	DrawerTitleProps
>(({ className, ...props }, ref) => (
	<DrawerPrimitive.Title
		ref={ref}
		className={cc(
			"text-lg font-semibold leading-none tracking-tight",
			className
		)}
		{...props}
	/>
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

type DrawerDescriptionProps = ComponentPropsWithoutRef<
	typeof DrawerPrimitive.Description
>;

const DrawerDescription = forwardRef<
	ElementRef<typeof DrawerPrimitive.Description>,
	DrawerDescriptionProps
>(({ className, ...props }, ref) => (
	<DrawerPrimitive.Description
		ref={ref}
		className={cc("text-sm text-muted-foreground", className)}
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

export type {
	DrawerCloseProps,
	DrawerContentProps,
	DrawerDescriptionProps,
	DrawerFooterProps,
	DrawerHeaderProps,
	DrawerOverlayProps,
	DrawerProps,
	DrawerTitleProps,
	DrawerTriggerProps
};
