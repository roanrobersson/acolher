import { ComponentProps, FC } from "react";
import Image from "next/image";
import MenMedicImage from "public/images/men-medic.png";
import WomanMedicImage from "public/images/woman-medic.png";

import { cc } from "utils/tailwind";

const AboutSection: FC<ComponentProps<"div">> = ({
	className,
	...restProps
}) => {
	return (
		<section
			className={cc("pt-[80px] lg:pt-[100px]", className)}
			{...restProps}
		>
			<div className="fluid-container">
				<FirstBlock />

				<SecondBlock className="mt-[78px] lg:mt-7" />
			</div>
		</section>
	);
};

const FirstBlock: FC<ComponentProps<"div">> = ({ className, ...restProps }) => {
	return (
		<div className={cc("flex flex-col md:flex-row", className)} {...restProps}>
			<div className="lg:flex lg:flex-col lg:justify-center">
				<h2 className="font-clashDisplay text-display-lg lg:text-display-7xl">
					Health and Wellness Resources
				</h2>
				<p className="mt-3 max-w-[486px] text-body-lg lg:mt-5">
					At Plus Health Medical Center, we understand that good health is not
					just about receiving medical treatment when you are sick. It is also
					about taking an active role in your own well-being and making healthy
					choices every day.
				</p>
			</div>

			<div className="relative mt-7 flex-shrink-0">
				<div className="flex justify-center">
					<Image
						src={WomanMedicImage}
						alt=""
						quality={100}
						className="h-auto w-[328px] lg:w-[480px]"
						sizes="(max-width: 427px) 100vw, (max-width: 1023px) 328px, 480px"
					/>
				</div>
				<div
					className={cc(
						"bg-secondary-100 absolute bottom-0 left-[-20px] right-[-20px] z-[-1] h-[128px]",
						"lg:h-[188px]",
						"dark:bg-dark-gray-400"
					)}
				/>
			</div>
		</div>
	);
};

const SecondBlock: FC<ComponentProps<"div">> = ({
	className,
	...restProps
}) => {
	return (
		<div
			className={cc(
				"flex flex-col",
				"md:flex-row-reverse lg:gap-5",
				"xl:gap-16",
				className
			)}
			{...restProps}
		>
			<div className="lg:flex lg:flex-col lg:justify-center">
				<h2
					className={cc(
						"font-clashDisplay text-display-lg",
						"lg:text-display-7xl"
					)}
				>
					Patient Education
				</h2>
				<p className={cc("mt-3 max-w-[486px] text-body-lg lg:mt-5")}>
					At Plus Health Medical Center, we understand that good health is not
					just about receiving medical treatment when you are sick. It is also
					about taking an active role in your own well-being and making healthy
					choices every day.
				</p>
			</div>

			<div className="relative mt-3 flex-shrink-0">
				<div className="flex justify-center">
					<Image
						src={MenMedicImage}
						alt=""
						quality={100}
						className="h-auto w-[372px] lg:w-[590px]"
						sizes="(max-width: 427px) 100vw, (max-width: 1023px) 372px, 590px"
					/>
				</div>
				<div
					className={cc(
						"bg-danger absolute bottom-0 left-[20px] right-[20px] z-[-1] h-[128px]",
						"lg:h-[188px]",
						"dark:bg-blue-gray-600"
					)}
				/>
			</div>
		</div>
	);
};

export default AboutSection;
