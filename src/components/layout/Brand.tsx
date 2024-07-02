import { ComponentProps, FC } from "react";
import LogoSvg from "public/svg/logo.svg";

import { combineClasses } from "utils/tailwind";

type BrandProps = ComponentProps<"div"> & {
	onlyLogo?: boolean;
	size?: "sm" | "md" | "lg";
};

const Brand: FC<BrandProps> = ({
	className,
	onlyLogo,
	size = "md",
	...restProps
}) => {
	return (
		<div
			className={combineClasses(
				"flex flex-nowrap items-center gap-3",
				className
			)}
			{...restProps}
		>
			<LogoSvg
				className={combineClasses({
					"h-[36px] w-[36px]": size === "sm",
					"h-[48px] w-[48px]": size === "md",
					"h-[56px] w-[56px]": size === "lg"
				})}
			/>
			{!onlyLogo && (
				<p
					className={combineClasses(
						"font-montserrat font-medium tracking-wide",
						{
							"text-[14px]": size === "sm",
							"text-[18px]": size === "md",
							"text-[22px]": size === "lg"
						}
					)}
				>
					<span className="block">PLUS MEDICAL</span> CENTER
				</p>
			)}
		</div>
	);
};

export default Brand;
