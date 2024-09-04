<!-- eslint-disable no-console -->
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import CommandPalette from '~/components/CommandPallete.vue'
import MobileBarMenu from '@/components/app/header/MobileBarMenu.vue'

import { fetchMenuListByHeader } from '~/data'
import type { MenuList } from '~/types/components/header/menu'

defineComponent({ components: { CommandPalette } })

const pages: MenuList | undefined = fetchMenuListByHeader('Pages')

const colorMode = useColorMode()
const mobileNav = ref(false)

// Define the modes array, including sepia
const modes = [
  { value: 'light', icon: 'lucide:sun', title: 'Light' },
  { value: 'dark', icon: 'lucide:moon', title: 'Dark' },
  { value: 'sepia', icon: 'lucide:book', title: 'Sepia' },
  { value: 'system', icon: 'lucide:laptop', title: 'System' },
]

const setTheme = (val: string) => {
  colorMode.preference = val
}

const currentIcon = computed(() => {
  return modes.find(m => m.value === colorMode?.preference)?.icon
})

const toggleMobileNav = () => {
  mobileNav.value = !mobileNav.value
}

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.ctrlKey && event.key.toLowerCase() === 'p') {
    event.preventDefault()
    toggleCommandPalette()
  }
}

const isCommandPaletteVisible = ref(false)

const toggleCommandPalette = () => {
  isCommandPaletteVisible.value = !isCommandPaletteVisible.value
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<template>
  <header class="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur">
    <div class="container flex h-14 items-center justify-between">
      <div class="flex items-center gap-10">
        <div class="flex items-center gap-3">
          <UiButton
            size="icon-sm"
            variant="outline"
            class="h-9 w-9 lg:hidden"
            @click="toggleMobileNav"
          >
            <Icon
              :name="mobileNav ? 'heroicons:x-mark' : 'heroicons:bars-3'"
              class="h-4 w-4"
            />
          </UiButton>
          <NuxtLink
            to="/"
            class="flex items-center justify-center w-8 h-8 border border-border rounded-md text-sm font-bold transition-colors duration-200 hover:bg-primary hover:text-primary-foreground hover:border-primary"
          >
            DP
          </NuxtLink>
        </div>
      </div>

      <!-- Middle -->
      <div class="hidden md:flex flex-grow items-center justify-center gap-3">
        <template
          v-for="item in pages?.items"
          :key="item.name"
        >
          <UiButton
            variant="ghost"
            :to="item.route"
          >
            <Icon
              :name="item.icon"
              class="h-4 w-4 lg:hidden"
            />
            {{ item.name }}
          </UiButton>
        </template>
      </div>

      <!-- Right Side -->
      <div class="flex items-center">
        <UiButton
          class="h-9 w-9"
          variant="ghost"
          size="icon"
          @click="toggleCommandPalette"
        >
          <Icon
            name="material-symbols:keyboard-command-key"
            class="h-[18px] w-[18px]"
          />
        </UiButton>
        <UiDropdownMenu>
          <UiDropdownMenuTrigger as-child>
            <UiButton
              class="h-9 w-9"
              variant="ghost"
              size="icon"
            >
              <Icon
                :name="currentIcon || 'lucide:sun'"
                class="h-[18px] w-[18px]"
              />
            </UiButton>
          </UiDropdownMenuTrigger>
          <UiDropdownMenuContent
            align="end"
            :side-offset="5"
          >
            <UiDropdownMenuItem
              v-for="(m, i) in modes"
              :key="i"
              class="cursor-pointer"
              :icon="m.icon"
              :title="m.title"
              @click="setTheme(m.value)"
            />
          </UiDropdownMenuContent>
        </UiDropdownMenu>
      </div>
    </div>
    <MobileBarMenu
      v-model="mobileNav"
      :menu-list="pages"
    />
    <CommandPalette
      v-model="isCommandPaletteVisible"
      @close="isCommandPaletteVisible = false"
    />
  </header>
</template>
