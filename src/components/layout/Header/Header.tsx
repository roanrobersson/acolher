"use client";

import { FC, ReactNode } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import HamburguerIcon from "public/icons/outline/hamburguer.svg";
import rk from "routeKeys";

import { Link, Navbar } from "components/core";
import IconButton from "components/core/IconButton";
import { NavbarContext } from "components/core/Navbar";
import { Brand } from "components/layout";

type HeaderProps = {
	children?: ReactNode;
};

const NavbarDrawer = dynamic(() => import("./NavDrawer"), {
	ssr: false
});

const navItems = [
	{ title: "Home", href: rk.home() },
	{ title: "Our services", href: rk.services() },
	{ title: "Our doctors", href: rk.professionals() },
	{ title: "About us", href: rk.about() }
];

const Header: FC<HeaderProps> = ({ children }) => {
	const currentPath = usePathname();

	return (
		<header className="pt-6 lg:pt-16">
			<Navbar>
				<NavbarContext.Consumer>
					{({ sticky }) => (
						<Link href={rk.home()}>
							<Brand size="sm" onlyLogo={sticky} className="md:hidden" />
							<Brand size="md" onlyLogo={sticky} className="hidden md:flex" />
						</Link>
					)}
				</NavbarContext.Consumer>

				<nav className="hidden gap-16 text-link-md hover:*:underline lg:flex xl:gap-20">
					{navItems.map(({ title, href }) => (
						<Link href={href} active={currentPath === href} key={title}>
							{title}
						</Link>
					))}
				</nav>

				<NavbarDrawer>
					<IconButton
						variant="ghost"
						color="secondary"
						size="lg"
						className="lg:hidden"
					>
						<HamburguerIcon className="h-8 w-8" />
					</IconButton>
				</NavbarDrawer>
			</Navbar>

			{children}
		</header>
	);
};

export default Header;
