"use client";

import { ComponentProps, FC } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import HamburguerIcon from "public/icons/outline/hamburguer.svg";
import rk from "routeKeys";

import Brand from "components/Brand";
import IconButton from "components/IconButton";
import Link from "components/Link";
import { useSticky } from "hooks";
import { combineClasses } from "utils/tailwind";

const NavbarDrawer = dynamic(() => import("./NavDrawer"), {
	ssr: false
});

const navItems = [
	{ title: "Home", href: rk.home() },
	{ title: "Our services", href: rk.services() },
	{ title: "Our doctors", href: rk.professionals() },
	{ title: "About us", href: rk.about() }
];

type NavbarProps = ComponentProps<"div">;

const Navbar: FC<NavbarProps> = ({ className, ...restProps }) => {
	const { sticky, refHandler } = useSticky();
	const currentPath = usePathname();
	const heigthClass = "h-[78px] lg:h-[80px]";

	return (
		<div className={combineClasses("", heigthClass)}>
			<div
				ref={refHandler}
				className={combineClasses(
					"flex flex-col justify-center transition-colors duration-0",
					heigthClass,
					{
						"fixed top-0 z-10 w-full bg-white shadow-md duration-500": sticky
					},
					className
				)}
				{...restProps}
			>
				<div
					className={combineClasses(
						"fluid-container flex items-center justify-between px-10 text-black"
					)}
				>
					<Link href={rk.home()}>
						<Brand size="sm" onlyLogo={sticky} className="md:hidden" />
						<Brand size="md" onlyLogo={sticky} className="hidden md:flex" />
					</Link>

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
				</div>
			</div>
		</div>
	);
};

export default Navbar;
