<script lang="ts" setup>
import type { Author } from '../../types/components/blog/post'
import type { Post } from '~/types/components/blog/post'

const { app: { quickLinks } } = useAppConfig()

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

const tableOfContents = ref<TOCItem[]>([])
const activeId = ref<string | null>(null)

const title = computed(() => props.post.title)

const formattedDate = computed(() => {
  if (props.post.published_on) {
    return new Date(props.post.published_on).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC',
    })
  }
  return ''
})

// Ensure authors is always an array of Author objects
const authors = computed((): Author[] => {
  if (Array.isArray(props.post.authors)) {
    return props.post.authors
  }
  else if (typeof props.post.authors === 'string') {
    // Fallback for old format where authors was just a string
    return [{
      name: props.post.authors,
      avatar: '', // You might want to provide a default avatar
      slug: props.post.authors.toLowerCase().replace(/\s+/g, '-'),
    }]
  }
  else if (props.post.authors && typeof props.post.authors === 'object') {
    // Single author object
    return [props.post.authors]
  }
  return []
})

onMounted(() => {
  const article = document.querySelector('.blog-content')
  if (article) {
    const headers = article.querySelectorAll('h2, h3, h4, h5, h6')
    tableOfContents.value = Array.from(headers).map(header => ({
      id: header.id,
      text: header.textContent,
      level: parseInt(header.tagName.charAt(1)),
      isActive: false,
    }))

    // Set up Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeId.value = entry.target.id
          }
        })
      },
      { rootMargin: '-5% 0px -95% 0px' },
    )

    headers.forEach(header => observer.observe(header))
  }
})

// Update active state of TOC items when activeId changes
watch(activeId, (newActiveId) => {
  tableOfContents.value = tableOfContents.value.map(item => ({
    ...item,
    isActive: item.id === newActiveId,
  }))
})
</script>

<template>
  <template>
    <article>
      <!-- Header Section -->
      <div class="w-full mt-4">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <!-- Breadcrumb -->
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

          <!-- Posted Date -->
          <p class="text-foreground/80 mt-8 mb-2 text-sm">
            {{ formattedDate }}
          </p>

          <!-- Blog Title -->
          <h1 class="text-4xl font-black text-foreground mb-3">
            {{ title }}
          </h1>

          <!-- Blog Description -->
          <p class="text-lg text-foreground mb-4">
            {{ post.description }}
          </p>

          <!-- Authors Info -->
          <div class="flex flex-wrap items-center mb-4">
            <div
              v-for="(author, index) in authors"
              :key="index"
              class="flex items-center mr-6 mb-2"
            >
              <img
                :src="author.avatar"
                :alt="author.name"
                class="w-12 h-12 rounded-full mr-1"
              >
              <div class="flex flex-col">
                <NuxtLink
                  :to="`/author/${author.slug}`"
                  class="font-normal text-sm text-secondary-foreground/80 hover:text-ring"
                >
                  {{ author.name }}
                </NuxtLink>
                <span class="font-normal text-sm text-primary">{{ author.slug }}</span>
              </div>
            </div>
          </div>

          <!-- Horizontal line -->
          <hr class="border-t border-secondary mt-2 mb-6">
        </div>
      </div>

      <!-- Content and TOC Section -->
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Content and TOC -->
        <div class="flex flex-col lg:flex-row">
          <!-- Main content -->
          <div class="w-full md:w-full lg:w-3/4 pr-0 lg:pr-8">
            <div class="bg-secondary w-full px-12 py-6 rounded-xl shadow-xl">
              <div class="blog-content">
                <ContentRenderer :value="post">
                  <template #empty>
                    <p>No content found.</p>
                  </template>
                </ContentRenderer>
              </div>
            </div>
          </div>

          <!-- Table of Contents (right side) -->
          <aside class="w-full lg:w-1/4 lg:mt-0 block md:hidden lg:block">
            <div class="sticky top-8 space-y-6">
              <!-- Table of Contents -->
              <div
                v-if="tableOfContents.length > 0"
                class="bg-secondary p-6 rounded-xl "
              >
                <h2 class="text-sm font-bold mb-4">
                  Table of Contents
                </h2>
                <ul class="space-y-1">
                  <li
                    v-for="header in tableOfContents"
                    :key="header.id"
                    class="leading-[1.3rem]"
                    :class="{ 'ml-1': header.level === 3, 'ml-8': header.level > 3 }"
                  >
                    <a
                      :href="`#${header.id}`"
                      class="text-sm text-primary hover:text-ring transition-colors duration-200"
                      :class="{ 'font-bold text-ring': header.isActive }"
                    >
                      {{ header.text }}
                    </a>
                  </li>
                </ul>
              </div>

              <!-- Quick Links -->
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
                      class="flex items-center text-primary  hover:text-ring transition-colors duration-200"
                    >
                      <Icon
                        :name="link.icon"
                        class="mr-2"
                        size="20px"
                      />
                      <span class="text-sm">

                        {{ link.text }}
                      </span>
                    </a>
                  </li>
                </ul>
              </div>

              <!-- Ad Space -->
              <div class="bg-secondary p-4 rounded-xl">
                <h2 class="text-sm font-bold mb-4">
                  Advertisement
                </h2>
                <!-- Replace this with your actual ad component or code -->
                <div class="bg-gray-200 h-40 flex items-center justify-center text-gray-500">
                  Ad Space
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  </template>
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

/* Responsive adjustments */
/* @media (max-width: 640px) {
  .blog-content :deep(pre) {
    margin-left: -1rem;
    margin-right: -1rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
} */
</style>
