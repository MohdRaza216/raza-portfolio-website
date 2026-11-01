import { n as site, r as socials } from "./router-B5xCzBm2.js";
import { useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowUpRight, Mail, Send } from "lucide-react";
// src/components/ContactForm.tsx
function ContactForm() {
	const [status, setStatus] = useState("idle");
	const submitting = useRef(false);
	async function submit(event) {
		event.preventDefault();
		if (submitting.current || status === "success") return;
		const body = new URLSearchParams();
		new FormData(event.currentTarget).forEach((value, key) => body.append(key, String(value)));
		submitting.current = true;
		setStatus("pending");
		try {
			const response = await fetch("/contact.html", {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: body.toString(),
				signal: AbortSignal.timeout(15e3)
			});
			if (!response.ok || /\bdata-netlify\s*=/i.test(await response.text())) throw new Error("Message was not accepted");
			setStatus("success");
		} catch {
			setStatus("error");
		} finally {
			submitting.current = false;
		}
	}
	return /* @__PURE__ */ jsx("div", { children: status === "success" ? /* @__PURE__ */ jsxs("div", {
		className: "py-12 border-t border-ink",
		children: [
			/* @__PURE__ */ jsx(Mail, {
				"aria-hidden": "true",
				className: "size-8 mb-6 text-safelight",
				strokeWidth: 1.25
			}),
			/* @__PURE__ */ jsx("h2", {
				className: "display text-5xl md:text-6xl mb-4",
				children: "Message received"
			}),
			/* @__PURE__ */ jsx("p", {
				role: "status",
				className: "text-lg mb-8",
				children: "Thank you for reaching out. I’ll get back to you as soon as I can."
			}),
			/* @__PURE__ */ jsx("button", {
				type: "button",
				className: "contact-button",
				onClick: () => setStatus("idle"),
				children: "Send another message"
			})
		]
	}) : /* @__PURE__ */ jsxs("form", {
		name: "contact",
		method: "POST",
		action: "/contact.html",
		"data-netlify": "true",
		"netlify-honeypot": "bot-field",
		"aria-busy": status === "pending",
		onSubmit: submit,
		className: "space-y-8",
		children: [
			/* @__PURE__ */ jsx("input", {
				type: "hidden",
				name: "form-name",
				value: "contact"
			}),
			/* @__PURE__ */ jsx("p", {
				hidden: true,
				children: /* @__PURE__ */ jsxs("label", { children: ["Leave this empty", /* @__PURE__ */ jsx("input", {
					name: "bot-field",
					tabIndex: -1,
					autoComplete: "off"
				})] })
			}),
			/* @__PURE__ */ jsxs("fieldset", {
				disabled: status === "pending",
				className: "min-w-0 space-y-8 disabled:opacity-60",
				children: [
					/* @__PURE__ */ jsx("legend", {
						className: "sr-only",
						children: "Your message"
					}),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
						htmlFor: "name",
						className: "label block text-ink/60",
						children: "Name"
					}), /* @__PURE__ */ jsx("input", {
						id: "name",
						name: "name",
						autoComplete: "name",
						required: true,
						maxLength: 100,
						className: "contact-input",
						placeholder: "Your name"
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
						htmlFor: "email",
						className: "label block text-ink/60",
						children: "Email"
					}), /* @__PURE__ */ jsx("input", {
						id: "email",
						name: "email",
						type: "email",
						autoComplete: "email",
						required: true,
						maxLength: 254,
						className: "contact-input",
						placeholder: "you@example.com"
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
						htmlFor: "message",
						className: "label block text-ink/60",
						children: "Message"
					}), /* @__PURE__ */ jsx("textarea", {
						id: "message",
						name: "message",
						required: true,
						maxLength: 5e3,
						rows: 6,
						className: "contact-input",
						placeholder: "Tell me about the role, project, or question..."
					})] }),
					/* @__PURE__ */ jsxs("button", {
						type: "submit",
						className: "contact-button",
						children: [/* @__PURE__ */ jsx(Send, {
							"aria-hidden": "true",
							size: 16
						}), status === "pending" ? "Sending…" : "Send message"]
					})
				]
			}),
			/* @__PURE__ */ jsx("p", {
				role: "status",
				className: "sr-only",
				children: status === "pending" ? "Sending your message…" : ""
			}),
			status === "error" && /* @__PURE__ */ jsx("p", {
				role: "alert",
				className: "border-l-2 border-safelight pl-4 text-safelight",
				children: "We couldn’t confirm your message. Your details are still here; please try again. Local previews don’t process submissions."
			})
		]
	}) });
}
// src/routes/contact.tsx?tsr-split=component
function Contact() {
	return /* @__PURE__ */ jsxs("div", {
		className: "px-5 md:px-8 pt-12",
		children: [/* @__PURE__ */ jsxs("header", {
			className: "mb-16",
			children: [
				/* @__PURE__ */ jsxs("p", {
					className: "label mb-6 flex items-center gap-2",
					children: [/* @__PURE__ */ jsx("span", { className: "size-2 rounded-full bg-safelight animate-pulse" }), site.availability]
				}),
				/* @__PURE__ */ jsxs("h1", {
					className: "display text-[clamp(4.5rem,16vw,15rem)]",
					children: ["Let’s ", /* @__PURE__ */ jsx("em", {
						className: "text-safelight",
						children: "talk."
					})]
				}),
				/* @__PURE__ */ jsx("a", {
					href: `mailto:${site.email}`,
					className: "display italic text-[clamp(1.75rem,5vw,4.5rem)] link-underline hover:text-safelight break-all",
					children: site.email
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "grid gap-16 lg:grid-cols-12",
			children: [/* @__PURE__ */ jsxs("section", {
				"aria-labelledby": "write",
				className: "lg:col-span-7",
				children: [/* @__PURE__ */ jsx("h2", {
					id: "write",
					className: "label mb-8 text-safelight",
					children: "(01) Send a message"
				}), /* @__PURE__ */ jsx(ContactForm, {})]
			}), /* @__PURE__ */ jsxs("aside", {
				className: "lg:col-span-4 lg:col-start-9 space-y-16",
				children: [
					/* @__PURE__ */ jsxs("section", {
						"aria-labelledby": "elsewhere",
						children: [/* @__PURE__ */ jsx("h2", {
							id: "elsewhere",
							className: "label mb-6 text-safelight",
							children: "(02) Elsewhere"
						}), /* @__PURE__ */ jsx("ul", {
							className: "border-t border-ink",
							children: socials.map((s) => /* @__PURE__ */ jsx("li", {
								className: "border-b border-ink",
								children: /* @__PURE__ */ jsxs("a", {
									href: s.href,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "group flex items-center justify-between gap-4 py-4 hover:text-safelight transition-colors focus-visible:outline-2 focus-visible:outline-safelight",
									children: [/* @__PURE__ */ jsx("span", {
										className: "display text-4xl transition-transform group-hover:translate-x-2 group-hover:italic",
										children: s.label
									}), /* @__PURE__ */ jsxs("span", {
										className: "label text-ink/50 group-hover:text-safelight flex items-center gap-2",
										children: [s.handle, /* @__PURE__ */ jsx(ArrowUpRight, {
											"aria-hidden": "true",
											size: 16,
											className: "transition-transform group-hover:rotate-45"
										})]
									})]
								})
							}, s.label))
						})]
					}),
					/* @__PURE__ */ jsxs("section", {
						"aria-labelledby": "studio",
						children: [/* @__PURE__ */ jsx("h2", {
							id: "studio",
							className: "label mb-6 text-safelight",
							children: "(03) Contact details"
						}), /* @__PURE__ */ jsxs("address", {
							className: "not-italic text-lg leading-relaxed",
							children: [
								/* @__PURE__ */ jsx("a", {
									className: "link-underline",
									href: `tel:${site.phone.replace(/\s/g, "")}`,
									children: site.phone
								}),
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx("span", {
									className: "label text-ink/60",
									children: site.location
								})
							]
						})]
					}),
					/* @__PURE__ */ jsxs("section", {
						"aria-labelledby": "good-fit",
						className: "bg-ink text-paper p-6",
						children: [/* @__PURE__ */ jsx("h2", {
							id: "good-fit",
							className: "label mb-4 text-paper/60",
							children: "Helpful context"
						}), /* @__PURE__ */ jsxs("ul", {
							className: "space-y-2 text-lg",
							children: [
								/* @__PURE__ */ jsx("li", { children: "→ The role, project, or problem" }),
								/* @__PURE__ */ jsx("li", { children: "→ Relevant technologies or constraints" }),
								/* @__PURE__ */ jsx("li", { children: "→ Timeline and next steps" })
							]
						})]
					})
				]
			})]
		})]
	});
}
export { Contact as component };
