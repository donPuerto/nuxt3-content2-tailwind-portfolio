<template>
  <div class="relative">
    <!-- Background -->
    <img
      class="top-0"
      src="~/assets/img/bg.svg"
      alt="Blue and purple background graphics"
    />

    <!-- Content -->
    <div class="absolute h-full w-full top-0 md:px-2">
      <Nabvar />
      <slot />
      <Footer />
    </div>
  </div>
</template>

<style>
  body {
    @apply bg-gray-900;
  }
</style>
