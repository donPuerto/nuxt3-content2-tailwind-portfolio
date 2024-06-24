import { NuxtImg } from '../../.nuxt/components';
<script lang="ts" setup>
// Define props

// Define the type for the props
interface PostCardProps {
  route: string
  slug: string
  title: string
  subtitle?: string
  series?: string
  image?: string
  description: string
  publishedOn: string
  published: boolean
}

// Define props
const props = defineProps<PostCardProps>()

// Function to format the date
// const formatDate = (date: string) => {
//   const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
//   return new Date(date).toLocaleDateString('en-US', options)
// }
</script>

<template>
  <NuxtLink
    :to="`/blog/${slug}`"
  />
  <!-- max-w-sm
        border-2
        border-theme-border-color
        rounded-lg
        shadow
        bg-theme-bg-primary-color
        hover:bg-theme-text-secondary-color
        hover:border-theme-primary-color
        duration-100 -->
  <div
    class="post-card"
  >
    <div class="flex flex-col md:flex-row items-center">
      <div class="image md:w-1/2">
        <NuxtImg
          :src="props.image || '/content/black-image.png'"
          class=" w-full object-cover"
          width="1216"
          height="640"
        />
      </div>
    </div>
  </div>
  <div class="text p-4 md:w-1/2">
    <div class="flex-1">
      <h3 class="text-lg font-bold">
        {{ props.title }}
      </h3>

      <p class="text-xl font-semibold text-gray-900">
        {{ props.description }}
      </p>
    </div>
  </div>

  <!-- <h3 class="mb-1 text-slate-900 font-semibold">
        <span class="mb-1 block text-sm leading-6 text-indigo-500">{{ props.title }}</span>
      </h3>

      <div class="prose prose-slate prose-sm text-slate-600">
        <p>
          {{ props.description }}
        </p>
      </div>

      <h2 class="px-5 mt-0.5 text-sm text-theme-text-secondary-color">
        {{ formatDate(publishedOn) }}
      </h2> -->
  <!-- </div> -->
  <!-- <div class="mt-6 flex items-center">
    <div class="flex-shrink-0">
      <a>
        <span class="sr-only">John Doe</span>
        <NuxtImg
          class="h-10 w-10 rounded-full"
          src="https://gravatar.com/avatar/3606199285599ce415235ab5987094c8?s=400&d=retro&r=x"
        />

      </a>
    </div>
    <div class="ml-3">
      <p class="text-sm font-medium text-gray-900">
        <a

          class="hover:underline"
        >
          John Doe
        </a>
      </p>
      <div class="flex space-x-1 text-sm text-gray-500">
        {{ formatDate(publishedOn) }}
        <span aria-hidden="true"> &middot; </span>
        <span> 6 min read </span>
      </div>
    </div>
  </div> -->
</template>

<style scoped>
.post-card {
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: #fff;
}

.post-card img {
  width: 100%;
  height: auto;
  display: block;
}

@media (min-width: 768px) {
  .post-card {
    flex-direction: row;
  }
}

@media (max-width: 767px) {
  .post-card {
    flex-direction: column;
  }
}
</style>
