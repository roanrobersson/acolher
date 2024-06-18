import { FC, ReactNode } from "react";

import { Footer, Header, PageTitle } from "components";

type ProfessionalsLayoutProps = {
	children: ReactNode;
};

const ProfessionalsLayout: FC<ProfessionalsLayoutProps> = ({ children }) => {
	return (
		<>
			<Header>
				<PageTitle>Meet our specialist</PageTitle>
			</Header>

			{children}

			<Footer />
		</>
	);
};

export default ProfessionalsLayout;
