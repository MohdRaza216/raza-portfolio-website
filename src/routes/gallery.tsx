import { useEffect, useRef, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { ArrowLeft, ArrowRight, X } from 'lucide-react'
import { Photo } from '../components/Photo'
import { frames, series, type Series } from '../lib/gallery'
import { cdn, srcSet } from '../lib/image'
import { pageMeta } from '../lib/site'

export const Route = createFileRoute('/gallery')({
  component: Gallery,
  head: () =>
    pageMeta(
      'Gallery',
      'Photographs from the edges of places — coastlines, night streets, still lifes and faces.',
    ),
})

function Gallery() {
  const [filter, setFilter] = useState<Series | 'All'>('All')
  const [open, setOpen] = useState<number | null>(null)
  const visible =
    filter === 'All' ? frames : frames.filter((f) => f.series === filter)

  return (
    <div className="px-5 md:px-8 pt-12">
      <header className="grid gap-8 md:grid-cols-12 items-end mb-14">
        <div className="md:col-span-8">
          <p className="label mb-6">
            Gallery · {frames.length} frames · 2023—2025
          </p>
          <h1 className="display text-[clamp(4rem,12vw,11rem)]">
            Edges of <em className="text-safelight">places.</em>
          </h1>
        </div>
        <p className="md:col-span-4 text-lg leading-snug">
          Shot on film, mostly on foot, mostly on the Atlantic side of things.
          Click any frame to see it large; use your arrow keys to move along the
          roll.
        </p>
      </header>

      <div
        role="toolbar"
        aria-label="Filter by series"
        className="sticky top-14 z-30 -mx-5 md:-mx-8 px-5 md:px-8 py-3 mb-8 bg-paper/90 backdrop-blur border-y border-ink flex gap-2 overflow-x-auto"
      >
        {(['All', ...series] as const).map((s) => {
          const count =
            s === 'All'
              ? frames.length
              : frames.filter((f) => f.series === s).length
          const active = filter === s
          return (
            <button
              key={s}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(s)}
              className={`label whitespace-nowrap px-3 py-2 border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-safelight ${
                active
                  ? 'bg-ink text-paper border-ink'
                  : 'border-transparent hover:border-ink'
              }`}
            >
              {s} <sup className="opacity-60">{count}</sup>
            </button>
          )
        })}
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
        {visible.map((frame, i) => (
          <figure
            key={frame.id}
            id={`frame-${frame.id}`}
            className="develop break-inside-avoid mb-10 scroll-mt-32"
            style={{ '--i': i } as React.CSSProperties}
          >
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="group block w-full text-left cursor-zoom-in focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-safelight"
              aria-label={`Open “${frame.title}” full size`}
            >
              <Photo
                {...frame}
                priority={i < 3}
                sizes="(min-width: 1024px) 31vw, (min-width: 640px) 47vw, 100vw"
              />
            </button>
            <figcaption className="mt-3 grid grid-cols-[3rem_1fr_auto] gap-3 items-baseline">
              <span className="label text-safelight">{frame.id}A</span>
              <span className="display text-2xl leading-tight">
                {frame.title}
              </span>
              <span className="label text-ink/50 text-right">
                {frame.place}
                <br />
                {frame.year}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      {open !== null && (
        <Lightbox
          frames={visible}
          index={open}
          onChange={setOpen}
          onClose={() => setOpen(null)}
        />
      )}
    </div>
  )
}

function Lightbox({
  frames: roll,
  index,
  onChange,
  onClose,
}: {
  frames: typeof frames
  index: number
  onChange: (index: number) => void
  onClose: () => void
}) {
  const dialog = useRef<HTMLDialogElement>(null)
  const frame = roll[index]
  const step = (delta: number) =>
    onChange((index + delta + roll.length) % roll.length)

  useEffect(() => {
    const el = dialog.current
    if (el && !el.open) el.showModal()
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  return (
    <dialog
      ref={dialog}
      onClose={onClose}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      aria-label={frame.title}
      className="m-0 h-dvh max-h-none w-screen max-w-none bg-ink/95 text-paper backdrop:bg-ink/80 p-0"
    >
      <div className="h-full grid grid-rows-[auto_1fr_auto] px-5 md:px-8 py-4 pointer-events-none">
        <div className="flex justify-between items-center pointer-events-auto">
          <span className="label text-paper/60">
            Frame {frame.id}A — {index + 1} / {roll.length}
          </span>
          <button
            type="button"
            onClick={onClose}
            autoFocus
            className="label flex items-center gap-2 hover:text-safelight focus-visible:outline-2 focus-visible:outline-safelight p-2"
          >
            Close <X aria-hidden="true" size={16} />
          </button>
        </div>
        <div className="relative min-h-0 flex items-center justify-center py-4">
          <img
            key={frame.id}
            src={cdn(frame.src, 1600)}
            srcSet={srcSet(frame.src)}
            sizes="90vw"
            alt={frame.alt}
            width={frame.width}
            height={frame.height}
            className="develop max-h-full max-w-full object-contain pointer-events-auto shadow-2xl"
          />
        </div>
        <div className="flex items-end justify-between gap-6 pointer-events-auto">
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Previous frame"
            className="p-3 border border-paper/30 hover:bg-safelight hover:border-safelight transition-colors focus-visible:outline-2 focus-visible:outline-safelight"
          >
            <ArrowLeft aria-hidden="true" size={18} />
          </button>
          <div className="text-center">
            <p className="display text-3xl md:text-5xl">{frame.title}</p>
            <p className="label text-paper/60 mt-2">
              {frame.series} · {frame.place} · {frame.year}
            </p>
          </div>
          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Next frame"
            className="p-3 border border-paper/30 hover:bg-safelight hover:border-safelight transition-colors focus-visible:outline-2 focus-visible:outline-safelight"
          >
            <ArrowRight aria-hidden="true" size={18} />
          </button>
        </div>
      </div>
    </dialog>
  )
}
