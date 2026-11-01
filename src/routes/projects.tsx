import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'
import { Photo } from '../components/Photo'
import { projectId, projects } from '../lib/projects'
import { pageMeta } from '../lib/site'

export const Route = createFileRoute('/projects')({
  component: Projects,
  head: () =>
    pageMeta(
      'Work',
      'Photobooks, identities, exhibitions and product work — with the decisions behind each one.',
    ),
})

function Projects() {
  return (
    <div className="px-5 md:px-8 pt-12">
      <header className="mb-20 grid gap-8 md:grid-cols-12 items-end">
        <h1 className="display text-[clamp(4.5rem,15vw,14rem)] md:col-span-8">
          Work<em className="text-safelight">.</em>
        </h1>
        <nav aria-label="Projects" className="md:col-span-4">
          <ol className="label space-y-2">
            {projects.map((p, i) => (
              <li key={projectId(p)}>
                <a
                  href={`#${projectId(p)}`}
                  className="flex gap-4 hover:text-safelight"
                >
                  <span className="text-ink/50">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="link-underline">{p.title}</span>
                  <span className="ml-auto text-ink/50">{p.year}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </header>

      {projects.length ? (
        <div className="space-y-32 md:space-y-44">
          {projects.map((project, i) => {
            const flip = i % 2 === 1
            return (
              <article
                key={projectId(project)}
                id={projectId(project)}
                className="scroll-mt-24 grid gap-8 md:gap-12 md:grid-cols-12 items-start"
              >
                {project.image && (
                  <div
                    className={`md:col-span-7 ${flip ? 'md:order-2 md:col-start-6' : ''}`}
                  >
                    <div className="group relative">
                      <Photo
                        src={project.image}
                        alt={project.imageAlt ?? project.title}
                        width={1200}
                        height={896}
                        priority={i === 0}
                        sizes="(min-width: 768px) 58vw, 100vw"
                      />
                      <span className="label absolute top-3 left-3 bg-paper px-2 py-1">
                        {String(i + 1).padStart(2, '0')} /{' '}
                        {String(projects.length).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                )}
                <div
                  className={`md:col-span-5 ${flip ? 'md:order-1' : ''} md:sticky md:top-24`}
                >
                  <h2 className="display text-6xl md:text-8xl mb-6">
                    {project.title}
                  </h2>
                  <p className="text-xl leading-snug mb-8">
                    {project.description}
                  </p>
                  <dl className="grid grid-cols-[6rem_1fr] border-t border-ink">
                    {(
                      [
                        ['Year', project.year],
                        ['Client', project.client],
                        ['Role', project.role],
                        ['Scope', project.tags.join(', ')],
                      ] as const
                    )
                      .filter(([, v]) => v)
                      .map(([k, v]) => (
                        <div key={k} className="contents">
                          <dt className="label py-3 border-b border-ink text-ink/50">
                            {k}
                          </dt>
                          <dd className="py-3 border-b border-ink">{v}</dd>
                        </div>
                      ))}
                  </dl>
                  <div
                    className="prose prose-lg max-w-none mt-8 prose-headings:font-normal prose-headings:font-display text-ink prose-strong:text-ink"
                    dangerouslySetInnerHTML={{ __html: project.html }}
                  />
                  <div className="flex flex-wrap gap-4 mt-8">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-button"
                      >
                        View project{' '}
                        <ArrowUpRight aria-hidden="true" size={14} />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="label link-underline self-center"
                      >
                        Source on GitHub
                      </a>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      ) : (
        <p className="label py-10">
          The first project is still in the darkroom.
        </p>
      )}

      <aside className="mt-40 border-y border-ink py-12 grid gap-6 md:grid-cols-2 items-center">
        <p className="display text-5xl md:text-6xl">
          Have a book, a brand or a wall that needs <em>filling?</em>
        </p>
        <Link to="/contact" className="contact-button md:justify-self-end">
          Start a project <ArrowUpRight aria-hidden="true" size={14} />
        </Link>
      </aside>
    </div>
  )
}
