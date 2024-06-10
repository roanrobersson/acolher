import { Montserrat, Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";

import { PortalRoot } from "components";

import type { Metadata } from "next";

import "public/styles/globals.css";

import { combineClasses } from "utils/tailwind";

import { Footer, Header } from "../components";

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
				<Header />

				{children}

				<Footer />

				<PortalRoot />
			</body>
		</html>
	);
};

export default RootLayout;
