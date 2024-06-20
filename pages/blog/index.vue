<script lang="ts" setup>
const { data: posts } = await useAsyncData('posts', () =>
  queryContent('posts').find(),
)
</script>

<template>
  <div>
    <h1>Blog</h1>
    <ul>
      <li
        v-for="post in posts"
        :key="post._path"
      >
        <nuxt-link :to="`/blog/${post.slug}`">
          {{ post.title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style>

</style>
