# Mohammed Raza Moghul — portfolio

A portfolio for a Mumbai-based full-stack developer focused on PHP, Laravel,
RESTful APIs, responsive interfaces, and MySQL performance. The site uses an
editorial paper-and-ink design with a single red accent.

## Pages

- **Home (`/`)**: introduction, selected projects, technical focus, and contact links.
- **Projects (`/projects`)**: four projects described in the resume.
- **Skills (`/skills`)**: technical skills grouped by area.
- **About (`/about`)**: professional summary, experience, and education.
- **Contact (`/contact`)**: email, phone, professional profiles, and a Netlify contact form.

## Tech

- TanStack Start with React 19, deployed on Netlify
- Tailwind CSS v4, with design tokens in `src/styles.css`
- Content Collections for projects, jobs, and education in `content/`
- Netlify Forms for contact submissions, registered in `public/contact.html`

## Run locally

```bash
pnpm install
netlify dev
pnpm test
```

## Update content

- Identity and contact links: `src/lib/site.ts`
- Projects: `content/projects/*.md`
- Experience and education: `content/jobs/` and `content/education/`
- Technical skills: `src/routes/skills.tsx`
