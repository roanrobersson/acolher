import { ComponentProps, FC } from "react";
import Image from "next/image";
import { ServiceItem } from "serviceList";

import ServiceIcon from "components/ServiceIcon";
import { cc } from "utils/tailwindUtils";

import serviceList from "../../serviceList";

const OurServicesPage: FC = () => {
	return (
		<main>
			<section className="bg-background pt-9 lg:pt-28">
				<div className="fluid-container flex flex-col items-center gap-10 lg:gap-28">
					{serviceList.map((service) => (
						<ServiceCard service={service} key={service.title} />
					))}
				</div>
			</section>
		</main>
	);
};

const ServiceCard: FC<ComponentProps<"div"> & { service: ServiceItem }> = ({
	service,
	className,
	...restProps
}) => (
	<div id="card-container" className="pt-[70px] sm:max-w-[600px] lg:max-w-none">
		<div
			id="card"
			className={cc(
				"relative flex flex-col gap-10 rounded-3xl bg-card px-4 pb-8",
				"lg:flex-row-reverse lg:gap-20 lg:px-16 lg:py-20",
				className
			)}
			{...restProps}
		>
			<div id="image-container" className="h-[238px] w-full lg:w-[480px]">
				<div
					id="image"
					className={cc(
						"relative top-[-70px] h-[308px]",
						"lg:absolute lg:top-[-100px] lg:h-[460px] lg:w-[480px]"
					)}
				>
					<Image
						src={service.imageSrc}
						alt=""
						quality={100}
						fill
						sizes="(max-width: 1023px) 100vw, 480px"
						className="rounded-2xl object-cover lg:rounded-[32px]"
					/>

					<ServiceIcon
						service={service}
						className="absolute bottom-4 left-3 md:bottom-6 md:left-5 lg:hidden"
					/>
				</div>
			</div>

			<ServiceIcon
				service={service}
				className="absolute left-16 top-0 hidden -translate-y-1/2 lg:flex"
			/>

			<div id="text" className="flex flex-1 flex-col justify-center lg:mt-0">
				<h3 className="block text-title-lg lg:text-title-5xl">
					{service.title}
				</h3>
				<p className="mt-3 text-body-md lg:text-body-lg">
					{service.description}
				</p>
			</div>
		</div>
	</div>
);

export default OurServicesPage;
