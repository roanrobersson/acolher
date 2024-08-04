import { FC, ReactNode } from "react";

import { Footer, Header, PageTitle } from "components/layout";

type AboutLayoutProps = {
	children: ReactNode;
};

const AboutLayout: FC<AboutLayoutProps> = ({ children }) => {
	return (
		<>
			<Header>
				<PageTitle>Our medical Services</PageTitle>
			</Header>

			{children}

			<Footer />
		</>
	);
};

export default AboutLayout;
