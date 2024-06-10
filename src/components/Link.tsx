"use client";

import { ComponentProps, FC } from "react";
import NextLink from "next/link";

import { combineClasses } from "utils/tailwind";

type LinkProps = ComponentProps<typeof NextLink> & { active?: boolean };

const Link: FC<LinkProps> = ({ className, active, children, ...restProps }) => {
	return (
		<NextLink
			className={combineClasses({ "text-blue-400": active }, className)}
			{...restProps}
		>
			{children}
		</NextLink>
	);
};

export default Link;
