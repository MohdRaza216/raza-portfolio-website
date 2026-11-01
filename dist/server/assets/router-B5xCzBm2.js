import { useEffect, useState } from "react";
import { HeadContent, Link, Scripts, createFileRoute, createRootRoute, createRouter, lazyRouteComponent } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowUpRight } from "lucide-react";
// \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
// src/lib/site.ts
var site = {
	name: "Mohammed Raza Moghul",
	role: "Full-stack developer",
	location: "Mumbai, India",
	timeZone: "Asia/Kolkata",
	email: "mohdrazamoghul2024@gmail.com",
	phone: "+91 91675 84652",
	availability: "Open to full-stack developer opportunities",
	description: "Mohammed Raza Moghul is a full-stack developer building Laravel applications, APIs, and responsive web experiences.",
	summary: "I build and ship web applications across the stack, with a focus on PHP, Laravel, RESTful APIs, responsive interfaces, and reliable MySQL performance."
};
var socials = [{
	label: "GitHub",
	handle: "mohdrazamoghul",
	href: "https://github.com/mohdrazamoghul"
}, {
	label: "LinkedIn",
	handle: "in/mohammed-raza-moghul",
	href: "https://www.linkedin.com/in/mohammed-raza-moghul"
}];
function pageMeta(title, description) {
	const fullTitle = `${title} — ${site.name}`;
	return { meta: [
		{ title: fullTitle },
		{
			name: "description",
			content: description
		},
		{
			property: "og:title",
			content: fullTitle
		},
		{
			property: "og:description",
			content: description
		}
	] };
}
// src/components/SiteHeader.tsx
var links = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/projects",
		label: "Projects"
	},
	{
		to: "/skills",
		label: "Skills"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function StudioClock() {
	const [time, setTime] = useState("");
	useEffect(() => {
		const format = () => new Intl.DateTimeFormat("en-GB", {
			hour: "2-digit",
			minute: "2-digit",
			timeZone: site.timeZone
		}).format(/* @__PURE__ */ new Date());
		setTime(format());
		const id = setInterval(() => setTime(format()), 3e4);
		return () => clearInterval(id);
	}, []);
	return /* @__PURE__ */ jsxs("span", {
		className: "label hidden md:inline-flex items-center gap-2 text-ink/60",
		children: [
			/* @__PURE__ */ jsx("span", { className: "size-1.5 rounded-full bg-safelight animate-pulse" }),
			site.location,
			" ",
			time && /* @__PURE__ */ jsx("time", { children: time })
		]
	});
}
function SiteHeader() {
	return /* @__PURE__ */ jsx("header", {
		className: "sticky top-0 z-40 bg-paper/85 backdrop-blur-md border-b border-ink",
		children: /* @__PURE__ */ jsxs("div", {
			className: "px-5 md:px-8 h-14 flex items-center justify-between gap-6",
			children: [
				/* @__PURE__ */ jsxs(Link, {
					to: "/",
					className: "display text-2xl leading-none whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-safelight",
					children: ["Raza ", /* @__PURE__ */ jsx("em", {
						className: "text-safelight",
						children: "M."
					})]
				}),
				/* @__PURE__ */ jsx(StudioClock, {}),
				/* @__PURE__ */ jsx("nav", {
					"aria-label": "Main navigation",
					className: "flex gap-4 md:gap-7 overflow-x-auto",
					children: links.map((link, i) => /* @__PURE__ */ jsxs(Link, {
						to: link.to,
						activeOptions: { exact: link.to === "/" },
						activeProps: { className: "text-safelight" },
						className: "label group flex items-baseline gap-1 whitespace-nowrap hover:text-safelight transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-safelight",
						children: [/* @__PURE__ */ jsxs("span", {
							className: "hidden sm:inline text-[0.6rem] opacity-50",
							children: ["0", i]
						}), link.label]
					}, link.to))
				})
			]
		})
	});
}
// src/components/SiteFooter.tsx
function SiteFooter() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "bg-ink text-paper mt-32",
		children: [/* @__PURE__ */ jsx("div", { className: "film-edge" }), /* @__PURE__ */ jsxs("div", {
			className: "px-5 md:px-8 pt-16 pb-10",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "label text-paper/50 mb-6",
					children: "Full-stack development · Mumbai, India"
				}),
				/* @__PURE__ */ jsxs(Link, {
					to: "/contact",
					className: "display group block text-[clamp(3.5rem,13vw,13rem)] hover:text-safelight transition-colors",
					children: [
						"Let’s build",
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx("em", { children: "something." }),
						/* @__PURE__ */ jsx(ArrowUpRight, {
							"aria-hidden": "true",
							className: "inline-block size-[0.5em] -translate-y-[0.1em] transition-transform group-hover:translate-x-2 group-hover:-translate-y-4",
							strokeWidth: 1
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-16 grid gap-8 md:grid-cols-[2fr_1fr_1fr] border-t border-paper/20 pt-8",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "max-w-sm text-paper/70",
							children: site.description
						}),
						/* @__PURE__ */ jsx("ul", {
							className: "space-y-1.5",
							children: socials.map((s) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
								href: s.href,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "label link-underline hover:text-safelight",
								children: s.label
							}) }, s.label))
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "label space-y-1.5 text-paper/70",
							children: [
								/* @__PURE__ */ jsx("a", {
									href: `mailto:${site.email}`,
									className: "link-underline block text-paper normal-case tracking-normal text-sm font-sans",
									children: site.email
								}),
								/* @__PURE__ */ jsx("p", { children: site.location }),
								/* @__PURE__ */ jsxs("p", { children: [
									"© ",
									(/* @__PURE__ */ new Date()).getFullYear(),
									" ",
									site.name
								] })
							]
						})
					]
				})
			]
		})]
	});
}
// src/components/NotFoundPage.tsx
function NotFoundPage() {
	return /* @__PURE__ */ jsxs("div", {
		className: "px-5 md:px-8 py-24",
		children: [
			/* @__PURE__ */ jsx("p", {
				className: "label text-safelight mb-6",
				children: "Error 404 — frame missing"
			}),
			/* @__PURE__ */ jsxs("h1", {
				className: "display text-[clamp(4rem,14vw,12rem)] mb-8",
				children: ["Over", /* @__PURE__ */ jsx("em", { children: "exposed." })]
			}),
			/* @__PURE__ */ jsx("p", {
				className: "text-lg max-w-md mb-8",
				children: "This page was never developed, or the negative went missing."
			}),
			/* @__PURE__ */ jsx(Link, {
				to: "/",
				className: "contact-button",
				children: "Back to the index"
			})
		]
	});
}
// src/routes/__root.tsx
var siteName = site.name;
var siteDescription = site.description;
var Route$5 = createRootRoute({
	notFoundComponent: NotFoundPage,
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: siteName },
			{
				name: "description",
				content: siteDescription
			},
			{
				property: "og:title",
				content: siteName
			},
			{
				property: "og:description",
				content: siteDescription
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "theme-color",
				content: "#ece6db"
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap"
			}
		]
	}),
	shellComponent: RootDocument
});
function RootDocument({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [
			/* @__PURE__ */ jsx("a", {
				href: "#main-content",
				className: "sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-safelight focus:text-paper focus:p-4",
				children: "Skip to content"
			}),
			/* @__PURE__ */ jsx(SiteHeader, {}),
			/* @__PURE__ */ jsx("main", {
				id: "main-content",
				tabIndex: -1,
				children
			}),
			/* @__PURE__ */ jsx(SiteFooter, {}),
			/* @__PURE__ */ jsx(Scripts, {})
		] })]
	});
}
// src/routes/index.tsx
var $$splitComponentImporter$4 = () => import("./routes-DevNO3DC.js");
var Route$4 = createFileRoute("/")({
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	head: () => pageMeta(site.role, site.description)
});
// src/routes/about.tsx
var $$splitComponentImporter$3 = () => import("./about-Bxly6Z_6.js");
var Route$3 = createFileRoute("/about")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => pageMeta("About", `${site.name} — full-stack developer based in Mumbai, India.`)
});
// src/routes/contact.tsx
var $$splitComponentImporter$2 = () => import("./contact-BBO8jIS9.js");
var Route$2 = createFileRoute("/contact")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => pageMeta("Contact", `Contact ${site.name} about roles, projects, or collaboration.`)
});
// src/routes/projects.tsx
var $$splitComponentImporter$1 = () => import("./projects-D0gxZiCb.js");
var Route$1 = createFileRoute("/projects")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => pageMeta("Projects", `Selected full-stack development projects by ${site.name}.`)
});
// src/routes/skills.tsx
var $$splitComponentImporter = () => import("./skills-DZ0QU4Gl.js");
var Route = createFileRoute("/skills")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: () => pageMeta("Skills", `Technical skills and tools used by ${site.name} for full-stack development.`)
});
// src/routeTree.gen.ts
var rootRouteChildren = {
	IndexRoute: Route$4.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$5
	}),
	AboutRoute: Route$3.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$5
	}),
	ContactRoute: Route$2.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$5
	}),
	ProjectsRoute: Route$1.update({
		id: "/projects",
		path: "/projects",
		getParentRoute: () => Route$5
	}),
	SkillsRoute: Route.update({
		id: "/skills",
		path: "/skills",
		getParentRoute: () => Route$5
	})
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
// src/router.tsx
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	return createRouter({
		routeTree,
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
export { getRouter, site as n, socials as r, router_exports as t };
