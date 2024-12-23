import { Montserrat, Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import Image from "next/image";
import ArtifactsImage from "public/images/artifacts.png";

import { cc } from "utils/tailwindUtils";

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
				<Script id="theme-provider" strategy="beforeInteractive">
					{`if (
						localStorage.theme === "dark" ||
						(!("theme" in localStorage) &&
							window.matchMedia("(prefers-color-scheme: dark)").matches)
						) {
							document.documentElement.classList.add("dark");
						} else {
							document.documentElement.classList.remove("dark");
						}
					`}
				</Script>
			</head>

			<body
				className={cc(
					PlusJakartaSansFont.className,
					PlusJakartaSansFont.variable,
					MontserratFont.variable,
					ClashDisplayFont.variable
				)}
			>
				<ArtifactsBackground />

				{children}
			</body>
		</html>
	);
};

const ArtifactsBackground = () => (
	<div
		id="artifacts-background"
		className={cc(
			"absolute top-0 z-[-1] flex h-[780px] w-full flex-col overflow-hidden bg-secondary-100 pb-20",
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
				className={cc(
					"ml-auto hidden",
					"md:block md:object-cover",
					"lg:!right-[-200px]"
				)}
			/>
		</div>
	</div>
);

export default RootLayout;
