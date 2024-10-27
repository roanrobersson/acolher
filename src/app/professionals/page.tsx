"use client";

import { ComponentProps, FC } from "react";
import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import professionalList, { ProfessionalItem } from "professionalList";
import Artifacts2Image from "public/images/artifacts_2.png";
import fakeVideo from "public/images/fake-video.png";
import routeKeys from "routeKeys";

import { ProfessionalCard } from "components";
import {
	Button,
	Dialog,
	DialogContent,
	DialogDefaultCloseButton,
	DialogDescription,
	DialogHeader,
	DialogProps,
	DialogTitle,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
	VisuallyHidden
} from "components/core";
import { cc } from "utils/tailwindUtils";

type PageProps = {
	searchParams: { professionalId?: string };
};

const ProfessionalsPage: NextPage<PageProps> = ({ searchParams }) => {
	const professionalId = searchParams.professionalId
		? Number(searchParams.professionalId)
		: undefined;

	return (
		<main>
			<OurDoctorsSection
				className="pt-9 lg:pt-28"
				professionalId={professionalId}
			/>

			<WhatTheySaySection className="mt-[180px]" />
		</main>
	);
};

type OurDoctorsSectionProps = ComponentProps<"section"> & {
	professionalId: number | undefined;
};

const OurDoctorsSection: FC<OurDoctorsSectionProps> = ({
	className,
	professionalId,
	...restProps
}) => {
	const router = useRouter();
	const professionalSelected = professionalList.find(
		(x) => x.id === professionalId
	);

	return (
		<section className={cc("bg-background", className)} {...restProps}>
			<div className="fluid-container flex flex-col gap-2 md:flex-row md:items-center md:gap-9">
				<h2 className="font-clashDisplay text-display-lg lg:text-display-5xl">
					Our Doctors
				</h2>
				<Select defaultValue="all">
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="Select the specialist" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="all">All Specialist</SelectItem>
						<SelectItem value="cardiology">Cardiology</SelectItem>
						<SelectItem value="dermatology">Dermatology</SelectItem>
						<SelectItem value="endocrinology">Endocrinology</SelectItem>
						<SelectItem value="gastroenterology">Gastroenterology</SelectItem>
					</SelectContent>
				</Select>
			</div>

			<div className="fluid-container mt-20 flex flex-wrap justify-evenly gap-12">
				{professionalList.map((professional) => (
					<ProfessionalCard professional={professional} key={professional.id} />
				))}
			</div>

			<ProfessionalDialog
				open={!!professionalSelected}
				onOpenChange={() => router.push(routeKeys.professionals())}
				professional={professionalSelected!}
			/>
		</section>
	);
};

type ProfessionalDialogProps = DialogProps & {
	professional: ProfessionalItem;
};

const ProfessionalDialog: FC<ProfessionalDialogProps> = ({
	professional,
	...restProps
}) => {
	return (
		<Dialog {...restProps}>
			<DialogContent className="flex max-w-[600px] flex-col gap-10 border-transparent bg-transparent !pt-0 lg:max-w-[1300px] lg:flex-row">
				<DialogHeader>
					<VisuallyHidden>
						<DialogTitle>Professional detailed</DialogTitle>
					</VisuallyHidden>
					<VisuallyHidden>
						<DialogDescription>
							Professional detailed information
						</DialogDescription>
					</VisuallyHidden>
				</DialogHeader>

				<div className="absolute inset-0 -z-10 mt-[70px] rounded-2xl bg-card">
					<div className="relative h-[300px] lg:w-[40%]">
						<Image
							src={Artifacts2Image}
							alt=""
							fill
							className="object-cover object-bottom"
						/>
					</div>
					<DialogDefaultCloseButton />
				</div>

				<div className="grid justify-center text-center">
					<div className="relative h-[330px] max-w-[360px] lg:h-[400px] lg:w-[390px]">
						<Image
							src={professional?.imageSrc ?? ""}
							alt=""
							fill
							className="rounded-2xl object-cover object-top"
						/>
					</div>
					<h2 className="mt-10 text-title-3xl font-bold">
						{professional?.name}
					</h2>
					<p className="mt-2 text-body-lg">{professional?.occupation}</p>
				</div>

				<div className="flex flex-col items-end justify-between lg:mt-[118px]">
					<div className="text-body-lg">
						<p>
							Dr. Malak Shammas, MD highly skilled and experienced physician at
							Plus Medical Center. He is board-certified in internal medicine
							and has been practicing for over 10 years.
						</p>
						<br />
						<p>
							Dr. Malak Shammas, received his medical degree from Cambridge
							University School of Medicine and completed his residency at ABC
							Hospital. He has a special interest in preventative medicine and
							has a passion for educating patients about how to maintain a
							healthy lifestyle.
						</p>
					</div>

					<Button size="lg" className="mt-[100px] w-full md:w-min">
						Request an appointment
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
};

const WhatTheySaySection: FC<ComponentProps<"section">> = (props) => {
	return (
		<section {...props}>
			<div id="card-container" className="pt-[80px] lg:pt-[130px]">
				<div id="card" className={cc("relative bg-secondary-100 dark:bg-card")}>
					<div
						className={cc(
							"fluid-container mx-auto flex flex-col gap-11 pb-14",
							"lg:flex-row-reverse lg:gap-10 lg:py-24"
						)}
					>
						<div id="image-container" className="h-[136px] w-full lg:w-[645px]">
							<div
								id="image"
								className={cc(
									"relative top-[-78px] h-[214px]",
									"lg:absolute lg:top-[-130px] lg:h-[416px] lg:w-[645px]"
								)}
							>
								<Image
									src={fakeVideo}
									alt=""
									quality={100}
									fill
									sizes="(max-width: 1023px) 100vw, 645px"
									className="object-cover object-top"
								/>
							</div>
						</div>

						<div id="text" className="relative flex-1 lg:mt-0">
							<h2 className="font-clashDisplay text-display-sm lg:text-display-5xl">
								What the docter said about Plus?
							</h2>
							<p className="mt-10 w-[80%] text-body-md lg:mt-2 lg:text-body-lg">
								I am proud to be a part of such a dedicated and compassionate
								team of healthcare professionals. The hospital&apos;s commitment
								to providing high-quality, patient-centered care is evident in
								everything we do.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProfessionalsPage;
