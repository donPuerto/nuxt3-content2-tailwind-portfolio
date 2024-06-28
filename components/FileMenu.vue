import { KBD } from '../.nuxt/components';
<!-- eslint-disable no-console -->
<script setup lang="ts">
const props = defineProps({
  categories: Array as () => string[],
  updatedCategory: String as () => string | null,
})

const emit = defineEmits(['update:updatedCategory'])

const updateCategory = (category: string) => {
  emit('update:updatedCategory', category)
}
</script>

<template>
  <div class="border-1 mb-8 border p-3">
    <!-- Categories -->
    <p class="mb-2 font-bold">
      Category:
    </p>
    <div class="flex flex-wrap">
      <span
        v-for="category in props.categories"
        :key="category"
        class="mb-2 flex cursor-pointer items-center capitalize md:mb-0 md:mr-1"
        :class="{ 'font-extrabold': props.updatedCategory === category }"
        @click="updateCategory(category)"
      >
        <KBD class="">
          {{ category }}
        </KBD>
      </span>
    </div>
  </div>
</template>

<style scoped>
  /* Add scoped styles here if needed */
</style>
