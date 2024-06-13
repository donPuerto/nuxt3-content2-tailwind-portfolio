<script setup lang="ts">
import { defineProps } from 'vue'

interface Props {
  menuItems: string[]

}
const props = defineProps<Props>()
</script>

<template>
  <div>
    <!-- Navbar Menu -->
    <div class="md:flex md:items-center md:space-x-1 hidden">
      <NuxtLink
        v-for="(item, index) in props.menuItems"
        :key="index"
        :to="`/${item.toLowerCase()}`"
        class="text-md font-bold font-inter-bold  transition duration-300 ease-in-out bg-transparent hover:bg-theme-bg-button-hover-color hover:text-theme-bg-anchor-tag-hover-color px-4 py-2 rounded-md"
      >
        {{ item }}
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.menu-item {
  /* You can add additional styles here if needed */
}
</style>
