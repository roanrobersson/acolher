"use client";

import { ComponentProps, createContext, FC } from "react";

import { useSticky } from "hooks";
import { combineClasses } from "utils/tailwind";

export type NavbarContextType = {
	sticky: boolean;
};

export const NavbarContext = createContext({} as NavbarContextType);

type NavbarProps = ComponentProps<"div">;

const Navbar: FC<NavbarProps> = ({ className, children, ...restProps }) => {
	const { sticky, refHandler } = useSticky();
	const heigthClass = "h-[78px] lg:h-[80px]";

	return (
		<NavbarContext.Provider value={{ sticky }}>
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
						{children}
					</div>
				</div>
			</div>
		</NavbarContext.Provider>
	);
};

export default Navbar;
