<script setup lang="ts">
import { menuList } from '~/data/index.ts'

const colorMode = useColorMode()
const mobileNav = ref(false)
const isOpen = ref(false)
const { metaSymbol } = useShortcuts()

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

const modes = [
  { icon: 'lucide:laptop', title: 'System', value: 'system' },
  { icon: 'lucide:moon', title: 'Dark', value: 'dark' },
  { icon: 'lucide:sun', title: 'Light', value: 'light' },
  { icon: 'lucide:coffee', title: 'Sepia', value: 'sepia' },
]
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
          v-for="item in menuList.items"
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
          size="sm"
          class="mr-2 hidden min-w-[300px] font-normal text-muted-foreground md:flex"
          variant="outline"
          @click="isOpen = true"
        >
          <Icon name="lucide:search" />
          Search...
          <UiKbd class="ml-auto">
            {{ metaSymbol }}+K
          </UiKbd>
        </UiButton>

        <UiButton
          size="icon"
          class="text-muted-foreground md:hidden"
          variant="ghost"
          @click="isOpen = true"
        >
          <Icon
            name="lucide:search"
            class="h-[18px] w-[18px]"
          />
        </UiButton>

        <CommandSearch v-model="isOpen" />

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
      :menu-list="menuList"
    />
  </header>
</template>
