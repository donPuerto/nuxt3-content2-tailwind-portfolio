<script setup lang="ts">
// Import necessary Vue composables and types
import { ref, onMounted, computed } from 'vue'
import type { Post, TOCItem } from '~/types/components/blog/post'

// Extract quickLinks from app config
const { app: { quickLinks } } = useAppConfig()

// Define props
const props = defineProps<{
  post: Post
  status: 'idle' | 'pending' | 'success' | 'error'
  error: Error | null
  refresh: () => Promise<void>
}>()

// Use custom composables
const { formatDate } = useDate()
const { getAuthors } = useAuthors()

// Compute values
const allAuthors = computed(() => {
  const authors = getAuthors(props.post.authors)
  return authors.filter(author => author !== undefined)
})
const title = computed(() => props.post.title)
const publishedDate = computed(() => formatDate(props.post.published_at))
const updatedDate = computed(() => props.post.updated_at ? formatDate(props.post.updated_at) : null)
const imageUrl = computed(() => {
  if (typeof props.post.image === 'string') {
    return props.post.image
  }
  else if (typeof props.post.image === 'object' && props.post.image !== null) {
    return props.post.image.url
  }
  return null
})

// Initialize reactive variables
const tableOfContents = ref<TOCItem[]>([])
const activeId = ref<string | null>(null)
const isFullscreen = ref(false)
const imageLoaded = ref(false)
const isScrolled = ref(false)
const mainContentWrapper = ref<HTMLElement | null>(null)

// Functions
const openFullscreen = () => {
  isFullscreen.value = true
}

const closeFullscreen = () => {
  isFullscreen.value = false
}

const onImageLoad = () => {
  imageLoaded.value = true
}

const generateId = (text: string): string => {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '')
}

const extractHeaders = (): TOCItem[] => {
  const headers: TOCItem[] = []
  const article = document.querySelector('.blog-content')
  if (article) {
    const headerElements = article.querySelectorAll('h2, h3, h4, h5, h6')
    headerElements.forEach((header) => {
      const level = parseInt(header.tagName.charAt(1))
      const text = header.textContent || ''
      const id = generateId(text)
      header.id = id // Set the ID on the header element

      // Add margin classes based on header level
      const marginClasses = getMarginClasses(level)
      header.classList.add(...marginClasses)

      headers.push({ id, text, level, isActive: false })
    })
  }
  return headers
}

const getMarginClasses = (level: number): string[] => {
  switch (level) {
    case 2: return ['mt-8']
    case 3: return ['mt-6', 'ml-4']
    case 4: return ['mt-4', 'ml-8']
    case 5: return ['mt-3', 'ml-12']
    case 6: return ['mt-2', 'ml-16']
    default: return []
  }
}

const updateActiveHeader = () => {
  const headers = document.querySelectorAll('.blog-content h2, .blog-content h3, .blog-content h4, .blog-content h5, .blog-content h6')
  const scrollPosition = window.scrollY

  for (let i = headers.length - 1; i >= 0; i--) {
    const header = headers[i] as HTMLElement
    if (header.offsetTop <= scrollPosition + 100) {
      activeId.value = header.id
      break
    }
  }
}

// Lifecycle hooks
onMounted(() => {
  const handleScroll = () => {
    if (mainContentWrapper.value) {
      isScrolled.value = window.scrollY > mainContentWrapper.value.offsetTop
    }
  }

  window.addEventListener('scroll', handleScroll)

  // Update table of contents
  const updateTOC = () => {
    nextTick(() => {
      tableOfContents.value = extractHeaders()
      updateActiveHeader()
    })
  }

  // Initial TOC generation
  updateTOC()

  // Observe changes in blog content
  const observer = new MutationObserver(updateTOC)
  const blogContent = document.querySelector('.blog-content')
  if (blogContent) {
    observer.observe(blogContent, { childList: true, subtree: true })
  }

  // Cleanup
  onUnmounted(() => {
    observer.disconnect()
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>

<template>
  <article class="font-sans text-sm">
    <!-- Start: Header Section -->
    <div class="container mx-auto p-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 2xl:px-[10rem]">
      <!-- Start: Breadcrumb -->
      <nav class="text-xs font-medium">
        <NuxtLink
          to="/blog"
          class="hover:text-ring"
        >
          <Icon
            name="ph:newspaper-duotone"
            class="flex-shrink-0 w-6 h-6"
          />
          Blog
        </NuxtLink>
        <span class="mx-1">&gt;</span>
        <span class="text-primary hover:text-ring">{{ props.post.title }}</span>
      </nav>
      <!-- End: Breadcrumb -->

      <!-- Start: Date Section -->
      <div class="flex flex-col sm:flex-row justify-between text-xs text-muted-foreground my-4">
        <span>Published: {{ publishedDate }}</span>
        <span v-if="updatedDate">Updated: {{ updatedDate }}</span>
      </div>
      <!-- End: Date Section -->

      <!-- Start: Blog Title -->
      <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
        {{ title }}
      </h1>
      <!-- End: Blog Title -->

      <!-- Start: Blog Description -->
      <p class="text-sm text-foreground my-1">
        {{ post.description }}
      </p>
      <!-- End: Blog Description -->

      <!-- Start: Tags -->
      <div
        v-if="post.tags && post.tags.length > 0"
        class="flex flex-wrap gap-2"
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

      <!-- Start: Image with error handling -->
      <div class="relative my-4">
        <Transition name="fade">
          <div
            v-if="isFullscreen"
            class="fixed inset-0 z-40 flex items-center justify-center"
            @click="closeFullscreen"
          >
            <div
              class="absolute inset-0 bg-black bg-opacity-75 backdrop-filter backdrop-blur-md"
            />
            <img
              v-if="imageUrl"
              :src="imageUrl"
              :alt="props.post.title"
              class="relative z-50 max-w-[95%] max-h-[95%] object-contain rounded-lg"
            >
          </div>
        </Transition>

        <NuxtImg
          v-if="imageUrl"
          :src="imageUrl"
          :alt="props.post.title"
          width="1200"
          height="400"
          :class="[
            'w-full object-cover mb-6 cursor-zoom-in transition-all duration-300 ease-in-out filter grayscale hover:filter-none',
            'h-48 sm:h-64 md:h-80 lg:h-96',
            { 'opacity-0': !imageLoaded },
            'rounded-lg',
          ]"
          @click="openFullscreen"
          @load="onImageLoad"
        />
        <div
          v-if="!imageLoaded && imageUrl"
          class="absolute inset-0 bg-secondary flex items-center justify-center text-muted-foreground rounded-lg"
        >
          <div class="text-center">
            Loading image...
          </div>
        </div>
        <div
          v-if="!imageUrl"
          class="w-full h-48 sm:h-64 md:h-80 lg:h-96 bg-secondary mb-6 flex items-center justify-center text-muted-foreground rounded-lg"
        >
          No image available
        </div>
      </div>
      <!-- End: Image with error handling -->

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
    <!-- End: Header Section -->

    <!-- Start: Main Content Wrapper -->
    <div
      ref="mainContentWrapper"
      class="container mx-auto p-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 2xl:px-[10rem]"
    >
      <div class="grid grid-cols-12 gap-2 lg:gap-4">
        <!-- Start: Left Sidebar (Share Links) -->
        <aside
          class="col-span-1 hidden sm:block transition-opacity duration-300"
          :class="{ 'opacity-0': !isScrolled, 'opacity-100': isScrolled }"
        >
          <div class="sticky top-8">
            <BlogShareLinks direction="column" />
          </div>
        </aside>
        <!-- End: Left Sidebar -->

        <!-- Start: Main Content -->
        <div class="col-span-12 sm:col-span-11 lg:col-span-7">
          <div class="bg-secondary w-full px-4 sm:px-8 py-6 rounded-xl shadow-md">
            <div
              v-if="status === 'pending'"
              class="loading-spinner"
            >
              Loading...
            </div>
            <div
              v-else-if="error"
              class="error-message"
            >
              An error occurred while loading the content: {{ error.message }}
              <button @click="refresh">
                Retry
              </button>
            </div>
            <div
              v-else-if="post"
              class="blog-content text-sm leading-relaxed"
            >
              <ContentRenderer
                :value="post"
              >
                <template #empty>
                  <p>No content found.</p>
                </template>
              </ContentRenderer>
            </div>
            <div v-else>
              Post not found
            </div>
          </div>
        </div>
        <!-- End: Main Content -->

        <!-- Start: Right Sidebar -->
        <aside class="col-span-12 lg:col-span-4 mt-4 lg:mt-0 text-sm right-sidebar">
          <div class="sticky top-8 space-y-4">
            <!-- Start: Table of Contents -->
            <div
              v-if="tableOfContents.length > 0"
              class="bg-secondary py-6 px-6 rounded-xl shadow-sm"
            >
              <h2 class="text-base font-semibold mb-4">
                Table of Contents
              </h2>
              <ul class="space-y-2">
                <li
                  v-for="header in tableOfContents"
                  :key="header.id"
                >
                  <a
                    :href="`#${header.id}`"
                    class="toc-link block text-xs text-primary transition-all duration-300 ease-in-out"
                    :class="{
                      'active': header.id === activeId,
                      'font-medium': header.level === 2,
                      'pl-2': header.level === 3,
                      'pl-4': header.level === 4,
                      'pl-6': header.level > 4,
                    }"
                  >
                    {{ header.text }}
                  </a>
                </li>
              </ul>
            </div>
            <!-- End: Table of Contents -->

            <!-- Start: Quick Links -->
            <div class="bg-secondary p-6 rounded-xl shadow-sm">
              <h2 class="text-base font-semibold mb-4">
                Quick Links
              </h2>
              <ul class="space-y-2">
                <li
                  v-for="link in quickLinks"
                  :key="link.url"
                >
                  <a
                    :href="link.url"
                    target="_blank"
                    class="flex items-center text-xs text-primary hover:text-ring transition-colors duration-200"
                  >
                    <Icon
                      :name="link.icon"
                      class="mr-2"
                      size="16px"
                    />
                    <span>{{ link.text }}</span>
                  </a>
                </li>
              </ul>
            </div>
            <!-- End: Quick Links -->

            <!-- Start: Ad Space -->
            <div class="bg-secondary p-6 rounded-xl shadow-sm">
              <h2 class="text-base font-semibold mb-4">
                Advertisement
              </h2>
              <!-- Replace this with your actual ad component or code -->
              <div class="bg-gray-200 h-40 flex items-center justify-center text-xs text-gray-500">
                Ad Space
              </div>
            </div>
            <!-- End: Ad Space -->
          </div>
        </aside>
        <!-- End: Right Sidebar -->
      </div>
    </div>
    <!-- End: Main Content Wrapper -->
  </article>
</template>

<style scoped>
.blog-content :deep(pre) {
  @apply font-mono text-xs;
}

.blog-content :deep(h2) {
  @apply text-2xl font-semibold mt-8 mb-4;
}

.blog-content :deep(h3) {
  @apply text-xl font-semibold mt-6 mb-3;
}

.blog-content :deep(h4) {
  @apply text-lg font-medium mt-4 mb-2;
}

.blog-content :deep(h5) {
  @apply text-base font-medium mt-3 mb-2;
}

.blog-content :deep(h6) {
  @apply text-sm font-medium mt-2 mb-2;
}

.blog-content :deep(p) {
  @apply mb-4;
}

.toc-link {
  transition: all 0.1s ease-in-out;
}

.toc-link:hover {
  color: var(--color-ring);
}

.toc-link.active {
  color: var(--color-ring);
  font-weight: bold;
  transform: scale(1.05);
}

.blog-content pre {
  @apply p-4 rounded-lg overflow-x-auto text-xs my-4;
}

.blog-content code {
  @apply font-mono text-xs;
}

.blog-content .line {
  @apply block;
}

.blog-content .highlighted {
  @apply bg-primary bg-opacity-10;
}

.right-sidebar {
  display: none;
}

@media (min-width: 1024px) {
  .right-sidebar {
    display: block;
  }
}

@media (max-width: 639px) {
  .col-span-1 {
    display: none;
  }
}
</style>
