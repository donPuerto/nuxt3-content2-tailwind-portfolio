<template>
  <section class="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
    <div class="max-w-full p-4 text-center">
      <h1
        class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent font-extrabold"
      >
        Don Puerto &trade;
      </h1>
      <p class="text-gray-300 ml-[-20px]">Computer Engineer</p>
      <p class="mx-auto mt-4 max-w-4xl sm:text-xl/relaxed">
        A Fullstack Engineer with expertise in Vue/Nuxt, Supabase, and Flutter excels in creating web and mobile
        applications that offer a unified user experience across platforms.
      </p>
      <div class="mt-4 flex flex-wrap justify-center gap-3">
        <a
          class="block w-full rounded-lg border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="https://github.com/donPuerto"
          target="_blank"
        >
          Github
        </a>

        <a
          class="block w-full rounded-lg border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          href="/about"
        >
          LinkedIn
        </a>
      </div>

      <div>
        <div class="my-3 space-x-3 pb-3">
          <NuxtLink
            to="https://github.com/nurRiyad"
            target="_blank"
            class="p-2 bg-gray-300 text-gray-800 rounded-md"
            aria-label="Github"
          >
            <IconsGithub />
          </NuxtLink>
          <NuxtLink
            to="https://www.linkedin.com/in/nur-riyad/"
            target="_blank"
            class="p-2 bg-gray-300 text-gray-800 rounded-md"
            aria-label="LinkedIn"
          >
            <IconsGithub />
          </NuxtLink>
          <NuxtLink
            to="https://twitter.com/qdnvubp"
            target="_blank"
            class="p-2 bg-gray-300 text-gray-800 rounded-md"
            aria-label="Twitter"
          >
          </NuxtLink>
          <NuxtLink
            to="https://stackoverflow.com/users/16781395/nur-riyad"
            target="_blank"
            class="p-2 bg-gray-300 text-gray-800 rounded-md"
            aria-label="StackOverflow"
          >
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>
