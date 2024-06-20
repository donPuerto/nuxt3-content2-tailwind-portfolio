<!-- eslint-disable no-console -->
<script setup lang="ts">
// Option 1
// const posts = await queryContent('blog').sort({ published_on: -1 }).find()

// Option 2
// Fetch all blog posts
const { pending, data: posts } = await useLazyAsyncData('all-posts', () =>
  queryContent('blog', 'layer1').sort({ published_on: -1 }).find(),
)
console.log('posts', posts)
</script>

<template>
  <main>
    <ul>
      <li
        v-for="post in posts"
        :key="post.id"
      >
        <!-- <pre>
          {{ post }}
        </pre> -->
        <NuxtLink :to="`blog/${post.slug}`">
          {{ post.title }}
        </NuxtLink>
      </li>
    </ul>
    <!-- <div v-if="pending">
      {{ pending }}
    </div> -->
  </main>
</template>
