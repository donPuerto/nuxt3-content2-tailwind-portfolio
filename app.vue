<script setup>
const colorMode = useColorMode()

console.log(colorMode.preference)
</script>

<template>
  <div>
    <NuxtLayout>
      <p class="p-4 pb-2">
        <h1>Color mode: {{ $colorMode.value }}</h1>
        <select v-model="$colorMode.preference">
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="sepia">Sepia</option>
        </select>
    </p>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>


<style>

</style>
