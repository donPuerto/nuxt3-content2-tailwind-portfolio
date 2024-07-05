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
    <div class=" grid grid-cols-1 gap-2 px-4 md:grid-cols-12 ">
      <div class="hidden h-32 rounded-lg bg-gray-200 md:col-span-2 md:block">
        <!-- <CategoryList /> -->
        Category
      </div>
      <div class="h-full rounded-lg bg-gray-500 p-2 md:col-span-8">
        <!-- Large Card -->
        <div class="mb-2 h-32 rounded-lg bg-gray-300 md:h-64">
          Large Card
        </div>

        <!-- Small Cards Grid -->
        <div class="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4">
          <!-- Small Card 1 -->
          <div class="h-32 rounded-lg bg-gray-200">
            Small Card 1
          </div>
          <!-- Small Card 2 -->
          <div class="h-32 rounded-lg bg-gray-200">
            Small Card 2
          </div>
          <!-- Small Card 3 -->
          <div class="h-32 rounded-lg bg-gray-200">
            Small Card 3
          </div>
          <!-- Small Card 4 -->
          <div class="h-32 rounded-lg bg-gray-200">
            Small Card 4
          </div>
        </div>
      </div>
      <div class="h-32 rounded-lg bg-gray-200 md:col-span-2">
        Comments
      </div>
    </div>

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
      class="mb-4 rounded border border-gray-300 p-2"
    >

    <button @click="toggleSortOrder">
      Sort by Date: {{ sortOrder === "asc" ? "Ascending" : "Descending" }}
    </button>
    <h1 class="mb-4 text-left text-3xl font-bold">
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
      <div class="-mx-4 flex flex-wrap">
        <div class="w-full px-4 lg:w-2/3">
          <template v-if="pending">
            <PostSkeleton />
          </template>
          <template v-else>
            <PostGrid :posts="paginatedPosts" />
          </template>
          <!-- Pagination controls -->
          <div class="mt-4 flex justify-between">
            <button
              :disabled="currentPage === 1"
              class="rounded bg-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-300"
              @click="currentPage--"
            >
              Previous
            </button>
            <button
              :disabled="currentPage * postsPerPage >= filteredPosts.length"
              class="rounded bg-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-300"
              @click="currentPage++"
            >
              Next
            </button>
          </div>
        </div>

        <div class="w-full px-4 lg:w-1/3">
          <div class="comments-section rounded-lg bg-gray-100 p-4">
            <h2 class="mb-4 text-xl font-bold">
              Comments
            </h2>
            <!-- Your comments section here -->
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
