"use client";

import { FC, SVGProps } from "react";
import Image from "next/image";
import CopyRigthIcon from "public/icons/outline/copyright.svg";
import CallIcon from "public/icons/solid/call.svg";
import DarkModeIcon from "public/icons/solid/dark-mode.svg";
import FacebookIcon from "public/icons/solid/facebook.svg";
import Instagram from "public/icons/solid/instagram.svg";
import LightModeIcon from "public/icons/solid/light-mode.svg";
import MailIcon from "public/icons/solid/mail-rounded.svg";
import TwitterIcon from "public/icons/solid/twitter.svg";
import ArtifactsImage from "public/images/artifacts.png";
import rk from "routeKeys";

import { Button, Input, Link, Switch } from "components/core";
import { useDarkMode } from "hooks";
import { cc } from "utils/tailwindUtils";

import Brand from "./Brand";

type Item = {
	id: string;
	Icon: FC<SVGProps<SVGElement>>;
	href: string;
};

const socialItems: Array<Item> = [
	{
		id: "facebook",
		Icon: FacebookIcon,
		href: "https://www.facebook.com/plushealth"
	},
	{
		id: "instagram",
		Icon: Instagram,
		href: "https://www.instagram.com/plushealth"
	},
	{
		id: "twitter",
		Icon: TwitterIcon,
		href: "https://www.twitter.com/plushealth"
	}
];

const Footer: FC = () => {
	const { value, enable, disable } = useDarkMode();

	return (
		<footer className="relative pt-[120px]">
			{/* Feed */}
			<div className="container relative overflow-hidden bg-secondary-300 lg:top-[100px] lg:rounded-xl">
				<Image
					src={ArtifactsImage}
					alt=""
					fill
					className="!top-[40%] rounded-md object-cover md:!inset-0"
				/>

				<div
					className={cc(
						"relative flex flex-col items-center gap-7 py-[60px]",
						"lg:flex-row lg:gap-20 lg:p-20"
					)}
				>
					<h2
						className={cc(
							"flex-1 px-8 text-center text-display-xs text-neutral-900",
							"lg:px-0 lg:text-left lg:text-display-lg"
						)}
					>
						Thank you for Plus Medical Center and we look forward to keeping you
						informed and connected.
					</h2>

					<form className="flex flex-1 flex-col gap-3 px-5 lg:px-0">
						<Input
							className="border-white bg-white text-neutral-900"
							inputClassName="text-center"
							placeholder="Your email"
							size="lg"
						/>
						<Button size="lg" className="bg-neutral-900 hover:bg-neutral-800">
							Subscribe
						</Button>
					</form>
				</div>
			</div>

			{/* Footer */}
			<div
				className={cc(
					"mt-6 bg-card pb-7 pt-5",
					"lg:mt-0 lg:pb-10 lg:pt-[166px]"
				)}
			>
				<div className="fluid-container px-9">
					<div className="flex flex-col justify-between gap-8 lg:flex-row">
						<div>
							<Brand data-size="md" />

							<address className="mt-5 text-body-md not-italic">
								52 Bedok Reservoir Cres Singapore 479226
							</address>
							<div className="mt-10 flex gap-2 text-secondary-300">
								<LightModeIcon width={24} height={24} />
								<Switch
									checked={value}
									onCheckedChange={(checked) => {
										checked ? enable() : disable();
									}}
								/>
								<DarkModeIcon width={24} height={24} />
							</div>
						</div>

						<div className="mt-9 lg:mt-6">
							<h2 className="whitespace-nowrap text-title-xl ">Services</h2>
							<div className="mt-6 flex flex-col items-start gap-5 hover:*:underline lg:gap-6">
								<Link href={rk.services()}>Our medical Services</Link>
								<Link href={rk.blog()}>Blog</Link>
								<Link href={rk.professionals()}>Doctor</Link>
							</div>
						</div>

						<div className="lg:mt-6">
							<h2 className="whitespace-nowrap text-title-xl">About us</h2>
							<div className="mt-6 flex flex-col items-start gap-5 hover:*:underline lg:gap-6">
								<Link href={rk.about()}>About</Link>
								<Link href={rk.carreer()}>Carreer</Link>
								<Link href={rk.faq()}>FAQ</Link>
							</div>
						</div>

						<div className="mt-8 lg:mt-6">
							<h2 className="whitespace-nowrap text-title-xl ">Contact info</h2>
							<div className="mt-6 flex flex-col gap-5 lg:gap-6">
								<div className="flex items-center gap-5">
									<MailIcon className="h-6 w-6" />
									<span>plusmedicalservices@gmail.com</span>
								</div>
								<div className="flex items-center gap-5">
									<CallIcon className="h-6 w-6" />
									<span>+6212 345 6789</span>
								</div>
								<div className="flex gap-5">
									{socialItems.map(({ id, Icon, href }) => (
										<Link
											key={id}
											href={href}
											target="_blank"
											className={cc(
												"flex aspect-square w-9 items-center justify-center bg-background",
												"hover:bg-neutral-300",
												"dark:hover:bg-dark-gray-500"
											)}
										>
											<Icon width={16} height={16} />
										</Link>
									))}
								</div>
							</div>
						</div>
					</div>

					<div className="mt-16 flex items-center gap-2 lg:mt-12">
						<CopyRigthIcon width={16} height={16} />
						<span className="text-caption text-neutral-600">
							Copyright PLUS HEALTH 2024
						</span>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
