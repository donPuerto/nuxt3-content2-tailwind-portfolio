<!-- eslint-disable no-console -->
<script setup lang="ts">
definePageMeta({
  layout: 'blog',
})
const personalPost = await queryContent('personal').sort({ published_on: -1 }).find()

console.log('posts', personalPost)
</script>

<template>
  <article>
    <h1 class="mb-4 text-3xl font-bold text-left">
      Blog
    </h1>
  </article>
</template>
