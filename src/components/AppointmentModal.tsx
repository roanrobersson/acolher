import { FC } from "react";
import CloseIcon from "public/icons/outline/close.svg";

import {
	IconButton,
	Input,
	Modal,
	ModalAction,
	ModalCancel,
	ModalContent,
	ModalDescription,
	ModalFooter,
	ModalHeader,
	ModalProps,
	ModalTitle,
	ModalTrigger
} from "components";

type AppointmentModalProps = ModalProps;

const AppointmentModal: FC<AppointmentModalProps> = ({ children }) => {
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

				<Input placeholder="First name" size="lg" />

				<div>
					<h2 className="text-sectiontitle-md uppercase text-gray-500">
						PATIENT INFORMATION
					</h2>
					<div className="mt-6 grid grid-cols-1 gap-3 lg:mt-8 lg:grid-cols-2 lg:gap-12">
						<Input
							id="first-name"
							label="First name"
							placeholder="First name"
							size="lg"
						/>
						<Input
							id="last-name"
							label="Last name"
							placeholder="Last name"
							size="lg"
						/>
						<Input
							id="date-of-birth"
							label="Date of birth"
							placeholder="Date of birth"
							size="lg"
						/>
						<Input id="sex" label="Sex" placeholder="Sex" size="lg" />
						<Input id="email" label="Email" placeholder="Email" size="lg" />
						<Input id="phone" label="Phone" placeholder="Phone" size="lg" />
					</div>

					<h2 className="mt-9 text-sectiontitle-md  uppercase text-gray-500 lg:mt-11">
						MEDICAL RECORD
					</h2>
					<div className="mt-6 grid grid-cols-1 gap-3 lg:mt-8 lg:grid-cols-2 lg:gap-12">
						<Input
							id="medical-specialist"
							label="Select Medical Specialist"
							placeholder="Select Medical Specialist"
							size="lg"
						/>
						<Input
							id="doctor"
							label="Select Doctor"
							placeholder="Select Doctor"
							size="lg"
						/>
						<Input
							id="message"
							label="Messages"
							placeholder="Messages"
							className="col-span-2"
							size="lg"
						/>
					</div>
				</div>

				<ModalFooter>
					<ModalCancel>Cancel</ModalCancel>
					<ModalAction>Request an appointment</ModalAction>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default AppointmentModal;
