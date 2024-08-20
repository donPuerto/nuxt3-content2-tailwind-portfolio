<script setup lang="ts">
// composables
const route = useRoute()

// data
const currentPage = ref(1)
const postsPerPage = 10

const search = ref('')

const { posts, totalPages } = useTagPosts(
  route.params.tag as string,
  currentPage,
  postsPerPage,
  search,
)

// Reset page when search changes
watch(search, () => {
  currentPage.value = 1
})
</script>

<template>
  <!-- Start: Root -->
  <div>
    <!-- Start: Tag Page -->
    <div class="flex flex-col items-center mt-8">
      <!-- Start: Tag Route Param -->
      <h1 class="text-2xl font-bold mb-4">
        Tagged: "{{ route.params.tag }}"
      </h1>
      <!-- End: Tag Route Param -->

      <!-- Start: Search -->
      <div class="mb-12 w-full max-w-md">
        <UiInput
          v-model="search"
          type="text"
          placeholder="Search for other tags..."
          @keydown.stop
        />
      </div>
      <!-- End: Search -->

      <!-- Post Grid -->
      <TagV1Grid :posts="posts" />

      <!-- Start: Pagination -->
      <div class="mt-4">
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
  <!-- End: Root -->
</template>

<style scoped>

</style>
