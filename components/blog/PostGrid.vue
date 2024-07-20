<script setup lang="ts">
import type { Post } from '@/types'

// Define the type for a post

// Define props
const props = defineProps<{
  posts: Post[]
}>()
</script>

<template>
  <div class="post-grid">
    <PostCard
      v-for="post in props.posts"
      :key="post.slug"
      :route="`/blog/${post.slug}`"
      :slug="post.slug"
      :title="post.title"
      :subtitle="post.subtitle"
      :series="post.series"
      :image="post.image"
      :description="post.description"
      :published-on="post.published_on"
      :published="true"
    />
  </div>
</template>

<style scoped>
  .post-grid {
    display: grid;
    gap: 1rem;
  }

  @media (min-width: 768px) {
    .post-grid {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
</style>
