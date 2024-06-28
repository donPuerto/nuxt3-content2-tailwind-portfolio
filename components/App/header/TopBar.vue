<script setup lang="ts"></script>

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
    <MobileBarMenu />
  </header>
</template>
