import { createPortal } from "react-dom";

import { isSSR } from "utils/misc";

import type { ComponentPropsWithoutRef, FC, ReactNode } from "react";

export type PortalRootProps = ComponentPropsWithoutRef<"div"> & {
	id?: string;
};

const DEFAULT_ID = "default-portal";

export const PortalRoot: FC<PortalRootProps> = ({
	id = DEFAULT_ID,
	...rest
}) => {
	return <div id={id} {...rest} />;
};

type PortalProps = {
	id?: string;
	children: ReactNode;
};

const Portal: FC<PortalProps> = ({ id = DEFAULT_ID, children }) => {
	if (isSSR) return null;
	const root = document.getElementById(id);

	return root ? createPortal(children, root) : null;
};

export default Portal;
