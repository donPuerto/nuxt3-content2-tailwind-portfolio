import { onMounted, onUnmounted } from 'vue'

export const useUseKeyboardShortcut = (keys: string[], callback: () => void) => {
  const handleKeydown = (event: KeyboardEvent) => {
    if (keys.includes(event.key)) {
      callback()
    }
  }

  onMounted(() => {
    window.addEventListener('keydown', handleKeydown)
  })

  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown)
  })
}
