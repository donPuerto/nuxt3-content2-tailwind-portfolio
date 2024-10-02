<script setup lang="ts">
// Add these lines

const route = useRoute();
const slug = route.params.slug as string;

// Query all authors
const { data: allAuthors } = await useAsyncData('authors', () => queryContent('authors').find());

// Find the matching author
const author = computed(() => {
  return allAuthors.value?.find(a => a._path === `/authors/${slug}` || a._file === `authors/${slug}.md`) || null;
});

// Add error handling
if (!author.value) {
  throw createError({ statusCode: 404, message: 'Author not found' });
}

// Safely access author properties
const authorName = computed(() => author.value?.name || 'Unknown Author');
const authorBio = computed(() => author.value?.bio || 'No bio available');
const authorOccupation = computed(() => author.value?.occupation || 'Occupation not specified');
const authorCompany = computed(() => author.value?.company || 'Company not specified');
const authorLocation = computed(() => author.value?.location || 'Location not specified');
const authorAvatar = computed(() => author.value?.avatar || '/default-avatar.png');

// Compute the current page URL safely
const currentPageUrl = computed(() => {
  if (import.meta.client) {
    return `${window.location.origin}${route.path}`;
  }
  return ''; // Return an empty string or a default URL for server-side rendering
});

// State for fullscreen toggle
const isFullScreen = ref(false);

// Function to toggle fullscreen state
const toggleFullScreen = () => {
  isFullScreen.value = !isFullScreen.value;
};
</script>

<template>
  <div>
    <div v-if="author" class="bg-background min-h-screen py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto bg-card shadow-xl rounded-lg overflow-hidden border border-border">
        <div class="md:flex md:h-[250px]">
          <div class="md:w-1/3 md:flex-shrink-0">
            <img 
              :src="authorAvatar" 
              :alt="authorName"
              class="h-full w-full object-cover cursor-pointer"
              @click="toggleFullScreen"
            />
          </div>
          <div class="p-4 md:p-6 md:w-2/3 flex flex-col justify-between"> <!-- Reduced padding -->
            <div>
              <div class="uppercase tracking-wide text-xs md:text-sm text-primary font-semibold">{{ authorOccupation }}</div>
              <h1 class="mt-1 text-lg sm:text-xl md:text-2xl leading-6 md:leading-7 font-bold md:font-extrabold tracking-tight text-foreground">{{ authorName }}</h1>
              <p class="mt-1 text-sm md:text-base text-muted-foreground">{{ authorCompany }} | {{ authorLocation }}</p>
              <p class="mt-1 text-sm md:text-base text-foreground">{{ authorBio }}</p> <!-- Reduced text size -->
            </div>
            
            <div class="mt-2 flex space-x-4">
              <BlogShareLinks
                size="sm"
                class="flex-shrink-0"
                :url="currentPageUrl"
                :title="authorName"
              />
            </div>
          </div>
        </div>
        <div class="px-6 py-2 md:px-8 md:py-4 bg-muted/50">
          <h2 class="text-lg sm:text-xl md:text-2xl font-bold text-foreground">Skills</h2>
          <div class="mt-3 md:mt-4 flex flex-wrap">
            <span 
              v-for="skill in author.skills" 
              :key="skill" 
              class="inline-block bg-muted/80 text-muted-foreground rounded-full px-2 py-1 text-xs sm:text-sm font-semibold mr-2 mb-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-300 ease-in-out transform hover:scale-105"
            >
              {{ skill }}
            </span>
          </div>
        </div>
        <div v-if="author.body" class="px-6 py-4 md:px-8 md:py-6 prose max-w-none leading-snug custom-prose content-renderer">
          <ContentRenderer :value="author" />
        </div>
      </div>
    </div>

    <!-- Full screen image overlay with blur effect -->
    <div 
      v-if="isFullScreen" 
      class="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-md z-50 flex items-center justify-center p-4" 
      @click="toggleFullScreen"
    >
      <img 
        :src="authorAvatar" 
        :alt="authorName"
        class="max-h-full max-w-full object-contain rounded-lg"
        @click.stop
      />
    </div>
  </div>
</template>

<style scoped>
.content-renderer {
  font-size: 1rem;
  line-height: 1.2;
}

@media (max-width: 768px) {
  .content-renderer {
    font-size: 0.875rem;
  }
}

.content-renderer :deep(li) {
  color: hsl(var(--muted-foreground));
}

.content-renderer :deep(li::marker) {
  color: hsl(var(--foreground));
}

/* Add these new styles */
.content-renderer :deep(h2) {
  margin-top: 1.5rem;  /* Reduce top margin of h2 */
  margin-bottom: 1rem; /* Adjust bottom margin as needed */
}

.content-renderer :deep(h2:first-child) {
  margin-top: 0;  /* Remove top margin for the first h2 */
}

/* Add these new styles */
.fixed {
  position: fixed;
}

.inset-0 {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.z-50 {
  z-index: 50;
}

.max-h-full {
  max-height: 100%;
}

.max-w-full {
  max-width: 100%;
}

.object-contain {
  object-fit: contain;
}

.backdrop-blur-md {
  backdrop-filter: blur(8px);
}

/* Add this new style */
.rounded-lg {
  border-radius: 0.5rem;
}

/* Add these new styles */
.select-none {
  user-select: none;
  -webkit-user-select: none;
}

*,
*::before,
*::after {
  cursor: default !important;
}
</style>
