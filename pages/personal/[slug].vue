<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug

// Fetch post content
const { data: post, fetch } = useContent()

// Fetch post data on component mount
onMounted(async () => {
  await fetch(`/blog/personal/${slug}`)
})
</script>

<template>
  <div>
    <h1>{{ post.title }}</h1>
    <div v-html="post.bodyHtml"></div>
  </div>
</template>
