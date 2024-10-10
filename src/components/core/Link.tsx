"use client";

import { ComponentProps, FC } from "react";
import NextLink from "next/link";

import { cc } from "utils/tailwindUtils";

type LinkProps = ComponentProps<typeof NextLink> & { active?: boolean };

const Link: FC<LinkProps> = ({ className, active, children, ...restProps }) => {
	return (
		<NextLink
			className={cc(
				"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
				{ "text-primary": active },
				className
			)}
			{...restProps}
		>
			{children}
		</NextLink>
	);
};

export { Link };

export type { LinkProps };
