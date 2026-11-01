import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'
import { ContactForm } from '../components/ContactForm'
import { site, socials, pageMeta } from '../lib/site'

export const Route = createFileRoute('/contact')({
  component: Contact,
  head: () =>
    pageMeta(
      'Contact',
      `Contact ${site.name} about roles, projects, or collaboration.`,
    ),
})

function Contact() {
  return (
    <div className="px-5 md:px-8 pt-12">
      <header className="mb-16">
        <p className="label mb-6 flex items-center gap-2">
          <span className="size-2 rounded-full bg-safelight animate-pulse" />
          {site.availability}
        </p>
        <h1 className="display text-[clamp(4.5rem,16vw,15rem)]">
          Let’s <em className="text-safelight">talk.</em>
        </h1>
        <a
          href={`mailto:${site.email}`}
          className="display italic text-[clamp(1.75rem,5vw,4.5rem)] link-underline hover:text-safelight break-all"
        >
          {site.email}
        </a>
      </header>

      <div className="grid gap-16 lg:grid-cols-12">
        <section aria-labelledby="write" className="lg:col-span-7">
          <h2 id="write" className="label mb-8 text-safelight">
            (01) Send a message
          </h2>
          <ContactForm />
        </section>

        <aside className="lg:col-span-4 lg:col-start-9 space-y-16">
          <section aria-labelledby="elsewhere">
            <h2 id="elsewhere" className="label mb-6 text-safelight">
              (02) Elsewhere
            </h2>
            <ul className="border-t border-ink">
              {socials.map((s) => (
                <li key={s.label} className="border-b border-ink">
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 py-4 hover:text-safelight transition-colors focus-visible:outline-2 focus-visible:outline-safelight"
                  >
                    <span className="display text-4xl transition-transform group-hover:translate-x-2 group-hover:italic">
                      {s.label}
                    </span>
                    <span className="label text-ink/50 group-hover:text-safelight flex items-center gap-2">
                      {s.handle}
                      <ArrowUpRight
                        aria-hidden="true"
                        size={16}
                        className="transition-transform group-hover:rotate-45"
                      />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="studio">
            <h2 id="studio" className="label mb-6 text-safelight">
              (03) Contact details
            </h2>
            <address className="not-italic text-lg leading-relaxed">
              <a
                className="link-underline"
                href={`tel:${site.phone.replace(/\s/g, '')}`}
              >
                {site.phone}
              </a>
              <br />
              <span className="label text-ink/60">{site.location}</span>
            </address>
          </section>

          <section aria-labelledby="good-fit" className="bg-ink text-paper p-6">
            <h2 id="good-fit" className="label mb-4 text-paper/60">
              Helpful context
            </h2>
            <ul className="space-y-2 text-lg">
              <li>→ The role, project, or problem</li>
              <li>→ Relevant technologies or constraints</li>
              <li>→ Timeline and next steps</li>
            </ul>
          </section>
        </aside>
      </div>
    </div>
  )
}
