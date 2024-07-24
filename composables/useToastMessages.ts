/**
 * Usage:
 *
 * import { useToastMessages } from '@/path-to-composables/useToastMessages' // Adjust the path as necessary
 *
 * const { showMessage } = useToastMessages()
 *
 * // Basic usage
 * showMessage({
 *   description: 'Your message has been sent',
 * })
 *
 * // With type
 * showMessage({
 *   type: 'success',
 *   description: 'Your message has been sent',
 * })
 *
 * // With title and icon
 * showMessage({
 *   type: 'info',
 *   title: 'Information',
 *   icon: 'lucide:info',
 *   description: 'This is an informational message',
 * })
 *
 * // With action
 * showMessage({
 *   type: 'action',
 *   title: 'Action Required',
 *   icon: 'lucide:alert',
 *   description: 'Please take action on this item',
 *   action: h(resolveComponent('UiToastAction'), { altText: 'Undo' }, { default: () => 'Undo' })
 * })
 */

interface ToastMessageOptions {
  type?: string
  title?: string
  icon?: string
  description?: string
  action?: VNode
}

export const useToastMessages = () => {
  const getToastIcon = (type: string) => {
    switch (type) {
      case 'success':
        return 'lucide:badge-check'
      case 'info':
        return 'lucide:badge-info'
      case 'warning':
        return 'lucide:badge-alert'
      case 'destructive':
        return 'lucide:badge-x'
      default:
        return 'lucide:badge-check'
    }
  }

  const showMessage = ({ type, title, icon, description, action: _action }: ToastMessageOptions) => {
    const toast = useToast()

    if (!type) {
      return toast.toast({
        description: 'Your message has been sent',
      })
    }

    if (type === 'action') {
      return toast.toast({
        title: title || 'Title',
        icon: icon || 'lucide:mail',
        description: description || 'description',
        action: h(
          resolveComponent('UiToastAction'),
          {
            altText: 'Undo',
          },
          {
            default: () => 'Undo',
          },
        ),
      })
    }

    return toast.toast({
      title: title || 'Title',
      description: description || 'Your message has been sent',
      variant: type,
      icon: icon || getToastIcon(type),
    })
  }

  return {
    showMessage,
  }
}
