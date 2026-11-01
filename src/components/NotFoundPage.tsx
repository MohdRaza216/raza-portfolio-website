import { Link } from '@tanstack/react-router'

export function NotFoundPage() {
  return (
    <div className="px-5 md:px-8 py-24">
      <p className="label text-safelight mb-6">Error 404 — frame missing</p>
      <h1 className="display text-[clamp(4rem,14vw,12rem)] mb-8">
        Over<em>exposed.</em>
      </h1>
      <p className="text-lg max-w-md mb-8">
        This page was never developed, or the negative went missing.
      </p>
      <Link to="/" className="contact-button">
        Back to the index
      </Link>
    </div>
  )
}
