<!-- eslint-disable no-console -->
<script setup lang="ts">
definePageMeta({
  layout: 'blog',
})

// Define the type for a post
interface Post {
  _path: string
  slug: string
  title: string
  published_on: string
}

// Fetch all blog posts
const { pending, data: posts } = await useLazyAsyncData<Post[]>('all-posts', () =>
  queryContent<Post>('/blog').sort({ published_on: -1 }).find(),
)

// State to store sort order
const sortOrder = ref<'asc' | 'desc'>('asc')

// Function to toggle sort order
const toggleSortOrder = () => {
  sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
}

// Function to get the correct link for each post
const getPostLink = (post: Post) => {
  return `/blog/${post.slug}`
}

// Categorize the posts by their folder
const categorizedPosts = computed((): Record<string, Post[]> => {
  if (!posts.value) return {} as Record<string, Post[]>

  return posts.value.reduce((acc: Record<string, Post[]>, post: Post) => {
    if (!post._path) return acc // Ensure _path is defined
    const parts = post._path.split('/')
    if (parts.length > 2) {
      const category = parts[2] // Extract category from path
      if (!acc[category]) acc[category] = []
      acc[category].push(post)
    }
    return acc
  }, {} as Record<string, Post[]>)
})

// Computed property to get sorted categories
const sortedCategories = computed(() => {
  const categories = Object.keys(categorizedPosts.value)
  const sorted = categories.sort((a, b) => {
    if (sortOrder.value === 'asc') {
      return a.localeCompare(b)
    }
    else {
      return b.localeCompare(a)
    }
  })
  const sortedPosts: Record<string, Post[]> = {}
  for (const category of sorted) {
    sortedPosts[category] = categorizedPosts.value[category]
  }
  return sortedPosts
})
</script>

<template>
  <article>
    <h1 class="mb-4 text-3xl font-bold text-left">
      Blog Posts
    </h1>
    <p class="mb-6 text-zinc-700 dark:text-zinc-300">
      Writing as a tool for thinking.
    </p>
    <section class="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <template v-if="pending">
        <div>Skeleton</div>
      </template>
      <template v-else>
        <button @click="toggleSortOrder">
          Sort Categories: {{ sortOrder === 'asc' ? 'Ascending' : 'Descending' }}
        </button>
        <div
          v-for="(posts, category) in sortedCategories"
          :key="category"
        >
          <h2>{{ category }}</h2>
          <ul>
            <li
              v-for="post in posts"
              :key="post._path"
            >
              <nuxt-link :to="getPostLink(post)">
                {{ post.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </template>
    </section>
  </article>
</template>
