<script lang="ts" setup>
import type { Author } from '../../types/components/blog/post'
import type { Post } from '~/types/components/blog/post'

const props = defineProps<{
  post: Post
}>()

const tableOfContents = ref([])

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

onMounted(() => {
  const article = document.querySelector('.blog-content')
  if (article) {
    const headers = article.querySelectorAll('h2, h3, h4, h5, h6')
    tableOfContents.value = Array.from(headers).map(header => ({
      id: header.id,
      text: header.textContent,
      level: parseInt(header.tagName.charAt(1)),
    }))
  }
})
</script>

<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
    <div class="flex flex-col lg:flex-row">
      <!-- Main content -->
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

        <!-- Blog Description  -->
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

        <!-- Content with full-width background and padding -->
        <div class="bg-secondary/10 w-full py-6 rounded-xl shadow-xl">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="prose prose-lg max-w-none blog-content">
              <ContentRenderer :value="post">
                <template #empty>
                  <p>No content found.</p>
                </template>
              </ContentRenderer>
            </div>
          </div>
        </div>
      </article>

      <!-- Table of Contents (right side) -->
      <aside class="lg:w-1/4 mt-8 lg:mt-0">
        <div class="sticky top-8">
          <div
            v-if="tableOfContents.length > 0"
            class="bg-secondary/10 p-4 rounded-xl"
          >
            <h2 class="text-xl font-bold mb-4">
              Table of Contents
            </h2>
            <ul class="space-y-2">
              <li
                v-for="header in tableOfContents"
                :key="header.id"
                :class="{ 'ml-2': header.level === 3, 'ml-4': header.level > 3 }"
              >
                <a
                  :href="`#${header.id}`"
                  class="text-primary hover:text-ring"
                >
                  {{ header.text }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<style scoped>
.blog-content :deep(pre) {
  margin: 1.5em -.5rem;  /* Negative margin to extend to container edges */
  padding: 1.5em 2rem;  /* Padding to match container padding */
  background-color: hsl(var(--background));
  border-radius: 0.5rem;
  overflow-x: auto;
  /* border: 1px solid hsl(var(--ring)); */
  box-shadow: -1px 1px 4px -1px  hsl(var(--ring)) inset, 2px -1px 4px -2px  hsl(var(--ring)) inset;

}

.blog-content :deep(code) {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 0.875em;
  color: #1f2937;  /* Dark gray text */
}

.blog-content :deep(pre code) {
  display: block;
  padding: 0;
  background-color: transparent;
}

/* Inline code */
.blog-content :deep(:not(pre) > code) {
  padding: 0.2em 0.4em;
  background-color: hsl(var(--background));
  border-radius: 0.25em;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .blog-content :deep(pre) {
    margin-left: -1rem;
    margin-right: -1rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
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
