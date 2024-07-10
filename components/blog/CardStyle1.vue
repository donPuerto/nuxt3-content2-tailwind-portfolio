<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  image?: string
  slug?: string
  _path?: string
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
  <div class="flex flex-col gap-4 md:flex-row rounded-lg shadow-md ">
    <NuxtLink
      :to="`/blog/${slug}`"
      class="shrink-0"
    >
      <img
        v-if="image"
        :src="image"
        :alt="alt"
        class="h-[240px] w-full object-cover rounded-lg shadow-md max-w-xs transition duration-300 ease-in-out hover:scale-110"
      >
    </NuxtLink>

    <div class="pl-4 pb-4 sm:pt-0 md:pt-4 md:pl-1">
      <UiBadge
        v-if="headline || reading_time"
        variant="outline"
        class="mb-2 border-ring/50 text-sm font-medium text-primary"
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
          :alt="alt"
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
