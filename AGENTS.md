# Wren Calloway portfolio: agent notes

A personal portfolio (designer and photographer) built on TanStack Start, React 19, Tailwind v4,
and Content Collections, and deployed to Netlify. The pages are Index, Work, Gallery, About,
and Contact. The template's blog and résumé routes were removed on purpose. Experience now
lives on the About page.

## Layout

- `src/routes/`: `index.tsx`, `projects.tsx`, `gallery.tsx` (filters and the `<dialog>` lightbox), `about.tsx`, `contact.tsx`, `__root.tsx` (fonts, header, and footer)
- `src/components/`: `SiteHeader` (nav and live Lisbon clock; browser time is only read in an effect), `SiteFooter`, `Photo`, `ContactForm`, `NotFoundPage`
- `src/lib/site.ts`: identity, email, availability, and `socials`
- `src/lib/gallery.ts`: gallery frames (src, intrinsic width/height, series, captions). Not in Content Collections, because frames are data, not prose
- `src/lib/image.ts`: Netlify Image CDN URL, `srcset`, and placeholder helpers
- `src/lib/projects.ts`: projects sorted by the frontmatter `order` field
- `content/`: Markdown for projects, jobs, and education. Schemas live in `src/lib/content.ts`
- `public/img/`: JPEG masters (AI-generated placeholder photography)

## Conventions

- **Never reference `/img/...` directly in `<img>`.** Use `<Photo>` or `cdn()` so visitors get resized WebP. Pass the real intrinsic `width`/`height` to `<Photo>` to reserve the aspect ratio.
- Design tokens live in `src/styles.css`: `paper`, `ink`, `safelight` colours, `font-display`, `font-mono`, and the `.display`, `.label`, `.film-edge`, `.link-underline`, `.develop`, `.rise`, and `.marquee` utilities. Keep the single red accent. Don't add new colours.
- Corners are square (`--radius: 0`). Borders are 1px ink. Section labels use mono `.label`. Headlines use `.display` with an `<em>` for the italic or red word.
- Animations respect `prefers-reduced-motion`. Grain is a fixed `body::after` overlay.
- The contact form fields must stay in sync with `public/contact.html` (see `ContactForm.test.tsx`). Netlify Forms is enabled through the feature marker.
- `blogSchema`, `resolveSlug`, and `assertUniqueSlugs` remain in `content.ts` (and its tests) so a blog can be re-added later. No collection uses them right now.
- Run dev or build once to generate `src/routeTree.gen.ts` and `.content-collections/` before typechecking.
