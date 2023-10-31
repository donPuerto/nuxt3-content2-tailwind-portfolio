<script setup lang="ts">
  import { useAutoAnimate } from '@formkit/auto-animate/vue'
  const [parent] = useAutoAnimate()
  const isMenuSwitch = ref<boolean>(false)
  const isSmallScreen = ref<boolean>(false)

  const menuItems = ref([
    { id: 1, label: 'Home', url: '/' },
    { id: 2, label: 'Portfolio', url: '/portfolio' },
    { id: 3, label: 'Blog', url: '/blog' }
  ])

  const checkScreenSize = () => {
    isSmallScreen.value = window.innerWidth < 768
  }

  function handleMenuSwitch(changeSwitch: boolean) {
    isMenuSwitch.value = changeSwitch
  }
  onMounted(() => {
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
  })
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
              <li
                v-for="item in menuItems"
                :key="item.id"
                class="hidden md:flex"
              >
                <NuxtLink
                  :to="item.url"
                  class="text-white-300 hover:text-gray-400 text-md font-semibold transform hover:scale-125 transition-transform duration-300"
                >
                  {{ item.label }}</NuxtLink
                >
              </li>
            </ul>
          </nav>
        </div>

        <div class="flex flex-none h-14 justify-center items-center space-x-4">
          <ThemeSwitcher class="flex" />
          <MenuSwitcher
            class="flex md:hidden"
            @emit-switch="handleMenuSwitch"
          />
        </div>
      </div>
    </div>

    <div
      v-show="isMenuSwitch"
      class="px-6 py-3 space-x-1"
    >
      <ul
        v-if="isSmallScreen"
        ref="parent"
        class="space-x border rounded-lg"
      >
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

<style scoped>
  .hover-animation:hover {
    /* Add your hover animation properties here */
    transform: scale(1.5); /* Example: Scale on hover */
    transition: transform 1.5s; /* Example: Animation duration */
  }
</style>
