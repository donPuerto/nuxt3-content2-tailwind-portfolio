<script lang="ts" setup>
</script>

<template>
  <div class="min-h-screen flex flex-col relative">
    <ParticlesBackground />
    <div class="absolute inset-0 flex flex-col min-h-screen">
      <TopBar />
      <main class="flex-grow">
        <slot />
      </main>
      <div>Footer</div>
    </div>
  </div>
</template>

<style>

</style>
