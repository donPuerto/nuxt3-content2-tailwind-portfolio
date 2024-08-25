<script setup lang="ts">
// * Importing the Post type for type safety
import type { Post } from '~/types/components/blog/post'

// * Defining Props interface for type-checking the component's props
interface Props {
  post: Post
}

// * Defining the props for this component
const props = defineProps<Props>()

// * Importing composables for handling relative time and authors
const { getRelativeTime } = useRelativeTime()
const { getAuthors } = useAuthors()

// * Computed property to get the list of authors for the post
const allAuthors = computed(() => getAuthors(props.post.authors))
</script>

<template>
  <!-- Start: Root Container -->
  <div>
    <!-- Start: Card Layout -->
    <div class="flex flex-col md:flex-row lg:flex-col h-full shadow-xl rounded-xl overflow-hidden">
      <!-- Start: Image Section -->
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
      <!-- End: Image Section -->

      <!-- Start: Content Section -->
      <div class="px-2 py:3 md:py-0 md:px-4 lg:py-2 md:w-2/3 lg:w-full flex flex-col justify-between">
        <div>
          <!-- Start: Headline -->
          <h2
            v-if="post.headline"
            class="text-xs font-medium text-primary mt-2 sm:mt-2"
          >
            {{ post.headline }}
          </h2>
          <!-- End: Headline -->

          <!-- Start: Title -->
          <h3 class="text-base font-medium lg:text-base">
            {{ post.title }}
          </h3>
          <!-- End: Title -->

          <!-- Start: Tags -->
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
          <!-- End: Tags -->

          <!-- Start: Description -->
          <p class="mb-3 leading-relaxed text-sm lg:text-sm">
            {{ post.description }}
          </p>
          <!-- End: Description -->
        </div>

        <!-- Start: Author Section -->
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 sm:mb-0">
          <BlogAuthorList
            :authors="allAuthors"
          />

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
        <!-- End: Author Section -->
      </div>
      <!-- End: Content Section -->
    </div>
    <!-- End: Card Layout -->
  </div>
  <!-- End: Root Container -->
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
