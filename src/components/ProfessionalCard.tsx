import { ComponentProps, FC } from "react";
import Image from "next/image";
import { ProfessionalItem } from "professionalList";

import { cc } from "utils/tailwindUtils";

type ProfessionalCardProps = ComponentProps<"div"> & {
	professional: ProfessionalItem;
};

const ProfessionalCard: FC<ProfessionalCardProps> = ({
	professional,
	className,
	...restProps
}) => (
	<div
		className={cc("group relative px-4 pb-4 text-center", className)}
		{...restProps}
	>
		<div className="absolute bottom-0 left-0 right-0 top-[60px] bg-card px-4" />

		<div className="relative">
			<div className="relative h-[278px] w-[244px]">
				<Image
					src={professional.imageSrc}
					alt=""
					quality={100}
					fill
					sizes="244px"
					className="object-cover transition-transform group-hover:scale-105 group-hover:opacity-80"
				/>
			</div>
			<h3 className="mt-4 block text-title-lg">{professional.name}</h3>
			<p className="mt-2 text-body-md">{professional.occupation}</p>
		</div>
	</div>
);

export default ProfessionalCard;
