<script lang="ts">
  const isMenuOpen = ref<boolean>(false)
  const count = ref(0)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleMenuToggled = (isOpen: boolean) => {
    isMenuOpen.value = isOpen
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function test() {
    // eslint-disable-next-line no-console
    console.log('test')
  }
</script>

<template>
  <header class="bg-transparent">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="md:flex md:items-center md:gap-12">
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
        </div>

        <div class="hidden md:block">
          <nav aria-label="Global">
            <ul class="flex items-center gap-6 text-sm">
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
          </nav>
        </div>
        <p>Count is: {{ count }}</p>

        <div class="flex flex-none h-14 justify-center items-center space-x-2">
          <button @click="count++">Add 1</button>
          <MenuSwitcher
            class="flex sm:hidden"
            :menu-toggled="isMenuOpen"
            @menu-toggled="handleMenuToggled"
          />
          <ThemeSwitcher class="flex" />
        </div>
      </div>
    </div>
    <div class="px-4 py-4">
      <ul class="space-y-1">
        <li>
          <h3 class="block rounded-lg bg-gray-100 font-medium text-gray-500 px-3 py-2">Navigation</h3>
        </li>
        <li>
          <a
            target="_blank"
            href="/"
            class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Home
          </a>
        </li>

        <li>
          <a
            target="_blank"
            href="/portfolio"
            class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Portfolio
          </a>
        </li>

        <li>
          <a
            target="_blank"
            href="/blog"
            class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Blog
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>
