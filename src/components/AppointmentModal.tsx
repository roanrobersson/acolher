"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CloseIcon from "public/icons/outline/close.svg";
import z from "zod";

import {
	Button,
	IconButton,
	Input,
	Modal,
	ModalCancel,
	ModalContent,
	ModalDescription,
	ModalFooter,
	ModalHeader,
	ModalProps,
	ModalTitle,
	ModalTrigger,
	RadioGroup,
	RadioGroupItem,
	Textarea
} from "components/core";
import { cc } from "utils/tailwind";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from "./core/Form";

type AppointmentModalProps = ModalProps;

const schema = z.object({
	type: z.enum(["new", "returning"]),
	firstName: z.string().min(3, {
		message: "Must be at least 3 characters."
	}),
	lastName: z.string().min(3, {
		message: "Must be at least 3 characters."
	}),
	birth: z.string().min(3, {
		message: "Must be at least 3 characters"
	}),
	sex: z.string().min(3, {
		message: "Must be at least 3 characters"
	}),
	email: z.string().email({
		message: "Must be a valid email address."
	}),
	phone: z.string().min(3, {
		message: "Must be at least 3 characters."
	}),
	specialty: z.string().min(3, {
		message: "Must be at least 3 characters."
	}),
	doctor: z.string().min(3, {
		message: "Must be at least 3 characters."
	}),
	message: z.string().min(3, {
		message: "Must be at least 3 characters."
	})
});

type AppointmentFormValues = z.infer<typeof schema>;

const AppointmentModal: FC<AppointmentModalProps> = ({ children }) => {
	const form = useForm<AppointmentFormValues>({
		resolver: zodResolver(schema),
		defaultValues: {
			type: "new",
			firstName: "",
			lastName: "",
			birth: "",
			sex: "",
			email: "",
			phone: "",
			specialty: "",
			doctor: "",
			message: ""
		}
	});

	function onSubmit(values: AppointmentFormValues) {
		console.log(values);
	}

	return (
		<Modal>
			<ModalTrigger>{children}</ModalTrigger>

			<ModalContent>
				<ModalHeader>
					<ModalTitle className="flex items-center justify-between">
						Request an appointment
						<ModalCancel asChild>
							<IconButton variant="ghost" size="lg" color="secondary">
								<CloseIcon />
							</IconButton>
						</ModalCancel>
					</ModalTitle>
					<ModalDescription>
						Start your appointment request here.
					</ModalDescription>
				</ModalHeader>

				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
						{/* Patient type */}
						<FormField
							name="type"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<RadioGroup
											onValueChange={field.onChange}
											defaultValue={field.value}
											className="flex justify-center gap-8 lg:gap-12"
										>
											<FormItem className={cc("flex items-center gap-4")}>
												<RadioGroupItem
													value="new"
													id="option-new"
													className="border-neutral-900 dark:border-white"
												/>
												<FormLabel htmlFor="option-new">New Patient</FormLabel>
											</FormItem>

											<FormItem className="flex items-center gap-4">
												<RadioGroupItem
													value="returning"
													id="option-returning"
													className="border-neutral-900 dark:border-white"
												/>
												<FormLabel htmlFor="option-returning">
													Returning Patient
												</FormLabel>
											</FormItem>
										</RadioGroup>
									</FormControl>
								</FormItem>
							)}
						/>

						<div>
							<h2 className="text-sectiontitle-md uppercase text-neutral">
								PATIENT INFORMATION
							</h2>
							<div className="mt-6 grid grid-cols-1 gap-3 lg:mt-8 lg:grid-cols-2 lg:gap-12">
								{/* First Name */}
								<FormField
									name="firstName"
									render={({ field }) => (
										<FormItem>
											<FormLabel htmlFor="first-name">First name</FormLabel>
											<FormControl>
												<Input
													id="first-name"
													placeholder="First name"
													size="lg"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								{/* Last Name */}
								<FormField
									name="lastName"
									render={({ field }) => (
										<FormItem>
											<FormLabel htmlFor="last-name">Last name</FormLabel>
											<FormControl>
												<Input
													id="last-name"
													placeholder="Last name"
													size="lg"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								{/* Date of birth */}
								<FormField
									name="birth"
									render={({ field }) => (
										<FormItem>
											<FormLabel htmlFor="birth">Date of birth</FormLabel>
											<FormControl>
												<Input
													id="birth"
													placeholder="Date of birth"
													size="lg"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								{/* Sex */}
								<FormField
									name="sex"
									render={({ field }) => (
										<FormItem>
											<FormLabel htmlFor="sex">Sex</FormLabel>
											<FormControl>
												<Input
													id="sex"
													placeholder="Sex"
													size="lg"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								{/* Email */}
								<FormField
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormLabel htmlFor="email">Email</FormLabel>
											<FormControl>
												<Input
													id="email"
													placeholder="Email"
													size="lg"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								{/* Phone */}
								<FormField
									name="phone"
									render={({ field }) => (
										<FormItem>
											<FormLabel htmlFor="phone">Phone</FormLabel>
											<FormControl>
												<Input
													id="phone"
													placeholder="Phone"
													size="lg"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>

							<h2 className="mt-9 text-sectiontitle-md  uppercase text-neutral lg:mt-11">
								MEDICAL RECORD
							</h2>
							<div className="mt-6 grid grid-cols-1 gap-3 lg:mt-8 lg:grid-cols-2 lg:gap-12">
								<FormField
									name="specialty"
									render={({ field }) => (
										<FormItem>
											<FormLabel htmlFor="specialty">
												Select Medical Specialist
											</FormLabel>
											<FormControl>
												<Input
													id="specialty"
													placeholder="Select Medical Specialist"
													size="lg"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									name="doctor"
									render={({ field }) => (
										<FormItem>
											<FormLabel htmlFor="doctor">Select Doctor</FormLabel>
											<FormControl>
												<Input
													id="doctor"
													placeholder="Select Doctor"
													size="lg"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									name="message"
									render={({ field }) => (
										<FormItem>
											<FormLabel htmlFor="message">Message</FormLabel>
											<FormControl>
												<Textarea
													id="message"
													placeholder="Message"
													className="col-span-2"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
						</div>

						<ModalFooter>
							<ModalCancel>Cancel</ModalCancel>
							<Button type="submit" size="lg">
								Request an appointment
							</Button>
						</ModalFooter>
					</form>
				</Form>
			</ModalContent>
		</Modal>
	);
};

export default AppointmentModal;
