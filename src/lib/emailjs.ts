import { send } from '@emailjs/browser'

export const emailJsSetupMessage =
  'EmailJS is not configured yet. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to your .env file and deployment environment, then rebuild.'

export const emailJsTimeoutMessage =
  'EmailJS did not respond in time, so delivery is uncertain. Check your EmailJS activity before resending to avoid duplicates.'

export const emailJsTimeoutMs = 15_000

type ContactMessage = {
  name: string
  email: string
  message: string
}

function getEmailJsConfig() {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim()
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim()
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim()

  if (!serviceId || !templateId || !publicKey) return null

  return { serviceId, templateId, publicKey }
}

export function isEmailJsConfigured() {
  return getEmailJsConfig() !== null
}

export async function sendContactEmail({
  name,
  email,
  message,
}: ContactMessage) {
  const config = getEmailJsConfig()
  if (!config) throw new Error(emailJsSetupMessage)

  let timeoutId: ReturnType<typeof setTimeout> | undefined

  try {
    const request = send(
      config.serviceId,
      config.templateId,
      { name, email, reply_to: email, message },
      { publicKey: config.publicKey },
    )
    const timeout = new Promise<never>((_, reject) => {
      timeoutId = setTimeout(
        () => reject(new Error(emailJsTimeoutMessage)),
        emailJsTimeoutMs,
      )
    })

    await Promise.race([request, timeout])
  } finally {
    if (timeoutId !== undefined) clearTimeout(timeoutId)
  }
}
