import { Link } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'
import { site, socials } from '../lib/site'

export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper mt-32">
      <div className="film-edge" />
      <div className="px-5 md:px-8 pt-16 pb-10">
        <p className="label text-paper/50 mb-6">
          Full-stack development · Mumbai, India
        </p>
        <Link
          to="/contact"
          className="display group block text-[clamp(3.5rem,13vw,13rem)] hover:text-safelight transition-colors"
        >
          Let’s build
          <br />
          <em>something.</em>
          <ArrowUpRight
            aria-hidden="true"
            className="inline-block size-[0.5em] -translate-y-[0.1em] transition-transform group-hover:translate-x-2 group-hover:-translate-y-4"
            strokeWidth={1}
          />
        </Link>
        <div className="mt-16 grid gap-8 md:grid-cols-[2fr_1fr_1fr] border-t border-paper/20 pt-8">
          <p className="max-w-sm text-paper/70">{site.description}</p>
          <ul className="space-y-1.5">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label link-underline hover:text-safelight"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="label space-y-1.5 text-paper/70">
            <a
              href={`mailto:${site.email}`}
              className="link-underline block text-paper normal-case tracking-normal text-sm font-sans"
            >
              {site.email}
            </a>
            <p>{site.location}</p>
            <p>
              © {new Date().getFullYear()} {site.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
