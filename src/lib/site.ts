export const site = {
  name: 'Wren Calloway',
  role: 'Visual designer & photographer',
  location: 'Lisbon, PT',
  timeZone: 'Europe/Lisbon',
  email: 'hello@wrencalloway.studio',
  availability: 'Booking commissions from January 2027',
  description:
    'Wren Calloway is a visual designer and photographer making books, identities and exhibitions out of a small studio in Lisbon.',
  summary:
    'I make things that get printed, pinned to walls and held in hands — identities, photobooks, exhibitions — and the photographs that start most of them.',
}

export const socials = [
  {
    label: 'Instagram',
    handle: '@wren.calloway',
    href: 'https://instagram.com/',
  },
  { label: 'Are.na', handle: 'wren-calloway', href: 'https://www.are.na/' },
  {
    label: 'Behance',
    handle: 'wrencalloway',
    href: 'https://www.behance.net/',
  },
  {
    label: 'LinkedIn',
    handle: 'in/wrencalloway',
    href: 'https://www.linkedin.com/',
  },
  { label: 'Read.cv', handle: 'wren', href: 'https://read.cv/' },
] as const

export function pageMeta(title: string, description: string) {
  const fullTitle = `${title} — ${site.name}`
  return {
    meta: [
      { title: fullTitle },
      { name: 'description', content: description },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
    ],
  }
}
