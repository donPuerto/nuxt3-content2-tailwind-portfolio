/**
 * Usage:
  <UiButton variant="outline" class="mr-5" @click="showMessage()">Show Toast</UiButton>
  <UiButton variant="outline" class="mr-5" @click="showMessage('success')">Success Toast</UiButton>
  <UiButton variant="outline" class="mr-5" @click="showMessage('info')">Info Toast</UiButton>
  <UiButton variant="outline" class="mr-5" @click="showMessage('warning')">Warning Toast</UiButton>
  <UiButton variant="outline" class="mr-5" @click="showMessage('destructive')">Error Toast</UiButton>
  <UiButton variant="outline" class="mr-5" @click="showMessage('action')">Action Toast</UiButton>

 */
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

  const showMessage = (type?: string) => {
    const toast = useToast()

    if (!type) {
      return toast.toast({
        description: 'Your message has been sent',
      })
    }

    if (type === 'action') {
      return toast.toast({
        title: 'Message Sent',
        icon: 'lucide:mail',
        description: 'Your message has been sent. Click undo to revert the action',
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
      title: 'Message Sent',
      description: 'Your message has been sent',
      variant: type,
      icon: getToastIcon(type),
    })
  }

  return {
    showMessage,
  }
}
