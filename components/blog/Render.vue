<script setup lang="ts">
// Import necessary Vue composables and types
import { ref, onMounted, onUnmounted, computed } from 'vue'
import type { Post } from '~/types/components/blog/post'

// Extract quickLinks and projectLinks from app config
const { app: { quickLinks } } = useAppConfig()
// Define interface for table of contents items
interface TOCItem {
  id: string
  text: string | null
  level: number
  isActive: boolean
}

// Define props
const props = defineProps<{
  post: Post
}>()

// Use custom composables
const { formatDate } = useDate()
const { getAuthors } = useAuthors()

// Compute all authors
const allAuthors = computed(() => {
  const authors = getAuthors(props.post.authors)
  return authors.filter(author => author !== undefined)
})

// Initialize reactive variables
const tableOfContents = ref<TOCItem[]>([])
const activeId = ref<string | null>(null)
const headerSection = ref(null)
const mainContentWrapper = ref(null)
const isFullscreen = ref(false)
const isScrolled = ref(false)
const isLargeScreen = ref(false)

// Compute title and dates
const title = computed(() => props.post.title)
const publishedDate = computed(() => formatDate(props.post.published_at))
const updatedDate = computed(() => props.post.updated_at ? formatDate(props.post.updated_at) : null)

// Compute image URL
const imageUrl = computed(() => {
  if (typeof props.post.image === 'string') {
    return props.post.image
  }
  else if (typeof props.post.image === 'object' && props.post.image !== null) {
    return props.post.image.url
  }
  return null
})

// Function to open fullscreen
const openFullscreen = () => {
  isFullscreen.value = true
}

// Function to close fullscreen
const closeFullscreen = () => {
  isFullscreen.value = false
}

const checkScreenSize = () => {
  isLargeScreen.value = window.innerWidth >= 1024 // Adjust this value based on your lg breakpoint
}

// Function to generate a unique ID for each header
const generateId = (text: string): string => {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '')
}

// Function to extract headers from the content
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
      headers.push({ id, text, level, isActive: false })
    })
  }
  return headers
}

// Function to update active header
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
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)

  // New IntersectionObserver for isScrolled functionality
  const scrollObserver = new IntersectionObserver(
    ([entry]) => {
      isScrolled.value = !entry.isIntersecting
    },
    {
      root: null,
      rootMargin: '0px 0px -100% 0px',
      threshold: 0,
    },
  )

  if (mainContentWrapper.value) {
    scrollObserver.observe(mainContentWrapper.value)
  }

  // Handle scroll event for updating active header
  window.addEventListener('scroll', updateActiveHeader)

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
    window.removeEventListener('scroll', updateActiveHeader)
    window.removeEventListener('resize', checkScreenSize)
    if (mainContentWrapper.value) {
      scrollObserver.unobserve(mainContentWrapper.value)
    }
  })
})
</script>

<template>
  <article class="font-sans text-sm">
    <!-- Start: Header Section -->
    <div
      ref="headerSection"
      class="container mx-auto p-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 2xl:px-[10rem]"
    >
      <!-- Start: Breadcrumb -->
      <nav class="text-xs font-medium mb-4">
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
      <div class="flex flex-col sm:flex-row justify-between text-xs text-muted-foreground mb-4">
        <span>Published: {{ publishedDate }}</span>
        <span v-if="updatedDate">Updated: {{ updatedDate }}</span>
      </div>
      <!-- End: Date Section -->

      <!-- Start: Blog Title -->
      <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
        {{ title }}
      </h1>
      <!-- End: Blog Title -->

      <!-- Start: Blog Description -->
      <p class="text-sm text-foreground mb-4">
        {{ post.description }}
      </p>
      <!-- End: Blog Description -->

      <!-- Start: Tags -->
      <div
        v-if="post.tags && post.tags.length > 0"
        class="flex flex-wrap gap-2 mb-6"
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
      <NuxtImg
        v-if="imageUrl"
        :src="imageUrl"
        :alt="props.post.title"
        width="800"
        height="384"
        class="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-xl mb-6 cursor-pointer transition-all duration-300 ease-in-out filter grayscale hover:filter-none"
        @click="openFullscreen"
      />
      <div
        v-else
        class="w-full h-48 sm:h-64 md:h-80 lg:h-96 bg-secondary rounded-xl mb-6 flex items-center justify-center text-muted-foreground"
      >
        No image available
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
      <div class="grid grid-cols-12 gap-4 lg:gap-8">
        <!-- Start: Sticky Share Links -->
        <Transition
          enter-active-class="transition-opacity duration-300 ease-out"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition-opacity duration-300 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div
            v-show="!isScrolled || !isLargeScreen"
            class="col-span-2 sm:col-span-1 hidden sm:block"
          >
            <div
              class="sticky"
              style="top: 20px;"
            >
              <BlogShareLinks direction="column" />
            </div>
          </div>
        </Transition>
        <!-- End: Sticky Share Links -->

        <!-- Start: Main Content -->
        <Transition
          enter-active-class="transition-opacity duration-300 ease-out"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition-opacity duration-300 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div
            v-show="true"
            :class="[
              'col-span-12 sm:col-span-10 md:col-span-11',
              isScrolled && isLargeScreen ? 'lg:col-span-8' : 'lg:col-span-7',
            ]"
          >
            <div class="bg-secondary w-full px-4 sm:px-8 py-6 rounded-xl shadow-xl">
              <div class="blog-content text-sm leading-relaxed">
                <ClientOnly>
                  <ContentRenderer :value="post">
                    <template #empty>
                      <p>No content found.</p>
                    </template>
                  </ContentRenderer>
                </ClientOnly>
              </div>
            </div>
          </div>
        </Transition>
        <!-- End: Main Content -->

        <!-- Start: Right Sidebar -->
        <Transition
          enter-active-class="transition-opacity duration-300 ease-out"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition-opacity duration-300 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <aside
            v-if="isLargeScreen"
            class="col-span-12 lg:col-span-4 mt-8 lg:mt-0 text-sm"
          >
            <div class="sticky top-8 space-y-6">
              <!-- Start: Table of Contents -->
              <div
                v-if="tableOfContents.length > 0"
                class="bg-secondary py-6 px-6 rounded-xl"
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
              <div class="bg-secondary p-6 rounded-xl">
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
              <div class="bg-secondary p-6 rounded-xl">
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
        </Transition>
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

.blog-content :deep(h1) {
  @apply text-xl sm:text-2xl font-bold mb-4 mt-6;
}

.blog-content :deep(h2) {
  @apply text-lg sm:text-xl font-semibold mb-3 mt-5;
}

.blog-content :deep(h3) {
  @apply text-base sm:text-lg font-medium mb-2 mt-4;
}

.blog-content :deep(h4) {
  @apply text-sm sm:text-base font-medium mb-2 mt-3;
}

.blog-content :deep(h5) {
  @apply text-xs sm:text-sm font-medium mb-2 mt-3;
}

.blog-content :deep(h6) {
  @apply text-xs font-medium mb-2 mt-3;
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
</style>
