import type { H3Event } from 'h3'
import { defineEventHandler, readBody, createError } from 'h3'
import nodemailer from 'nodemailer'
import { useRuntimeConfig } from '#imports'

export default defineEventHandler(async (event: H3Event) => {
  const { gmailUserEmail, gmailAppPass } = useRuntimeConfig()

  try {
    const body = await readBody(event)

    if (!body) {
      throw createError({ statusCode: 400, statusMessage: 'Bad request: Missing body' })
    }

    const { to, subject, text, html } = body as { to: string, subject: string, text?: string, html?: string }

    if (!to || !subject || (!text && !html)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Bad request: Missing required fields (to, subject, and either text or html)',
      })
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: gmailUserEmail,
        pass: gmailAppPass,
      },
    })

    const mailOptions = {
      from: {
        name: 'Don Puerto',
        address: gmailUserEmail,
      },
      to,
      subject,
      text,
      html,
    }

    const info = await transporter.sendMail(mailOptions)
    return { success: true, messageId: info.messageId }
  }
  catch (error: unknown) {
    if (error instanceof Error) {
      if ('statusCode' in error && typeof error.statusCode === 'number') {
        // If it's an error we created, pass it through
        throw error
      }
      else {
        // For other errors (like nodemailer errors), create a generic 500 error
        throw createError({
          statusCode: 500,
          statusMessage: 'Internal server error: Failed to send email',
          stack: error.stack,
        })
      }
    }
    else {
      // For non-Error objects
      throw createError({
        statusCode: 500,
        statusMessage: 'Internal server error: An unknown error occurred',
      })
    }
  }
})
