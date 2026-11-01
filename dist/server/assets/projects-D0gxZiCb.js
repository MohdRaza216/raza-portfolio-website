import { n as projects, t as projectId } from "./projects-ccncCF7x.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowUpRight } from "lucide-react";
// src/routes/projects.tsx?tsr-split=component
function Projects() {
	return /* @__PURE__ */ jsxs("div", {
		className: "px-5 md:px-8 pt-12",
		children: [
			/* @__PURE__ */ jsxs("header", {
				className: "mb-20 grid gap-8 md:grid-cols-12 items-end",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "md:col-span-8",
					children: [/* @__PURE__ */ jsx("p", {
						className: "label mb-6",
						children: "Selected work · PHP · Laravel · MySQL"
					}), /* @__PURE__ */ jsxs("h1", {
						className: "display text-[clamp(4rem,12vw,11rem)]",
						children: ["Projects", /* @__PURE__ */ jsx("em", {
							className: "text-safelight",
							children: "."
						})]
					})]
				}), /* @__PURE__ */ jsx("p", {
					className: "md:col-span-4 text-lg leading-snug",
					children: "Four projects from the resume, covering application development, e-commerce, course discovery, and business platforms."
				})]
			}),
			projects.length ? /* @__PURE__ */ jsx("div", {
				className: "border-t border-ink",
				children: projects.map((project, i) => /* @__PURE__ */ jsxs("article", {
					id: projectId(project),
					className: "scroll-mt-24 grid gap-8 py-10 md:py-14 md:grid-cols-12 border-b border-ink",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "md:col-span-3",
						children: [/* @__PURE__ */ jsxs("p", {
							className: "label text-safelight",
							children: ["Project ", String(i + 1).padStart(2, "0")]
						}), /* @__PURE__ */ jsx("ul", {
							className: "mt-5 flex flex-wrap gap-2",
							children: project.tags.map((tag) => /* @__PURE__ */ jsx("li", {
								className: "label border border-ink/40 px-2 py-1",
								children: tag
							}, tag))
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "md:col-span-8 md:col-start-5",
						children: [
							/* @__PURE__ */ jsx("h2", {
								className: "display text-4xl md:text-6xl mb-5",
								children: project.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-xl leading-snug mb-6",
								children: project.description
							}),
							/* @__PURE__ */ jsx("div", {
								className: "prose prose-lg max-w-none prose-headings:font-normal prose-headings:font-display text-ink prose-strong:text-ink",
								children: /* @__PURE__ */ jsx("div", { dangerouslySetInnerHTML: { __html: project.html } })
							})
						]
					})]
				}, projectId(project)))
			}) : /* @__PURE__ */ jsx("p", {
				className: "label py-10",
				children: "Projects will be added soon."
			}),
			/* @__PURE__ */ jsxs("aside", {
				className: "mt-32 border-y border-ink py-12 grid gap-6 md:grid-cols-2 items-center",
				children: [/* @__PURE__ */ jsxs("p", {
					className: "display text-5xl md:text-6xl",
					children: ["Have a role or project that needs a ", /* @__PURE__ */ jsx("em", { children: "developer?" })]
				}), /* @__PURE__ */ jsxs(Link, {
					to: "/contact",
					className: "contact-button md:justify-self-end",
					children: ["Get in touch ", /* @__PURE__ */ jsx(ArrowUpRight, {
						"aria-hidden": "true",
						size: 14
					})]
				})]
			})
		]
	});
}
export { Projects as component };
