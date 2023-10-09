<template>
  <Toolbar
    :pt="{
      root: {
        style: { background: 'transparent', border: 'none' }
      }
    }"
  >
    <template #start>
      <ul class="flex flex-grow space-x-4">
        <li>
          <NuxtLink
            to="/"
            class="flex items-center space-x-3 text-gray-700 md:mr-5"
          >
            <img
              class="w-8"
              src="~/assets/img/logo.png"
              alt="https://www.svgshapes.in/"
              :height="350"
              :width="250"
            />
            <span class="text-gray-200 hover:text-gray-300 text-1xl font-semibold py-1">donpuerto.ph</span>
          </NuxtLink>
        </li>
      </ul>
    </template>
    <template #center>
      <ul class="flex items-center space-x-5">
        <li class="hidden sm:flex">
          <NuxtLink
            to="/"
            class="text-gray-200 hover:text-gray-400 text font-semibold py-1 px-3"
            >Home</NuxtLink
          >
        </li>
        <li class="hidden sm:flex">
          <NuxtLink
            to="/portfolio/"
            class="text-gray-200 hover:text-gray-400 text font-semibold py-1 px-3"
            >Portfolio</NuxtLink
          >
        </li>
        <li class="hidden sm:flex">
          <NuxtLink
            to="/blog/"
            class="text-gray-200 hover:text-gray-400 text font-semibold py-1 px-3"
            >Blog</NuxtLink
          >
        </li>
      </ul>
    </template>
  </Toolbar>
</template>

<style></style>
