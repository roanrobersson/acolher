import { ComponentProps, FC } from "react";
import Image, { StaticImageData } from "next/image";
import Image1 from "public/images/blog/1.png";
import Image2 from "public/images/blog/2.png";
import Image3 from "public/images/blog/3.png";
import Image5 from "public/images/blog/5.png";

import { Button, Link } from "components";
import { combineClasses } from "utils/tailwind";

type Item = {
	title: string;
	description: string;
	imageSrc: StaticImageData;
	href: string;
};

const items: Array<Item> = [
	{
		title:
			"The Importance of Vaccinations: Protecting Yourself and Your Community",
		description:
			"Vaccinations are a safe and effective way to protect yourself and your community from serious and sometimes deadly diseases. Vaccines work by teaching your immune system how to recognize and fight off specific infections.",
		imageSrc: Image3,
		href: "/blog/the-importance-of-vaccinations"
	},
	{
		title: "The Importance of Sleep: How to Get a Good Night's Rest",
		description:
			"Getting a good night's sleep is essential for overall health and well-being.",
		imageSrc: Image1,
		href: "/blog/the-importance-of-sleep"
	},
	{
		title: "Preventing Heart Disease: Lifestyle Changes that Matter",
		description:
			"Heart disease is the leading cause of death worldwide, but it is also one of the most preventable.",
		imageSrc: Image2,
		href: "/blog/preventing-heart-disease"
	},
	{
		title: "Understanding Mental Health: Myths and Realities",
		description:
			"Mental health is an important part of overall well-being, but there are still many misconceptions...",
		imageSrc: Image5,
		href: "/blog/understanding-mental-health"
	}
];

const BlogSection: FC<ComponentProps<"div">> = ({
	className,
	...restProps
}) => {
	return (
		<section
			className={combineClasses("pt-[148px] lg:pt-[200px]", className)}
			{...restProps}
		>
			<div className="fluid-container flex flex-col justify-center">
				<div className="flex items-center justify-center lg:justify-between">
					<h2 className="text-center font-clashDisplay text-display-lg lg:px-0 lg:text-display-7xl">
						Our blog
					</h2>
					<Link
						className="hidden text-action-lg hover:underline lg:block"
						href="/blog"
						active
					>
						See more
					</Link>
				</div>

				<div
					className={combineClasses(
						"mt-8 grid grid-cols-1 justify-items-center gap-6",
						"md:grid-cols-2 md:gap-y-10",
						"lg:mt-11 lg:grid-cols-3 lg:gap-y-16 lg:px-0"
					)}
				>
					{items.map((item) => (
						<BlogCard key={item.title} item={item} />
					))}
				</div>

				<Button
					className="mx-20 mt-[64px] lg:hidden"
					color="secondary"
					size="lg"
				>
					See More
				</Button>
			</div>
		</section>
	);
};

const BlogCard: FC<ComponentProps<"a"> & { item: Item }> = ({
	className,
	item,
	...restProps
}) => {
	const { title, description, imageSrc, href } = item;

	return (
		<Link
			href={href}
			key={title}
			className={combineClasses(
				"group relative grid w-full max-w-[500px]  gap-4 bg-white p-4 dark:bg-dark-gray-800",
				"lg:max-w-none lg:first:col-span-3 lg:first:flex lg:first:items-center lg:first:gap-11 lg:first:p-5",
				className
			)}
			{...restProps}
		>
			<div
				className={combineClasses(
					"relative h-[228px] w-full overflow-hidden rounded-lg lg:h-[254px] lg:group-first:h-[330px]"
				)}
			>
				<Image
					src={imageSrc}
					alt=""
					quality={100}
					fill
					className="object-cover transition-transform group-hover:scale-105 group-hover:opacity-80"
					sizes="(max-width: 1023px) 664px, 540px"
				/>
			</div>

			<div className="px-2 group-first:shrink-[1.2] lg:group-first:px-0">
				<h3
					className={combineClasses(
						"text-title-md group-hover:underline",
						"lg:text-title-lg lg:group-first:text-title-5xl"
					)}
				>
					{title}
				</h3>
				<p className="mt-4 text-body-sm lg:group-first:text-body-md">
					{description}
				</p>
			</div>
		</Link>
	);
};

export default BlogSection;
