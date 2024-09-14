/* eslint-disable no-console */
import { defineEventHandler, readBody } from 'h3'
import nodemailer from 'nodemailer'
import { google } from 'googleapis'

const USER_EMAIL = process.env.GMAIL_USER
const CLIENT_ID = process.env.GMAIL_CLIENT_ID
const CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET
const REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN
const REDIRECT_URL = process.env.REDIRECT_URL

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URL,
)

// set auth as a global default
google.options({
  auth: oauth2Client,
})

oauth2Client.setCredentials({
  refresh_token: REFRESH_TOKEN, // Refresh token
})

console.log('Credentials set')

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { to, subject, text, html } = body

    console.log('Attempting to refresh access token...')
    const { token: accessToken } = await oauth2Client.getAccessToken()
    if (!accessToken) {
      throw new Error('Failed to obtain access token')
    }
    console.log('Access token obtained successfully')

    console.log('Creating transporter...')
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // use TLS
      auth: {
        type: 'OAuth2',
        user: USER_EMAIL,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken,
      },
    } as nodemailer.TransportOptions)

    console.log('Verifying transporter...')
    await transporter.verify()
    console.log('Transporter verified successfully')

    const mailOptions = {
      from: `"Don Puerto" <${USER_EMAIL}>`,
      to,
      subject,
      text,
      html,
    }

    console.log('Sending email...')
    const info = await transporter.sendMail(mailOptions)
    console.log('Email sent successfully')
    return { success: true, info }
  }
  catch (error: unknown) {
    console.error('Error details:', error)
    if (error instanceof Error) {
      return { success: false, error: error.message }
    }
    else {
      return { success: false, error: 'An unknown error occurred' }
    }
  }
})
