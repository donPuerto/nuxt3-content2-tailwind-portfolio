<script setup lang="ts">
import type { Post } from '~/types/components/blog/post'

// Props
interface Props {
  posts: Post[]
}
defineProps<Props>()

// composables
const {
  targetRef,
  position,
  opacity,
  handleMouseMove,
  handleFocus,
  handleBlur,
  handleMouseEnter,
  handleMouseLeave,
} = useSpotlight()
</script>

<template>
  <div>
    <div class="flex flex-col min-h-screen">
      <div class="flex-grow">
        <div class="container mx-auto px-4 h-full">
          <!-- Start: Grid Layout -->
          <div
            v-if="posts.length > 0"
            class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4"
          >
            <!-- Start: Tag Card -->
            <TagV1Card
              v-for="post in posts"
              :key="post.slug"
              :post="post"
              class="flex-1"
            />
            <!-- End: Tag Card -->
          </div>
          <!-- End: Grid Layout -->

          <!-- Start: Tag not found card h-full -->
          <div
            v-else
            class="md:col-span-1 lg:col-span-4 flex items-center justify-center"
          >
            <div class="w-full max-w-2xl shadow-md rounded-xl overflow-hidden">
              <div class="px-8 w-full flex flex-col justify-center items-center py-8">
                <!-- Card -->
                <div
                  ref="targetRef"
                  class="
                        relative
                        flex
                        h-60
                        w-96
                        items-center
                        justify-center
                        overflow-hidden
                        rounded-xl
                        border border-border
                        bg-gradient-to-r from-black to-gray-950
                        shadow-2xl"
                  @mousemove="handleMouseMove"
                  @focus="handleFocus"
                  @blur="handleBlur"
                  @mouseenter="handleMouseEnter"
                  @mouseleave="handleMouseLeave"
                >
                  <div
                    class="pointer-events-none absolute inset-0 transition duration-300"
                    :style="{
                      opacity,
                      background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,182,255,.1), transparent 40%)`,
                    }"
                  />
                  <div class="relative z-10 flex flex-col items-center text-center">
                    <Icon
                      name="material-symbols:feature-search-outline"
                      size="52px"
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
                <!-- Card -->
              </div>
            </div>
          </div>

          <!-- End: Tag not found card h-full -->
        </div>
      </div>
    </div>
  </div>
</template>
