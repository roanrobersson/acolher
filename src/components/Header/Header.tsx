import { FC, ReactNode } from "react";

import Navbar from "./Navbar";

type HeaderProps = {
	children?: ReactNode;
};

const Header: FC<HeaderProps> = ({ children }) => {
	return (
		<header className="pt-6 lg:pt-16">
			<Navbar />

			{children}
		</header>
	);
};

export default Header;
