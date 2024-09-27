<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Post } from '~/types';

const { getAuthor } = useAuthor();

const { data: posts } = await useAsyncData<Post[]>('all-posts', () =>
  queryContent<Post>('blog')
    .where({ is_publish: true })
    .sort({ published_at: -1 })
    .find(),
);

// Ensure posts is reactive and has a default value
const safePosts = computed(() => posts.value || []);

// Search functionality
const searchQuery = ref('');

const filteredPosts = computed(() => {
  if (!searchQuery.value) return safePosts.value;
  const lowercaseQuery = searchQuery.value.toLowerCase();
  return safePosts.value.filter((post) => {
    const titleMatch = post.title.toLowerCase().includes(lowercaseQuery);
    const descriptionMatch = post.description?.toLowerCase().includes(lowercaseQuery) || false;
    const tagMatch = post.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery)) || false;
    const author = getAuthor(post.authors);
    const authorMatch = author ? author.name.toLowerCase().includes(lowercaseQuery) : false;

    return titleMatch || descriptionMatch || tagMatch || authorMatch;
  });
});

// Get the latest post for the featured article
const featuredPost = computed(() => filteredPosts.value[0]);

// Get the author for the featured post
const featuredAuthor = computed(() => featuredPost.value ? getAuthor(featuredPost.value.authors) : null);

// Get the next 4 posts for the smaller cards
const smallerPosts = computed(() => filteredPosts.value.slice(1, 5));
</script>

<template>
  <article class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col items-center my-12">
      <div class="relative w-full max-w-md">
        <UiInput
          v-model="searchQuery"
          type="text"
          placeholder="Search posts..."
          class="w-full rounded-md border border-input bg-background pl-10 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary glow-effect"
        />
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon name="uil:search" class="h-5 w-5 text-gray-400" />
        </div>
      </div>
     
    </div>

    <div
      v-if="filteredPosts.length > 0"
      class="grid grid-cols-1 lg:grid-cols-4 gap-4"
    >
      <!-- Main content column -->
      <div class="lg:col-span-3 space-y-4">
        <!-- Featured Article -->
        <NuxtLink
          :to="featuredPost._path"
          class="block shadow-lg rounded-lg overflow-hidden transition-shadow hover:shadow-xl hover:border-primary hover:border-2"
        >
          <div class="flex flex-col sm:flex-row">
            <div class="w-full sm:w-1/3 lg:w-2/5 h-auto sm:h-56 relative">
              <!-- Thumbnail background -->
              <div class="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm" />
              
              <!-- Image display -->
              <img
                v-if="featuredPost.media.type === 'image'"
                :src="featuredPost.media.content.image.url"
                :alt="featuredPost.media.content.image.alt"
                class="w-full h-full object-cover relative z-10"
              />
              <!-- Video thumbnail display -->
              <div
                v-else-if="featuredPost.media.type === 'video'"
                class="w-full h-full flex items-center justify-center relative z-10"
              >
                <img
                  :src="featuredPost.media.content.video.thumbnail.url"
                  :alt="featuredPost.media.content.video.thumbnail.alt"
                  class="w-full h-full object-cover"
                />
                <div class="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Icon name="uil:play-circle" class="text-6xl text-white" />
                </div>
              </div>
              <!-- Fallback if no media -->
              <div
                v-else
                class="w-full h-full flex items-center justify-center relative z-10 bg-primary/10"
              >
                <span class="text-primary-foreground">No media available</span>
              </div>
            </div>
            <div class="w-full sm:w-2/3 lg:w-3/5 p-4 flex flex-col">
              <h2 class="text-sm sm:text-base md:text-lg font-bold line-clamp-2 text-justify">
                {{ featuredPost.title }}
              </h2>
              <p class="text-xs text-gray-500 mt-1 text-justify">
                Published at {{ new Date(featuredPost.published_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }}
              </p>
              <p
                v-if="featuredPost.description"
                class="text-sm text-gray-600 mb-2 line-clamp-3 my-2 text-justify"
              >
                {{ featuredPost.description }}
              </p>
              
              <div class="flex flex-wrap justify-between items-center mt-auto gap-2">
                <BlogAuthor
                  v-if="featuredAuthor"
                  :author="featuredAuthor"
                  size="sm"
                  class="flex-shrink-0 mt-2 sm:mt-0"
                />
                <span class="text-xs text-gray-500 text-justify">
                  Updated at {{ new Date(featuredPost.updated_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }} | {{ featuredPost.reading_time }}
                </span>
              </div>
              
            </div>
          </div>

        </NuxtLink>
        <!-- Featured Article -->

        <!-- Smaller Articles -->
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <NuxtLink
            v-for="post in smallerPosts"
            :key="post._path"
            :to="post._path"
            class="block shadow-lg rounded-lg overflow-hidden transition-shadow hover:shadow-xl hover:border-primary hover:border-2"
          >
            <div class="flex flex-col sm:flex-row lg:flex-col">
              <div class="w-full sm:w-1/3 lg:w-full h-32 sm:h-40 lg:h-32 relative">
                <!-- Thumbnail background -->
                <div class="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm" />
                
                <!-- Image display -->
                <img
                  v-if="post.media.type === 'image'"
                  :src="post.media.content.image.url"
                  :alt="post.media.content.image.alt"
                  class="w-full h-full object-cover relative z-10"
                />
                <!-- Video thumbnail display -->
                <div
                  v-else-if="post.media.type === 'video'"
                  class="w-full h-full relative z-10"
                >
                  <img
                    :src="post.media.content.video.thumbnail.url"
                    :alt="post.media.content.video.thumbnail.alt"
                    class="w-full h-full object-cover"
                  />
                  <div class="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <Icon name="uil:play-circle" class="text-4xl text-white" />
                  </div>
                </div>
                <!-- Fallback if no media -->
                <div
                  v-else
                  class="w-full h-full flex items-center justify-center relative z-10 bg-primary/10"
                >
                  <span class="text-primary-foreground text-sm">No media</span>
                </div>
              </div>
              <div class="w-full sm:w-2/3 lg:w-full p-3">
                <h3 class="text-sm sm:text-base md:text-lg font-bold line-clamp-2 text-justify">
                  {{ post.title }}
                </h3>
                <p class="text-xs text-gray-500 mt-1 text-justify">
                  Published at {{ new Date(post.published_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }}
                </p>
                <p
                  v-if="post.description"
                  class="text-sm text-gray-600 mb-1 line-clamp-2 my-2 text-justify"
                >
                  {{ post.description }}
                </p>
                <div class="flex flex-wrap justify-between items-center mt-2 gap-2">
                  <BlogAuthor
                    v-if="getAuthor(post.authors)"
                    :author="getAuthor(post.authors)!"
                    size="xs"
                    class="flex-shrink-0 mt-2 sm:mt-0"
                  />
                  <span class="text-xs text-gray-500 text-justify">
                    Updated at {{ new Date(post.updated_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }} | {{ post.reading_time }}
                  </span>
                </div>
              </div>
            </div></NuxtLink>
        </div>
        <!-- Smaller Articles -->
      </div>

      <!-- Comments column -->
      <div class="shadow-lg rounded-lg p-4">
        <h2 class="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-4">
          Comments
        </h2>
        <!-- Add your comments component or content here -->
        <p>Comments section placeholder</p>
      </div>
    </div>

    <div
      v-else
      class="text-center py-8"
    >
      <p class="text-xl text-gray-600">
        No posts found matching your search.
      </p>
    </div>
  </article>
</template>

<style scoped>

</style>
