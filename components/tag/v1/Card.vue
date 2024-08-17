<script setup lang="ts">
import type { Post } from '~/types/components/blog/post'

interface Props {
  post: Post
}

const props = defineProps<Props>()

// composables
const { getRelativeTime } = useRelativeTime()
const { getAuthors } = useAuthors()

// data
const showAllAuthors = ref(false)

// Computed
const allAuthors = computed(() => getAuthors(props.post.authors))
</script>

<template>
  <div class="md:col-span-1 lg:col-span-1">
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
      <div class="px-3 md:w-2/3 lg:w-full flex flex-col justify-between">
        <div>
          <!-- headline -->
          <h2
            v-if="post.headline"
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
          <div
            v-if="post.published_at"
            class="flex items-center"
          >
            <span class="mr-2 mb-1">
              <Icon
                name="🕒"
                size="18px"
              />
            </span>
            <span class="text-sm font-thin">{{ getRelativeTime(post.published_at).toLowerCase() }}</span>
          </div>
          <!-- End: Date -->
        </div>
        <!-- End: Author -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
