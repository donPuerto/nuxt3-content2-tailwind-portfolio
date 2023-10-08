import { Nabvar } from '../.nuxt/components';
<template>
  <div>
    <img
      class="h-full w-auto top-0 -mt-64 md:-mt-48 lg:-mt-16 xl:mt-0"
      src="~/assets/img/bg.svg"
      width="1920"
      height="1080"
      alt="Blue and purple background graphics"
    />
    <div class="absolute h-full w-full top-0">
      <Nabvar />
      <slot />
      <Footer />
    </div>
  </div>
</template>
