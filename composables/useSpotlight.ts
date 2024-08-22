// composables/useSpotlight.ts
import { ref, reactive } from 'vue'
import { useMouseInElement } from '@vueuse/core'

export function useSpotlight() {
  const targetRef = ref<HTMLElement | null>(null)
  const isFocused = ref(false)
  const position = reactive({ x: 0, y: 0 })
  const opacity = ref(0)

  const { elementX, elementY } = useMouseInElement(targetRef)

  const handleMouseMove = () => {
    if (!isFocused.value) {
      position.x = elementX.value
      position.y = elementY.value
    }
  }

  const handleFocus = () => {
    isFocused.value = true
    opacity.value = 1
  }

  const handleBlur = () => {
    isFocused.value = false
    opacity.value = 0
  }

  const handleMouseEnter = () => {
    opacity.value = 1
  }

  const handleMouseLeave = () => {
    opacity.value = 0
  }

  return {
    targetRef,
    position,
    opacity,
    handleMouseMove,
    handleFocus,
    handleBlur,
    handleMouseEnter,
    handleMouseLeave,
  }
}
