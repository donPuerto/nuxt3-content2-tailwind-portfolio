<template>
  <header class="sticky top-0 z-50 w-full border-b border-black/10 bg-white/10 backdrop-blur-md dark:border-white/10 dark:bg-black/10">
    <div class="mx-auto flex items-center py-4 container">
      <div class="flex-1">
        <NuxtLink class="inline-flex shrink-0 items-center outline-none" to="/">
          <span class="text-2xl font-bold text-gray-900 dark:text-white">Don <span class="hidden md:inline-block">R.</span>&nbsp;</span>
          <span class="text-2xl font-bold text-primary">Puerto</span>
        </NuxtLink>
      </div>

      <div class="flex items-center justify-end gap-4 md:order-2 md:flex-1">
        <ThemeSwitcher />
      </div>

      <nav
        :class="{ 'lt-md:flex': isOpen }"
        class="items-center gap-4 lt-md:(absolute left-0 top-16 hidden h-screen w-full flex-col justify-initial overflow-hidden bg-white pt-10 transition dark:bg-gray-900) md:order-1 md:flex lg:gap-12"
      >
        <NuxtLink class="rounded-md px-2 py-1 font-medium uppercase transition duration-250 ease hover:bg-gray-100 dark:hover:bg-gray-800" exact-active-class="bg-gray-100 dark:bg-gray-800" to="/">
          Home
        </NuxtLink>

        <NuxtLink
          class="rounded-md px-2 py-1 font-medium uppercase transition duration-250 ease hover:bg-gray-100 dark:hover:bg-gray-800"
          exact-active-class="bg-gray-100 dark:bg-gray-800"
          to="/projects"
        >
          Projects
        </NuxtLink>

        <NuxtLink
          class="rounded-md px-2 py-1 font-medium uppercase transition duration-250 ease hover:bg-gray-100 dark:hover:bg-gray-800"
          exact-active-class="bg-gray-100 dark:bg-gray-800"
          to="/contact"
        >
          Contact
        </NuxtLink>
      </nav>

      <button aria-label="Toggle Mobile Menu" class="ml-2 inline-flex items-center rounded-md p-1.5 md:hidden hover:bg-gray-100 dark:hover:bg-gray-800" @click="onToggle">
        <span aria-hidden="true" :class="isOpen ? 'i-bx-x' : 'i-bx-menu'" class="h-5 w-5" />
        <span class="sr-only">Toggle menu</span>
      </button>
    </div>
  </header>
</template>

<script lang="ts" setup>
const isOpen = ref(false);

function onToggle() {
  isOpen.value = !isOpen.value;

  isOpen.value ? document.body.classList.add('lt-md:overflow-hidden') : document.body.classList.remove('lt-md:overflow-hidden');
}

useRouter().afterEach(() => {
  isOpen.value = false;

  document.body.classList.remove('lt-md:overflow-hidden');
});
</script>
