import { n as site } from "./router-B5xCzBm2.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight } from "lucide-react";
// .content-collections/generated/allJobs.js
var allJobs_default = [
	{
		"summary": "Worked as a Data Analyst Intern.",
		"startDate": "2022-07-01",
		"endDate": "2023-06-30",
		"tags": [],
		"content": "",
		"jobTitle": "Data Analyst Intern",
		"company": "Krishna Truss & Grip Pvt. Ltd.",
		"_meta": {
			"filePath": "krishna-truss-grip.md",
			"fileName": "krishna-truss-grip.md",
			"directory": ".",
			"extension": "md",
			"path": "krishna-truss-grip"
		},
		"html": ""
	},
	{
		"summary": "Worked as a PHP Software Intern.",
		"startDate": "2025-03-01",
		"endDate": "2025-05-31",
		"tags": ["PHP"],
		"content": "",
		"jobTitle": "PHP Software Intern",
		"company": "Salesqueen Software Solutions Pvt. Ltd.",
		"_meta": {
			"filePath": "salesqueen.md",
			"fileName": "salesqueen.md",
			"directory": ".",
			"extension": "md",
			"path": "salesqueen"
		},
		"html": ""
	},
	{
		"summary": "Developed and deployed 5+ Laravel applications for business clients. Built reusable Laravel MVC and Eloquent ORM modules for CRUD, authentication, authorization, and admin dashboards; integrated RESTful and third-party APIs; and delivered responsive interfaces. Optimized MySQL queries and indexing, contributing to a reported 40% reduction in system downtime.",
		"startDate": "2025-05-01",
		"tags": [
			"PHP",
			"Laravel",
			"MySQL",
			"RESTful APIs",
			"JavaScript"
		],
		"content": "",
		"jobTitle": "Full Stack Developer",
		"company": "Save-As-Web Pvt. Ltd.",
		"_meta": {
			"filePath": "save-as-web.md",
			"fileName": "save-as-web.md",
			"directory": ".",
			"extension": "md",
			"path": "save-as-web"
		},
		"html": ""
	}
];
// .content-collections/generated/allEducations.js
var allEducations_default = [{
	"summary": "Bachelor of Technology (B.Tech)",
	"startDate": "2020",
	"endDate": "2024",
	"tags": [],
	"content": "",
	"school": "Atharva University",
	"_meta": {
		"filePath": "atharva-university.md",
		"fileName": "atharva-university.md",
		"directory": ".",
		"extension": "md",
		"path": "atharva-university"
	},
	"html": ""
}];
// src/lib/chronology.ts
function chronologicalEntries(entries) {
	return [...entries].sort((a, b) => Number(!b.endDate) - Number(!a.endDate) || b.startDate.localeCompare(a.startDate) || (b.endDate ?? "").localeCompare(a.endDate ?? "") || a._meta.path.localeCompare(b._meta.path));
}
// src/routes/about.tsx?tsr-split=component
var highlights = [
	["2.9", "years of professional experience"],
	["5+", "Laravel applications delivered"],
	["40%", "reported reduction in system downtime"],
	["4", "featured projects"]
];
var strengths = [
	["Backend & APIs", "Laravel MVC, Eloquent ORM, CRUD workflows, authentication, authorization, RESTful APIs, and third-party integrations."],
	["Responsive interfaces", "HTML, CSS, JavaScript, Bootstrap, jQuery, and AJAX for responsive, customer-facing web experiences."],
	["Database performance", "MySQL query optimization and indexing, contributing to a reported 40% reduction in system downtime."],
	["Build, test, support", "Debugging, testing, troubleshooting, and performance tuning for live applications with cross-functional teams."]
];
var displayDate = (date) => {
	if (!date) return "Present";
	if (date.length === 4) return date;
	return new Intl.DateTimeFormat("en", {
		month: "short",
		year: "numeric",
		timeZone: "UTC"
	}).format(/* @__PURE__ */ new Date(`${date}T00:00:00Z`));
};
function About() {
	const timeline = [...chronologicalEntries(allJobs_default).map((job) => ({
		key: job._meta.path,
		from: job.startDate,
		to: job.endDate,
		title: job.jobTitle,
		place: job.company,
		summary: job.summary,
		tags: job.tags
	})), ...chronologicalEntries(allEducations_default).map((education) => ({
		key: education._meta.path,
		from: education.startDate,
		to: education.endDate,
		title: education.school,
		place: "Education",
		summary: education.summary,
		tags: education.tags
	}))];
	return /* @__PURE__ */ jsxs("div", {
		className: "px-5 md:px-8 pt-12",
		children: [
			/* @__PURE__ */ jsx("section", {
				className: "grid gap-12 md:grid-cols-12 items-start",
				children: /* @__PURE__ */ jsxs("div", {
					className: "md:col-span-9",
					children: [/* @__PURE__ */ jsxs("p", {
						className: "label mb-6",
						children: [
							"About · ",
							site.role,
							" · ",
							site.location
						]
					}), /* @__PURE__ */ jsxs("h1", {
						className: "display text-[clamp(3.5rem,9vw,8.5rem)]",
						children: [
							"I build ",
							/* @__PURE__ */ jsx("em", {
								className: "text-safelight",
								children: "web applications"
							}),
							" from database to interface."
						]
					})]
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "mt-24 grid gap-10 md:grid-cols-12",
				children: [/* @__PURE__ */ jsx("p", {
					className: "label md:col-span-3 text-safelight",
					children: "(The short version)"
				}), /* @__PURE__ */ jsxs("div", {
					className: "md:col-span-8 space-y-6 text-xl md:text-2xl leading-snug",
					children: [/* @__PURE__ */ jsx("p", { children: "I’m a full-stack developer based in Mumbai, India, with 2.9 years of experience building and deploying web applications. My work spans Laravel backend development, RESTful and third-party APIs, responsive front ends, and MySQL performance." }), /* @__PURE__ */ jsx("p", { children: "At Save-As-Web, I work across the application stack—from reusable Laravel MVC and Eloquent modules to customer-facing interfaces, database optimization, and production support." })]
				})]
			}),
			/* @__PURE__ */ jsx("section", {
				"aria-label": "Career highlights",
				className: "mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-ink border-y border-ink",
				children: highlights.map(([value, label]) => /* @__PURE__ */ jsxs("div", {
					className: "bg-paper py-8 px-4",
					children: [/* @__PURE__ */ jsx("p", {
						className: "display text-6xl md:text-7xl",
						children: value
					}), /* @__PURE__ */ jsx("p", {
						className: "label mt-3 text-ink/60",
						children: label
					})]
				}, label))
			}),
			/* @__PURE__ */ jsxs("section", {
				"aria-labelledby": "strengths",
				className: "mt-32",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "label text-safelight mb-4",
						children: "(What I work on)"
					}),
					/* @__PURE__ */ jsxs("h2", {
						id: "strengths",
						className: "display text-6xl md:text-8xl mb-12",
						children: ["Across the ", /* @__PURE__ */ jsx("em", { children: "stack." })]
					}),
					/* @__PURE__ */ jsx("ol", {
						className: "grid md:grid-cols-2 gap-px bg-ink border border-ink",
						children: strengths.map(([title, summary], i) => /* @__PURE__ */ jsxs("li", {
							className: "bg-paper p-8 md:p-10 group hover:bg-ink hover:text-paper transition-colors duration-500",
							children: [
								/* @__PURE__ */ jsxs("span", {
									className: "label text-safelight",
									children: ["Focus ", String(i + 1).padStart(2, "0")]
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "display text-4xl md:text-5xl mt-4 mb-4",
									children: title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-lg max-w-md opacity-80",
									children: summary
								})
							]
						}, title))
					})
				]
			}),
			/* @__PURE__ */ jsxs("section", {
				"aria-labelledby": "timeline",
				className: "mt-32 grid gap-10 md:grid-cols-12",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "md:col-span-4",
					children: [/* @__PURE__ */ jsx("p", {
						className: "label text-safelight mb-4",
						children: "(Experience & education)"
					}), /* @__PURE__ */ jsxs("h2", {
						id: "timeline",
						className: "display text-6xl md:text-7xl md:sticky md:top-24",
						children: ["The ", /* @__PURE__ */ jsx("em", { children: "path." })]
					})]
				}), /* @__PURE__ */ jsx("ol", {
					className: "md:col-span-8 border-t border-ink",
					children: timeline.map((entry) => /* @__PURE__ */ jsxs("li", {
						className: "grid grid-cols-[7rem_1fr] gap-6 py-8 border-b border-ink",
						children: [/* @__PURE__ */ jsxs("p", {
							className: "label pt-2",
							children: [
								displayDate(entry.from),
								" — ",
								displayDate(entry.to)
							]
						}), /* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx("h3", {
								className: "display text-3xl md:text-4xl",
								children: entry.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "label text-ink/60 mt-1 mb-4",
								children: entry.place
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-lg max-w-xl",
								children: entry.summary
							}),
							entry.tags.length > 0 && /* @__PURE__ */ jsx("ul", {
								className: "mt-4 flex flex-wrap gap-2",
								children: entry.tags.map((tag) => /* @__PURE__ */ jsx("li", {
									className: "label border border-ink/40 px-2 py-1",
									children: tag
								}, tag))
							})
						] })]
					}, entry.key))
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-24 flex flex-wrap items-center justify-between gap-6",
				children: [/* @__PURE__ */ jsxs("p", {
					className: "display text-4xl md:text-5xl",
					children: [site.availability, "."]
				}), /* @__PURE__ */ jsxs(Link, {
					to: "/contact",
					className: "contact-button",
					children: ["Get in touch ", /* @__PURE__ */ jsx(ArrowRight, {
						"aria-hidden": "true",
						size: 14
					})]
				})]
			})
		]
	});
}
export { About as component };
