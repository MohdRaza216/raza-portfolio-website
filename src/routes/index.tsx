import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Photo } from '../components/Photo'
import { frames } from '../lib/gallery'
import { cdn } from '../lib/image'
import { projectId, projects } from '../lib/projects'
import { site, pageMeta } from '../lib/site'

export const Route = createFileRoute('/')({
  component: PortfolioHome,
  head: () => pageMeta('Visual designer & photographer', site.description),
})

const disciplines = [
  'Identity',
  'Photobooks',
  'Exhibitions',
  'Photography',
  'Print production',
  'Art direction',
]

function PortfolioHome() {
  const [lead, second] = [frames[0], frames[2]]
  return (
    <>
      <section className="px-5 md:px-8 pt-10 md:pt-16 pb-20 grid gap-12 lg:grid-cols-12 items-end">
        <div className="lg:col-span-7">
          <p className="label rise mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-ink" />
            Portfolio · Vol. 07 · {site.location}
          </p>
          <h1 className="display text-[clamp(4.5rem,12vw,13rem)]">
            <span
              className="rise block"
              style={{ '--i': 1 } as React.CSSProperties}
            >
              Wren
            </span>
            <span
              className="rise block italic text-safelight pl-[0.4em]"
              style={{ '--i': 2 } as React.CSSProperties}
            >
              Calloway
            </span>
          </h1>
          <div
            className="rise mt-10 grid gap-8 sm:grid-cols-[1fr_auto] items-end max-w-2xl"
            style={{ '--i': 4 } as React.CSSProperties}
          >
            <p className="text-xl leading-snug">{site.summary}</p>
            <div className="flex flex-col gap-3">
              <Link to="/projects" className="contact-button">
                See the work <ArrowRight aria-hidden="true" size={14} />
              </Link>
              <Link to="/contact" className="label link-underline self-start">
                {site.availability}
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 relative h-[520px] md:h-[640px]">
          <figure className="develop absolute right-0 top-0 w-[72%]">
            <Photo {...lead} priority sizes="(min-width: 1024px) 30vw, 70vw" />
            <figcaption className="label mt-2 flex justify-between">
              <span>→ {lead.id}A</span>
              <span className="text-ink/50">{lead.place}</span>
            </figcaption>
          </figure>
          <figure
            className="develop absolute left-0 bottom-0 w-[58%] border-[10px] border-paper shadow-[0_30px_60px_-20px_rgba(22,19,15,0.45)] -rotate-3"
            style={{ '--i': 3 } as React.CSSProperties}
          >
            <Photo
              {...second}
              priority
              sizes="(min-width: 1024px) 24vw, 56vw"
            />
          </figure>
          <span
            aria-hidden="true"
            className="absolute left-[38%] top-[44%] label bg-safelight text-paper px-2 py-1 rotate-6"
          >
            Keeper ✕
          </span>
        </div>
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
              {disciplines.map((d) => (
                <span key={d} className="px-6 flex items-center gap-6">
                  {d} <span className="text-safelight not-italic">✦</span>
                </span>
              ))}
            </p>
          ))}
        </div>
      </div>

      <section aria-labelledby="featured-work" className="px-5 md:px-8 pt-28">
        <header className="flex items-end justify-between gap-6 mb-10">
          <h2 id="featured-work" className="display text-6xl md:text-8xl">
            Selected <em>work</em>
          </h2>
          <p className="label hidden md:block text-right text-ink/60">
            {projects.length} projects
            <br />
            2023 — now
          </p>
        </header>
        {projects.length ? (
          <ol className="border-t border-ink">
            {projects.map((project, i) => (
              <li key={projectId(project)} className="border-b border-ink">
                <Link
                  to="/projects"
                  hash={projectId(project)}
                  className="group relative grid grid-cols-[2.5rem_1fr_auto] md:grid-cols-[4rem_1fr_14rem_5rem_2rem] items-center gap-4 py-6 md:py-8 hover:text-safelight transition-colors focus-visible:outline-2 focus-visible:outline-safelight"
                >
                  <span className="label text-ink/50">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="display text-4xl md:text-7xl transition-transform duration-500 group-hover:translate-x-4 group-hover:italic">
                    {project.title}
                  </span>
                  <span className="label hidden md:block text-ink/70">
                    {project.client}
                  </span>
                  <span className="label hidden md:block">{project.year}</span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-6 transition-transform group-hover:rotate-45"
                    strokeWidth={1.25}
                  />
                  {project.image && (
                    <img
                      src={cdn(project.image, 560)}
                      alt=""
                      loading="lazy"
                      className="pointer-events-none absolute right-[18%] top-1/2 z-10 hidden w-72 -translate-y-1/2 rotate-2 opacity-0 scale-90 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100 md:block shadow-2xl"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ol>
        ) : (
          <p className="label py-10">
            The first project is still in the darkroom.
          </p>
        )}
      </section>

      <section aria-labelledby="contact-sheet" className="px-5 md:px-8 pt-32">
        <div className="bg-ink text-paper">
          <div className="film-edge" />
          <div className="p-5 md:p-8">
            <header className="flex flex-wrap items-end justify-between gap-6 mb-8">
              <div>
                <p className="label text-paper/50 mb-3">
                  Roll 07 · Portra 400 · Contact sheet
                </p>
                <h2 id="contact-sheet" className="display text-6xl md:text-8xl">
                  From the <em className="text-safelight">gallery</em>
                </h2>
              </div>
              <Link
                to="/gallery"
                className="label link-underline flex items-center gap-2 hover:text-safelight"
              >
                All {frames.length} frames{' '}
                <ArrowRight aria-hidden="true" size={14} />
              </Link>
            </header>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {frames.slice(1, 7).map((frame, i) => (
                <Link
                  key={frame.id}
                  to="/gallery"
                  hash={`frame-${frame.id}`}
                  className="group block focus-visible:outline-2 focus-visible:outline-safelight"
                >
                  <div className="relative">
                    <Photo
                      src={frame.src}
                      alt={frame.alt}
                      width={4}
                      height={5}
                      sizes="(min-width: 1024px) 16vw, (min-width: 768px) 33vw, 50vw"
                    />
                    {i === 2 && (
                      <span
                        aria-hidden="true"
                        className="absolute -inset-2 rounded-[50%] border-2 border-safelight -rotate-6 pointer-events-none"
                      />
                    )}
                  </div>
                  <p className="label mt-2 flex justify-between text-paper/60 group-hover:text-safelight">
                    <span>{frame.id}A</span>
                    <span>▸ {frame.year}</span>
                  </p>
                </Link>
              ))}
            </div>
          </div>
          <div className="film-edge" />
        </div>
      </section>

      <section
        aria-labelledby="about-teaser"
        className="px-5 md:px-8 pt-32 grid gap-10 md:grid-cols-12 items-center"
      >
        <div className="md:col-span-4">
          <Photo
            src="/img/portrait.jpg"
            alt={`Portrait of ${site.name} holding a film camera in the studio`}
            width={928}
            height={1152}
            sizes="(min-width: 768px) 33vw, 100vw"
            className="grayscale hover:grayscale-0 transition-[filter] duration-700"
          />
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <p className="label mb-6 text-safelight">(About)</p>
          <h2 id="about-teaser" className="display text-5xl md:text-7xl mb-8">
            I still believe a thing is only <em>finished</em> once it’s been
            printed.
          </h2>
          <Link
            to="/about"
            className="label link-underline inline-flex items-center gap-2"
          >
            Read the long version <ArrowRight aria-hidden="true" size={14} />
          </Link>
        </div>
      </section>
    </>
  )
}
