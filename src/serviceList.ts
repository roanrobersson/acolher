import { FC, SVGProps } from "react";
import { StaticImageData } from "next/image";
import CardiologyIcon from "public/icons/solid/cardiology.svg";
import FamilyMedicineIcon from "public/icons/solid/family-medicine.svg";
import ObstetricsIcon from "public/icons/solid/obstetrics.svg";
import OncologyIcon from "public/icons/solid/oncology.svg";
import OrthopedicIcon from "public/icons/solid/orthopedic.svg";
import PediatricsIcon from "public/icons/solid/pediatrics.svg";
import PsychotherapyIcon from "public/icons/solid/psychotherapy.svg";
import TelemedicineIcon from "public/icons/solid/telemedicine.svg";
import FamilyMedicineImage from "public/images/services/1.png";
import PediatricsImage from "public/images/services/2.png";
import ObstetricsImage from "public/images/services/3.png";
import CardiologyImage from "public/images/services/4.png";
import OncologyImage from "public/images/services/5.png";
import OrthopedicsImage from "public/images/services/6.png";
import PhysicalTherapyImage from "public/images/services/7.png";
import TelemedicineImage from "public/images/services/8.png";

export type ServiceItem = {
	title: string;
	description: string;
	shortDescription: string;
	imageSrc: StaticImageData;
	Icon: FC<SVGProps<SVGElement>>;
	iconColor: string;
};

const serviceList: Array<ServiceItem> = [
	{
		title: "Family Medicine",
		description:
			"Our board-certified family medicine doctors provide comprehensive care for patients of all ages, including preventative care, diagnosis and treatment of illnesses, and management of chronic conditions.",
		shortDescription:
			"We provide family care services for you and your loved ones",
		imageSrc: FamilyMedicineImage,
		Icon: FamilyMedicineIcon,
		iconColor: "#FFC83E"
	},
	{
		title: "Pediatrics",
		description:
			"Our internal medicine doctors provide comprehensive care for adults, including preventative care, diagnosis and treatment of illnesses, and management of chronic conditions.",
		shortDescription: "Our oncologists specialize in the treatment of cancer..",
		imageSrc: PediatricsImage,
		Icon: PediatricsIcon,
		iconColor: "#2FB39E"
	},
	{
		title: "Obstetrics and Gynecology",
		description:
			"Our OB/GYN specialists provide comprehensive care for women, including prenatal care, childbirth, and gynecological exams and treatments.",
		shortDescription:
			"Our cardiologists are experts in the diagnosis and treatment",
		imageSrc: ObstetricsImage,
		Icon: ObstetricsIcon,
		iconColor: "#64A6FF"
	},
	{
		title: "Cardiology",
		description:
			"Our cardiologists are experts in the diagnosis and treatment of heart and vascular conditions, including heart attack, hypertension, and arrhythmias.",
		shortDescription: "Our orthopedic specialists provide expert care..",
		imageSrc: CardiologyImage,
		Icon: CardiologyIcon,
		iconColor: "#FF838A"
	},
	{
		title: "Oncology",
		description:
			"Our oncologists specialize in the treatment of cancer and provide a wide range of services including chemotherapy, radiation therapy, and surgery.",
		shortDescription: "Our OB/GYN specialists provide comprehensive..",
		imageSrc: OncologyImage,
		Icon: OncologyIcon,
		iconColor: "#FF80F2"
	},
	{
		title: "Orthopedics",
		description:
			"Our orthopedic specialists provide expert care for injuries and conditions of the bones, joints, and muscles, including sports injuries, arthritis, and joint replacement surgery.",
		shortDescription:
			"Physical therapy is a form of rehabilitation that aims..",
		imageSrc: OrthopedicsImage,
		Icon: OrthopedicIcon,
		iconColor: "#BEC7F4"
	},
	{
		title: "Physical Therapy",
		description:
			"Physical therapy is a form of rehabilitation that aims to help patients recover from injuries, illnesses, and surgeries.",
		shortDescription: "Our board-certified family medicine doctors provide..",
		imageSrc: PhysicalTherapyImage,
		Icon: PsychotherapyIcon,
		iconColor: "#FFA564"
	},
	{
		title: "Telemedicine",
		description:
			"Telemedicine is a rapidly growing field that allows patients to receive medical care remotely, using video conferencing and other digital technologies.",
		shortDescription: "Telemedicine is a rapidly growing field that allows..",
		imageSrc: TelemedicineImage,
		Icon: TelemedicineIcon,
		iconColor: "#BDAB4F"
	}
];

export default serviceList;
