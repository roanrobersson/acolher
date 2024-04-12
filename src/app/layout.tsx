import { Figtree } from "next/font/google";

import type { Metadata } from "next";

import "public/styles/globals.css";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "NextJs Template",
	description: "Template description"
};

const RootLayout = ({
	children
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<html lang="pt-BR">
			<body className={figtree.className}>{children}</body>
		</html>
	);
};

export default RootLayout;
