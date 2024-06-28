<script setup lang="ts">
interface Props {
  menuItems: string[]
}
const props = defineProps<Props>()
</script>

<template>
  <div>
    <!-- Navbar Menu -->
    <div class="hidden md:flex md:items-center md:space-x-1">
      <NuxtLink
        v-for="(item, index) in props.menuItems"
        :key="index"
        :to="`/${item.toLowerCase()}`"
        class="text-md font-inter-bold hover:bg-theme-bg-button-hover-color hover:text-theme-bg-anchor-tag-hover-color rounded-md bg-transparent px-4 py-2 font-bold transition duration-300 ease-in-out"
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
