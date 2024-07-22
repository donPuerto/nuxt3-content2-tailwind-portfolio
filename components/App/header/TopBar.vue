<script setup lang="ts">
import { fetchMenuListByHeader, modes } from '~/data'
import type { MenuList } from '~/types/components/header/menu'

const pages: MenuList | undefined = fetchMenuListByHeader('Pages')

const colorMode = useColorMode()
const mobileNav = ref(false)
const isOpen = ref(false)

defineShortcuts({
  meta_k: () => {
    isOpen.value = !isOpen.value
  },
})

const setTheme = (val: string) => {
  colorMode.preference = val
}

const currentIcon = computed(() => {
  return modes.find(m => m.value === colorMode?.preference)?.icon
})

const menuIcon = computed(() => mobileNav.value ? 'line-md:menu-to-close-transition' : 'line-md:close-to-menu-transition')
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
            @click="mobileNav = !mobileNav"
          >
            <Icon
              :name="menuIcon"
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

      <!-- Middle -->
      <div class="hidden md:flex flex-grow  items-center justify-center gap-3">
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
          @click="isOpen = true"
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
    <AppHeaderMobileBarMenu
      v-model="mobileNav"
      :menu-list="pages"
    />
    <CommandSearch v-model="isOpen" />
  </header>
</template>
