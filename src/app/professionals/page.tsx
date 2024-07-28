import { FC } from "react";
import Image from "next/image";
import professionalList from "professionalList";
import fakeVideo from "public/images/fake-video.png";

import { ProfessionalCard } from "components";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from "components/core";
import { cc } from "utils/tailwind";

const ProfessionalsPage: FC = () => {
	return (
		<main>
			<section className="bg-background pt-9 lg:pt-28">
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
						<ProfessionalCard
							professional={professional}
							key={professional.name}
						/>
					))}
				</div>
			</section>

			<section className="mt-[180px]">
				<WhatThaySay />
			</section>
		</main>
	);
};

const WhatThaySay: FC = () => {
	return (
		<div id="card-container" className="pt-[80px] lg:pt-[130px]">
			<div id="card" className={cc("bg-secondary-100 relative dark:bg-card")}>
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
							I am proud to be a part of such a dedicated and compassionate team
							of healthcare professionals. The hospital&apos;s commitment to
							providing high-quality, patient-centered care is evident in
							everything we do.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfessionalsPage;
