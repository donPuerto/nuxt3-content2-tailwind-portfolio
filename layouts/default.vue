<template>
  <div class="min-h-screen flex flex-col font-rubik text-gray-800 antialiased dark:bg-gray-900 dark:text-gray-200">
    <AppNavbar />
    <main class="mx-auto flex-1 py-16 container space-y-16 lg:py-24 md:space-y-24">
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
