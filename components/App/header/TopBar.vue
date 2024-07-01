<script setup lang="ts">
import type { ListData } from '~/types/ui/MobileBarMenu/listData'

const listData: ListData = {
  header: 'Pages',
  items: [
    { name: 'Home', route: '/', icon: 'ri:home-2-line', shortcut: '⌘H' },
    { name: 'Blog', route: '/blog', icon: 'uil:notes', shortcut: '⌘B' },
    { name: 'Projects', route: '/projects', icon: 'ic:outline-work-outline', shortcut: '⌘P' },
    { name: 'About', route: '/about', icon: 'mdi:briefcase-account-outline', shortcut: '⌘A' },
  ],
}
</script>

<template>
  <header class="sticky top-0 z-30 border-b bg-background/80 backdrop-blur">
    <div class="container flex h-14 items-center justify-between">
      <div class="flex items-center gap-10">
        <div class="flex items-center gap-5">
          <UiButton
            size="icon-sm"
            variant="outline"
            class="h-9 w-9 lg:hidden"
          >
            <Icon
              name="line-md:close-to-menu-transition"
              class="h-4 w-4"
            />
          </UiButton>
          <NuxtLink
            to="/"
            class="text-lg font-bold"
          >
            Don Puerto
          </NuxtLink>
        </div>
      </div>
    </div>
    <MobileBarMenu :list-data="listData" />
  </header>
</template>
