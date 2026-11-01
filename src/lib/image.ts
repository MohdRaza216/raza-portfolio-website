// Every image on the site is served through Netlify Image CDN so visitors
// get a resized WebP instead of the full-resolution master in /public/img.
const widths = [480, 768, 1080, 1440, 1920]

export function cdn(src: string, width: number, height?: number) {
  const params = new URLSearchParams({
    url: src,
    w: String(width),
    fm: 'webp',
    q: '78',
  })
  if (height) {
    params.set('h', String(height))
    params.set('fit', 'cover')
  }
  return `/.netlify/images?${params}`
}

export function srcSet(src: string, max = 1920) {
  return widths
    .filter((w) => w <= max)
    .map((w) => `${cdn(src, w)} ${w}w`)
    .join(', ')
}

// Tiny blurred preview used as a background while the real frame loads.
export function placeholder(src: string) {
  return cdn(src, 24)
}
