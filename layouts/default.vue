<script lang="ts" setup>
</script>

<template>
  <div class="min-h-screen flex flex-col relative">
    <ParticlesBackground />
    <div class="absolute inset-0 flex flex-col">
      <div>Header</div>
      <!-- <div class="p-5 mx-auto bg-navbar-background text-navbar-color rounded border-y-2-navbar-bottom-border  ">
        <NavBar />
      </div> -->
      <main class="flex-grow">
        <slot />
      </main>
      <div>Footer</div>
    </div>
  </div>
</template>

<style>

</style>
