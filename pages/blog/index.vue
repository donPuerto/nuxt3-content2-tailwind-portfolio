<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Post } from '~/types/components/blog/post';

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

    let authorMatch = false;
    if (typeof post.authors === 'string') {
      authorMatch = post.authors.toLowerCase().includes(lowercaseQuery);
    }
    else if (Array.isArray(post.authors)) {
      authorMatch = post.authors.some(author => author.name.toLowerCase().includes(lowercaseQuery));
    }
    else if (post.authors && 'name' in post.authors) {
      authorMatch = post.authors.name.toLowerCase().includes(lowercaseQuery);
    }

    return titleMatch || descriptionMatch || tagMatch || authorMatch;
  });
});

// Get the latest post for the featured article
const featuredPost = computed(() => filteredPosts.value[0]);

// Get the next 4 posts for the smaller cards
const smallerPosts = computed(() => filteredPosts.value.slice(1, 5));
</script>

<template>
  <article class="container mx-auto px-8">
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
            <div class="w-full sm:w-1/3 lg:w-2/5 h-auto sm:h-56">
              <img
                v-if="featuredPost.image && featuredPost.image.url"
                :src="featuredPost.image.url"
                :alt="featuredPost.image.alt || 'Featured post image'"
                class="w-full h-auto sm:h-full object-contain sm:object-cover"
              />
              <div
                v-else
                class="w-full h-48 sm:h-full bg-gray-200 flex items-center justify-center"
              >
                <span class="text-gray-500">No image available</span>
              </div>
            </div>
            <div class="w-full sm:w-2/3 lg:w-3/5 p-4 flex flex-col">
              <h2 class="text-lg font-bold mb-2 line-clamp-2">
                {{ featuredPost.title }}
              </h2>
              <p
                v-if="featuredPost.description"
                class="text-base text-gray-600 mb-2 line-clamp-3"
              >
                {{ featuredPost.description }}
              </p>
              <div class="flex flex-wrap mt-2 mb-auto">
                <span 
                  v-for="(tag, index) in featuredPost.tags" 
                  :key="index" 
                  class="inline-block bg-secondary text-secondary-foreground rounded-full px-2 py-1 text-xs sm:text-sm font-semibold mr-1 mb-1 hover:bg-primary hover:text-primary-foreground transition-colors duration-300 ease-in-out transform hover:scale-105"
                >
                  #{{ tag }}
                </span>
              </div>
              <div class="text-sm text-gray-500 mt-2">
                <span>{{ new Date(featuredPost.published_at).toLocaleDateString() }}</span>
                <span class="mx-2">|</span>
                <span>{{ featuredPost.reading_time }}</span>
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
              <div class="w-full sm:w-1/3 lg:w-full h-32 sm:h-40 lg:h-32">
                <img
                  v-if="post.image"
                  :src="post.image.url"
                  :alt="post.image.alt || 'Post image'"
                  class="w-full h-full object-cover"
                />
                <div
                  v-else
                  class="w-full h-full bg-gray-200 flex items-center justify-center"
                >
                  <span class="text-gray-500 text-sm">No image</span>
                </div>
              </div>
              <div class="w-full sm:w-2/3 lg:w-full p-3">
                <h3 class="text-lg font-bold mb-1 line-clamp-2">
                  {{ post.title }}
                </h3>
                <p
                  v-if="post.description"
                  class="text-sm text-gray-600 mb-1 line-clamp-2"
                >
                  {{ post.description }}
                </p>
                <p class="text-xs text-gray-500">
                  {{ new Date(post.published_at).toLocaleDateString() }} | {{ post.reading_time }}
                </p>
              </div>
            </div>
          </NuxtLink>
        </div>
        <!-- Smaller Articles -->
      </div>

      <!-- Comments column -->
      <div class="shadow-lg rounded-lg p-4">
        <h2 class="text-xl font-bold mb-4">
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
.glow-effect {
  box-shadow: 0 0 15px rgba(0, 123, 255, 0.2);
  transition: all 0.3s ease;
}

.glow-effect:hover,
.glow-effect:focus {
  box-shadow: 0 0 25px rgba(0, 123, 255, 0.4);
}

.glow-effect:focus {
  animation: wide-glow 1.5s ease-in-out infinite alternate;
}

@keyframes wide-glow {
  from {
    box-shadow: 0 0 15px rgba(0, 123, 255, 0.2), 0 0 30px rgba(0, 123, 255, 0.2);
  }
  to {
    box-shadow: 0 0 30px rgba(0, 123, 255, 0.4), 0 0 50px rgba(0, 123, 255, 0.4);
  }
}

@keyframes tagPulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

.inline-block:hover {
  animation: tagPulse 0.5s ease-in-out;
}
</style>
