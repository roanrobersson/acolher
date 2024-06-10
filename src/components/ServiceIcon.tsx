import { ComponentProps, FC } from "react";
import { ServiceItem } from "serviceList";

import { combineClasses } from "utils/tailwind";

export type ServiceIconProps = ComponentProps<"div"> & { service: ServiceItem };

const ServiceIcon: FC<ServiceIconProps> = ({ className, service }) => (
	<div
		id="icon"
		className={combineClasses(
			"flex aspect-square items-center justify-center rounded-full",
			"w-[56px] text-white dark:text-gray-800",
			"md:w-[66px]",
			"lg:w-[86px]",
			className
		)}
		style={{ backgroundColor: service.iconColor }}
	>
		<service.Icon
			className={combineClasses("h-7 w-7", "md:h-9 md:w-9", "lg:h-11 lg:w-11")}
		/>
	</div>
);

export default ServiceIcon;
