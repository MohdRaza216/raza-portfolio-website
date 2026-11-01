import { n as site } from "./router-B5xCzBm2.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight } from "lucide-react";
// src/routes/skills.tsx?tsr-split=component
var skillGroups = [
	{
		title: "Backend",
		skills: [
			"PHP",
			"Laravel",
			"Laravel MVC",
			"Eloquent ORM",
			"RESTful APIs",
			"Authentication",
			"Authorization",
			"CRUD"
		]
	},
	{
		title: "Frontend",
		skills: [
			"JavaScript",
			"HTML5",
			"CSS3",
			"Bootstrap",
			"jQuery",
			"AJAX",
			"Responsive Web Design",
			"React.js"
		]
	},
	{
		title: "Database",
		skills: [
			"MySQL",
			"Query Optimization",
			"Database Indexing",
			"JSON"
		]
	},
	{
		title: "Tools",
		skills: [
			"Git",
			"GitHub",
			"Postman",
			"Composer",
			"XAMPP",
			"cPanel",
			"Docker"
		]
	},
	{
		title: "Practices",
		skills: [
			"Debugging",
			"Testing",
			"Performance Tuning",
			"Agile Development",
			"Problem Solving"
		]
	},
	{
		title: "Working style",
		skills: ["Calm under pressure"]
	}
];
function Skills() {
	return /* @__PURE__ */ jsxs("div", {
		className: "px-5 md:px-8 pt-12",
		children: [
			/* @__PURE__ */ jsxs("header", {
				className: "grid gap-8 md:grid-cols-12 items-end mb-16",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "md:col-span-8",
					children: [/* @__PURE__ */ jsxs("p", {
						className: "label mb-6",
						children: [
							"Skills · ",
							skillGroups.length,
							" areas · ",
							site.role
						]
					}), /* @__PURE__ */ jsxs("h1", {
						className: "display text-[clamp(4rem,12vw,11rem)]",
						children: ["Technical ", /* @__PURE__ */ jsx("em", {
							className: "text-safelight",
							children: "stack."
						})]
					})]
				}), /* @__PURE__ */ jsx("p", {
					className: "md:col-span-4 text-lg leading-snug",
					children: "Technologies and practices from my full-stack development experience."
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "grid md:grid-cols-2 gap-px bg-ink border border-ink",
				children: skillGroups.map((group, i) => /* @__PURE__ */ jsxs("section", {
					className: "bg-paper p-8 md:p-10",
					children: [
						/* @__PURE__ */ jsxs("p", {
							className: "label text-safelight",
							children: ["Area ", String(i + 1).padStart(2, "0")]
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "display text-4xl md:text-5xl mt-4 mb-8",
							children: group.title
						}),
						/* @__PURE__ */ jsx("ul", {
							className: "flex flex-wrap gap-2",
							children: group.skills.map((skill) => /* @__PURE__ */ jsx("li", {
								className: "label border border-ink/40 px-3 py-2",
								children: skill
							}, skill))
						})
					]
				}, group.title))
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "mt-32 border-y border-ink py-12 grid gap-6 md:grid-cols-2 items-center",
				children: [/* @__PURE__ */ jsxs("p", {
					className: "display text-5xl md:text-6xl",
					children: [
						"Looking for a developer with a ",
						/* @__PURE__ */ jsx("em", { children: "full-stack" }),
						" perspective?"
					]
				}), /* @__PURE__ */ jsxs(Link, {
					to: "/contact",
					className: "contact-button md:justify-self-end",
					children: ["Let’s talk ", /* @__PURE__ */ jsx(ArrowRight, {
						"aria-hidden": "true",
						size: 14
					})]
				})]
			})
		]
	});
}
export { Skills as component };
