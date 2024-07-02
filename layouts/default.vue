<script lang="ts" setup></script>

<template>
  <div class="relative flex min-h-screen flex-col">
    <ParticlesBackground />
    <div class="absolute inset-0 flex min-h-screen flex-col">
      <AppHeaderTopBar />
      <main class="flex-grow">
        <slot />
      </main>
      <div>Footer</div>
    </div>
  </div>
</template>

<style></style>
