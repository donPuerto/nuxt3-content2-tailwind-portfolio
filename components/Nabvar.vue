<template>
  <nav class="flex container mx-auto px-10">
    <ul class="flex space-x-4">
      <li>
        <NuxtLink
          to="/"
          class="flex flex-none h-14 items-center space-x-3"
        >
          <img
            class=""
            src="~/assets/img/logo.png?webp"
            width="38"
            height="38"
            alt="Don Puerto Logo"
          />
          <span class="text-white-300 hover:text-gray-400 text-md font-small">donpuerto.ph</span>
        </NuxtLink>
      </li>
    </ul>

    <ul class="flex grow justify-center items-center space-x-10">
      <li class="hidden sm:flex">
        <NuxtLink
          to="/"
          class="text-white-300 hover:text-gray-400 text-md font-semibold transform hover:scale-125 transition-transform duration-300"
          >Home</NuxtLink
        >
      </li>
      <li class="hidden sm:flex">
        <NuxtLink
          to="/portfolio/"
          class="text-white-300 hover:text-gray-400 text-md font-medium transform hover:scale-125 transition-transform duration-300"
          >Portfolio</NuxtLink
        >
      </li>
      <li class="hidden sm:flex">
        <NuxtLink
          to="/blogs/"
          class="text-white-300 hover:text-gray-400 text-md font-medium transform hover:scale-125 transition-transform duration-300"
          >Blog</NuxtLink
        >
      </li>
    </ul>
    <div class="flex flex-none h-14 justify-center items-center">
      <ThemeSwitcher class="flex" />
    </div>
  </nav>
</template>

<style></style>
