<script setup lang="ts">
import type { Post } from '~/types/components/blog/post'

definePageMeta({
  layout: 'blog',
})

// Fetch all blog posts
const { pending, data: posts } = await useLazyAsyncData<Post[]>('all-posts', () =>
  queryContent<Post>('/blog').sort({ published_on: -1 }).find(),
)

// Reactive properties
const sortOrder = ref<'asc' | 'desc'>('asc')
const currentCategory = ref<string | null>(null)
const currentPage = ref<number>(1)
const postsPerPage = 10
const searchQuery = ref<string>('')

// Function to toggle sort order
const toggleSortOrder = () => {
  sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
}

// Extract unique categories
const categories = computed((): string[] => {
  if (!posts.value) return []
  const uniqueCategories = new Set<string>()
  posts.value.forEach((post) => {
    const parts = post._path.split('/')
    if (parts.length > 2) {
      uniqueCategories.add(parts[2])
    }
  })
  return Array.from(uniqueCategories).sort()
})

// Filter posts by category and search query, then sort by published date
const filteredPosts = computed((): Post[] => {
  if (!posts.value) return []
  return posts.value
    .filter((post) => {
      const parts = post._path.split('/')
      const category = parts.length > 2 ? parts[2] : null
      return (
        (!currentCategory.value || category === currentCategory.value)
        && (!searchQuery.value || post.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
      )
    })
    .sort((a, b) => {
      const dateA = new Date(a.publishedOn).getTime()
      const dateB = new Date(b.publishedOn).getTime()
      return sortOrder.value === 'asc' ? dateA - dateB : dateB - dateA
    })
})

// Paginate posts
const paginatedPosts = computed((): Post[] => {
  const start = (currentPage.value - 1) * postsPerPage
  return filteredPosts.value.slice(start, start + postsPerPage)
})

// Watch for changes in currentCategory and reset currentPage to 1
watch(currentCategory, () => {
  currentPage.value = 1
})
</script>

<template>
  <article>
    <!-- Set background or background styling here -->

    <!-- SearchBar Component -->
    <SearchBar />
    <FileMenu
      v-model:updatedCategory="currentCategory"
      :categories="categories"
    />

    <!-- Search input -->
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search posts"
      class="mb-4 p-2 border border-gray-300 rounded"
    >

    <button @click="toggleSortOrder">
      Sort by Date: {{ sortOrder === 'asc' ? 'Ascending' : 'Descending' }}
    </button>
    <h1 class="mb-4 text-3xl font-bold text-left">
      Blog Posts
    </h1>
    <p class="mb-6 text-zinc-700 dark:text-zinc-300">
      Explore how writing can help clarify your thoughts and boost your cognitive abilities.
    </p>

    <!-- Categories as tags -->
    <!-- <div class="mb-4 space-x-2 flex flex-wrap">
      <span
        v-for="category in categories"
        :key="category"
        class="cursor-pointer text-blue-500 flex flex-col md:flex-row items-center mb-8 hover:underline"
        @click="currentCategory = category"
      >
        {{ category }}
      </span>
    </div> -->

    <!-- Container -->
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap -mx-4">
        <div class="w-full lg:w-2/3 px-4">
          <template v-if="pending">
            <PostSkeleton />
          </template>
          <template v-else>
            <PostGrid :posts="paginatedPosts" />
          </template>
          <!-- Pagination controls -->
          <div class="flex justify-between mt-4">
            <button
              :disabled="currentPage === 1"
              class="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
              @click="currentPage--"
            >
              Previous
            </button>
            <button
              :disabled="currentPage * postsPerPage >= filteredPosts.length"
              class="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
              @click="currentPage++"
            >
              Next
            </button>
          </div>
        </div>

        <div class="w-full lg:w-1/3 px-4">
          <div class="comments-section p-4 bg-gray-100 rounded-lg">
            <h2 class="text-xl font-bold mb-4">
              Comments
            </h2>
            <!-- Your comments section here -->
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
