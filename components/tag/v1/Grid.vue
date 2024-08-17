<script setup lang="ts">
import type { Post } from '~/types/components/blog/post'

interface Props {
  posts: Post[]
}

defineProps<Props>()
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <div class="flex-grow">
      <div class="container mx-auto px-4 h-full">
        <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4 h-full">
          <!-- Start: Tag Card -->
          <template v-if="posts.length > 0">
            <TagV1Card
              v-for="post in posts"
              :key="post.slug"
              :post="post"
            />
          </template>
          <!-- End: Tag Card -->

          <!-- Start: Tag not found card h-full -->
          <template v-else>
            <div class="md:col-span-1 lg:col-span-4 flex items-center justify-center">
              <div class="w-full max-w-2xl shadow-md rounded-xl overflow-hidden">
                <div class="px-8 w-full flex flex-col justify-center items-center py-8">
                  <Icon
                    name="🔍"
                    size="48px"
                    class="mb-4"
                  />
                  <h3 class="text-base font-medium lg:text-base mb-2">
                    No tags found
                  </h3>
                  <p class="mb-3 leading-relaxed text-sm lg:text-sm text-center">
                    No posts with the searched tag were found.
                  </p>
                </div>
              </div>
            </div>
          </template>
          <!-- End: Tag not found card h-full -->
        </div>
      </div>
    </div>
  </div>
</template>
