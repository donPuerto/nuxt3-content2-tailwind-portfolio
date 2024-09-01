<script setup lang="ts">
import type { Post } from '~/types/components/blog/post'

definePageMeta({
  layout: 'blog',
})

// Fetch all blog posts
const { data: posts } = await useLazyAsyncData<Post[]>('all-posts', () =>
  queryContent<Post>('/blog').sort({ published_on: -1 }).find(),
)

// Reactive properties
const sortOrder = ref<'asc' | 'desc'>('asc')
const currentCategory = ref<string | null>(null)
const currentPage = ref<number>(1)
const postsPerPage = ref<number>(10)
const searchQuery = ref<string>('')

// Function to toggle sort order
const toggleSortOrder = () => {
  sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
}

// Compute unique categories
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
      const dateA = new Date(a.published_at).getTime()
      const dateB = new Date(b.published_at).getTime()
      return sortOrder.value === 'asc' ? dateA - dateB : dateB - dateA
    })
})

// Compute Paginated Posts
const paginatedPosts = computed((): Post[] => {
  const start = (currentPage.value - 1) * postsPerPage.value
  const end = start + postsPerPage.value
  return filteredPosts.value.slice(start, end)
})

const totalPages = computed(() => {
  // eslint-disable-next-line no-console
  console.log('totalPages', filteredPosts.value.length)
  return Math.ceil(filteredPosts.value.length / postsPerPage.value)
})

// Add Methods to Handle Pagination
const goToNextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

const goToPreviousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

onMounted(async () => {
  const postsBlog = await queryContent('blog', 'personal')
    .sort({ published_on: -1 })
    .find()
  // eslint-disable-next-line no-console
  console.log('postsBlog', postsBlog)
})
</script>

<template>
  <article>
    <div class="flex justify-center my-2">
      <!-- Search input -->
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search posts"
        class="mb-4 rounded border border-gray-300 p-2"
      />
    </div>

    <div class=" grid grid-cols-1 gap-2 px-4 md:grid-cols-6 lg:grid-cols-12">
      <div class="hidden h-32 rounded-lg  lg:col-span-2 md:block">
        <ul>
          <li
            v-for="category in categories"
            :key="category"
          >
            <NuxtLink
              :to="`/categories/${category}`"
              class="flex items-center gap-2 border-s-[3px] border-transparent px-4 py-3 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5 opacity-75"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span class="text-sm font-medium">{{ category }}</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="h-full md:col-span-8">
        <UiButton
          class="mb-2"
          @click="toggleSortOrder"
        >
          Sort by Date: {{ sortOrder === "asc" ? "Ascending" : "Descending" }}
        </UiButton>
        <!-- Cards Grid -->
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          <template
            v-for="(post, index) in paginatedPosts"
            :key="index"
          >
            <!-- Large Card -->
            <NuxtLink
              v-if="index === 0 && currentPage === 1"
              :to="`/blog/${post.slug}`"
              class="col-span-1 h-[240px] md:col-span-3 lg:col-span-3"
            >
              <BlogPostCard
                :post="post"
                card-style="cardStyle1"
              />
            </NuxtLink>
            <!-- Small Cards -->
            <NuxtLink
              v-else-if="index > 0 && index <= 9"
              :to="`/blog/${post.slug}`"
            >
              <BlogPostCard
                :post="post"
                card-style="cardStyle2"
              />
            </NuxtLink>
          </template>
        </div>
        <!-- Pagination Controls -->
        <div class="flex justify-center my-6">
          <UiButton
            :disabled="currentPage === 1"
            @click="goToPreviousPage"
          >
            Previous
          </UiButton>
          <span class="px-2 mt-2">Page {{ currentPage }} of {{ totalPages }}</span>
          <UiButton
            :disabled="currentPage === totalPages"
            @click="goToNextPage"
          >
            Next
          </UiButton>
        </div>
      </div>
      <div class="h-32 rounded-lg bg-gray-200 md:col-span-2">
        Comments
      </div>
    </div>
  </article>
</template>
