type RouteKeys = Record<string, (...args: any[]) => string>;

const routeKeys = {
	home: () => "/",
	services: () => "/our-services",
	professionals: () => "/professionals",
	professional: (id: number) => `/professionals/?professionalId=${id}`,
	blog: () => "/blog",
	carreer: () => "/carreer",
	about: () => "/about",
	faq: () => "/faq"
} satisfies RouteKeys;

export default routeKeys;
