<script lang="ts" setup>
const { app: { hero } } = useAppConfig()
</script>

<template>
  <div class="mx-auto mt-10 flex justify-center px-4 sm:mt-2 sm:px-6 md:mt-8 lg:mt-10 lg:px-8">
    <div class="text-center">
      <div>
        <p class="inline-flex items-center text-foreground bg-secondary rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
          <span
            v-for="(segment, index) in hero.hireInfo"
            :key="index"
          >
            <span
              v-if="segment.highlight"
              class="px-3 py-0.5 text-primary-foreground text-xs font-semibold leading-5 uppercase tracking-wide bg-primary rounded-full"
            >
              {{ segment.text }}
            </span>
            <NuxtLink
              v-else-if="segment.link"
              :to="segment.url"
              class="ml-1 text-sm font-medium cursor-pointer hover:underline hover:text-green-500 hover:px-1 transition ease-in-out delay-150 hover:scale-110"
            >
              {{ segment.text }}
            </NuxtLink>
            <span
              v-else
              class="ml-1 text-sm"
            >{{ segment.text }}</span>
            <span v-if="!segment.link && index < hero.hireInfo.length - 1" />
          </span>
        </p>
      </div>
      <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
        <span class="block xl:inline">
          <span
            v-for="(segment, index) in hero.header"
            :key="index"
            class="mb-1 block"
          >
            <span
              v-if="segment.highlight"
              class="bg-gradient-to-r from-indigo-400 to-pink-600 bg-clip-text text-transparent "
            >
              {{ segment.text }}
            </span>
            <span v-else>{{ segment.text }}</span>
          </span>
        </span>
        <div class="mt-2">
          {{ hero.developerInfo }}
          <span class="relative mt-3 whitespace-nowrap text-primary">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              class="absolute top-3/4 left-0 right-0 m-auto h-[0.58em] w-fit fill-pink-400/50"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
            </svg>
            <span class="relative">{{ hero.name }}</span>
          </span>
        </div>
      </h1>
      <p class="mx-auto mt-3 max-w-xl text-lg text-secondary-foreground sm:mt-5 md:mt-5">
        {{ hero.description }}
      </p>
      <div class="mt-5 sm:mt-8 sm:flex sm:justify-center space-x-2 flex-wrap">
        <UiButton
          v-for="tech in hero.technologies"
          :key="tech.name"
          variant="ghost"
          class="mb-2"
          :to="tech.url"
          target="_blank"
        >
          <Icon
            class="h-4 w-4"
            :name="tech.icon"
          />
          {{ tech.name }}
        </UiButton>
      </div>
    </div>
  </div>
</template>
