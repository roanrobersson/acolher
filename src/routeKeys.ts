type RouteKeys = Record<string, () => string>;

const routeKeys = {
	home: () => "/",
	services: () => "/our-services",
	professionals: () => "/professionals",
	blog: () => "/blog",
	carreer: () => "/carreer",
	about: () => "/about",
	faq: () => "/faq"
} satisfies RouteKeys;

export default routeKeys;
