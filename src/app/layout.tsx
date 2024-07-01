import { Montserrat, Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import Image from "next/image";
import ArtifactsImage from "public/images/artifacts.png";

import { PortalRoot } from "components";
import { combineClasses } from "utils/tailwind";

import type { Metadata } from "next";

import "public/styles/globals.css";

import Script from "next/script";

const PlusJakartaSansFont = Plus_Jakarta_Sans({
	subsets: ["latin"],
	variable: "--font-plus-jakarta-sans"
});

const MontserratFont = Montserrat({
	subsets: ["latin"],
	variable: "--font-montserrat"
});

const ClashDisplayFont = localFont({
	src: "../../public/fonts/ClashDisplay-Variable.ttf",
	variable: "--font-clash-display"
});

export const metadata: Metadata = {
	title: "Acolher - Espaço terapêutico",
	description: "Espaço terapêutico"
};

const RootLayout = ({
	children
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<html lang="pt-BR">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" sizes="16x16" href="/favicon/favicon-16.ico" />
				<link rel="icon" sizes="32x32" href="/favicon/favicon-32.ico" />
				<link rel="icon" sizes="128x128" href="/favicon/favicon-128.ico" />
				<link rel="icon" sizes="256x256" href="/favicon/favicon-256.ico" />
				<Script id="dark-mode" src="scripts/darkModeScript.js" />
			</head>

			<body
				className={combineClasses(
					PlusJakartaSansFont.className,
					PlusJakartaSansFont.variable,
					MontserratFont.variable,
					ClashDisplayFont.variable,
					"bg-dark-gray-50 text-black dark:bg-dark-900 dark:text-white"
				)}
			>
				<ArtifactsBackground />

				{children}

				<PortalRoot />
			</body>
		</html>
	);
};

const ArtifactsBackground = () => (
	<div
		id="artifacts-background"
		className={combineClasses(
			"absolute top-0 z-[-1] flex h-[780px] w-full flex-col overflow-hidden bg-light-blue-100 pb-20",
			"lg:h-[840px]"
		)}
	>
		<Image src={ArtifactsImage} alt="" className="md:hidden" />

		<div className="absolute inset-0 xl:container">
			<Image
				src={ArtifactsImage}
				alt=""
				fill
				quality={100}
				className={combineClasses(
					"ml-auto hidden",
					"md:block md:object-cover",
					"lg:!right-[-200px]"
				)}
			/>
		</div>
	</div>
);

export default RootLayout;
