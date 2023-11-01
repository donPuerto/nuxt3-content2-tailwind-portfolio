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
    <Footer />
  </div>
</template>

<style>
  body {
    @apply bg-gray-900;
  }
</style>
