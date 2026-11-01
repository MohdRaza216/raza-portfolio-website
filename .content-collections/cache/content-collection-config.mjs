// content-collections.ts
import { defineCollection, defineConfig } from "@content-collections/core";

// src/lib/content.ts
import { marked } from "marked";
import sanitizeHtml from "sanitize-html";
import { z } from "zod";
var text = z.string().trim().min(1);
var date = z.string().regex(/^\d{4}-\d{2}-\d{2}$/).refine((value) => {
  const parsed = /* @__PURE__ */ new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value;
}, "Use a valid YYYY-MM-DD calendar date");
var educationDate = z.union([
  date,
  z.string().regex(/^\d{4}$/).refine((value) => Number(value) >= 1900 && Number(value) <= 2100)
]);
var slug = text.regex(/^[a-zA-Z0-9]+(?:[-_][a-zA-Z0-9]+)*$/);
var tags = z.array(text).default([]);
var url = z.url({ protocol: /^https?$/ });
var datedFields = {
  summary: text,
  startDate: date,
  endDate: date.optional(),
  tags,
  content: z.string()
};
var validRange = (entry) => !entry.endDate || entry.endDate >= entry.startDate;
var jobSchema = z.object({
  ...datedFields,
  jobTitle: text,
  company: text,
  location: text.optional()
}).refine(validRange, "End date must not precede start date");
var educationSchema = z.object({
  summary: text,
  startDate: educationDate,
  endDate: educationDate.optional(),
  tags,
  content: z.string(),
  school: text
}).refine(validRange, "End date must not precede start date");
var blogSchema = z.object({
  title: text,
  date,
  summary: text,
  tags,
  author: text,
  slug: slug.optional(),
  content: z.string()
});
var projectSchema = z.object({
  title: text,
  description: text,
  year: z.number().int().min(1900).max(2100).optional(),
  role: text.optional(),
  client: text.optional(),
  order: z.number().default(0),
  tags,
  github: url.optional(),
  liveUrl: url.optional(),
  image: z.union([
    z.url({ protocol: /^https$/ }),
    text.refine(
      (value) => !value.includes(":") && !value.startsWith("//") && !value.includes("\\"),
      "Use a public image path or HTTPS URL"
    )
  ]).optional(),
  imageAlt: text.optional(),
  content: z.string()
});
function renderMarkdown(content) {
  return sanitizeHtml(marked.parse(content, { async: false }), {
    allowedTags: [...sanitizeHtml.defaults.allowedTags, "img"],
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      img: ["src", "alt", "title", "width", "height"],
      code: ["class"]
    },
    allowedSchemes: ["http", "https", "mailto"],
    allowProtocolRelative: false
  });
}

// content-collections.ts
var jobs = defineCollection({
  name: "jobs",
  directory: "content/jobs",
  include: "**/*.md",
  schema: jobSchema,
  transform: (doc) => ({ ...doc, html: renderMarkdown(doc.content) })
});
var education = defineCollection({
  name: "education",
  directory: "content/education",
  include: "**/*.md",
  schema: educationSchema,
  transform: (doc) => ({ ...doc, html: renderMarkdown(doc.content) })
});
var projects = defineCollection({
  name: "projects",
  directory: "content/projects",
  include: "**/*.md",
  schema: projectSchema,
  transform: (doc) => ({
    ...doc,
    image: doc.image && !doc.image.startsWith("/") && !doc.image.startsWith("https://") ? `/${doc.image}` : doc.image,
    html: renderMarkdown(doc.content)
  })
});
var content_collections_default = defineConfig({ content: [jobs, education, projects] });
export {
  content_collections_default as default
};
