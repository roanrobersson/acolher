import { ComponentProps, FC } from "react";
import Image, { StaticImageData } from "next/image";
import BuildingImage from "public/images/building.png";
import ModernMedicineImage from "public/images/moder-medicine.png";
import Partner1Image from "public/images/partners/1.png";
import Partner2Image from "public/images/partners/2.png";
import Partner3Image from "public/images/partners/3.png";
import Partner4Image from "public/images/partners/4.png";
import XRayImage from "public/images/x-ray.png";

import { Brand } from "components/layout";
import { cc } from "utils/tailwindUtils";

const AboutPage: FC = () => {
	return (
		<main className="flex flex-col gap-20 md:gap-[130px]">
			<section className="bg-background pt-9 lg:pt-28">
				<div className="fluid-container">
					<div
						className={cc("flex flex-col gap-[120px]", "md:flex-row md:gap-8")}
					>
						<div>
							<Brand onlyLogo size="sm" className="lg:hidden" />
							<Brand onlyLogo size="lg" className="hidden lg:block" />

							<h2
								className={cc(
									"mt-2 font-clashDisplay text-display-xs",
									"lg:mt-6 lg:text-display-7xl"
								)}
							>
								Plus <br /> Medical Center
							</h2>

							<p className={cc("mt-7 text-body-lg", "lg:mt-10")}>
								Medical Center is a state-of-the-art healthcare facility that is
								dedicated to providing the highest quality of care to our
								patients. We have a team of highly trained and experienced
								medical professionals, who are committed to providing
								personalized, patient-centered care.
							</p>
						</div>

						<div className="relative flex items-end pb-10">
							<div
								className={cc(
									"absolute bottom-0 right-0 h-[70%] w-[85%] bg-secondary-100",
									"dark:bg-card"
								)}
							/>
							<Image
								src={BuildingImage}
								alt=""
								quality={100}
								className="relative"
							/>
						</div>
					</div>

					<div
						className={cc(
							"mt-12 flex flex-col flex-wrap gap-[100px]",
							"sm:flex-row sm:justify-center sm:gap-[76px]"
						)}
					>
						<StatisticCard
							number={32}
							label="Medical Clinic"
							color="bg-secondary-100 dark:bg-card"
						/>
						<StatisticCard
							number={980}
							label="Patient Registered"
							color="bg-[#FBE1D6] dark:bg-card"
						/>
						<StatisticCard
							number={18}
							label="Medical Personnel"
							color="bg-[#DBD6FB] dark:bg-card"
						/>
					</div>
				</div>
			</section>

			<section>
				<div
					className={cc(
						"fluid-container flex flex-col gap-[176px]",
						"md:flex-row-reverse md:gap-[60px]"
					)}
				>
					<div className="flex-1">
						<p>
							Our medical center is equipped with the latest technology and
							equipment, which allows us to offer a wide range of medical
							services.
						</p>
						<br />
						<p>
							We believe that every patient deserves personalized, high-quality
							care, and we are committed to providing just that. Our medical
							team is always available to answer any questions you may have and
							to help you navigate the healthcare system. Thank you for choosing
							XYZ Medical Center for your medical needs.
						</p>
					</div>

					<div className="relative flex-1 pr-10">
						<div
							className={cc(
								"absolute bottom-0 right-0 h-[70%] w-full bg-secondary-100",
								"dark:bg-card"
							)}
						/>
						<div
							className={cc(
								"relative h-[240px]",
								"sm:h-[300px]",
								"md:h-[400px] md:max-w-[540px]"
							)}
						>
							<Image
								src={XRayImage}
								alt=""
								quality={100}
								fill
								className="object-cover"
							/>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className={cc("relative pb-[100px]", "md:fluid-container")}>
					<div className="relative h-[300px] md:h-[480px]">
						<Image
							src={ModernMedicineImage}
							alt=""
							quality={100}
							fill
							className="object-cover object-top"
						/>
					</div>
					<div
						className={cc(
							"absolute bottom-0 left-5 w-[360px] px-8 py-5",
							"bg-secondary-100 font-clashDisplay text-display-lg font-medium",
							"sm:left-[60px]",
							"md:md:w-[520px] md:px-12 md:py-10 md:text-display-5xl",
							"dark:bg-card"
						)}
					>
						Leading the Way in Modern Medicine
					</div>
				</div>
			</section>

			<section>
				<div className="fluid-container">
					<h2
						className={cc(
							"text-center font-clashDisplay text-display-lg font-medium",
							"lg:text-display-5xl"
						)}
					>
						Our Partners
					</h2>

					<div
						className={cc(
							"mt-7 flex flex-wrap justify-center gap-x-8 gap-y-4",
							"sm:gap-y-[30px]",
							"md:gap-y-[70px]",
							"lg:mt-[90px]"
						)}
					>
						<PartnerChip StaticImage={Partner1Image} />
						<PartnerChip StaticImage={Partner2Image} />
						<PartnerChip StaticImage={Partner3Image} />
						<PartnerChip StaticImage={Partner4Image} />
						<PartnerChip StaticImage={Partner1Image} />
						<PartnerChip StaticImage={Partner2Image} />
						<PartnerChip StaticImage={Partner3Image} />
						<PartnerChip StaticImage={Partner4Image} />
						<PartnerChip StaticImage={Partner1Image} />
						<PartnerChip StaticImage={Partner2Image} />
						<PartnerChip StaticImage={Partner3Image} />
						<PartnerChip StaticImage={Partner4Image} />
					</div>
				</div>
			</section>
		</main>
	);
};

type StatisticCardProps = ComponentProps<"div"> & {
	number: number;
	label: string;
	color: string;
};

const StatisticCard: FC<StatisticCardProps> = ({
	className,
	number,
	label,
	color,
	...restProps
}) => {
	return (
		<div
			className={cc("relative pb-8 text-center sm:w-[300px]", className)}
			{...restProps}
		>
			<div className={cc("absolute bottom-0 right-0 h-[70%] w-full", color)} />
			<div className="relative">
				<span className="font-clashDisplay text-[116px] font-medium leading-none">
					{number}
				</span>
				<p>{label}</p>
			</div>
		</div>
	);
};

type PartnerChipProps = ComponentProps<"div"> & {
	StaticImage: StaticImageData;
};

const PartnerChip: FC<PartnerChipProps> = ({
	className,
	StaticImage,
	...restProps
}) => (
	<div
		className={cc(
			"flex min-w-[160px] justify-center rounded-lg bg-white shadow-md",
			"lg:h-[58px]",
			className
		)}
		{...restProps}
	>
		<Image src={StaticImage} alt="" quality={100} />
	</div>
);

export default AboutPage;
