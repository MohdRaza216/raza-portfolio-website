import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { projectId, projects } from '../lib/projects'
import { site, pageMeta } from '../lib/site'

export const Route = createFileRoute('/')({
  component: PortfolioHome,
  head: () => pageMeta(site.role, site.description),
})

const stack = [
  'PHP',
  'Laravel',
  'MySQL',
  'JavaScript',
  'RESTful APIs',
  'React.js',
]

const highlights = [
  ['2.9', 'years of experience'],
  ['5+', 'Laravel applications delivered'],
  ['40%', 'reported reduction in system downtime'],
] as const

function PortfolioHome() {
  return (
    <>
      <section className="px-5 md:px-8 pt-10 md:pt-16 pb-20 grid gap-12 lg:grid-cols-12 items-end">
        <div className="lg:col-span-7">
          <p className="label rise mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-ink" />
            Portfolio · {site.location}
          </p>
          <h1 className="display text-[clamp(4rem,10vw,11rem)] leading-[0.92]">
            Mohammed
            <br />
            <em className="text-safelight">Raza Moghul</em>
          </h1>
          <div className="mt-10 max-w-2xl">
            <p className="text-xl leading-snug">{site.summary}</p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Link to="/projects" className="contact-button">
                Explore projects <ArrowRight aria-hidden="true" size={14} />
              </Link>
              <Link to="/contact" className="label link-underline">
                {site.availability}
              </Link>
            </div>
          </div>
        </div>

        <aside className="lg:col-span-5 bg-ink text-paper p-6 md:p-8">
          <p className="label text-paper/50 mb-8">Developer profile · 01</p>
          <dl className="divide-y divide-paper/20">
            <div className="py-4 grid grid-cols-[7rem_1fr] gap-4">
              <dt className="label text-paper/50">Focus</dt>
              <dd className="text-lg">Full-stack web development</dd>
            </div>
            <div className="py-4 grid grid-cols-[7rem_1fr] gap-4">
              <dt className="label text-paper/50">Core stack</dt>
              <dd className="text-lg">PHP · Laravel · MySQL</dd>
            </div>
            <div className="py-4 grid grid-cols-[7rem_1fr] gap-4">
              <dt className="label text-paper/50">Currently</dt>
              <dd className="text-lg">Save-As-Web Pvt. Ltd.</dd>
            </div>
            <div className="py-4 grid grid-cols-[7rem_1fr] gap-4">
              <dt className="label text-paper/50">Based in</dt>
              <dd className="text-lg">{site.location}</dd>
            </div>
          </dl>
        </aside>
      </section>

      <div
        className="bg-ink text-paper overflow-hidden py-4 border-y border-ink"
        aria-hidden="true"
      >
        <div className="marquee flex w-max">
          {[0, 1].map((n) => (
            <p
              key={n}
              className="display italic text-4xl md:text-5xl flex shrink-0"
            >
              {stack.map((item) => (
                <span key={item} className="px-6 flex items-center gap-6">
                  {item} <span className="text-safelight not-italic">✦</span>
                </span>
              ))}
            </p>
          ))}
        </div>
      </div>

      <section aria-labelledby="featured-work" className="px-5 md:px-8 pt-28">
        <header className="flex items-end justify-between gap-6 mb-10">
          <div>
            <p className="label text-ink/60 mb-3">Selected work · 01—04</p>
            <h2 id="featured-work" className="display text-6xl md:text-8xl">
              Selected <em>projects</em>
            </h2>
          </div>
          <Link
            to="/projects"
            className="label link-underline hidden md:inline-flex items-center gap-2"
          >
            All projects <ArrowRight aria-hidden="true" size={14} />
          </Link>
        </header>
        {projects.length ? (
          <ol className="border-t border-ink">
            {projects.map((project, i) => (
              <li key={projectId(project)} className="border-b border-ink">
                <Link
                  to="/projects"
                  hash={projectId(project)}
                  className="group grid grid-cols-[2.5rem_1fr_auto] md:grid-cols-[4rem_1fr_16rem_2rem] items-center gap-4 py-6 md:py-8 hover:text-safelight transition-colors focus-visible:outline-2 focus-visible:outline-safelight"
                >
                  <span className="label text-ink/50">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="display text-3xl md:text-6xl transition-transform duration-500 group-hover:translate-x-3 group-hover:italic">
                    {project.title}
                  </span>
                  <span className="label hidden md:block text-ink/60">
                    {project.tags.slice(0, 3).join(' · ')}
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-6 transition-transform group-hover:rotate-45"
                    strokeWidth={1.25}
                  />
                </Link>
              </li>
            ))}
          </ol>
        ) : (
          <p className="label py-10">Projects will be added soon.</p>
        )}
      </section>

      <section
        aria-labelledby="impact"
        className="px-5 md:px-8 pt-32 grid gap-10 md:grid-cols-12"
      >
        <div className="md:col-span-4">
          <p className="label text-safelight mb-4">(A few numbers)</p>
          <h2 id="impact" className="display text-5xl md:text-6xl">
            Built to <em>work.</em>
          </h2>
        </div>
        <div className="md:col-span-8 grid sm:grid-cols-3 gap-px bg-ink border border-ink">
          {highlights.map(([value, label]) => (
            <div key={label} className="bg-paper p-6 md:p-8">
              <p className="display text-6xl md:text-7xl">{value}</p>
              <p className="label mt-3 text-ink/60">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="about-teaser"
        className="px-5 md:px-8 pt-32 pb-8 grid gap-10 md:grid-cols-12 items-center"
      >
        <div className="md:col-span-4">
          <p className="label text-safelight mb-4">(Approach)</p>
          <p className="display text-4xl md:text-5xl">
            From database design to the interface people use.
          </p>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <h2 id="about-teaser" className="display text-5xl md:text-7xl mb-8">
            I care about <em>reliable</em> systems and clear, responsive
            experiences.
          </h2>
          <Link
            to="/skills"
            className="label link-underline inline-flex items-center gap-2"
          >
            Explore my skills <ArrowRight aria-hidden="true" size={14} />
          </Link>
        </div>
      </section>
    </>
  )
}
