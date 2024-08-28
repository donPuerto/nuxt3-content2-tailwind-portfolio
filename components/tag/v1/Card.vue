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
const { getAuthors } = useAuthors()
const { formatDate } = useDate()

// * Computed property to get the list of authors for the post
const allAuthors = computed(() => {
  const authors = getAuthors(props.post.authors)
  return authors.filter(author => author !== undefined)
})

// * Computed properties for formatted dates
const publishedDate = computed(() => formatDate(props.post.published_at))
const updatedDate = computed(() => props.post.updated_at ? formatDate(props.post.updated_at) : null)
</script>

<template>
  <!-- Start: Root Container -->
  <div>
    <!-- Start: Card Layout -->
    <div class="flex flex-col md:flex-row lg:flex-col h-full shadow-lg rounded-lg overflow-hidden bg-card border border-border">
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
          class="h-[240px] w-full object-cover md:h-full lg:h-[240px]"
        >
      </NuxtLink>
      <!-- End: Image Section -->

      <!-- Start: Content Section -->
      <div class="flex flex-col justify-between p-4 md:w-2/3 lg:w-full">
        <!-- Start: Date Section -->
        <div class="flex flex-col sm:flex-row justify-between text-xs text-muted-foreground mb-2">
          <span>Published: {{ publishedDate }}</span>
          <span v-if="updatedDate">Updated: {{ updatedDate }}</span>
        </div>
        <!-- End: Date Section -->

        <div>
          <!-- Start: Headline -->
          <h2
            v-if="post.headline"
            class="text-xs font-medium text-primary"
          >
            {{ post.headline }}
          </h2>
          <!-- End: Headline -->

          <!-- Start: Title -->
          <h3 class="text-sm font-semibold text-card-foreground mb-1 leading-snug">
            {{ post.title }}
          </h3>
          <!-- End: Title -->

          <!-- Start: Tags -->
          <div
            v-if="post.tags && post.tags.length > 0"
            class="flex flex-wrap gap-1.5 mb-3"
          >
            <NuxtLink
              v-for="tag in post.tags"
              :key="tag"
              :to="`/blog/tag/${encodeURIComponent(tag)}`"
              class="px-1.5 py-0.5 text-[10px] font-medium bg-secondary text-secondary-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
            >
              #{{ tag }}
            </NuxtLink>
          </div>
          <!-- End: Tags -->

          <!-- Start: Description -->
          <p class="text-sm text-card-foreground line-clamp-3 mb-3">
            {{ post.description }}
          </p>
          <!-- End: Description -->
        </div>

        <!-- Start: Author and Share Section -->
        <div class="flex justify-between items-center mt-auto">
          <BlogAuthorList
            :authors="allAuthors"
            size="sm"
            class="flex-shrink-0"
          />
          <BlogShareLinks
            size="md"
            class="flex-shrink-0"
          />
        </div>
        <!-- End: Author and Share Section -->
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

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
