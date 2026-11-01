# Wren Calloway — portfolio

A portfolio site for a visual designer and photographer, styled like a darkroom
contact sheet: warm paper, ink black, one safelight red, oversized italic serif
type, frame numbers and film-edge strips.

## Pages

- **Index (`/`)**: hero with overlapping prints, a marquee of disciplines, a numbered
  list of selected work with hover previews, a contact-sheet preview of the
  gallery, and an About teaser.
- **Work (`/projects`)**: an editorial showcase with alternating layouts and a
  year/client/role/scope sheet for each project.
- **Gallery (`/gallery`)**: a masonry wall of photographs you can filter by series,
  with a full-screen lightbox you can move through with the arrow keys.
- **About (`/about`)**: portrait, bio, studio numbers, working principles,
  timeline, and kit.
- **Contact (`/contact`)**: a big mailto link, social links, studio address, and a
  contact form handled by Netlify Forms.

## Tech

- TanStack Start with React 19, deployed on Netlify
- Tailwind CSS v4, with design tokens in `src/styles.css`
- Content Collections for projects, jobs, and education written in Markdown under `content/`
- **Netlify Image CDN**: every photo is served from `/.netlify/images` as responsive
  WebP with a `srcset`, a reserved aspect ratio, and a 24px blurred placeholder
- **Netlify Forms** for contact submissions (registered in `public/contact.html`)
- Fonts: Instrument Serif, Hanken Grotesk, and IBM Plex Mono (Google Fonts)

## Run locally

```bash
pnpm install
netlify dev        # serves on :8888 with Image CDN + Forms emulation
pnpm test
```

## Make it yours

- Identity, email, availability, and social links: `src/lib/site.ts`
- Gallery photos and captions: `src/lib/gallery.ts` (images live in `public/img/`)
- Projects: `content/projects/*.md`. Experience and education: `content/jobs` and `content/education`
- The social links currently point at each network's home page. Swap in real profile URLs.
