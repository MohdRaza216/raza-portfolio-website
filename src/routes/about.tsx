import { createFileRoute, Link } from '@tanstack/react-router'
import { allEducations, allJobs } from 'content-collections'
import { ArrowRight } from 'lucide-react'
import { Photo } from '../components/Photo'
import { chronologicalEntries } from '../lib/chronology'
import { site, pageMeta } from '../lib/site'

export const Route = createFileRoute('/about')({
  component: About,
  head: () =>
    pageMeta(
      'About',
      `${site.name} — background, principles, and the studio in Lisbon.`,
    ),
})

const principles = [
  [
    'Print it first.',
    'Every identity gets printed, cut and stuck to a wall before it gets a screen. Most bad ideas die there, cheaply.',
  ],
  [
    'One red is enough.',
    'Constraint is the brief. A single colour, a single stamp, a single typeface will carry a surprising amount.',
  ],
  [
    'Shoot the work myself.',
    'I photograph what I design. The book, the bag, the room — so it’s shown in the light it was made for.',
  ],
  [
    'Small runs, long lives.',
    'I’d rather make 400 copies people keep than 40,000 people recycle.',
  ],
] as const

const stats = [
  ['11', 'years behind a camera'],
  ['37', 'books & zines printed'],
  ['6', 'solo & group shows'],
  ['1', 'very old Nikon FM2'],
] as const

const kit = [
  'Nikon FM2',
  'Mamiya 7',
  'Portra 400 / Tri-X',
  'RISO MZ970',
  'InDesign',
  'Figma',
  'A darkroom in the bathroom',
]

const year = (date?: string) => (date ? date.slice(0, 4) : 'Now')

function About() {
  const timeline = [
    ...chronologicalEntries(allJobs).map((j) => ({
      key: j._meta.path,
      from: j.startDate,
      to: j.endDate,
      title: j.jobTitle,
      place: [j.company, j.location].filter(Boolean).join(', '),
      summary: j.summary,
      tags: j.tags,
    })),
    ...chronologicalEntries(allEducations).map((e) => ({
      key: e._meta.path,
      from: e.startDate,
      to: e.endDate,
      title: e.school,
      place: 'Education',
      summary: e.summary,
      tags: e.tags,
    })),
  ]

  return (
    <div className="px-5 md:px-8 pt-12">
      <section className="grid gap-12 md:grid-cols-12 items-start">
        <div className="md:col-span-7">
          <p className="label mb-6">About · {site.role}</p>
          <h1 className="display text-[clamp(3.5rem,9vw,8.5rem)]">
            Hi, I’m Wren. I make <em className="text-safelight">printed</em>{' '}
            things & the photographs that start them.
          </h1>
        </div>
        <figure className="md:col-span-4 md:col-start-9 develop">
          <Photo
            src="/img/portrait.jpg"
            alt={`Portrait of ${site.name} in the studio, holding a Nikon film camera`}
            width={928}
            height={1152}
            priority
            sizes="(min-width: 768px) 33vw, 100vw"
          />
          <figcaption className="label mt-2 flex justify-between">
            <span>Self-portrait, timer, 2025</span>
            <span className="text-ink/50">00A</span>
          </figcaption>
        </figure>
      </section>

      <section className="mt-24 grid gap-10 md:grid-cols-12">
        <p className="label md:col-span-3 text-safelight">
          (The short version)
        </p>
        <div className="md:col-span-8 space-y-6 text-xl md:text-2xl leading-snug">
          <p>
            I grew up above a print shop in Bristol, trained as a graphic
            designer in London, and spent three years running riso and
            letterpress machines before anyone let me near a client.
          </p>
          <p>
            Since 2023 I’ve run a two-room studio in Lisbon’s Marvila district —
            one room for design, one for drying prints. I work with bakers,
            publishers, galleries and the occasional software company that wants
            to feel less like one.
          </p>
        </div>
      </section>

      <section
        aria-label="In numbers"
        className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-ink border-y border-ink"
      >
        {stats.map(([n, l]) => (
          <div key={l} className="bg-paper py-8 px-4">
            <p className="display text-7xl md:text-8xl">{n}</p>
            <p className="label mt-3 text-ink/60">{l}</p>
          </div>
        ))}
      </section>

      <section aria-labelledby="principles" className="mt-32">
        <h2 id="principles" className="display text-6xl md:text-8xl mb-12">
          How I <em>work</em>
        </h2>
        <ol className="grid md:grid-cols-2 gap-px bg-ink border border-ink">
          {principles.map(([title, body], i) => (
            <li
              key={title}
              className="bg-paper p-8 md:p-10 group hover:bg-ink hover:text-paper transition-colors duration-500"
            >
              <span className="label text-safelight">
                Rule {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="display text-4xl md:text-5xl mt-4 mb-4">
                {title}
              </h3>
              <p className="text-lg max-w-md opacity-80">{body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section
        aria-labelledby="timeline"
        className="mt-32 grid gap-10 md:grid-cols-12"
      >
        <div className="md:col-span-4">
          <h2
            id="timeline"
            className="display text-6xl md:text-7xl md:sticky md:top-24"
          >
            So <em>far</em>
          </h2>
        </div>
        <ol className="md:col-span-8 border-t border-ink">
          {timeline.map((entry) => (
            <li
              key={entry.key}
              className="grid grid-cols-[7rem_1fr] gap-6 py-8 border-b border-ink"
            >
              <p className="label pt-2">
                {year(entry.from)} — {year(entry.to)}
              </p>
              <div>
                <h3 className="display text-3xl md:text-4xl">{entry.title}</h3>
                <p className="label text-ink/60 mt-1 mb-4">{entry.place}</p>
                <p className="text-lg max-w-xl">{entry.summary}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {entry.tags.map((t) => (
                    <li
                      key={t}
                      className="label border border-ink/40 px-2 py-1"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section
        aria-labelledby="kit"
        className="mt-32 bg-ink text-paper p-8 md:p-12 grid gap-8 md:grid-cols-12 items-end"
      >
        <div className="md:col-span-5">
          <p className="label text-paper/50 mb-4">In the bag</p>
          <h2 id="kit" className="display text-5xl md:text-6xl">
            Tools of the <em className="text-safelight">trade</em>
          </h2>
        </div>
        <ul className="md:col-span-7 flex flex-wrap gap-x-6 gap-y-3 display italic text-2xl md:text-3xl">
          {kit.map((k, i) => (
            <li key={k} className="flex items-center gap-6">
              {k}
              {i < kit.length - 1 && (
                <span className="text-safelight not-italic text-base">✦</span>
              )}
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-24 flex flex-wrap items-center justify-between gap-6">
        <p className="display text-4xl md:text-5xl">{site.availability}.</p>
        <Link to="/contact" className="contact-button">
          Get in touch <ArrowRight aria-hidden="true" size={14} />
        </Link>
      </div>
    </div>
  )
}
