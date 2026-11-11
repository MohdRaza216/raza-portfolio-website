# Mohammed Raza Moghul — portfolio

A portfolio for a Mumbai-based full-stack developer focused on PHP, Laravel,
RESTful APIs, responsive interfaces, and MySQL performance. The site uses an
editorial paper-and-ink design with a single red accent.

## Pages

- **Home (`/`)**: introduction, selected projects, technical focus, and contact links.
- **Projects (`/projects`)**: four projects described in the resume.
- **Skills (`/skills`)**: technical skills grouped by area.
- **About (`/about`)**: professional summary, experience, and education.
- **Contact (`/contact`)**: email, phone, professional profiles, and an EmailJS-powered contact form.

## Tech

- TanStack Start with React 19, deployed on Netlify
- Tailwind CSS v4, with design tokens in `src/styles.css`
- Content Collections for projects, jobs, and education in `content/`
- EmailJS Browser SDK for contact submissions

## Run locally

```bash
pnpm install
Copy-Item .env.example .env
# Fill in the EmailJS values in .env before running the contact form
netlify dev
pnpm test
```

## Configure EmailJS

1. Create an EmailJS service and an email template that uses the
   `{{name}}`, `{{email}}`, and `{{message}}` template variables. Set the
   template's **Reply To** field to `{{reply_to}}`.
2. Copy your service ID, template ID, and EmailJS **public** key to the matching
   `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and
   `VITE_EMAILJS_PUBLIC_KEY` variables in `.env.example` (copied to `.env`
   for local development).
3. Add those same variables to the Netlify site's environment variables and
   trigger a new deploy. Vite embeds them when the site is built.
4. Configure allowed origins and abuse/rate-limiting protections in EmailJS.

The public key is intended for browser use. Never add an EmailJS private key or
other secret to a `VITE_*` variable or commit it to the repository.

## Update content

- Identity and contact links: `src/lib/site.ts`
- Projects: `content/projects/*.md`
- Experience and education: `content/jobs/` and `content/education/`
- Technical skills: `src/routes/skills.tsx`
