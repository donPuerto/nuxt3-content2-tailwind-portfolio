<template>
  <div>
    <img
      class="w-auto"
      src="~/assets/img/bg.svg"
      alt="Blue and purple background graphics"
      height="20px"
    />
    <div class="absolute h-full w-full top-0">
      <Nabvar />
      <slot />
      <Footer />
    </div>
  </div>
</template>
