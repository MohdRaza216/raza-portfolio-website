import { createFileRoute, Link } from '@tanstack/react-router'
import { allEducations, allJobs } from 'content-collections'
import { ArrowRight } from 'lucide-react'
import { chronologicalEntries } from '../lib/chronology'
import { site, pageMeta } from '../lib/site'

export const Route = createFileRoute('/about')({
  component: About,
  head: () =>
    pageMeta(
      'About',
      `${site.name} — full-stack developer based in Mumbai, India.`,
    ),
})

const highlights = [
  ['2.9', 'years of professional experience'],
  ['5+', 'Laravel applications delivered'],
  ['40%', 'reported reduction in system downtime'],
  ['4', 'featured projects'],
] as const

const strengths = [
  [
    'Backend & APIs',
    'Laravel MVC, Eloquent ORM, CRUD workflows, authentication, authorization, RESTful APIs, and third-party integrations.',
  ],
  [
    'Responsive interfaces',
    'HTML, CSS, JavaScript, Bootstrap, jQuery, and AJAX for responsive, customer-facing web experiences.',
  ],
  [
    'Database performance',
    'MySQL query optimization and indexing, contributing to a reported 40% reduction in system downtime.',
  ],
  [
    'Build, test, support',
    'Debugging, testing, troubleshooting, and performance tuning for live applications with cross-functional teams.',
  ],
] as const

const displayDate = (date?: string) => {
  if (!date) return 'Present'
  if (date.length === 4) return date
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`))
}

function About() {
  const timeline = [
    ...chronologicalEntries(allJobs).map((job) => ({
      key: job._meta.path,
      from: job.startDate,
      to: job.endDate,
      title: job.jobTitle,
      place: job.company,
      summary: job.summary,
      tags: job.tags,
    })),
    ...chronologicalEntries(allEducations).map((education) => ({
      key: education._meta.path,
      from: education.startDate,
      to: education.endDate,
      title: education.school,
      place: 'Education',
      summary: education.summary,
      tags: education.tags,
    })),
  ]

  return (
    <div className="px-5 md:px-8 pt-12">
      <section className="grid gap-12 md:grid-cols-12 items-start">
        <div className="md:col-span-9">
          <p className="label mb-6">
            About · {site.role} · {site.location}
          </p>
          <h1 className="display text-[clamp(3.5rem,9vw,8.5rem)]">
            I build <em className="text-safelight">web applications</em> from
            database to interface.
          </h1>
        </div>
      </section>

      <section className="mt-24 grid gap-10 md:grid-cols-12">
        <p className="label md:col-span-3 text-safelight">
          (The short version)
        </p>
        <div className="md:col-span-8 space-y-6 text-xl md:text-2xl leading-snug">
          <p>
            I’m a full-stack developer based in Mumbai, India, with 2.9 years of
            experience building and deploying web applications. My work spans
            Laravel backend development, RESTful and third-party APIs,
            responsive front ends, and MySQL performance.
          </p>
          <p>
            At Save-As-Web, I work across the application stack—from reusable
            Laravel MVC and Eloquent modules to customer-facing interfaces,
            database optimization, and production support.
          </p>
        </div>
      </section>

      <section
        aria-label="Career highlights"
        className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-ink border-y border-ink"
      >
        {highlights.map(([value, label]) => (
          <div key={label} className="bg-paper py-8 px-4">
            <p className="display text-6xl md:text-7xl">{value}</p>
            <p className="label mt-3 text-ink/60">{label}</p>
          </div>
        ))}
      </section>

      <section aria-labelledby="strengths" className="mt-32">
        <p className="label text-safelight mb-4">(What I work on)</p>
        <h2 id="strengths" className="display text-6xl md:text-8xl mb-12">
          Across the <em>stack.</em>
        </h2>
        <ol className="grid md:grid-cols-2 gap-px bg-ink border border-ink">
          {strengths.map(([title, summary], i) => (
            <li
              key={title}
              className="bg-paper p-8 md:p-10 group hover:bg-ink hover:text-paper transition-colors duration-500"
            >
              <span className="label text-safelight">
                Focus {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="display text-4xl md:text-5xl mt-4 mb-4">
                {title}
              </h3>
              <p className="text-lg max-w-md opacity-80">{summary}</p>
            </li>
          ))}
        </ol>
      </section>

      <section
        aria-labelledby="timeline"
        className="mt-32 grid gap-10 md:grid-cols-12"
      >
        <div className="md:col-span-4">
          <p className="label text-safelight mb-4">(Experience & education)</p>
          <h2
            id="timeline"
            className="display text-6xl md:text-7xl md:sticky md:top-24"
          >
            The <em>path.</em>
          </h2>
        </div>
        <ol className="md:col-span-8 border-t border-ink">
          {timeline.map((entry) => (
            <li
              key={entry.key}
              className="grid grid-cols-[7rem_1fr] gap-6 py-8 border-b border-ink"
            >
              <p className="label pt-2">
                {displayDate(entry.from)} — {displayDate(entry.to)}
              </p>
              <div>
                <h3 className="display text-3xl md:text-4xl">{entry.title}</h3>
                <p className="label text-ink/60 mt-1 mb-4">{entry.place}</p>
                <p className="text-lg max-w-xl">{entry.summary}</p>
                {entry.tags.length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {entry.tags.map((tag) => (
                      <li
                        key={tag}
                        className="label border border-ink/40 px-2 py-1"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
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
