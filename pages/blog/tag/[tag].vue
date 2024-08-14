<script setup lang="ts">
import type { Author } from '../../../types/components/blog/post'
import type { Post } from '~/types/components/blog/post'

const route = useRoute()
const currentPage = ref(1)
const postsPerPage = 10

// Fetch all blog posts with the given tag
const { data: posts, pending } = await useAsyncData<Post[]>(`fetch-blog-posts-by-tag-${route.params.tag}`, () =>
  queryContent<Post>()
    .where({ tags: { $contains: route.params.tag as string } })
    .skip((currentPage.value - 1) * postsPerPage)
    .limit(postsPerPage)
    .find(),
)

const totalPosts = await queryContent<Post>()
  .where({ tags: { $contains: route.params.tag as string } })
  .count()

const totalPages = Math.ceil(totalPosts / postsPerPage)

// Authors
const processAuthors = (authorsData: Post['authors']): Author[] => {
  if (typeof authorsData === 'string') {
    return [{ name: authorsData, avatar: '', slug: '' }]
  }
  else if (Array.isArray(authorsData)) {
    return authorsData
  }
  else if (typeof authorsData === 'object') {
    return [authorsData]
  }
  return []
}

const allAuthors = computed(() => {
  if (!posts.value) return []
  return posts.value.flatMap(post => processAuthors(post.authors))
})

const search = ref('')

const filteredPosts = computed(() =>
  posts.value?.filter(post =>
    post.title.toLowerCase().includes(search.value.toLowerCase())
    || (post.description && post.description.toLowerCase().includes(search.value.toLowerCase())),
  ) || [],
)
</script>

<template>
  <div>
    <!-- Tag Page -->
    <div class="flex flex-col items-center mt-8">
      <!-- Heading -->
      <h1 class="text-2xl font-bold mb-4">
        Tagged: "{{ route.params.tag }}"
      </h1>

      <!-- Search -->
      <div class="mb-4 w-full max-w-md">
        <UiInput
          v-model="search"
          type="text"
          placeholder="Search..."
        />
      </div>

      <!-- Card Grid (4 columns) -->
      <div class="container w-full">
        <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4">
          <div
            v-for="post in filteredPosts"
            :key="post.slug"
            class="md:col-span-1 lg:col-span-1"
          >
            <!-- Card Layout  -->
            <div class="flex flex-col md:flex-row lg:flex-col shadow-xl rounded-xl overflow-hidden h-full">
              <!-- Image -->
              <NuxtLink
                :to="`/blog/${post.slug}`"
                class="md:w-1/3 lg:w-full"
              >
                <img
                  v-if="post.image"
                  :src="post.image.url"
                  :width="post.image.width"
                  :height="post.image.height"
                  :alt="post.image.alt"
                  class="h-[240px] w-full object-cover md:h-[200px] lg:h-[240px]"
                >
              </NuxtLink>

              <!-- Content -->
              <div
                class="px-3 md:w-2/3 lg:w-full flex flex-col justify-between"
              >
                <div>
                  <!-- headline -->
                  <h2
                    v-if="
                      post.headline"
                    class="text-xs font-medium text-primary mt-2 sm:mt-2"
                  >
                    {{ post.headline }}
                  </h2>

                  <!-- Title -->
                  <h3 class="text-base font-medium lg:text-base">
                    {{ post.title }}
                  </h3>

                  <!-- Tags -->
                  <div
                    v-if="post.tags && post.tags.length > 0"
                    class="flex flex-wrap gap-2 mb-4 text-xs"
                  >
                    <NuxtLink
                      v-for="tag in post.tags"
                      :key="tag"
                      :to="`/blog/tag/${encodeURIComponent(tag)}`"
                      class="px-2 py-1 text-xs font-medium bg-secondary text-primary rounded-full hover:bg-primary hover:text-secondary transition-colors duration-200"
                    >
                      #{{ tag }}
                    </NuxtLink>
                  </div>

                  <!-- Description -->
                  <p class="mb-4 leading-relaxed text-sm lg:text-sm">
                    {{ post.description }}
                  </p>
                </div>

                <!-- Author Avatar -->
                <div class="md:flex md:justify-between md:items-center mb-4">
                  <div
                    v-if="allAuthors.length > 0"
                    class="flex -space-x-4 overflow-hidden"
                  >
                    <template
                      v-for="(author, index) in allAuthors.slice(0, 6)"
                      :key="index"
                    >
                      <div
                        class="flex justify-end"
                      >
                        <UiAvatar
                          v-if="author.avatar"
                          :src="author.avatar"
                          :alt="author.name"
                          class="border-2 border-white dark:border-gray-800 hover:border-primary dark:hover:border-primary rounded-full h-10 w-10 -mr-2 last:mr-0 transition-colors duration-200 ease-in-out"
                        />

                        <div
                          class="border-2 border-white dark:border-gray-800 rounded-full h-10 w-10 -mr-2 last:mr-0 bg-primary flex items-center justify-center text-white text-sm font-semibold"
                        >
                          {{ author.name.charAt(0) }}
                        </div>
                        <span
                          v-if="allAuthors.length > 6"
                          class="flex items-center justify-center bg-white dark:bg-gray-800 text-sm text-gray-800 dark:text-white font-semibold border-2 border-gray-200 dark:border-gray-700 rounded-full h-10 w-10"
                        >
                          +{{ allAuthors.length - 6 }}
                        </span>
                      </div>
                    </template>

                    <div
                      v-if="filteredPosts.length === 0 && !pending"
                      class="bg-white rounded-lg shadow-md overflow-hidden flex items-center justify-center p-8"
                    >
                      <p class="text-gray-600 text-center">
                        No posts found with the tag "{{ route.params.tag }}".
                      </p>
                    </div>
                  </div>

                  <!-- Pagination -->
                  <div class="mt-4">
                    <button
                      v-for="page in totalPages"
                      :key="page"
                      :class="[
                        'px-4 py-2 mx-1 rounded-md focus:outline-none',
                        currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300',
                      ]"
                      @click="currentPage = page"
                    >
                      {{ page }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.avatar-wrapper {
  transition: transform 0.2s ease-in-out, z-index 0.2s ease-in-out;
}
</style>
