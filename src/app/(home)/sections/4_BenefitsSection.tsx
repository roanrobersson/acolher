import { ComponentProps, FC } from "react";
import Image from "next/image";
import CheckCircleIcon from "public/icons/solid/check-circle.svg";
import SmartPhoneImage from "public/images/smartphone.png";

import { cc } from "utils/tailwind";

type Item = {
	title: string;
	description: string;
};

const items: Array<Item> = [
	{
		title: "Personalize care",
		description:
			"We use data to identify individual patient needs and tailor treatment plans accordingly."
	},
	{
		title: "15th+ Experience",
		description:
			"Our team of doctors, nurses, and other healthcare providers are among the best in their field, with years of experience and advanced training."
	},
	{
		title: "Comprehensive medical services",
		description:
			"We offer a wide range of medical services, from routine check-ups and preventative care to specialized treatments and surgeries, so that our patients can receive all the care they need in one convenient location."
	}
];

const BenefitsSection: FC<ComponentProps<"div">> = ({
	className,
	...restProps
}) => {
	return (
		<section
			className={cc(
				"bg-secondary-100 mt-[100px] py-[60px]",
				"lg:mt-[164px]",
				"dark:bg-card",
				className
			)}
			{...restProps}
		>
			<div
				className={cc(
					"fluid-container flex flex-col",
					"md:flex-row md:gap-[50px]"
				)}
			>
				<TextBlock />

				<ImageBlock className="mt-14" />
			</div>
		</section>
	);
};

const TextBlock: FC<ComponentProps<"div">> = ({ className, ...restProps }) => {
	return (
		<div
			className={cc("lg:flex lg:flex-col lg:justify-center", className)}
			{...restProps}
		>
			<h2
				className={cc(
					"text-left font-clashDisplay text-display-lg",
					"lg:text-start lg:text-display-5xl"
				)}
			>
				Why you choose Plus Medical Center?
			</h2>

			<ul className="mt-[66px] flex flex-col gap-7 lg:mt-6">
				{items.map((item) => (
					<li
						className={cc(
							"grid grid-cols-[min-content_auto] grid-rows-[auto_auto]",
							"gap-x-4 gap-y-2"
						)}
						key={item.title}
					>
						<CheckCircleIcon
							className={cc(
								"text-success h-4 w-4 self-center",
								"lg:h-5 lg:w-5"
							)}
						/>
						<h3 className="text-title-lg lg:text-title-4xl">{item.title}</h3>
						<p className="col-start-2 text-body-sm lg:max-w-[350px]">
							{item.description}
						</p>
					</li>
				))}
			</ul>
		</div>
	);
};

const ImageBlock: FC<ComponentProps<"div">> = ({ className, ...restProps }) => {
	return (
		<div className={cc("flex-shrink-0 px-3", className)} {...restProps}>
			<div className="relative mx-auto max-w-[340px] lg:max-w-none">
				<Image
					src={SmartPhoneImage}
					alt=""
					quality={100}
					className="h-auto w-[320px] lg:w-[500px]"
					sizes="(max-width: 427px) 100vw, (max-width: 1023px) 320px, 500px"
				/>

				{/* Left floating card */}
				<div
					className={cc(
						"absolute left-[-24px] top-0 w-[180px] rounded-md bg-card px-3 pb-4 pt-2",
						"sm:top-[70px]",
						"lg:left-[-50px] lg:w-[246px] lg:rounded-lg lg:px-5 lg:pb-7 lg:pt-4",
						"dark:bg-background"
					)}
				>
					<CheckCircleIcon
						className="text-success h-4 w-4 lg:h-5 lg:w-5"
						width={16}
						height={16}
					/>
					<h3 className="mt-1 text-title-sm lg:mt-2 lg:text-title-lg">
						Patient-centered care
					</h3>
					<p className="mt-1.5 text-body-sm lg:mt-2">
						Deserves personalized, high-quality care
					</p>
				</div>

				{/* Right floating card */}
				<div
					className={cc(
						"absolute bottom-0 right-[-24px] w-[200px] rounded-md bg-card px-3 pb-4 pt-2",
						"sm:bottom-[30px]",
						"lg:right-[-30px] lg:w-[276px] lg:rounded-lg lg:px-5 lg:pb-7 lg:pt-4",
						"dark:bg-background"
					)}
				>
					<CheckCircleIcon
						className="text-success h-4 w-4 lg:h-5 lg:w-5"
						width={16}
						height={16}
					/>
					<h3 className="mt-1 text-title-sm lg:mt-2 lg:text-title-lg">
						Acessible and convenient
					</h3>
					<p className="mt-1.5 text-body-sm lg:mt-2">
						We are committed to making healthcare accessible and convenient for
						our patients.
					</p>
				</div>
			</div>
		</div>
	);
};

export default BenefitsSection;
