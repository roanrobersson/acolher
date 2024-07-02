import { FC } from "react";
import { usePathname } from "next/navigation";
import CloseIcon from "public/icons/outline/close.svg";
import SearchIcon from "public/icons/outline/search.svg";
import rk from "routeKeys";

import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerHeader,
	DrawerProps,
	DrawerTitle,
	DrawerTrigger,
	IconButton,
	Input,
	Link
} from "components/core";
import { Brand } from "components/layout";

export type NavDrawerProps = DrawerProps;

const navItems = [
	{ title: "Home", href: rk.home() },
	{ title: "Our services", href: rk.services() },
	{ title: "Our doctors", href: rk.professionals() },
	{ title: "About us", href: rk.about() }
];

const NavDrawer: FC<NavDrawerProps> = ({
	open,
	onClose,
	children,
	...restProps
}) => {
	const currentPath = usePathname();

	return (
		<Drawer direction="right" {...restProps}>
			<DrawerTrigger>{children}</DrawerTrigger>
			<DrawerContent aria-describedby={undefined}>
				<DrawerHeader className="flex justify-between px-12 py-12">
					{/* Title for screenreaders */}
					<DrawerTitle className="hidden">Main navigation drawer</DrawerTitle>
					<Brand size="sm" className="md:hidden" />
					<Brand size="md" className="hidden md:flex" />

					<DrawerClose>
						<IconButton variant="ghost" size="lg" color="secondary">
							<CloseIcon />
						</IconButton>
					</DrawerClose>
				</DrawerHeader>

				<nav className="flex flex-col gap-12 px-12 pt-20 text-link-md hover:*:underline">
					{navItems.map(({ title, href }) => (
						<Link href={href} active={currentPath === href} key={title}>
							{title}
						</Link>
					))}

					<Input placeholder="Search" leftIcon={<SearchIcon />} size="lg" />
				</nav>
			</DrawerContent>
		</Drawer>
	);
};

export default NavDrawer;
