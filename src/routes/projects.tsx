import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'
import { projectId, projects } from '../lib/projects'
import { site, pageMeta } from '../lib/site'

export const Route = createFileRoute('/projects')({
  component: Projects,
  head: () =>
    pageMeta(
      'Projects',
      `Selected full-stack development projects by ${site.name}.`,
    ),
})

function Projects() {
  return (
    <div className="px-5 md:px-8 pt-12">
      <header className="mb-20 grid gap-8 md:grid-cols-12 items-end">
        <div className="md:col-span-8">
          <p className="label mb-6">Selected work · PHP · Laravel · MySQL</p>
          <h1 className="display text-[clamp(4rem,12vw,11rem)]">
            Projects<em className="text-safelight">.</em>
          </h1>
        </div>
        <p className="md:col-span-4 text-lg leading-snug">
          Four projects from the resume, covering application development,
          e-commerce, course discovery, and business platforms.
        </p>
      </header>

      {projects.length ? (
        <div className="border-t border-ink">
          {projects.map((project, i) => (
            <article
              key={projectId(project)}
              id={projectId(project)}
              className="scroll-mt-24 grid gap-8 py-10 md:py-14 md:grid-cols-12 border-b border-ink"
            >
              <div className="md:col-span-3">
                <p className="label text-safelight">
                  Project {String(i + 1).padStart(2, '0')}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="label border border-ink/40 px-2 py-1"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-8 md:col-start-5">
                <h2 className="display text-4xl md:text-6xl mb-5">
                  {project.title}
                </h2>
                <p className="text-xl leading-snug mb-6">
                  {project.description}
                </p>
                <div className="prose prose-lg max-w-none prose-headings:font-normal prose-headings:font-display text-ink prose-strong:text-ink">
                  <div dangerouslySetInnerHTML={{ __html: project.html }} />
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p className="label py-10">Projects will be added soon.</p>
      )}

      <aside className="mt-32 border-y border-ink py-12 grid gap-6 md:grid-cols-2 items-center">
        <p className="display text-5xl md:text-6xl">
          Have a role or project that needs a <em>developer?</em>
        </p>
        <Link to="/contact" className="contact-button md:justify-self-end">
          Get in touch <ArrowUpRight aria-hidden="true" size={14} />
        </Link>
      </aside>
    </div>
  )
}
