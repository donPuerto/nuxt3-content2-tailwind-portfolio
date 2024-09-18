<script setup lang="ts">
import { THEME_MODES } from '@/utils/constants'
import { fetchMenuListByHeader } from '@/data'
import type { MenuList } from '@/types/components/header/menu'

const pages: MenuList | undefined = fetchMenuListByHeader('Pages')

const colorMode = useColorMode()
const isMobileNavOpen = ref(false)

const setTheme = (val: string) => {
  colorMode.preference = val
}

const currentIcon = computed(() => {
  return THEME_MODES.find(m => m.value === colorMode?.preference)?.icon
})

const toggleMobileNav = () => {
  isMobileNavOpen.value = !isMobileNavOpen.value
}

// Add this to force close the mobile nav when screen size changes
const { width } = useWindowSize()
watch(width, () => {
  isMobileNavOpen.value = false
})

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
  <header class="sticky top-0 z-30 border-b border-border/50 bg-transparent">
    <div class="container flex h-14 items-center justify-between">
      <div class="flex items-center gap-10">
        <div class="flex items-center gap-2">
          <UiButton
            size="icon-sm"
            variant="outline"
            class="h-9 w-9 lg:hidden bg-background/50 backdrop-blur-sm"
            @click="toggleMobileNav"
          >
            <Icon
              :name="isMobileNavOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'"
              class="h-4 w-4"
            />
          </UiButton>
          <NuxtLink
            to="/"
            class="flex items-center justify-center w-9 h-9 border border-border/50 rounded-md text-sm font-bold transition-colors duration-200 hover:bg-primary hover:text-primary-foreground hover:border-primary bg-background/50 backdrop-blur-sm"
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
            class="bg-background/50 backdrop-blur-sm"
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
              v-for="(m, i) in THEME_MODES"
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
    <AppHeaderMobileBarMenu
      v-model="isMobileNavOpen"
      :menu-list="pages"
      :force-closed="!isMobileNavOpen"
    />
    <CommandSearch
      v-model="isCommandPaletteVisible"
      @close="isCommandPaletteVisible = false"
    />
  </header>
</template>
