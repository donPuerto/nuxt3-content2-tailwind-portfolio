<script setup lang="ts">
// composables
const { getRelativeTime } = useRelativeTime()
const { getAuthors } = useAuthors()
const route = useRoute()

// data
const currentPage = ref(1)
const postsPerPage = 10
const showAllAuthors = ref(false)
const search = ref('')

const { posts, allPosts, pending, totalPages } = useTagPosts(
  route.params.tag as string,
  currentPage,
  postsPerPage,
  search,
)

// Computed
const allAuthors = computed(() => {
  if (!allPosts.value) return []
  return allPosts.value.flatMap(post => getAuthors(post.authors))
})

const noResults = computed(() => posts.value.length === 0 && search.value !== '')

// Reset page when search changes
watch(search, () => {
  currentPage.value = 1
})
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
      <div class="mb-12 w-full max-w-md">
        <UiInput
          v-model="search"
          type="text"
          placeholder="Search for other tags..."
          @keydown.stop
        />
      </div>

      <!-- Start: Card Grid (4 columns) -->
      <div class="container w-full">
        <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4">
          <template v-if="posts.length > 0">
            <div
              v-for="post in posts"
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
                    <p class="mb-3 leading-relaxed text-sm lg:text-sm">
                      {{ post.description }}
                    </p>
                  </div>

                  <!-- Start: Author -->
                  <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 sm:mb-0">
                    <div
                      v-if="allAuthors.length > 0"
                      class="relative flex overflow-hidden"
                      @mouseenter="showAllAuthors = true"
                      @mouseleave="showAllAuthors = false"
                    >
                      <TransitionGroup
                        name="author-list"
                        tag="div"
                        class="flex -space-x-4"
                      >
                        <div
                          v-for="(author, index) in showAllAuthors ? allAuthors : allAuthors.slice(0, 3)"
                          :key="author.slug || index"
                          class="flex justify-end"
                        >
                          <div
                            class="flex justify-end"
                          >
                            <UiAvatar
                              v-if="author.avatar"
                              :src="author.avatar"
                              :alt="author.name"
                              class="
                              border-2
                              border-white
                              dark:border-gray-800
                              hover:border-primary
                              dark:hover:border-primary
                              rounded-full
                              h-8 w-8 -mr-2
                              last:mr-0
                              transition-colors
                              duration-200
                              ease-in-out"
                            />

                            <div
                              v-else
                              class="
                              border-2
                              border-white
                              dark:border-gray-800
                              rounded-full
                              h-8 w-8
                              -mr-2
                              last:mr-0
                              bg-primary
                              flex
                              items-center
                              justify-center
                              text-white
                              text-sm
                              font-semibold"
                            >
                              {{ author.name.charAt(0) }}
                            </div>
                          </div>
                        </div>
                      </TransitionGroup>

                      <Transition name="fade">
                        <span
                          v-if="allAuthors.length > 3 && !showAllAuthors"
                          class="
                          absolute
                          right-0
                          flex
                          items-center
                          justify-center
                          bg-white
                          dark:bg-gray-800
                          text-sm
                          text-gray-800
                          dark:text-white
                          font-semibold
                          border-2
                          border-gray-200
                          dark:border-gray-700
                          hover:border-primary
                          dark:hover:border-primary
                          rounded-full
                          h-8 w-8 transition-colors
                          duration-200
                          ease-in-out
                          z-20
                          cursor-pointer"
                        >
                          +{{ allAuthors.length - 3 }}
                        </span>
                      </Transition>
                    </div>

                    <!-- Start: Date -->
                    <div v-if="posts">
                      <div
                        v-for="post in posts"
                        :key="post.slug"
                      >
                        <!-- Other post details -->
                        <div
                          v-if="post.published_at"
                          class="flex items-center mt-2"
                        >
                          <span class="mr-2">
                            <Icon
                              name="🕒"
                              size="16px"
                            />
                          </span>

                          <span class="text-sm font-thin">{{ getRelativeTime(post.published_at).toLowerCase() }}</span>
                        </div>
                      </div>
                    </div>
                  <!-- End: Date -->
                  </div>
                <!-- End: Author -->
                </div>
              </div>
            </div>
          </template>
          <template v-else-if="search && !pending">
            <!-- "Tag not found" card -->
            <div class="md:col-span-1 lg:col-span-4">
              <div class="flex flex-col md:flex-row lg:flex-col shadow-xl rounded-xl overflow-hidden h-full">
                <div class="px-3 w-full flex flex-col justify-center items-center py-8">
                  <Icon
                    name="🔍"
                    size="48px"
                    class="mb-4"
                  />
                  <h3 class="text-base font-medium lg:text-base mb-2">
                    No tags found
                  </h3>
                  <p class="mb-3 leading-relaxed text-sm lg:text-sm text-center">
                    No posts with the tag "{{ search }}" were found.
                  </p>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
      <!-- End: Card Grid (4 columns) -->

      <!-- Start: Pagination -->
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
      <!-- End: Pagination -->
    </div>
  </div>
</template>

<style scoped>
.author-list-move,
.author-list-enter-active,
.author-list-leave-active {
  transition: all 0.3s ease;
}

.author-list-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}

.author-list-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

.author-list-leave-active {
  position: absolute;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
