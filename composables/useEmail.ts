export const useEmail = () => {
  const sendEmail = async (to: string, subject: string, text: string, html: string) => {
    try {
      const response = await fetch('/api/gmailsmtp/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ to, subject, text, html }),
      })
      const result = await response.json()
      return { success: result.success, messageId: result.messageId }
    }
    catch (error) {
      return { success: false, error: error || 'Failed to send email' }
    }
  }

  return { sendEmail }
}
