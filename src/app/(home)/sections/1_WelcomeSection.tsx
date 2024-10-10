import { ComponentProps, FC } from "react";
import SearchIcon from "public/icons/outline/search.svg";
import TargetIcon from "public/icons/outline/target.svg";

import AppointmentModal from "components/AppointmentModal";
import { Button, Input } from "components/core";
import { cc } from "utils/tailwindUtils";

const WelcomeSection: FC<ComponentProps<"div">> = ({
	className,
	...restProps
}) => {
	return (
		<section className={cc("mt-[150px]", className)} {...restProps}>
			<div className="fluid-container">
				<TextBlock />

				<FormBlock />
			</div>
		</section>
	);
};

const TextBlock: FC<ComponentProps<"div">> = ({ className, ...restProps }) => {
	return (
		<div className={cc("px-2 text-neutral-900", className)} {...restProps}>
			<p className="text-title-lg lg:text-title-4xl">
				<span className="block">Welcome to</span> Plus Medical Center
			</p>
			<h1
				className={cc(
					"mt-4 max-w-[668px] font-clashDisplay text-display-4xl !font-semibold",
					"sm:max-w-[330px]",
					"md:max-w-[390px]",
					"lg:mt-5 lg:max-w-[720px] lg:pr-0 lg:text-display-9xl"
				)}
			>
				Caring for <span className="text-primary-400">you</span> and{" "}
				<span className="text-[#FF5689]">your loved</span>
			</h1>

			<div className="mt-5 flex flex-col gap-3 sm:flex-row lg:mt-8">
				<AppointmentModal>
					<Button
						className="flex-1 md:flex-initial"
						hierarchy="primary"
						size="lg"
					>
						Make appointment
					</Button>
				</AppointmentModal>

				<Button
					className={cc(
						"flex-1 md:flex-initial lg:hidden",
						"dark:border-neutral-900 dark:text-neutral-900"
					)}
					hierarchy="secondary"
					size="lg"
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
				className={cc(
					"mt-9 rounded-2xl bg-card px-6 py-5",
					"lg:mt-24 lg:px-12 lg:py-11"
				)}
			>
				<div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-10">
					<h2 className="text-title-2xl md:text-nowrap">
						Book your the Best Doctor
					</h2>
					<p
						className={cc(
							"text-body-sm text-neutral-600",
							"dark:text-neutral-400"
						)}
					>
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
						size="lg"
						leftIcon={<SearchIcon className="h-6 w-6" />}
					>
						Search
					</Button>
					<Button
						className="hidden basis-[20%] lg:flex"
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
