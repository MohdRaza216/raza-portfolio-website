export const site = {
  name: 'Mohammed Raza Moghul',
  role: 'Full-stack developer',
  location: 'Mumbai, India',
  timeZone: 'Asia/Kolkata',
  email: 'mohdrazamoghul2024@gmail.com',
  phone: '+91 91675 84652',
  availability: 'Open to full-stack developer opportunities',
  description:
    'Mohammed Raza Moghul is a full-stack developer building Laravel applications, APIs, and responsive web experiences.',
  summary:
    'I build and ship web applications across the stack, with a focus on PHP, Laravel, RESTful APIs, responsive interfaces, and reliable MySQL performance.',
}

export const socials = [
  {
    label: 'GitHub',
    handle: 'mohdrazamoghul',
    href: 'https://github.com/mohdrazamoghul',
  },
  {
    label: 'LinkedIn',
    handle: 'in/mohammed-raza-moghul',
    href: 'https://www.linkedin.com/in/mohammed-raza-moghul',
  },
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
