import { formatDistanceToNow, parseISO } from 'date-fns'

export function useRelativeTime() {
  function getRelativeTime(dateString: string): string {
    const date = parseISO(dateString)
    return formatDistanceToNow(date, { addSuffix: true })
  }

  return {
    getRelativeTime,
  }
}
