import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { site } from '../lib/site'

const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
] as const

function StudioClock() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: site.timeZone,
      }).format(new Date())
    setTime(format())
    const id = setInterval(() => setTime(format()), 30_000)
    return () => clearInterval(id)
  }, [])
  return (
    <span className="label hidden md:inline-flex items-center gap-2 text-ink/60">
      <span className="size-1.5 rounded-full bg-safelight animate-pulse" />
      {site.location} {time && <time>{time}</time>}
    </span>
  )
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-paper/85 backdrop-blur-md border-b border-ink">
      <div className="px-5 md:px-8 h-14 flex items-center justify-between gap-6">
        <Link
          to="/"
          className="display text-2xl leading-none whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-safelight"
        >
          Raza <em className="text-safelight">M.</em>
        </Link>
        <StudioClock />
        <nav
          aria-label="Main navigation"
          className="flex gap-4 md:gap-7 overflow-x-auto"
        >
          {links.map((link, i) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === '/' }}
              activeProps={{ className: 'text-safelight' }}
              className="label group flex items-baseline gap-1 whitespace-nowrap hover:text-safelight transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-safelight"
            >
              <span className="hidden sm:inline text-[0.6rem] opacity-50">
                0{i}
              </span>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
