import { useRef, useState, type FormEvent } from 'react'
import { Mail, Send } from 'lucide-react'
import {
  emailJsSetupMessage,
  emailJsTimeoutMessage,
  isEmailJsConfigured,
  sendContactEmail,
} from '../lib/emailjs'

export function ContactForm() {
  const [status, setStatus] = useState<
    'idle' | 'pending' | 'error' | 'success'
  >('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const submitting = useRef(false)
  const configured = isEmailJsConfigured()

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (submitting.current || status === 'success') return
    if (!configured) {
      setErrorMessage(emailJsSetupMessage)
      setStatus('error')
      return
    }

    const formData = new FormData(event.currentTarget)
    submitting.current = true
    setErrorMessage('')
    setStatus('pending')
    try {
      await sendContactEmail({
        name: String(formData.get('name') ?? ''),
        email: String(formData.get('email') ?? ''),
        message: String(formData.get('message') ?? ''),
      })
      setStatus('success')
    } catch (error) {
      setErrorMessage(
        error instanceof Error && error.message === emailJsTimeoutMessage
          ? error.message
          : 'Your message couldn’t be sent. Please check your connection and try again.',
      )
      setStatus('error')
    } finally {
      submitting.current = false
    }
  }

  return (
    <div>
      {status === 'success' ? (
        <div className="py-12 border-t border-ink">
          <Mail
            aria-hidden="true"
            className="size-8 mb-6 text-safelight"
            strokeWidth={1.25}
          />
          <h2 className="display text-5xl md:text-6xl mb-4">
            Message received
          </h2>
          <p role="status" className="text-lg mb-8">
            Thank you for reaching out. I’ll get back to you as soon as I can.
          </p>
          <button
            type="button"
            className="contact-button"
            onClick={() => setStatus('idle')}
          >
            Send another message
          </button>
        </div>
      ) : (
        <form
          name="contact"
          method="POST"
          aria-busy={status === 'pending'}
          onSubmit={submit}
          className="space-y-8"
        >
          {!configured && (
            <p
              role="alert"
              className="border-l-2 border-safelight pl-4 text-safelight"
            >
              {status === 'error' ? errorMessage : emailJsSetupMessage}
            </p>
          )}
          <fieldset
            disabled={status === 'pending'}
            className="min-w-0 space-y-8 disabled:opacity-60"
          >
            <legend className="sr-only">Your message</legend>
            <div>
              <label htmlFor="name" className="label block text-ink/60">
                Name
              </label>
              <input
                id="name"
                name="name"
                autoComplete="name"
                required
                maxLength={100}
                className="contact-input"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="label block text-ink/60">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={254}
                className="contact-input"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="label block text-ink/60">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                maxLength={5000}
                rows={6}
                className="contact-input"
                placeholder="Tell me about the role, project, or question..."
              />
            </div>
            <button
              type="submit"
              disabled={!configured}
              className="contact-button"
            >
              <Send aria-hidden="true" size={16} />
              {status === 'pending' ? 'Sending…' : 'Send message'}
            </button>
          </fieldset>
          <p role="status" className="sr-only">
            {status === 'pending' ? 'Sending your message…' : ''}
          </p>
          {status === 'error' && configured && (
            <p
              role="alert"
              className="border-l-2 border-safelight pl-4 text-safelight"
            >
              {errorMessage}
            </p>
          )}
        </form>
      )}
    </div>
  )
}
