<script setup lang="ts">
const { app: { footer } } = useAppConfig()
</script>

<template>
  <footer class="text-muted-foreground py-6 md:px-8 md:py-0">
    <div class="container flex flex-col items-center justify-between gap-2 md:h-24 md:flex-row">
      <div class="flex gap-4 text-sm">
        <span class="hidden md:inline">Powered by</span>
        <div
          v-for="(link, i) in footer.links.slice(0, 4)"
          :key="i"
        >
          <NuxtLink
            :to="link.to"
            :target="link.target"
            class="font-bold underline hover:text-primary cursor-pointer"
          >
            {{ link.title }}
          </NuxtLink>
          <span v-if="i < 3">,</span>
        </div>
      </div>
      <span class="flex-1" />
      <span class="text-sm">
        {{ footer.credits }}
      </span>
    </div>
  </footer>
</template>
