import { ComponentProps, FC } from "react";
import serviceList from "serviceList";

import ServiceIcon from "components/ServiceIcon";
import { combineClasses } from "utils/tailwind";

const ServicesSection: FC<ComponentProps<"div">> = (props) => {
	return (
		<section className="pt-[54px] lg:pt-[88px]" {...props}>
			<div className="fluid-container">
				<h2 className="text-center font-clashDisplay text-display-lg lg:text-display-7xl">
					Our medical Services
				</h2>

				<div
					className={combineClasses(
						"mt-10 grid gap-x-6 gap-y-7",
						"sm:grid-cols-2",
						"md:grid-cols-3",
						"lg:mt-[100px] lg:gap-x-10 lg:gap-y-16",
						"xl:grid-cols-4"
					)}
				>
					{serviceList.map((service) => (
						<div
							className="rounded-2xl bg-white p-5 lg:p-8 dark:bg-dark-gray-800"
							key={service.title}
						>
							<ServiceIcon service={service} />

							<div className="mt-7 text-center sm:text-left lg:mt-12 dark:text-white">
								<h3 className="text-title-md">{service.title}</h3>

								<p className="mt-2 text-body-sm lg:mt-3">
									{service.shortDescription}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ServicesSection;
