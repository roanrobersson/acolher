import { ComponentProps, FC } from "react";

import { combineClasses } from "utils/tailwind";

type PageTitle = ComponentProps<"div">;

const PageTitle: FC<PageTitle> = ({ className, children, ...restProps }) => {
	return (
		<div
			className={combineClasses(
				"px-12 py-8",
				"fluid-container lg:px-0 lg:py-20",
				className
			)}
			{...restProps}
		>
			<h1 className="max-w-[70%] font-clashDisplay text-display-lg lg:max-w-none lg:text-display-7xl">
				{children}
			</h1>
		</div>
	);
};

export default PageTitle;
