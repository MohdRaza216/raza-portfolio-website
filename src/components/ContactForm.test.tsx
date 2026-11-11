import { readFileSync } from 'node:fs'
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  emailJsSetupMessage,
  emailJsTimeoutMessage,
  emailJsTimeoutMs,
} from '../lib/emailjs'
import { ContactForm } from './ContactForm'

const { sendMock } = vi.hoisted(() => ({ sendMock: vi.fn() }))

vi.mock('@emailjs/browser', () => ({ send: sendMock }))

afterEach(() => {
  cleanup()
  vi.unstubAllEnvs()
  vi.restoreAllMocks()
  vi.useRealTimers()
  sendMock.mockReset()
})

function configureEmailJs() {
  vi.stubEnv('VITE_EMAILJS_SERVICE_ID', 'service_test')
  vi.stubEnv('VITE_EMAILJS_TEMPLATE_ID', 'template_test')
  vi.stubEnv('VITE_EMAILJS_PUBLIC_KEY', 'public_test')
}

function clearEmailJsConfig() {
  vi.stubEnv('VITE_EMAILJS_SERVICE_ID', '')
  vi.stubEnv('VITE_EMAILJS_TEMPLATE_ID', '')
  vi.stubEnv('VITE_EMAILJS_PUBLIC_KEY', '')
}

async function fillForm() {
  render(<ContactForm />)
  const user = userEvent.setup()
  await user.type(screen.getByLabelText('Name'), 'Jane Doe')
  await user.type(screen.getByLabelText('Email'), 'jane@example.com')
  await user.type(
    screen.getByLabelText('Message'),
    'A project question & some details.',
  )
  return user
}

describe('contact delivery', () => {
  it('shows setup instructions and blocks submissions without EmailJS configuration', () => {
    clearEmailJsConfig()
    render(<ContactForm />)
    expect(screen.getByRole('alert').textContent).toContain(emailJsSetupMessage)
    expect(
      (
        screen.getByRole('button', {
          name: 'Send message',
        }) as HTMLButtonElement
      ).disabled,
    ).toBe(true)
    expect(sendMock).not.toHaveBeenCalled()
  })

  it.each([
    'VITE_EMAILJS_SERVICE_ID',
    'VITE_EMAILJS_TEMPLATE_ID',
    'VITE_EMAILJS_PUBLIC_KEY',
  ])('does not send when %s is missing', (key) => {
    configureEmailJs()
    vi.stubEnv(key, '')
    render(<ContactForm />)

    expect(screen.getByRole('alert').textContent).toContain(emailJsSetupMessage)
    expect(
      (
        screen.getByRole('button', {
          name: 'Send message',
        }) as HTMLButtonElement
      ).disabled,
    ).toBe(true)
    expect(sendMock).not.toHaveBeenCalled()
  })

  it('sends the entered fields with EmailJS and confirms delivery', async () => {
    configureEmailJs()
    sendMock.mockResolvedValue({ status: 200, text: 'OK' })
    const user = await fillForm()
    await user.click(screen.getByRole('button', { name: 'Send message' }))
    await screen.findByRole('heading', { name: 'Message received' })

    expect(sendMock).toHaveBeenCalledWith(
      'service_test',
      'template_test',
      {
        name: 'Jane Doe',
        email: 'jane@example.com',
        reply_to: 'jane@example.com',
        message: 'A project question & some details.',
      },
      { publicKey: 'public_test' },
    )
    expect(screen.queryByRole('alert')).toBeNull()
    await user.click(
      screen.getByRole('button', { name: 'Send another message' }),
    )
    expect(screen.getByLabelText('Name')).toBeTruthy()
  })

  it('fails clearly when submission starts without configuration', () => {
    clearEmailJsConfig()
    render(<ContactForm />)
    const form = screen
      .getByRole('button', { name: 'Send message' })
      .closest('form')!

    act(() => fireEvent.submit(form))

    expect(screen.getAllByRole('alert')).toHaveLength(1)
    expect(screen.getByRole('alert').textContent).toContain(emailJsSetupMessage)
    expect(sendMock).not.toHaveBeenCalled()
  })

  it('keeps entered fields after an EmailJS error and supports retry', async () => {
    configureEmailJs()
    sendMock
      .mockRejectedValueOnce(new Error('EmailJS service unavailable'))
      .mockResolvedValueOnce({ status: 200, text: 'OK' })
    const user = await fillForm()

    await user.click(screen.getByRole('button', { name: 'Send message' }))
    await screen.findByRole('alert')
    expect((screen.getByLabelText('Name') as HTMLInputElement).value).toBe(
      'Jane Doe',
    )
    expect((screen.getByLabelText('Email') as HTMLInputElement).value).toBe(
      'jane@example.com',
    )
    expect(
      (screen.getByLabelText('Message') as HTMLTextAreaElement).value,
    ).toBe('A project question & some details.')

    await user.click(screen.getByRole('button', { name: 'Send message' }))
    await screen.findByRole('heading', { name: 'Message received' })
    expect(sendMock).toHaveBeenCalledTimes(2)
  })

  it('blocks synchronous duplicates while the EmailJS request is pending', async () => {
    configureEmailJs()
    let resolve!: (response: { status: number; text: string }) => void
    sendMock.mockReturnValue(
      new Promise((done) => {
        resolve = done
      }),
    )
    await fillForm()
    const form = screen
      .getByRole('button', { name: 'Send message' })
      .closest('form')!

    act(() => {
      fireEvent.submit(form)
      fireEvent.submit(form)
    })

    expect(sendMock).toHaveBeenCalledTimes(1)
    expect(form.getAttribute('aria-busy')).toBe('true')
    expect(screen.getByRole('group').hasAttribute('disabled')).toBe(true)
    expect(screen.getByRole('button', { name: 'Sending…' })).toBeTruthy()
    await act(async () => resolve({ status: 200, text: 'OK' }))
    expect(
      screen.getByRole('heading', { name: 'Message received' }),
    ).toBeTruthy()
  })

  it('times out a pending request and safely handles a later rejection', async () => {
    configureEmailJs()
    vi.useFakeTimers()
    let reject!: (reason: Error) => void
    sendMock.mockReturnValue(
      new Promise((_resolve, rejectRequest) => {
        reject = rejectRequest
      }),
    )
    render(<ContactForm />)
    fireEvent.change(screen.getByLabelText('Name'), {
      target: { value: 'Jane Doe' },
    })
    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'jane@example.com' },
    })
    fireEvent.change(screen.getByLabelText('Message'), {
      target: { value: 'A project question & some details.' },
    })

    await act(async () => {
      fireEvent.submit(
        screen.getByRole('button', { name: 'Send message' }).closest('form')!,
      )
      await Promise.resolve()
      await vi.advanceTimersByTimeAsync(emailJsTimeoutMs)
    })

    expect(screen.getByRole('alert').textContent).toContain(
      emailJsTimeoutMessage,
    )
    await act(async () => {
      reject(new Error('late EmailJS failure'))
      await Promise.resolve()
    })
    expect(screen.getByRole('group').hasAttribute('disabled')).toBe(false)
  })

  it('keeps static and interactive form fields aligned without registering Netlify Forms', () => {
    const { container } = render(<ContactForm />)
    const form = container.querySelector('form')!
    const staticForm = new DOMParser()
      .parseFromString(readFileSync('public/contact.html', 'utf8'), 'text/html')
      .querySelector('form')!

    expect(form.getAttribute('name')).toBe(staticForm.getAttribute('name'))
    expect(form.getAttribute('method')).toBe(staticForm.getAttribute('method'))
    expect(form.hasAttribute('data-netlify')).toBe(false)
    expect(staticForm.hasAttribute('data-netlify')).toBe(false)

    const fields = (element: Element) =>
      [...element.querySelectorAll('[name]')]
        .map((field) => field.getAttribute('name'))
        .sort()

    expect(fields(form)).toEqual(fields(staticForm))
    expect(fields(form)).toEqual(['email', 'message', 'name'])
  })
})
