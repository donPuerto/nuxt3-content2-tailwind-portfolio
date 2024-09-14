/* eslint-disable no-console */
import { defineEventHandler, readBody } from 'h3'
import Mailgun from 'mailgun.js'
import formData from 'form-data'

interface MailgunError extends Error {
  details?: string
  status?: number
}

const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY
const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN

if (!MAILGUN_API_KEY || !MAILGUN_DOMAIN) {
  console.error('Mailgun API key or domain is not set')
  throw new Error('Mailgun configuration is incomplete')
}

const mailgun = new Mailgun(formData)
const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY || '',
  url: 'https://api.mailgun.net', // or 'https://api.eu.mailgun.net' for EU region
})

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    console.log('Received email request:', body)

    const { to, subject, text, html } = body

    console.log('Attempting to send email with Mailgun...')
    console.log('MAILGUN_DOMAIN:', MAILGUN_DOMAIN)
    console.log('MAILGUN_API_KEY (first 4 chars):', MAILGUN_API_KEY?.substring(0, 4))

    const result = await mg.messages.create(MAILGUN_DOMAIN as string, {
      from: `Don Puerto <mailgun@${MAILGUN_DOMAIN}>`,
      to: [to],
      subject,
      text,
      html,
    })

    console.log('Mailgun API response:', result)

    return { success: true, result }
  }
  catch (error) {
    console.error('Mailgun API error:', error)
    if (error instanceof Error) {
      console.error('Error message:', error.message)
      console.error('Error stack:', error.stack)
      if ('details' in error) {
        console.error('Error details:', (error as any).details)
      }
    }
    if (error instanceof Error) {
      const mailgunError = error as MailgunError
      return {
        success: false,
        error: {
          message: mailgunError.message,
          details: mailgunError.details,
          status: mailgunError.status,
        },
      }
    }
    return { success: false, error: 'An unknown error occurred' }
  }
})
