<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useAsyncData } from '#app';

const { getAuthor } = useAuthor();

const route = useRoute();
const tag = route.params.tag as string;

const { data: allPosts } = await useAsyncData(`posts-${tag}`, () => 
  queryContent('blog')
    .where({ tags: { $contains: tag } })
    .find(),
);

const searchQuery = ref('');
const currentPage = ref(1);
const postsPerPage = 12;

const filteredPosts = computed(() => {
  const query = searchQuery.value.toLowerCase();
  return allPosts.value?.filter(post => 
    post.title?.toLowerCase().includes(query) ||
    post.description?.toLowerCase().includes(query) ||
    post.tags?.some((tag: string) => tag.toLowerCase().includes(query)),
  ) ?? [];
});

const paginatedPosts = computed(() => {
  const startIndex = (currentPage.value - 1) * postsPerPage;
  return filteredPosts.value.slice(startIndex, startIndex + postsPerPage);
});

const totalPages = computed(() => Math.ceil(filteredPosts.value.length / postsPerPage));

function changePage(page: number) {
  currentPage.value = page;
}
</script>

<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 class="text-xl font-bold mb-6 flex items-center">
      <Icon name="uil:tag-alt" class="h-6 w-6 text-primary mr-2" />
      Posts tagged with <span class="text-primary underline ml-2">#{{ tag }}</span>
    </h1>

    <!-- Search Bar -->
    <div class="mb-6 flex justify-center">
      <div class="relative w-full max-w-md">
        <UiInput
          v-model="searchQuery"
          type="text"
          placeholder="Search tags..."
          class="w-full px-4 py-2 pl-10 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon name="uil:search" class="h-5 w-5 text-gray-400" />
        </div>
      </div>
    </div>

    <!-- No Results Message -->
    <div v-if="filteredPosts.length === 0" class="text-center my-2">
      <p class="text-base sm:text-lg md:text-xl text-muted-foreground">
        No tags found matching your search.
      </p>
    </div>

    <!-- Posts Grid -->
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div v-for="post in paginatedPosts" :key="post._path" class="block shadow-lg rounded-lg overflow-hidden transition-shadow hover:shadow-xl hover:border-primary hover:border-2 bg-card">
        <div class="flex flex-col h-full">
          <div class="h-48 relative overflow-hidden group">
            <div class="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm" />
            <div class="w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110">
              <img
                v-if="post.media?.type === 'image'"
                :src="post.media.content.image.url"
                :alt="post.media.content.image.alt"
                class="w-full h-full object-cover relative z-10"
              />
              <div v-else class="w-full h-full flex items-center justify-center relative z-10 bg-primary/10">
                <span class="text-primary-foreground">No image available</span>
              </div>
            </div>
          </div>
          <div class="p-4 flex flex-col flex-grow">
            <NuxtLink :to="post._path" class="hover:text-primary transition-colors">
              <h2 class="text-sm sm:text-base font-bold line-clamp-2 text-justify mb-2">
                {{ post.title }}
              </h2>
            </NuxtLink>
            <p class="text-xs sm:text-sm text-gray-500 mb-2">
              Published at {{ new Date(post.published_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }}
            </p>
            <p v-if="post.description" class="text-xs sm:text-sm text-gray-600 line-clamp-3 mb-4">
              {{ post.description }}
            </p>
            <div class="flex flex-wrap justify-between items-center mt-auto gap-2">
              <BlogAuthor
                v-if="getAuthor(post.authors)"
                :author="getAuthor(post.authors)!"
                size="sm"
                class="flex-shrink-0 mt-2 sm:mt-0"
                :show-slug="false"
              />
              <span class="text-xs text-gray-500 text-justify">
                Updated at {{ new Date(post.updated_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }} | {{ post.reading_time }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div v-if="filteredPosts.length > 0" class="mt-8 flex justify-center">
      <button
        v-for="page in totalPages"
        :key="page"
        :class="[
          'mx-1 px-3 py-1 rounded text-xs sm:text-sm',
          currentPage === page ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground'
        ]"
        @click="changePage(page)"
      >
        {{ page }}
      </button>
    </div>
  </div>
</template>
