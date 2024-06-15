<script setup lang="ts">
interface Props {
  customClass?: string
}

const props = defineProps<Props>()
const { customClass } = props
</script>

<template>
  <kbd :class="['kbd-class', customClass]">
    <slot />
  </kbd>
</template>

<style scoped>
.kbd-class {
  @apply inline-block
  bg-theme-bg-primary-color
  text-theme-text-primary-color
  border
  border-theme-border-color
  rounded
  px-1.5
  py-0.5
  text-sm
  font-inter;
}
</style>
