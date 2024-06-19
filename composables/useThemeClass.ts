import { ref, onMounted, onUnmounted } from 'vue'

export const useThemeClass = () => {
  const hasClassChanged = ref(false)

  onMounted(() => {
    if (import.meta.client) {
      const initialClass = document.documentElement.className
      let currentClass = initialClass

      const observer = new MutationObserver(() => {
        const newClass = document.documentElement.className
        if (newClass !== currentClass) {
          currentClass = newClass
          hasClassChanged.value = true
        }
      })

      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class'],
      })

      onUnmounted(() => observer.disconnect())
    }
  })

  return hasClassChanged
}
