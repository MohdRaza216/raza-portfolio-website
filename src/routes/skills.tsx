import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { site, pageMeta } from '../lib/site'

export const Route = createFileRoute('/skills')({
  component: Skills,
  head: () =>
    pageMeta(
      'Skills',
      `Technical skills and tools used by ${site.name} for full-stack development.`,
    ),
})

const skillGroups = [
  {
    title: 'Backend',
    skills: [
      'PHP',
      'Laravel',
      'Laravel MVC',
      'Eloquent ORM',
      'RESTful APIs',
      'Authentication',
      'Authorization',
      'CRUD',
    ],
  },
  {
    title: 'Frontend',
    skills: [
      'JavaScript',
      'HTML5',
      'CSS3',
      'Bootstrap',
      'jQuery',
      'AJAX',
      'Responsive Web Design',
      'React.js',
    ],
  },
  {
    title: 'Database',
    skills: ['MySQL', 'Query Optimization', 'Database Indexing', 'JSON'],
  },
  {
    title: 'Tools',
    skills: [
      'Git',
      'GitHub',
      'Postman',
      'Composer',
      'XAMPP',
      'cPanel',
      'Docker',
    ],
  },
  {
    title: 'Practices',
    skills: [
      'Debugging',
      'Testing',
      'Performance Tuning',
      'Agile Development',
      'Problem Solving',
    ],
  },
  {
    title: 'Working style',
    skills: ['Calm under pressure'],
  },
] as const

function Skills() {
  return (
    <div className="px-5 md:px-8 pt-12">
      <header className="grid gap-8 md:grid-cols-12 items-end mb-16">
        <div className="md:col-span-8">
          <p className="label mb-6">
            Skills · {skillGroups.length} areas · {site.role}
          </p>
          <h1 className="display text-[clamp(4rem,12vw,11rem)]">
            Technical <em className="text-safelight">stack.</em>
          </h1>
        </div>
        <p className="md:col-span-4 text-lg leading-snug">
          Technologies and practices from my full-stack development experience.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-px bg-ink border border-ink">
        {skillGroups.map((group, i) => (
          <section key={group.title} className="bg-paper p-8 md:p-10">
            <p className="label text-safelight">
              Area {String(i + 1).padStart(2, '0')}
            </p>
            <h2 className="display text-4xl md:text-5xl mt-4 mb-8">
              {group.title}
            </h2>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="label border border-ink/40 px-3 py-2"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section className="mt-32 border-y border-ink py-12 grid gap-6 md:grid-cols-2 items-center">
        <p className="display text-5xl md:text-6xl">
          Looking for a developer with a <em>full-stack</em> perspective?
        </p>
        <Link to="/contact" className="contact-button md:justify-self-end">
          Let’s talk <ArrowRight aria-hidden="true" size={14} />
        </Link>
      </section>
    </div>
  )
}
