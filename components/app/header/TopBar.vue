<script lang="ts" setup>
import { THEME_MODES, FETCH_MENU_LIST_BY_HEADER } from '@/utils/constants';
import type { MenuList, ColorModeOption } from '@/types';

defineOptions({
  inheritAttrs: false,
});

const attrs = useAttrs();

const pages: MenuList | undefined = FETCH_MENU_LIST_BY_HEADER('Pages');

const colorMode = useColorMode();
const isMobileNavOpen = ref(false);
const isCommandPaletteVisible = ref(false);
const isClient = ref(false); // Add this line

const setTheme = (val: ColorModeOption) => {
  colorMode.preference = val.value;
  
};

const currentIcon = computed(() => {
  return THEME_MODES.find(m => m.value === colorMode?.value)?.icon;
});

const toggleMobileNav = () => {
  isMobileNavOpen.value = !isMobileNavOpen.value;
};

const { width } = useWindowSize();
watch(width, () => {
  isMobileNavOpen.value = false;
});

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.ctrlKey && event.key.toLowerCase() === 'p') {
    event.preventDefault();
    toggleCommandPalette();
  }
};

const toggleCommandPalette = () => {
  isCommandPaletteVisible.value = !isCommandPaletteVisible.value;
};

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
  isClient.value = true; // Add this line
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
});
</script>

<template>
  <header v-bind="attrs" class="sticky top-0 z-30 border-b border-border/50 bg-transparent">
    <div class="container mx-auto flex h-14 items-center justify-between">
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
        
        <UiDropdownMenu v-if="isClient"> <!-- Add v-if here -->
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
              @click="setTheme(m)"
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

<style lang="scss" scoped>
    
</style>
