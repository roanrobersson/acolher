"use client";

import { ElementRef, FC, forwardRef, HTMLAttributes } from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

import { cc } from "utils/tailwind";

import { Button } from "./Button";

import type {
	AlertDialogActionProps as ModalActionProps,
	AlertDialogCancelProps as ModalCancelProps,
	AlertDialogContentProps as ModalContentProps,
	AlertDialogDescriptionProps as ModalDescriptionProps,
	AlertDialogOverlayProps as ModalOverlayProps,
	AlertDialogPortalProps as ModalPortalProps,
	AlertDialogProps as ModalProps,
	AlertDialogTitleProps as ModalTitleProps,
	AlertDialogTriggerProps as ModalTriggerProps
} from "@radix-ui/react-alert-dialog";

const Modal = AlertDialogPrimitive.Root;
Modal.displayName = "Modal";

const ModalTrigger = forwardRef<
	ElementRef<typeof AlertDialogPrimitive.Trigger>,
	ModalTriggerProps
>(({ children, ...restProps }, ref) => {
	if (Array.isArray(children)) {
		throw new Error("ModalTrigger must only contain a single child.");
	}

	return (
		<AlertDialogPrimitive.Trigger ref={ref} asChild {...restProps}>
			{children}
		</AlertDialogPrimitive.Trigger>
	);
});
ModalTrigger.displayName = "ModalTrigger";

const ModalPortal: FC<ModalPortalProps> = AlertDialogPrimitive.Portal;
ModalPortal.displayName = "ModalPortal";

const ModalOverlay = forwardRef<
	ElementRef<typeof AlertDialogPrimitive.Overlay>,
	ModalOverlayProps
>(({ className, ...props }, ref) => (
	<AlertDialogPrimitive.Overlay
		className={cc(
			"fixed inset-0 z-50 bg-black/60",
			"data-[state=open]:animate-in data-[state=open]:fade-in-0",
			"data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
			className
		)}
		{...props}
		ref={ref}
	/>
));
ModalOverlay.displayName = "ModalOverlay";

const ModalContent = forwardRef<
	ElementRef<typeof AlertDialogPrimitive.Content>,
	ModalContentProps
>(({ className, ...props }, ref) => (
	<ModalPortal>
		<ModalOverlay />
		<AlertDialogPrimitive.Content
			ref={ref}
			className={cc(
				"fixed z-50 grid max-h-[90%] w-[90%] gap-12 overflow-y-auto border bg-card p-6 shadow-lg",
				"left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] duration-200",
				"sm:rounded-lg md:max-w-lg lg:max-w-5xl",
				"lg:px-20 lg:pb-20 lg:pt-12",
				"data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
				"data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]",
				className
			)}
			{...props}
		/>
	</ModalPortal>
));
ModalContent.displayName = "ModalContent";

type ModalHeaderProps = HTMLAttributes<HTMLDivElement>;

const ModalHeader: FC<ModalHeaderProps> = ({ className, ...props }) => (
	<div
		className={cc(
			"flex flex-col gap-8 text-center sm:text-left lg:gap-y-11",
			className
		)}
		{...props}
	/>
);
ModalHeader.displayName = "ModalHeader";

type ModalFooterProps = HTMLAttributes<HTMLDivElement>;

const ModalFooter: FC<ModalFooterProps> = ({ className, ...props }) => (
	<div
		className={cc(
			"flex flex-col-reverse gap-2 lg:flex-row lg:justify-end lg:gap-6",
			className
		)}
		{...props}
	/>
);
ModalFooter.displayName = "ModalFooter";

const ModalTitle = forwardRef<
	ElementRef<typeof AlertDialogPrimitive.Title>,
	ModalTitleProps
>(({ className, ...props }, ref) => (
	<AlertDialogPrimitive.Title
		ref={ref}
		className={cc("text-title-2xl lg:text-title-5xl", className)}
		{...props}
	/>
));
ModalTitle.displayName = "ModalTitle";

const ModalDescription = forwardRef<
	ElementRef<typeof AlertDialogPrimitive.Description>,
	ModalDescriptionProps
>(({ className, ...props }, ref) => (
	<AlertDialogPrimitive.Description
		ref={ref}
		className={cc("text-title-sm lg:text-title-lg", className)}
		{...props}
	/>
));
ModalDescription.displayName = "ModalDescription";

const ModalAction = forwardRef<
	ElementRef<typeof AlertDialogPrimitive.Action>,
	ModalActionProps
>(({ children, asChild, ...restProps }, ref) => (
	<AlertDialogPrimitive.Action ref={ref} asChild {...restProps}>
		{asChild ? children : <Button size="lg">{children}</Button>}
	</AlertDialogPrimitive.Action>
));
ModalAction.displayName = "ModalAction";

const ModalCancel = forwardRef<
	ElementRef<typeof AlertDialogPrimitive.Cancel>,
	ModalCancelProps
>(({ children, asChild, ...restProps }, ref) => (
	<AlertDialogPrimitive.Cancel asChild ref={ref} {...restProps}>
		{asChild ? (
			children
		) : (
			<Button hierarchy="secondary" size="lg">
				{children}
			</Button>
		)}
	</AlertDialogPrimitive.Cancel>
));
ModalCancel.displayName = "ModalCancel";

export {
	Modal,
	ModalAction,
	ModalCancel,
	ModalContent,
	ModalDescription,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	ModalPortal,
	ModalTitle,
	ModalTrigger
};

export type {
	ModalActionProps,
	ModalCancelProps,
	ModalContentProps,
	ModalDescriptionProps,
	ModalFooterProps,
	ModalHeaderProps,
	ModalOverlayProps,
	ModalPortalProps,
	ModalProps,
	ModalTitleProps,
	ModalTriggerProps
};
