<script setup lang="ts">
interface Props {
  customClass?: string
  size?: 'xs' | 'sm' | 'md'
}
  type SizeOptions = 'xs' | 'sm' | 'md'
interface UIConfig {
  base: string
  padding: string
  size: Record<SizeOptions, string>
  rounded: string
  font: string
  background: string
  ring: string
  default: {
    size: SizeOptions
  }
}

const props = defineProps<Props>()
const { customClass, size } = props

// configuration
const UIconfig: UIConfig = {
  base: 'inline-flex items-center justify-center text-theme-text-primary-color',
  padding: 'px-1',
  size: {
    xs: 'h-4 min-w-[16px] text-[10px]',
    sm: 'h-5 min-w-[20px] text-[11px]',
    md: 'h-6 min-w-[24px] text-[12px]',
  },
  rounded: 'rounded',
  font: 'font-medium font-sans',
  background: 'bg-theme-bg-primary-color',
  ring: 'ring-1 ring-theme-border-color ring-inset',
  default: {
    size: 'sm',
  },
}

const appliedSize = computed<SizeOptions>(() => size || UIconfig.default.size)

// Combine the classes into a single string
const kbdClasses = computed(() => {
  const baseClasses = UIconfig.base
  const paddingClasses = UIconfig.padding
  const sizeClasses = appliedSize.value
  const roundedClasses = UIconfig.rounded
  const fontClasses = UIconfig.font
  const backgroundClasses = UIconfig.background
  const ringClasses = UIconfig.ring

  return [
    baseClasses,
    paddingClasses,
    sizeClasses,
    roundedClasses,
    fontClasses,
    backgroundClasses,
    ringClasses,
    customClass,
  ].join(' ')
})
</script>

<template>
  <kbd :class="[kbdClasses, customClass]">
    <slot></slot>
  </kbd>
</template>

<style scoped></style>
