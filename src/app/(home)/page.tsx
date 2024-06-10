import { FC } from "react";

import AboutSection from "./sections/AboutSection";
import BenefitsSection from "./sections/BenefitsSection";
import BlogSection from "./sections/BlogSection";
import ProfessionalsSection from "./sections/ProfessionalsSection";
import ServicesSection from "./sections/ServicesSection";
import WelcomeSection from "./sections/WelcomeSection";

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
