<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  _path?: string
  slug?: string
  image?: string
  alt?: string
  headline?: string
  description?: string
  title?: string
  author_avatar?: string
  author?: string
  published_on?: string
  reading_time?: string
  tags?: string[]
}>()
</script>

<template>
  <div class="rounded-lg shadow-md cursor-pointer">
    <NuxtLink
      :to="`/blog/${slug}`"
      class="shrink-0"
    >
      <img
        v-if="image"
        :src="image"
        :alt="alt"
        class="h-[240px] w-full object-cover rounded-lg shadow-md"
      >
    </NuxtLink>
    <div class="p-4">
      <UiBadge
        v-if="headline || reading_time"
        variant="outline"
        class="mb-2 border-ring/50 px-3 py-1 text-sm font-medium text-primary"
      >
        {{ headline }} <span
          v-if="reading_time"
          class="ml-1"
        >- {{ reading_time }} read</span>
      </UiBadge>
      <p class="mb-2 text-xl font-semibold lg:text-2xl">
        {{ title }}
      </p>
      <p
        v-if="description"
        class="mb-5 line-clamp-2 text-ellipsis text-muted-foreground"
      >
        {{ description }}
      </p>

      <div class="flex items-center">
        <UiAvatar
          v-if="author_avatar"
          :src="author_avatar"
          :alt="author"
          class="mr-3 rounded-full bg-background shadow ring-1 ring-ring/30"
        />
        <div>
          <p
            v-if="author"
            class="text-sm font-semibold"
          >
            {{ author }}
          </p>
          <p
            v-if="published_on"
            class="text-sm text-muted-foreground"
          >
            {{ published_on }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
