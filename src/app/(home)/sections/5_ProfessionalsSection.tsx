import { ComponentProps, FC } from "react";
import professionalList from "professionalList";

import { ProfessionalCard } from "components";
import { Button } from "components/core";
import { cc } from "utils/tailwindUtils";

const ProfessionalsSection: FC<ComponentProps<"div">> = ({
	className,
	...restProps
}) => {
	const cardsContainerClassName = cc(
		"mt-20 gap-12 flex-wrap justify-evenly",
		"lg:mt-14"
	);

	return (
		<section
			className={cc("pt-[100px] lg:pt-[246px]", className)}
			{...restProps}
		>
			<div className="fluid-container flex flex-col justify-center">
				<h2 className="text-center font-clashDisplay text-display-lg lg:text-display-7xl">
					Meet our specialist
				</h2>

				<div className={cc("flex md:hidden", cardsContainerClassName)}>
					{professionalList.slice(0, 4).map((item) => (
						<ProfessionalCard professional={item} key={item.name} />
					))}
				</div>

				<div className={cc("hidden md:flex", cardsContainerClassName)}>
					{professionalList.map((item) => (
						<ProfessionalCard professional={item} key={item.name} />
					))}
				</div>

				<Button className="mx-10 mt-[64px]" size="lg">
					See More
				</Button>
			</div>
		</section>
	);
};

export default ProfessionalsSection;
