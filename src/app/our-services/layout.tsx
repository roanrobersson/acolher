import { FC, ReactNode } from "react";

import { Footer, Header, PageTitle } from "components";

type OurServicesLayoutProps = {
	children: ReactNode;
};

const OurServicesLayout: FC<OurServicesLayoutProps> = ({ children }) => {
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

export default OurServicesLayout;
