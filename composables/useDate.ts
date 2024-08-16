import { formatDistanceToNow, parseISO, format } from 'date-fns'

export function useDate() {
  function formatRelativeDate(dateString: string): string {
    const date = parseISO(dateString)
    return formatDistanceToNow(date, { addSuffix: true })
  }

  function formatDate(dateString: string): string {
    const date = parseISO(dateString)
    return format(date, 'MMMM d, yyyy')
  }

  function formatDateWithRelative(dateString: string): { relative: string, formatted: string } {
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
