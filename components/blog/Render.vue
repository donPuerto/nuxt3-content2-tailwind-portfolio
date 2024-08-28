<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import type { Post } from '~/types/components/blog/post'

const { app: { quickLinks, projectLinks } } = useAppConfig()

// Define an interface for table of contents items
interface TOCItem {
  id: string
  text: string | null
  level: number
  isActive: boolean
}

const props = defineProps<{
  post: Post
}>()

const { formatDate } = useDate()
const { getAuthors } = useAuthors()
const allAuthors = computed(() => {
  const authors = getAuthors(props.post.authors)
  return authors.filter(author => author !== undefined)
})

const tableOfContents = ref<TOCItem[]>([])
const activeId = ref<string | null>(null)

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
      headers.push({ id, text, level })
    })
  }
  return headers
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

const title = computed(() => props.post.title)

// * Computed properties for formatted dates
const publishedDate = computed(() => formatDate(props.post.published_at))
const updatedDate = computed(() => props.post.updated_at ? formatDate(props.post.updated_at) : null)

const showIcons = ref(false)
const headerSection = ref(null)
const mainContentWrapper = ref(null)

const isFullscreen = ref(false)

const openFullscreen = () => {
  isFullscreen.value = true
}

const imageUrl = computed(() => {
  if (typeof props.post.image === 'string') {
    return props.post.image
  }
  else if (typeof props.post.image === 'object' && props.post.image !== null) {
    // Assuming the object has a 'url' property. Adjust if it's named differently.
    return props.post.image.url
  }
  return null
})

const closeFullscreen = () => {
  isFullscreen.value = false
}

onMounted(() => {
  const handleScroll = () => {
    if (headerSection.value && mainContentWrapper.value) {
      const headerRect = headerSection.value.getBoundingClientRect()
      const mainContentRect = mainContentWrapper.value.getBoundingClientRect()
      showIcons.value = window.scrollY > headerRect.bottom && mainContentRect.top <= 0
    }
    updateActiveHeader()
  }

  window.addEventListener('scroll', handleScroll)

  const updateTOC = () => {
    nextTick(() => {
      tableOfContents.value = extractHeaders()
      updateActiveHeader()
    })
  }

  // Initial TOC generation
  updateTOC()

  const observer = new MutationObserver(updateTOC)
  const blogContent = document.querySelector('.blog-content')
  if (blogContent) {
    observer.observe(blogContent, { childList: true, subtree: true })
  }

  onUnmounted(() => {
    observer.disconnect()
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>

<template>
  <article class="relative">
    <!-- Header Section -->
    <div
      ref="headerSection"
      class="mt-4 container mx-auto p-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 2xl:px-[10rem]"
    >
      <!-- Start: Breadcrumb -->
      <nav class="font-medium mb-4">
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
      <h1 class="text-2xl sm:text-3xl font-black text-foreground">
        {{ title }}
      </h1>
      <!-- End: Blog Title -->

      <!-- Start:Blog Description -->
      <p class="text-foreground ">
        {{ post.description }}
      </p>
      <!-- End: Blog Description -->

      <!-- Start: Tags -->
      <div
        v-if="post.tags && post.tags.length > 0"
        class="flex flex-wrap gap-2 mb-4"
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
      <!-- Fullscreen Image Modal -->
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div
          v-if="isFullscreen"
          class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4 sm:p-8"
          @click="closeFullscreen"
        >
          <div class="relative w-full h-full max-w-6xl max-h-[90vh]">
            <NuxtImg
              :src="imageUrl"
              :alt="props.post.title"
              class="w-full h-full object-contain"
            />
          </div>
        </div>
      </Transition>
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

      <!-- Horizontal line -->
      <hr class="border-t border-secondary mt-2 mb-6">
    </div>
    <!-- End: Header Section -->

    <!-- Start: Main Content Wrapper -->
    <div
      ref="mainContentWrapper"
      class="container mx-auto p-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 2xl:px-[10rem]"
    >
      <div class="flex flex-col lg:flex-row lg:space-x-8">
        <!-- Start: Main Content -->
        <div class="flex-1 lg:w-2/3">
          <div class="bg-secondary w-full px-4 sm:px-8 py-6 rounded-xl shadow-xl">
            <div class="blog-content">
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
        <!-- End: Main Content -->

        <!-- Start: Right Sidebar -->
        <aside class="w-full lg:w-1/3 mt-8 lg:mt-0">
          <div class="sticky top-8 space-y-6">
            <!-- Start: Table of Contents -->
            <div
              v-if="tableOfContents.length > 0"
              class="bg-secondary py-6 px-4 rounded-xl"
            >
              <h2 class="text-sm font-bold mb-4">
                Table of Contents
              </h2>
              <ul>
                <li
                  v-for="header in tableOfContents"
                  :key="header.id"
                >
                  <a
                    :href="`#${header.id}`"
                    class="toc-link block py-1 text-sm text-primary transition-all duration-300 ease-in-out"
                    :class="{
                      'active': header.id === activeId,
                      'font-bold': header.level === 1,
                      'ml-2': header.level === 2,
                      'ml-4': header.level === 3,
                      'ml-6': header.level === 4,
                      'ml-8': header.level > 4,
                    }"
                  >
                    {{ header.text }}
                  </a>
                </li>
              </ul>
            </div>
            <!-- End: Table of Contents -->

            <!-- Start: Quick Links -->
            <div class="bg-secondary p-4 rounded-xl">
              <h2 class="text-sm font-bold mb-4">
                Quick Links
              </h2>
              <ul class="space-y-1">
                <li
                  v-for="link in quickLinks"
                  :key="link.url"
                >
                  <a
                    :href="link.url"
                    target="_blank"
                    class="flex items-center text-primary hover:text-ring transition-colors duration-200"
                  >
                    <Icon
                      :name="link.icon"
                      class="mr-2"
                      size="20px"
                    />
                    <span class="text-sm">{{ link.text }}</span>
                  </a>
                </li>
              </ul>
            </div>
            <!-- End: Quick Links -->

            <!-- Start: Ad Space -->
            <div class="bg-secondary p-4 rounded-xl">
              <h2 class="text-sm font-bold mb-4">
                Advertisement
              </h2>
              <!-- Replace this with your actual ad component or code -->
              <div class="bg-gray-200 h-40 flex items-center justify-center text-gray-500">
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

    <!-- Start: Floating Icons -->
    <div
      :class="[
        'fixed left-4 sm:left-8 md:left-16 lg:left-24 xl:left-40 2xl:left-[10rem] transition-all duration-300 ease-in-out w-12 z-50',
        showIcons ? 'opacity-100' : 'opacity-0 pointer-events-none',
      ]"
    >
      <div class="sticky top-8 flex flex-col items-center space-y-2">
        <a
          v-for="icon in projectLinks"
          :key="icon.name"
          :href="icon.url"
          target="_blank"
          class="text-gray-600 hover:text-gray-800 transition-colors"
        >
          <Icon
            :name="icon.name"
            :size="icon.size"
          />
        </a>
      </div>
    </div>
    <!-- End: Floating Icons -->
  </article>
</template>

<style scoped>
.blog-content{
  font-family: "Inter var","Liberation Mono", "Courier New", monospace;
  line-height: 1.3333;
}
.blog-content :deep(pre) {
  margin: 0em -.5rem;
  padding: 1em 2rem;
  background-color: hsl(var(--background));
  border-style: solid;
  border-width: 1px;
  border-color: hsl(var(--border, 200 200 200));
  border-radius: 0.5rem;
  overflow-x: auto;

}

.blog-content :deep(code) {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 0.875em;

}

.blog-content :deep(pre code) {
  display: block;
  padding: 0;
  background-color: transparent;

}

.blog-content :deep(h1) {
  font-color: hsl(var(--text-primary));
  font-size: 3rem; /* text-5xl */
  font-weight: 700; /* font-bold */
  margin-left: -0.5rem; /* -mx-2 */
  margin-right: -0.5rem; /* -mx-2 */
  margin-top: 1rem; /* my-4 */
  margin-bottom: 1rem; /* my-4 */
  letter-spacing: -0.025em;
}

.blog-content :deep(h2) {
  font-size: 2.25rem; /* text-4xl */
  font-weight: 700; /* font-bold */
  margin-left: -0.5rem; /* -mx-2 */
  margin-right: -0.5rem; /* -mx-2 */
  margin-top: 2rem; /* my-8 */
  letter-spacing: -0.025em;
}

.blog-content :deep(h3) {
  font-size: 1.875rem; /* text-3xl */
  font-weight: 600; /* font-bold */
  margin-bottom: 1rem;
  margin-left: -0.5rem; /* -mx-2 */
  margin-right: -0.5rem; /* -mx-2 */
  letter-spacing: -0.05em;
  border: 1px solid blue;
}

.blog-content :deep(h4) {
  font-color: hsl(var(--text-primary));
  font-size: 1.2rem;
  /* font-weight: 500; */
  margin-top: 0.5rem;
  letter-spacing: -0.025em;
  border: 1px solid red;
  text-shadow: none;
  -webkit-text-stroke: 0;
  font-variation-settings: normal;
}

.blog-content :deep(h5) {
  font-size: 1.25rem; /* text-xl */
}

.blog-content :deep(h6) {
  font-size: 1.125rem; /* text-lg */
}

/* Assuming blog-content-heading includes these properties: */
.blog-content :deep(h1),
.blog-content :deep(h2),
.blog-content :deep(h3),
.blog-content :deep(h4),
.blog-content :deep(h5),
.blog-content :deep(h6) {
  /* Add properties from blog-content-heading here */
  /* For example: */
  line-height: 1;
  color: hsl(var(--foreground));
}

.blog-content :deep(p) {
  margin-bottom: 1.0rem;
}

.blog-content :deep(h3 + h3) {
  margin-top: 6.5rem !important;
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
