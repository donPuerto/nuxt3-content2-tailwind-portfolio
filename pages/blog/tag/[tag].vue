<script setup lang="ts">
/*
  // ? Imports and Setup
  - Setting up the necessary Vue composables and reactive variables.
*/

// * Get the route object to access route parameters
const route = useRoute()

// * Reactive variables for pagination and search
const currentPage = ref(1)
const postsPerPage = 10
const search = ref('')

// * Fetch posts based on the tag, current page, and search term
const { posts, totalPages } = useTagPosts(
  route.params.tag as string,
  postsPerPage,

)

// * Watcher: Reset the current page to 1 whenever the search term changes
watch(search, () => {
  currentPage.value = 1
})
</script>

<template>
  <div>
    <!-- Start: Tag Page -->
    <div class="flex flex-col items-center mt-8">
      <!-- Start: Tag Route Param -->
      <h1 class="text-2xl font-bold mb-4">
        Tagged: "{{ route.params.tag }}"
      </h1>
      <!-- End: Tag Route Param -->

      <!-- Start: Search Input -->
      <div class="mb-12 w-full max-w-md">
        <UiInput
          v-model="search"
          type="text"
          placeholder="Search for other tags..."
          @keydown.stop
        />
      </div>
      <!-- End: Search Input -->

      <!-- Post Grid -->
      <TagV1Grid :posts="posts" />

      <!-- Start: Pagination -->
      <div
        v-if="totalPages > 1"
        class="mt-4"
      >
        <button
          v-for="page in totalPages"
          :key="page"
          :class="[
            'px-4 py-2 mx-1 rounded-md focus:outline-none',
            currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300',
          ]"
          @click="currentPage = page"
        >
          {{ page }}
        </button>
      </div>
      <!-- End: Pagination -->
    </div>
    <!-- End: Tag Page -->
  </div>
</template>
