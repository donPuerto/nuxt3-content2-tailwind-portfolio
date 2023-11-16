<template>
  <div class="relative h-screen">
    <!-- Background -->
    <img
      src="~/assets/img/bg.svg"
      alt="Blue and purple background graphics"
    />

    <Nabvar class="absolute top-0 w-full" />
    <!-- Pages -->
    <slot />
    <MainFooter class="absolute bottom-0 w-full bg-gray-800 text-white dark:border-gray-800 border-t" />
  </div>
</template>

<style>
  body {
    @apply bg-gray-900;
  }
</style>
