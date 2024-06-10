import { FC, ReactNode } from "react";

import { Footer, Header } from "components";

type HomeLayoutProps = {
	children: ReactNode;
};

const HomeLayout: FC<HomeLayoutProps> = ({ children }) => {
	return (
		<>
			<Header />

			{children}

			<Footer />
		</>
	);
};

export default HomeLayout;
