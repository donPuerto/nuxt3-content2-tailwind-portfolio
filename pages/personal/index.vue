<script setup lang="ts">
// Fetch all posts in the 'personal' category
const { data: posts } = useContent('blog/personal')
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">
      Personal Blog Posts
    </h1>
    <ul>
      <li
        v-for="post in posts"
        :key="post.slug"
        class="mb-4"
      >
        <NuxtLink
          :to="`/blog/personal/${post.slug}`"
          class="text-blue-600 hover:underline"
        >
          {{ post.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
