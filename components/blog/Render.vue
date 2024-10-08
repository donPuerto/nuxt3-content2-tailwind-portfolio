<script setup lang="ts">
// Import necessary Vue composables and types
import { useIntersectionObserver } from '@vueuse/core';
import type { Post, TOCItem } from '~/types/components/blog/post';
import { QUICK_LINKS } from '~/utils/constants';

// Extract quickLinks from app config
const route = useRoute();
const config = useRuntimeConfig();

// Define props
const props = defineProps<{
  post: Post
  status: 'idle' | 'pending' | 'success' | 'error'
  error: Error | null
  refresh: () => Promise<void>
}>();

// Use custom composables
const { formatDate } = useDate();
const { getAuthors } = useAuthors();

// Compute
const allAuthors = computed(() => {
  const authors = getAuthors(props.post.authors);
  return authors.filter(author => author !== undefined);
});
const title = computed(() => props.post.title);
const publishedDate = computed(() => formatDate(props.post.published_at));
const updatedDate = computed(() => props.post.updated_at ? formatDate(props.post.updated_at) : null);
const imageUrl = computed(() => props.post.media.content.image?.url || null);

// Define refs
const tableOfContents = ref<TOCItem[]>([]);
const activeId = ref<string | null>(null);
const isFullscreen = ref(false);
const imageLoaded = ref(false);
const isScrolled = ref(false);
const mainContentWrapper = ref<HTMLElement | null>(null);
const imageError = ref(false);
const showComments = ref(false);
const disqusContainer = ref(null);
const isVideoPlaying = ref(false);

// Handle fullscreen
const openFullscreen = () => {
  isFullscreen.value = true;
};
// Close fullscreen
const closeFullscreen = () => {
  isFullscreen.value = false;
};

// Handle image load
const onImageLoad = () => {
  imageLoaded.value = true;
};

// Handle image error
const handleImageError = () => {
  imageError.value = true;
};

// Generate ID
const generateId = (text: string): string => {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
};

// Extract headers
const extractHeaders = (): TOCItem[] => {
  const headers: TOCItem[] = [];
  const article = document.querySelector('.blog-content');
  if (article) {
    const headerElements = article.querySelectorAll('h2, h3, h4, h5, h6');
    headerElements.forEach((header) => {
      const level = parseInt(header.tagName.charAt(1));
      const text = header.textContent || '';
      const id = generateId(text);
      header.id = id; // Set the ID on the header element
      headers.push({ id, text, level, isActive: false });
    });
  }
  return headers;
};

// Update active header
const updateActiveHeader = () => {
  const headers = document.querySelectorAll('.blog-content h2, .blog-content h3, .blog-content h4, .blog-content h5, .blog-content h6');
  const scrollPosition = window.scrollY;

  for (let i = headers.length - 1; i >= 0; i--) {
    const header = headers[i] as HTMLElement;
    if (header.offsetTop <= scrollPosition + 100) {
      activeId.value = header.id;
      break;
    }
  }
};

// Disqus configuration
const disqusConfig = computed(() => ({
  url: `${config.public.siteUrl}${route.path}`,
  identifier: props.post.slug || route.path,
  title: props.post.title,
}));

// Lifecycle hooks
onMounted(() => {
  // Handle comments section
  useIntersectionObserver(disqusContainer, ([{ isIntersecting }]) => {
    if (isIntersecting) {
      showComments.value = true;
    }
  });

  // Handle scroll
  const handleScroll = () => {
    if (mainContentWrapper.value) {
      isScrolled.value = window.scrollY > mainContentWrapper.value.offsetTop;
    }
    updateActiveHeader(); // Add this line to update active header on scroll
  };

  // Handle scroll
  window.addEventListener('scroll', handleScroll);

  // Update table of contents
  const updateTOC = () => {
    nextTick(() => {
      tableOfContents.value = extractHeaders();
      updateActiveHeader();
    });
  };

  // Initial TOC generation
  updateTOC();

  // Observe changes in blog content
  const observer = new MutationObserver(updateTOC);
  const blogContent = document.querySelector('.blog-content');
  if (blogContent) {
    observer.observe(blogContent, { childList: true, subtree: true });
  }

  // Cleanup
  onUnmounted(() => {
    observer.disconnect();
    window.removeEventListener('scroll', handleScroll);
  });

  window.addEventListener('message', handleVideoStateChange);
});

onUnmounted(() => {
  window.removeEventListener('message', handleVideoStateChange);
});

const mediaType = computed(() => props.post.media.type);
const mediaError = ref(false);

const videoUrl = computed(() => {
  if (mediaType.value === 'video' && props.post.media.content.video) {
    const videoId = props.post.media.content.video.url.split('v=')[1];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
  }
  return '';
});

onMounted(() => {
  // Check if media content is available
  if (!props.post.media || !props.post.media.content || !props.post.media.content.video) {
    mediaError.value = true;
  }
});

const handleVideoStateChange = (event: MessageEvent) => {
  if (event.data === 1) { // YouTube iframe API: 1 means "playing"
    isVideoPlaying.value = true;
  } else if (event.data === 2 || event.data === 0) { // 2: "paused", 0: "ended"
    isVideoPlaying.value = false;
  }
};
</script>

<template>
  <article class="font-sans text-sm">
    <!-- Start: Header Section -->
    <div class="container mx-auto px-5 sm:px-6 lg:px-8 py-8">
      <!-- Start: Breadcrumb -->
      <nav class="text-sm sm:text-base font-medium flex items-center space-x-1">
        <NuxtLink
          to="/blog"
          class="hover:text-ring flex items-center space-x-1"
        >
          <Icon
            name="ph:newspaper-duotone"
            class="w-5 h-5 sm:w-6 sm:h-6"
          />
          <span>Blog</span>
        </NuxtLink>
        <span class="mx-1">&gt;</span>
        <span class="text-primary hover:text-ring">{{ props.post.title }}</span>
      </nav>
      <!-- End: Breadcrumb -->

      <!-- Start: Blog Title -->
      <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mt-12 mb-2">
        {{ title }}
      </h1>
      <!-- End: Blog Title -->

      <!-- Start: Blog Description -->
      <p class="text-sm text-foreground my-2">
        {{ post.description }}
      </p>
      <!-- End: Blog Description -->

      <!-- Start: Tags -->
      <div
        v-if="post.tags && post.tags.length > 0"
        class="flex flex-wrap gap-2 my-2"
      >
        <NuxtLink
          v-for="tag in post.tags"
          :key="tag"
          :to="`/blog/tag/${encodeURIComponent(tag)}`"
          class="inline-block bg-secondary text-secondary-foreground rounded-full px-2 py-1 text-xs sm:text-sm font-semibold mr-1 mb-1 hover:bg-primary hover:text-primary-foreground transition-colors duration-300 ease-in-out transform hover:scale-105"
        >
          #{{ tag }}
        </NuxtLink>
      </div>
      <!-- End: Tags -->

      <!-- Start: Date Section -->
      <div class="flex flex-col sm:flex-row justify-between text-sm text-muted-foreground mt-8 mb-2">
        <span>Published at {{ publishedDate }}</span>
        <span v-if="updatedDate">Updated at {{ updatedDate }}</span>
      </div>
      <!-- End: Date Section -->

      <!-- Start: Media Section (Image or YouTube Video) -->
      <div class="relative w-full rounded-lg overflow-hidden">
        <!-- Fullscreen Image View -->
        <Transition name="fade">
          <div
            v-if="isFullscreen && imageUrl"
            class="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-md"
            @click="closeFullscreen"
          >
            <img
              :src="imageUrl"
              :alt="props.post.media.content.image.alt || props.post.title"
              class="max-w-[95%] max-h-[95%] object-contain rounded-lg"
            />
          </div>
        </Transition>

        <!-- Main Media Display -->
        <div class="relative w-full rounded-lg overflow-hidden">
          <div class="aspect-w-45 aspect-h-16"> <!-- 1440:512 aspect ratio -->
            <template v-if="mediaType === 'image' && imageUrl">
              <img
                :src="imageUrl"
                :alt="props.post.media.content.image.alt || props.post.title"
                class="w-full h-full object-cover cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
                @click="openFullscreen"
                @load="onImageLoad"
                @error="handleImageError"
              />
            </template>
            <template v-else-if="mediaType === 'video'">
              <iframe
                v-if="videoUrl"
                :src="videoUrl"
                :title="post.media.content.video.title"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                class="w-full h-full"
              />
              <div v-else class="flex justify-center items-center w-full h-full bg-secondary text-secondary-foreground text-xs sm:text-sm md:text-base">
                No video available
              </div>
            </template>
            <div v-else class="flex justify-center items-center w-full h-full bg-secondary text-secondary-foreground text-xs sm:text-sm md:text-base">
              Media content is not available
            </div>
          </div>
        </div>
      </div>
      <!-- End: Start: Media Section (Image or YouTube Video) -->

      <!-- Start: Author and Share Section -->
      <div class="flex justify-between items-center mt-4">
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

    <ClientOnly>
      <UiGradientDivider />
    </ClientOnly>

    <!-- Start: Main Content Wrapper -->
    <div
      ref="mainContentWrapper"
      class="container mx-auto px-5 sm:px-6 lg:px-8 py-8"
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
              class="blog-content text-sm"
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
              <h2 class="text-lg font-semibold mb-4">
                Table of Contents
              </h2>
              <ul class="space-y-2">
                <li
                  v-for="header in tableOfContents"
                  :key="header.id"
                >
                  <a
                    :href="`#${header.id}`"
                    class="toc-link block text-sm text-primary transition-all duration-300 ease-in-out"
                    :class="{
                      'active': header.id === activeId,
                      'font-medium': header.level === 2,
                      'pl-2': header.level === 3,
                      'pl-4': header.level === 4,
                      'pl-6': header.level > 4,
                    }"
                    @click="activeId = header.id"
                  >
                    {{ header.text }}
                  </a>
                </li>
              </ul>
            </div>
            <!-- End: Table of Contents -->

            <!-- Start: Quick Links -->
            <div class="bg-secondary p-6 rounded-xl shadow-sm">
              <h2 class="text-lg font-semibold mb-4">
                Quick Links
              </h2>
              <ul class="space-y-2">
                <li
                  v-for="link in QUICK_LINKS"
                  :key="link.url"
                >
                  <a
                    :href="link.url"
                    target="_blank"
                    class="flex items-center text-sm text-primary hover:text-ring transition-colors duration-200"
                  >
                    <Icon
                      :name="link.icon"
                      class="mr-2"
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
        
      <!-- End: Main Content Wrapper -->
      </div>

      <!-- Start: Divider -->
      <ClientOnly>
        <UiGradientDivider class="my-16" />
      </ClientOnly>
      <!-- End: Divider -->

      <!-- Start: Disquss section -->
      <div ref="disqusContainer">
        <DisqusComments
          v-if="showComments"
          :identifier="disqusConfig.identifier"
          :url="disqusConfig.url"
          :title="disqusConfig.title"
          class="mt-16 mb-12"
        />
      </div>
      <!-- End: Disquss section -->
     
    </div>
  </article>
</template>
<style scoped lang="postcss">
.blog-content :deep(h1) {
  @apply text-lg sm:text-xl md:text-2xl font-bold mb-4;
}

.blog-content :deep(h2) {
  @apply text-base sm:text-lg md:text-xl font-semibold mt-7 mb-4;
}

.blog-content :deep(h3) {
  @apply text-sm sm:text-base md:text-lg font-semibold mt-6 mb-3;
}

.blog-content :deep(h4) {
  @apply text-xs sm:text-sm md:text-base font-medium mt-5 mb-3;
}

.blog-content :deep(h5) {
  @apply text-xs sm:text-xs md:text-sm font-medium mt-4 mb-2;
}

.blog-content :deep(h6) {
  @apply text-xs sm:text-xs md:text-sm font-medium mt-3 mb-2;
}

.blog-content :deep(p) {
  @apply text-xs sm:text-sm md:text-base mb-4;
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

.grayscale {
  filter: grayscale(100%);
}

.transition-all {
  transition: all 0.3s ease;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.zoom-enter-active, .zoom-leave-active {
  transition: transform 0.5s;
}
.zoom-enter, .zoom-leave-to /* .zoom-leave-active in <2.1.8 */ {
  transform: scale(0.9);
}

.group:hover .group-hover\:scale-105 {
  transform: scale(1.05);
}

.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.image-container img {
  max-width: 100%;
  height: auto;
}

.media-fallback {
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
  color: #666;
}

.no-video-message {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background-color: #f0f0f0;
  color: #666;
  font-style: italic;
}

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  .aspect-w-45 {
    position: relative;
    padding-bottom: calc(16 / 45 * 100%);
  }
  .aspect-w-45 > * {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
</style>
