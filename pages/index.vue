<script lang="ts" setup>
const colorMode = useColorMode()

function setColorMode(mode: string) {
  colorMode.preference = mode
}
</script>

<template>
  <div>
    <h1 class="bg-theme-test">
      Home Page
    </h1>
    <UiButton
      class="bg-background text-foreground"
      @click="setColorMode('light')"
    >
      Light Theme
    </UiButton>
    <UiButton variant="secondary">
      Secondary
    </UiButton>
    <UiButton variant="outline">
      Outline
    </UiButton>
    <UiButton
      class="bg-background text-foreground"
      @click="setColorMode('dark')"
    >
      Dark Theme
    </UiButton>
    <UiButton
      class="bg-background text-foreground"
      @click="setColorMode('sepia')"
    >
      Sepia Theme
    </UiButton>
  </div>
</template>

<style scoped></style>
