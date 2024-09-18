<script setup lang="ts">
import { FOOTER_LINKS } from '~/utils/constants';

// Ensure FOOTER_LINKS is available and has a default value
const footerLinks = FOOTER_LINKS || [];
</script>

<template>
  <!-- Adjusted padding: reduced for large screens, increased for small screens -->
  <footer class="bg-background/80 backdrop-blur-sm border-t border-border py-4 md:py-0.5">
    <div class="container mx-auto flex flex-col items-center justify-between gap-1 md:gap-2 md:flex-row md:h-14">
      <div class="flex flex-wrap justify-center items-center gap-1 w-full md:w-auto">
        <span class="text-sm text-muted-foreground">Powered by:</span>
        <div class="flex flex-wrap justify-center items-center">
          <div
            v-for="(link, i) in footerLinks.slice(0, 4)"
            :key="i"
            class="flex items-center gap-1"
          >
            <NuxtLink
              :to="link.to"
              :target="link.target"
              class="font-medium text-sm text-muted-foreground hover:text-primary transition-colors duration-200 hover:glow"
            >
              {{ link.title }}
            </NuxtLink>
            <span v-if="i < 3" class="text-muted-foreground mx-2">&middot;</span>
          </div>
        </div>
      </div>
      <p class="text-sm text-muted-foreground text-center md:text-left">
        &copy;{{ new Date().getFullYear() }} Don Puerto. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<style scoped>
.hover\:glow:hover {
  text-shadow: 0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor;
}
</style>
