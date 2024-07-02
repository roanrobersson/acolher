import { Link } from "components/core";
import { Footer, Header } from "components/layout";

const NotFoundPage = () => {
	return (
		<>
			<Header />

			<main className="flex h-[50vh] items-center justify-center">
				<section className="text-center">
					<h1 className="block font-clashDisplay text-display-md">
						<span className="font-semibold">404</span>
						<span className="block">Page Not Found</span>
					</h1>

					<Link
						href="/"
						className="mt-8 block text-link-md text-blue-400 hover:underline"
						replace
					>
						Medical Center Homepage
					</Link>
				</section>
			</main>

			<Footer />
		</>
	);
};

export default NotFoundPage;
