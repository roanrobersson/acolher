import { FC } from "react";

import WelcomeSection from "./sections/1_WelcomeSection";
import ServicesSection from "./sections/2_ServicesSection";
import AboutSection from "./sections/3_AboutSection";
import BenefitsSection from "./sections/4_BenefitsSection";
import ProfessionalsSection from "./sections/5_ProfessionalsSection";
import BlogSection from "./sections/6_BlogSection";

const HomePage: FC = () => {
	return (
		<main>
			<WelcomeSection />

			<ServicesSection />

			<AboutSection />

			<BenefitsSection />

			<ProfessionalsSection />

			<BlogSection />
		</main>
	);
};

export default HomePage;
