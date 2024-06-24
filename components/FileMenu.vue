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
  <div class="mb-8 border border-1 p-3">
    <!-- Categories -->
    <p class="font-bold mb-2">
      Category:
    </p>
    <div class="flex flex-wrap ">
      <span
        v-for="category in props.categories"
        :key="category"
        class="cursor-pointer flex items-center mb-2 md:mb-0 md:mr-1 capitalize "
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
