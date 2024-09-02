<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Post, Author } from '~/types/components/blog/post'

definePageMeta({
  layout: 'blog',
})

const { data: posts } = await useLazyAsyncData<Post[]>('all-posts', () =>
  queryContent<Post>('/blog').where({ is_publish: true }).sort({ published_at: -1 }).find(),
)

// Ensure posts is reactive and has a default value
const safePosts = computed(() => posts.value || [])

// Search functionality
const searchQuery = ref('')

const filteredPosts = computed(() => {
  if (!searchQuery.value) return safePosts.value
  const lowercaseQuery = searchQuery.value.toLowerCase()
  return safePosts.value.filter((post) => {
    const titleMatch = post.title.toLowerCase().includes(lowercaseQuery)
    const descriptionMatch = post.description?.toLowerCase().includes(lowercaseQuery) || false
    const tagMatch = post.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery)) || false

    let authorMatch = false
    if (typeof post.authors === 'string') {
      authorMatch = post.authors.toLowerCase().includes(lowercaseQuery)
    }
    else if (Array.isArray(post.authors)) {
      authorMatch = post.authors.some(author => author.name.toLowerCase().includes(lowercaseQuery))
    }
    else if (post.authors && 'name' in post.authors) {
      authorMatch = post.authors.name.toLowerCase().includes(lowercaseQuery)
    }

    return titleMatch || descriptionMatch || tagMatch || authorMatch
  })
})

// Get the latest post for the featured article
const featuredPost = computed(() => filteredPosts.value[0])

// Get the next 4 posts for the smaller cards
const smallerPosts = computed(() => filteredPosts.value.slice(1, 5))
</script>

<template>
  <article class="container mx-auto px-4">
    <div class="flex flex-col items-center my-4">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search posts"
        class="w-full max-w-md rounded-md border border-input bg-background px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <p class="text-xs text-muted-foreground mt-1">
        Search Posts by:
        <span class="text-primary ml-2"><Icon
          name="fluent:checkmark-square-24-regular"
          class="inline-block w-4 h-4 text-primary text-green-500"
        /> Title</span>
        <span class="text-primary ml-2"><Icon
          name="fluent:checkmark-square-24-regular"
          class="inline-block w-4 h-4 text-primary text-green-500"
        /> Description</span>
        <span class="text-primary ml-2"><Icon
          name="fluent:checkmark-square-24-regular"
          class="inline-block w-4 h-4 text-primary text-green-500"
        /> Tags</span>
        <span class="text-primary ml-2"><Icon
          name="fluent:checkmark-square-24-regular"
          class="inline-block w-4 h-4 text-primary text-green-500"
        /> Author names</span>
      </p>
    </div>

    <div
      v-if="filteredPosts.length > 0"
      class="grid grid-cols-1 lg:grid-cols-4 gap-4"
    >
      <!-- Main content column -->
      <div class="lg:col-span-3 space-y-4">
        <!-- Featured Article -->
        <div
          v-if="featuredPost"
          class="bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <img
            :src="featuredPost.image?.url"
            :alt="featuredPost.image?.alt"
            class="w-full h-72 object-cover"
          />
          <div class="p-4">
            <h2 class="text-2xl font-bold mb-2">
              {{ featuredPost.title }}
            </h2>
            <p
              v-if="featuredPost.description"
              class="text-base text-gray-600 mb-2"
            >
              {{ featuredPost.description }}
            </p>
            <p class="text-sm text-gray-500">
              {{ new Date(featuredPost.published_at).toLocaleDateString() }} | {{ featuredPost.reading_time }}
            </p>
          </div>
        </div>

        <!-- Smaller Articles -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            v-for="post in smallerPosts"
            :key="post._path"
            class="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              :src="post.image?.url"
              :alt="post.image?.alt"
              class="w-full h-32 object-cover"
            />
            <div class="p-3">
              <h3 class="text-sm font-semibold mb-1">
                {{ post.title }}
              </h3>
              <p
                v-if="post.description"
                class="text-xs text-gray-600 mb-1"
              >
                {{ post.description }}
              </p>
              <p class="text-xs text-gray-500">
                {{ new Date(post.published_at).toLocaleDateString() }} | {{ post.reading_time }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Comments column -->
      <div class="bg-white shadow-lg rounded-lg p-4">
        <h2 class="text-xl font-bold mb-4">
          Comments
        </h2>
        <!-- Add your comments component or content here -->
        <p>Comments section placeholder</p>
      </div>
    </div>

    <div
      v-else
      class="text-center py-8"
    >
      <p class="text-xl text-gray-600">
        No posts found matching your search.
      </p>
    </div>
  </article>
</template>
