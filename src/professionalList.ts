import { StaticImageData } from "next/image";
import Image1 from "public/images/professionals/1.png";
import Image2 from "public/images/professionals/2.png";
import Image3 from "public/images/professionals/3.png";
import Image4 from "public/images/professionals/4.png";
import Image5 from "public/images/professionals/5.png";
import Image6 from "public/images/professionals/6.png";
import Image7 from "public/images/professionals/7.png";
import Image8 from "public/images/professionals/8.png";

export type ProfessionalItem = {
	id: number;
	name: string;
	occupation: string;
	imageSrc: StaticImageData;
};

const professionalList: Array<ProfessionalItem> = [
	{
		id: 1,
		name: "Dr. Malak Shammas, MD",
		occupation: "Oncologist",
		imageSrc: Image2
	},
	{
		id: 2,
		name: "Dr. Anthony Cho, MD",
		occupation: "Midwife",
		imageSrc: Image3
	},
	{
		id: 3,
		name: "Dr. Marion Carson, MD",
		occupation: "Urogynecologist",
		imageSrc: Image5
	},
	{
		id: 4,
		name: "Dr. Carlos Sobral, MD",
		occupation: "Internist",
		imageSrc: Image6
	},
	{
		id: 5,
		name: "Dr. Elizabeth Mehrabian, MD",
		occupation: "Family Nurse Practitioner",
		imageSrc: Image7
	},
	{
		id: 6,
		name: "Dr. Amin Khorsandi, MD",
		occupation: "Hematologist",
		imageSrc: Image8
	},
	{
		id: 7,
		name: "Dr. Andrea Sczesny, MD",
		occupation: "Immunologist",
		imageSrc: Image1
	},
	{
		id: 8,
		name: "Dr. Mahsa Rezaei, MD",
		occupation: "Travel Medicine Specialist",
		imageSrc: Image4
	}
];

export default professionalList;
