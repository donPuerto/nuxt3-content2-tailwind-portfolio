<script setup lang="ts">
import { defineProps } from 'vue'
import type { Post } from '~/types' // Replace with your Post type definition

withDefaults(
  defineProps<{
    post: Post | null
    cardStyle?: 'cardStyle1' | 'cardStyle2'
  }>(),
  {
    post: null,
    cardStyle: 'cardStyle2',
  },
)
</script>

<template>
  <div v-if="post">
    <div
      v-if="cardStyle === 'cardStyle1'"
    >
      <BlogCardStyle1 v-bind="post" />
    </div>
    <div
      v-else-if="cardStyle === 'cardStyle2'"
    >
      <BlogCardStyle2 v-bind="post" />
    </div>
    <div v-else>
      <p>Invalid card style selected.</p>
    </div>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<!-- Add any necessary styles -->
<style scoped>
/* Add your component-specific styles here */
</style>
