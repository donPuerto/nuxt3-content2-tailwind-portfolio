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
  <div class="flex flex-col items-center mt-8">
    <h1 class="text-2xl font-bold mb-4">
      Tagged: "{{ route.params.tag }}"
    </h1>

    <div class="mb-4 w-full max-w-md">
      <UiInput
        v-model="search"
        type="text"
        placeholder="Search..."
      />
    </div>

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
              class="p-4 md:w-2/3 lg:w-full flex flex-col justify-between"
            >
              <div>
                <p
                  v-if="
                    post.headline"
                  class="mb-2 text-sm font-semibold text-primary"
                >
                  {{ post.headline }}
                </p>
                <p class="mb-2 text-xl font-semibold lg:text-2xl">
                  {{ post.title }}
                </p>
                <p class="mb-2 text-sm  lg:text-2xl">
                  {{ post.description }}
                </p>
              </div>

              <div class="flex items-center mt-auto">
                <div v-if="allAuthors.length > 0">
                  <div
                    v-for="(author, index) in allAuthors"
                    :key="index"
                  >
                    <UiAvatar
                      v-if="author.avatar"
                      :src="author.avatar"
                      :alt="author.name"
                      class="w-8 h-8 rounded-full mr-2 bg-background shadow ring-1 ring-ring/30"
                    />
                    <div>
                      <p
                        v-if="author.name"
                        class="text-sm font-semibold"
                      >
                        {{ author.name }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          v-if="filteredPosts.length === 0 && !pending"
          class="bg-white rounded-lg shadow-md overflow-hidden flex items-center justify-center p-8"
        >
          <p class="text-gray-600 text-center">
            No posts found with the tag "{{ route.params.tag }}".
          </p>
        </div>
      </div>
    </div>

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
</template>
