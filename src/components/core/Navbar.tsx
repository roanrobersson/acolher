"use client";

import { ComponentProps, createContext, FC } from "react";

import { useSticky } from "hooks";
import { cc } from "utils/tailwindUtils";

type NavbarContextType = {
	sticky: boolean;
};

const NavbarContext = createContext({} as NavbarContextType);

type NavbarProps = ComponentProps<"div">;

const Navbar: FC<NavbarProps> = ({ className, children, ...restProps }) => {
	const { sticky, refHandler } = useSticky({ debounce: 100 });
	const heigthClass = "h-[78px] lg:h-[80px]";

	return (
		<NavbarContext.Provider value={{ sticky }}>
			<div className={cc("", heigthClass)}>
				<div
					ref={refHandler}
					className={cc(
						"flex flex-col justify-center transition-colors duration-0",
						heigthClass,
						{
							"text-neutral-900": !sticky,
							"fixed top-0 z-10 w-full bg-card shadow-md duration-500 ": sticky
						},
						className
					)}
					{...restProps}
				>
					<div
						className={cc(
							"fluid-container flex items-center justify-between px-10"
						)}
					>
						{children}
					</div>
				</div>
			</div>
		</NavbarContext.Provider>
	);
};

export { Navbar, NavbarContext };

export type { NavbarContextType, NavbarProps };
