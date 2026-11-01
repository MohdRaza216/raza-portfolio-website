import { n as site } from "./router-B5xCzBm2.js";
import { n as projects, t as projectId } from "./projects-ccncCF7x.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, ArrowUpRight } from "lucide-react";
// src/routes/index.tsx?tsr-split=component
var stack = [
	"PHP",
	"Laravel",
	"MySQL",
	"JavaScript",
	"RESTful APIs",
	"React.js"
];
var highlights = [
	["2.9", "years of experience"],
	["5+", "Laravel applications delivered"],
	["40%", "reported reduction in system downtime"]
];
function PortfolioHome() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("section", {
			className: "px-5 md:px-8 pt-10 md:pt-16 pb-20 grid gap-12 lg:grid-cols-12 items-end",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "lg:col-span-7",
				children: [
					/* @__PURE__ */ jsxs("p", {
						className: "label rise mb-8 flex items-center gap-3",
						children: [
							/* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-ink" }),
							"Portfolio · ",
							site.location
						]
					}),
					/* @__PURE__ */ jsxs("h1", {
						className: "display text-[clamp(4rem,10vw,11rem)] leading-[0.92]",
						children: [
							"Mohammed",
							/* @__PURE__ */ jsx("br", {}),
							/* @__PURE__ */ jsx("em", {
								className: "text-safelight",
								children: "Raza Moghul"
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-10 max-w-2xl",
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-xl leading-snug",
							children: site.summary
						}), /* @__PURE__ */ jsxs("div", {
							className: "mt-8 flex flex-wrap items-center gap-6",
							children: [/* @__PURE__ */ jsxs(Link, {
								to: "/projects",
								className: "contact-button",
								children: ["Explore projects ", /* @__PURE__ */ jsx(ArrowRight, {
									"aria-hidden": "true",
									size: 14
								})]
							}), /* @__PURE__ */ jsx(Link, {
								to: "/contact",
								className: "label link-underline",
								children: site.availability
							})]
						})]
					})
				]
			}), /* @__PURE__ */ jsxs("aside", {
				className: "lg:col-span-5 bg-ink text-paper p-6 md:p-8",
				children: [/* @__PURE__ */ jsx("p", {
					className: "label text-paper/50 mb-8",
					children: "Developer profile · 01"
				}), /* @__PURE__ */ jsxs("dl", {
					className: "divide-y divide-paper/20",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "py-4 grid grid-cols-[7rem_1fr] gap-4",
							children: [/* @__PURE__ */ jsx("dt", {
								className: "label text-paper/50",
								children: "Focus"
							}), /* @__PURE__ */ jsx("dd", {
								className: "text-lg",
								children: "Full-stack web development"
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "py-4 grid grid-cols-[7rem_1fr] gap-4",
							children: [/* @__PURE__ */ jsx("dt", {
								className: "label text-paper/50",
								children: "Core stack"
							}), /* @__PURE__ */ jsx("dd", {
								className: "text-lg",
								children: "PHP · Laravel · MySQL"
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "py-4 grid grid-cols-[7rem_1fr] gap-4",
							children: [/* @__PURE__ */ jsx("dt", {
								className: "label text-paper/50",
								children: "Currently"
							}), /* @__PURE__ */ jsx("dd", {
								className: "text-lg",
								children: "Save-As-Web Pvt. Ltd."
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "py-4 grid grid-cols-[7rem_1fr] gap-4",
							children: [/* @__PURE__ */ jsx("dt", {
								className: "label text-paper/50",
								children: "Based in"
							}), /* @__PURE__ */ jsx("dd", {
								className: "text-lg",
								children: site.location
							})]
						})
					]
				})]
			})]
		}),
		/* @__PURE__ */ jsx("div", {
			className: "bg-ink text-paper overflow-hidden py-4 border-y border-ink",
			"aria-hidden": "true",
			children: /* @__PURE__ */ jsx("div", {
				className: "marquee flex w-max",
				children: [0, 1].map((n) => /* @__PURE__ */ jsx("p", {
					className: "display italic text-4xl md:text-5xl flex shrink-0",
					children: stack.map((item) => /* @__PURE__ */ jsxs("span", {
						className: "px-6 flex items-center gap-6",
						children: [
							item,
							" ",
							/* @__PURE__ */ jsx("span", {
								className: "text-safelight not-italic",
								children: "✦"
							})
						]
					}, item))
				}, n))
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			"aria-labelledby": "featured-work",
			className: "px-5 md:px-8 pt-28",
			children: [/* @__PURE__ */ jsxs("header", {
				className: "flex items-end justify-between gap-6 mb-10",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
					className: "label text-ink/60 mb-3",
					children: "Selected work · 01—04"
				}), /* @__PURE__ */ jsxs("h2", {
					id: "featured-work",
					className: "display text-6xl md:text-8xl",
					children: ["Selected ", /* @__PURE__ */ jsx("em", { children: "projects" })]
				})] }), /* @__PURE__ */ jsxs(Link, {
					to: "/projects",
					className: "label link-underline hidden md:inline-flex items-center gap-2",
					children: ["All projects ", /* @__PURE__ */ jsx(ArrowRight, {
						"aria-hidden": "true",
						size: 14
					})]
				})]
			}), projects.length ? /* @__PURE__ */ jsx("ol", {
				className: "border-t border-ink",
				children: projects.map((project, i) => /* @__PURE__ */ jsx("li", {
					className: "border-b border-ink",
					children: /* @__PURE__ */ jsxs(Link, {
						to: "/projects",
						hash: projectId(project),
						className: "group grid grid-cols-[2.5rem_1fr_auto] md:grid-cols-[4rem_1fr_16rem_2rem] items-center gap-4 py-6 md:py-8 hover:text-safelight transition-colors focus-visible:outline-2 focus-visible:outline-safelight",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "label text-ink/50",
								children: String(i + 1).padStart(2, "0")
							}),
							/* @__PURE__ */ jsx("span", {
								className: "display text-3xl md:text-6xl transition-transform duration-500 group-hover:translate-x-3 group-hover:italic",
								children: project.title
							}),
							/* @__PURE__ */ jsx("span", {
								className: "label hidden md:block text-ink/60",
								children: project.tags.slice(0, 3).join(" · ")
							}),
							/* @__PURE__ */ jsx(ArrowUpRight, {
								"aria-hidden": "true",
								className: "size-6 transition-transform group-hover:rotate-45",
								strokeWidth: 1.25
							})
						]
					})
				}, projectId(project)))
			}) : /* @__PURE__ */ jsx("p", {
				className: "label py-10",
				children: "Projects will be added soon."
			})]
		}),
		/* @__PURE__ */ jsxs("section", {
			"aria-labelledby": "impact",
			className: "px-5 md:px-8 pt-32 grid gap-10 md:grid-cols-12",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "md:col-span-4",
				children: [/* @__PURE__ */ jsx("p", {
					className: "label text-safelight mb-4",
					children: "(A few numbers)"
				}), /* @__PURE__ */ jsxs("h2", {
					id: "impact",
					className: "display text-5xl md:text-6xl",
					children: ["Built to ", /* @__PURE__ */ jsx("em", { children: "work." })]
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "md:col-span-8 grid sm:grid-cols-3 gap-px bg-ink border border-ink",
				children: highlights.map(([value, label]) => /* @__PURE__ */ jsxs("div", {
					className: "bg-paper p-6 md:p-8",
					children: [/* @__PURE__ */ jsx("p", {
						className: "display text-6xl md:text-7xl",
						children: value
					}), /* @__PURE__ */ jsx("p", {
						className: "label mt-3 text-ink/60",
						children: label
					})]
				}, label))
			})]
		}),
		/* @__PURE__ */ jsxs("section", {
			"aria-labelledby": "about-teaser",
			className: "px-5 md:px-8 pt-32 pb-8 grid gap-10 md:grid-cols-12 items-center",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "md:col-span-4",
				children: [/* @__PURE__ */ jsx("p", {
					className: "label text-safelight mb-4",
					children: "(Approach)"
				}), /* @__PURE__ */ jsx("p", {
					className: "display text-4xl md:text-5xl",
					children: "From database design to the interface people use."
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "md:col-span-7 md:col-start-6",
				children: [/* @__PURE__ */ jsxs("h2", {
					id: "about-teaser",
					className: "display text-5xl md:text-7xl mb-8",
					children: [
						"I care about ",
						/* @__PURE__ */ jsx("em", { children: "reliable" }),
						" systems and clear, responsive experiences."
					]
				}), /* @__PURE__ */ jsxs(Link, {
					to: "/skills",
					className: "label link-underline inline-flex items-center gap-2",
					children: ["Explore my skills ", /* @__PURE__ */ jsx(ArrowRight, {
						"aria-hidden": "true",
						size: 14
					})]
				})]
			})]
		})
	] });
}
export { PortfolioHome as component };
