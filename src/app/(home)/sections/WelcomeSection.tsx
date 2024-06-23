import { ComponentProps, FC } from "react";
import SearchIcon from "public/icons/outline/search.svg";
import TargetIcon from "public/icons/outline/target.svg";

import { Button, Input } from "components";
import AppointmentModal from "components/AppointmentModal";
import { combineClasses } from "utils/tailwind";

const WelcomeSection: FC<ComponentProps<"div">> = ({
	className,
	...restProps
}) => {
	return (
		<section className={combineClasses("mt-[150px]", className)} {...restProps}>
			<div className="fluid-container">
				<TextBlock />

				<FormBlock />
			</div>
		</section>
	);
};

const TextBlock: FC<ComponentProps<"div">> = ({ className, ...restProps }) => {
	return (
		<div className={combineClasses("px-2", className)} {...restProps}>
			<p className="text-title-lg text-black lg:text-title-4xl">
				<span className="block">Welcome to</span> Plus Medical Center
			</p>
			<h1
				className={combineClasses(
					"mt-4 max-w-[668px] font-clashDisplay text-display-4xl !font-semibold text-black",
					"sm:max-w-[330px]",
					"md:max-w-[390px]",
					"lg:mt-5 lg:max-w-[720px] lg:pr-0 lg:text-display-9xl"
				)}
			>
				Caring for <span className="text-blue-400">you</span> and{" "}
				<span className="text-[#FF5689]">your loved</span>
			</h1>

			<div className="mt-5 flex flex-col gap-3 sm:flex-row lg:mt-8">
				<AppointmentModal>
					<Button
						className="flex-1 md:flex-initial"
						color="primary"
						variant="solid"
						size="lg"
					>
						Make appointment
					</Button>
				</AppointmentModal>

				<Button
					className="flex-1 md:flex-initial lg:hidden"
					variant="outline"
					size="lg"
					color="secondary"
				>
					Call us
				</Button>
			</div>
		</div>
	);
};

const FormBlock: FC<ComponentProps<"div">> = (props) => {
	return (
		<div {...props}>
			<div
				className={combineClasses(
					"mt-9 rounded-2xl bg-white px-6 py-5 dark:bg-dark-gray-800",
					"lg:mt-24 lg:px-12 lg:py-11"
				)}
			>
				<div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-10">
					<h2 className="text-title-2xl md:text-nowrap">
						Book your the Best Doctor
					</h2>
					<p className="text-body-sm text-gray-600 dark:text-gray-300">
						Search and find the right doctor for your medical needs, and make an
						appointment with easy steps
					</p>
				</div>

				<div className="mt-7 flex flex-col gap-4 lg:flex-row">
					<Input
						className="basis-[44%]"
						placeholder="Search Medical Specialist, Doctor, etc"
						leftIcon={<SearchIcon className="h-6 w-6" />}
						size="lg"
					/>
					<Input
						className="basis-[36%]"
						placeholder="Set your location"
						leftIcon={<TargetIcon className="h-6 w-6" />}
						size="lg"
					/>
					<Button
						className="basis-[20%] lg:hidden"
						color="primary"
						size="lg"
						leftIcon={<SearchIcon className="h-6 w-6" />}
					>
						Search
					</Button>
					<Button
						className="hidden basis-[20%] lg:flex"
						color="primary"
						size="lg"
						leftIcon={<SearchIcon className="h-6 w-6" />}
					>
						Search
					</Button>
				</div>
			</div>
		</div>
	);
};

export default WelcomeSection;
