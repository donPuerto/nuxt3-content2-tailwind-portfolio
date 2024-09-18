/* eslint-disable @typescript-eslint/no-unused-vars */
import { formatDistanceToNow, parseISO, format } from 'date-fns'

export function useDate() {
  function formatRelativeDate(dateString: string | undefined): string {
    if (!dateString) return 'Unknown date'
    try {
      const date = parseISO(dateString)
      return formatDistanceToNow(date, { addSuffix: true })
    }
    catch (error) {
      // console.error('Error formatting relative date:', error, dateString)
      return 'Invalid date'
    }
  }

  function formatDate(dateString: string | undefined): string {
    if (!dateString) return 'Unknown date'
    try {
      const date = parseISO(dateString)
      return format(date, 'MMMM d, yyyy')
    }
    catch (error) {
      // console.error('Error formatting date:', error, dateString)
      return 'Invalid date'
    }
  }

  function formatDateWithRelative(dateString: string | undefined): { relative: string, formatted: string } {
    return {
      relative: formatRelativeDate(dateString),
      formatted: formatDate(dateString),
    }
  }

  return {
    formatRelativeDate,
    formatDate,
    formatDateWithRelative,
  }
}
