<!-- DropdownMenu.vue -->
<script setup lang="ts">
interface Props {
  menuItems: string[]
  isMenuOpen: boolean
}

const props = defineProps<Props>()
// eslint-disable-next-line no-console
console.log('isMenuOpen', props.menuItems)
</script>

<template>
  <div
    v-if="isMenuOpen"
    class="
      bg-theme-bg-secondary-color
      p-2
      border-b-0
      drop-shadow-sm"
  >
    <div class="flex flex-col items-center space-y-2">
      <NuxtLink
        v-for="(item, index) in props.menuItems"
        :key="index"
        :to="`/${item.toLowerCase()}`"
        class="
          w-full
          border
          p-3
          rounded-md
          shadow-md
          text-theme-text-primary-color
          text-md
          font-bold
          font-inter-bold
          transition-transform
          duration-200
          ease-in-out
          hover:bg-theme-bg-secondary-color
          bg-clip-text
        "
      >
        {{ item }}
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.dropdown-item {
  /* Add dropdown menu item styles here */
}
</style>
