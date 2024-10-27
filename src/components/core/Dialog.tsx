"use client";

import {
	ComponentPropsWithoutRef,
	ElementRef,
	FC,
	forwardRef,
	HTMLAttributes
} from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import CloseIcon from "public/icons/outline/close.svg";

import { cc } from "utils/tailwindUtils";

type DialogProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Root>;

const Dialog: FC<DialogProps> = (props) => <DialogPrimitive.Root {...props} />;

type DialogPortalProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Root>;

const DialogPortal: FC<DialogPortalProps> = (props) => (
	<DialogPrimitive.Portal {...props} />
);

type DialogCloseProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Close>;

const DialogClose = forwardRef<
	ElementRef<typeof DialogPrimitive.Close>,
	DialogCloseProps
>((props, ref) => <DialogPrimitive.Close {...props} ref={ref} />);
DialogClose.displayName = DialogPrimitive.Close.displayName;

type DialogDefaultCloseButtonProps = ComponentPropsWithoutRef<
	typeof DialogPrimitive.Close
>;

const DialogDefaultCloseButton = forwardRef<
	ElementRef<typeof DialogPrimitive.Close>,
	DialogDefaultCloseButtonProps
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Close
		className={cc(
			"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity",
			"focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
			"hover:opacity-100",
			"disabled:pointer-events-none",
			"data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
			className
		)}
		ref={ref}
		{...props}
	>
		<CloseIcon />
		<span className="sr-only">Close</span>
	</DialogPrimitive.Close>
));
DialogDefaultCloseButton.displayName = DialogPrimitive.Close.displayName;

type DialogTriggerProps = ComponentPropsWithoutRef<
	typeof DialogPrimitive.Trigger
>;

const DialogTrigger = forwardRef<
	ElementRef<typeof DialogPrimitive.Trigger>,
	DialogTriggerProps
>(({ className, children, ...props }, ref) => {
	if (Array.isArray(children)) {
		throw new Error("DialogTrigger must only contain a single child.");
	}

	return (
		<DialogPrimitive.Trigger
			ref={ref}
			className={cc("cursor-pointer", className)}
			asChild
			{...props}
		>
			{children}
		</DialogPrimitive.Trigger>
	);
});
DialogTrigger.displayName = DialogPrimitive.Trigger.displayName;

type DialogOverlayProps = ComponentPropsWithoutRef<
	typeof DialogPrimitive.Overlay
>;

const DialogOverlay = forwardRef<
	ElementRef<typeof DialogPrimitive.Overlay>,
	DialogOverlayProps
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Overlay
		ref={ref}
		className={cc(
			"fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 p-2",
			"sm:p-10",
			"data-[state=open]:animate-in data-[state=open]:fade-in-0",
			"data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
			className
		)}
		{...props}
	/>
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

type DialogContentProps = ComponentPropsWithoutRef<
	typeof DialogPrimitive.Content
>;

const DialogContent = forwardRef<
	ElementRef<typeof DialogPrimitive.Content>,
	DialogContentProps
>(({ className, children, ...props }, ref) => (
	<DialogPortal>
		<DialogOverlay>
			<DialogPrimitive.Content
				ref={ref}
				className={cc(
					"relative z-50 grid w-full max-w-[90%] gap-4 border bg-card p-6 shadow-lg duration-200 sm:rounded-2xl",
					"md:px-10 md:py-12",
					"data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
					"data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]",
					className
				)}
				{...props}
			>
				{children}
			</DialogPrimitive.Content>
		</DialogOverlay>
	</DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

type DialogHeaderProps = HTMLAttributes<HTMLDivElement>;

const DialogHeader: FC<DialogHeaderProps> = ({ className, ...props }) => (
	<div
		className={cc(
			"flex flex-col space-y-1.5 text-center sm:text-left",
			className
		)}
		{...props}
	/>
);
DialogHeader.displayName = "DialogHeader";

type DialogFooterProps = HTMLAttributes<HTMLDivElement>;

const DialogFooter: FC<DialogFooterProps> = ({ className, ...props }) => (
	<div
		className={cc(
			"flex flex-col-reverse gap-2 md:flex-row md:justify-end md:gap-4",
			className
		)}
		{...props}
	/>
);
DialogFooter.displayName = "DialogFooter";

type DialogTitleProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Title>;
const DialogTitle = forwardRef<
	ElementRef<typeof DialogPrimitive.Title>,
	DialogTitleProps
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Title
		ref={ref}
		className={cc(
			"semibold text-title-3xl leading-none tracking-tight",
			"md:text-title-5xl",
			className
		)}
		{...props}
	/>
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

type DialogDescriptionProps = ComponentPropsWithoutRef<
	typeof DialogPrimitive.Description
>;

const DialogDescription = forwardRef<
	ElementRef<typeof DialogPrimitive.Description>,
	DialogDescriptionProps
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Description
		ref={ref}
		className={cc(
			"text-title-sm text-muted-foreground",
			"md:text-title-lg",
			className
		)}
		{...props}
	/>
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDefaultCloseButton,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogOverlay,
	DialogPortal,
	DialogTitle,
	DialogTrigger
};

export type {
	DialogCloseProps,
	DialogContentProps,
	DialogDefaultCloseButtonProps,
	DialogDescriptionProps,
	DialogFooterProps,
	DialogHeaderProps,
	DialogOverlayProps,
	DialogProps,
	DialogTitleProps,
	DialogTriggerProps
};
