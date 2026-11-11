# Mohammed Raza Moghul — portfolio

A personal portfolio for a full-stack developer, built with TanStack Start,
React 19, Tailwind CSS v4, and Content Collections. The site includes Home,
Projects, Skills, About, and Contact pages and is deployed to Netlify.

## Layout

- `src/routes/`: `index.tsx`, `projects.tsx`, `skills.tsx`, `about.tsx`,
  `contact.tsx`, and `__root.tsx` for shared document metadata and layout
- `src/components/`: shared header, footer, contact form, and not-found page
- `src/lib/site.ts`: identity, contact details, availability, and social links
- `src/lib/projects.ts`: project collection sorted by frontmatter order
- `content/`: Markdown for projects, work experience, and education
- `src/lib/content.ts`: Content Collections schemas and Markdown sanitization

## Conventions

- Design tokens live in `src/styles.css`: `paper`, `ink`, `safelight`,
  `font-display`, `font-mono`, and the `.display`, `.label`, `.link-underline`,
  `.rise`, and `.marquee` utilities. Keep the single red accent.
- Corners are square, borders are 1px ink, section labels use mono `.label`,
  and headlines use `.display` with an `<em>` for emphasis.
- Animations respect `prefers-reduced-motion`.
- The EmailJS contact form fields must stay in sync with the static form in
  `public/contact.html` (see `ContactForm.test.tsx`). Configure EmailJS using
  the variables in `.env.example`; never commit `.env` files.
- Run dev or build once to generate `src/routeTree.gen.ts` and
  `.content-collections/` before typechecking.
