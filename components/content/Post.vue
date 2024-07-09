<script setup lang="ts">
import { defineProps } from 'vue'
import type { Post } from '~/types' // Replace with your Post type definition

defineProps<{
  post: Post | null
}>()

// You can add lifecycle hooks or methods here if needed
</script>

<template>
  <div v-if="post">
    <h1 class="text-2xl font-bold mb-4">
      {{ post.title }}
    </h1>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<!-- Add any necessary styles -->
<style scoped>
/* Add your component-specific styles here */
</style>
