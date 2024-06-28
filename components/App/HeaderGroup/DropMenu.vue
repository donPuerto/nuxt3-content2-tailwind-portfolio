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
    class="bg-theme-bg-secondary-color border-b-0 p-2 drop-shadow-sm"
  >
    <div class="flex flex-col items-center space-y-2">
      <NuxtLink
        v-for="(item, index) in props.menuItems"
        :key="index"
        :to="`/${item.toLowerCase()}`"
        class="text-theme-text-primary-color text-md font-inter-bold hover:bg-theme-bg-secondary-color w-full rounded-md border bg-clip-text p-3 font-bold shadow-md transition-transform duration-200 ease-in-out"
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
