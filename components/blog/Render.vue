<script lang="ts" setup>
import type { Author } from '../../types/components/blog/post'
import type { Post } from '~/types/components/blog/post'

const props = defineProps<{
  post: Post
}>()

const title = computed(() => props.post.title)

const formattedDate = computed(() => {
  if (props.post.published_on) {
    return new Date(props.post.published_on).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }
  return ''
})

// Ensure authors is always an array of Author objects
const authors = computed((): Author[] => {
  if (Array.isArray(props.post.authors)) {
    return props.post.authors
  }
  else if (typeof props.post.authors === 'string') {
    // Fallback for old format where authors was just a string
    return [{
      name: props.post.authors,
      avatar: '', // You might want to provide a default avatar
      slug: props.post.authors.toLowerCase().replace(/\s+/g, '-'),
    }]
  }
  else if (props.post.authors && typeof props.post.authors === 'object') {
    // Single author object
    return [props.post.authors]
  }
  return []
})
</script>

<template>
  <article class=" container mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Breadcrumb -->
    <nav class="text-sm font-medium mb-4">
      <NuxtLink
        to="/blog"
        class="text-blue-600 hover:text-blue-800"
      >
        Blog
      </NuxtLink>
      <span class="mx-2">&gt;</span>
      <span class="text-gray-500">{{ props.post.title }}</span>
    </nav>

    <!-- Spacing -->
    <div class="my-8" />

    <!-- Posted Date -->
    <p class="text-gray-600 mb-4">
      Posted Date: {{ formattedDate }}
    </p>

    <!-- Blog Title -->
    <h1 class="mt-5 text-4xl font-black text-gray-100">
      {{ title }}
    </h1>

    <!-- Blog Title -->
    <p class="mt-3 text-lg text-gray-200">
      {{ post.description }}
    </p>

    <!-- Authors Info -->
    <div class="flex flex-wrap items-center mb-8 mt-2">
      <div
        v-for="(author, index) in authors"
        :key="index"
        class="flex items-center mr-6 mb-4"
      >
        <img
          :src="author.avatar"
          :alt="author.name"
          class="w-10 h-10 rounded-full mr-1"
        >
        <div class="flex flex-col">
          <NuxtLink
            :to="`/author/${author.slug}`"
            class="font-medium text-blue-600 hover:text-blue-800"
          >
            {{ author.name }}
          </NuxtLink>
          <span class="text-sm text-gray-500">{{ author.slug }}</span>
        </div>
      </div>
    </div>

    <!-- Horizontal line -->
    <hr class="my-8 border-t border-gray-300">

    <!-- Content -->
    <div class=" prose prose-lg blog-content">
      <ContentRenderer
        :value="post"
      >
        <template #empty>
          <p>No content found.</p>
        </template>
      </ContentRenderer>
    </div>
  </article>
</template>

<style scoped>
.blog-content :deep(p) {
  margin-bottom: 1em;
}

.blog-content :deep(h2),
.blog-content :deep(h3),
.blog-content :deep(h4),
.blog-content :deep(h5),
.blog-content :deep(h6) {
  margin-top: 1.5em;
  margin-bottom: 0.5em;
}
</style>
