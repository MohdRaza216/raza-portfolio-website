import { cn } from '../lib/utils'
import { cdn, placeholder, srcSet } from '../lib/image'

type PhotoProps = {
  src: string
  alt: string
  width: number
  height: number
  sizes: string
  priority?: boolean
  className?: string
  imgClassName?: string
}

// Optimized image: responsive WebP from Netlify Image CDN, intrinsic aspect
// ratio reserved to avoid layout shift, and a 24px blurred preview underneath.
export function Photo({
  src,
  alt,
  width,
  height,
  sizes,
  priority,
  className,
  imgClassName,
}: PhotoProps) {
  return (
    <div
      className={cn('relative overflow-hidden bg-ink/10', className)}
      style={{
        aspectRatio: `${width} / ${height}`,
        backgroundImage: `url("${placeholder(src)}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <img
        src={cdn(src, 1080)}
        srcSet={srcSet(src, Math.max(width * 2, 1080))}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        className={cn(
          'frame-img absolute inset-0 size-full object-cover',
          imgClassName,
        )}
      />
    </div>
  )
}
