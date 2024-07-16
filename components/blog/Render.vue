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
    <nav class="font-medium my-6">
      <NuxtLink
        to="/blog"
        class="hover:text-ring"
      >
        <Icon
          name="ph:newspaper-duotone"
          class="flex-shrink-0 w-6 h-6"
        />
        Blog
      </NuxtLink>
      <span class="mx-1">&gt;</span>
      <span class="text-primary hover:text-ring">{{ props.post.title }}</span>
    </nav>

    <!-- Posted Date -->
    <p class=" text-secondary my-2">
      Posted Date: {{ formattedDate }}
    </p>

    <!-- Blog Title -->
    <h1 class="text-4xl font-black text-foreground">
      {{ title }}
    </h1>

    <!-- Blog Title -->
    <p class="mt-3 text-lg text-foreground">
      {{ post.description }}
    </p>

    <!-- Authors Info -->
    <div class="flex flex-wrap items-center mb-8 my-3">
      <div
        v-for="(author, index) in authors"
        :key="index"
        class="flex items-center mr-6"
      >
        <img
          :src="author.avatar"
          :alt="author.name"
          class="w-9 h-9 rounded-full mr-2"
        >
        <div class="flex flex-col">
          <NuxtLink
            :to="`/author/${author.slug}`"
            class="font-medium text-primary hover:text-ring"
          >
            {{ author.name }}
          </NuxtLink>
          <span class="text-sm text-secondary">{{ author.slug }}</span>
        </div>
      </div>
    </div>

    <!-- Horizontal line -->
    <hr class="my-4 border-t border-secondary">

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
