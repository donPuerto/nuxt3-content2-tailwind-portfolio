<script lang="ts" setup>
import { Button } from '@/components/ui/button'

const colorMode = useColorMode()

function setColorMode(mode: string) {
  colorMode.preference = mode
}
</script>

<template>
  <div class="">
    <h1>
      Home Page
    </h1>
    <Button
      class="bg-background text-foreground"
      @click="setColorMode('light')"
    >
      Light Theme
    </Button>
    <Button
      class="bg-background text-foreground"
      @click="setColorMode('dark')"
    >
      Dark Theme
    </Button>
    <Button
      class="bg-background text-foreground"
      @click="setColorMode('sepia')"
    >
      Sepia Theme
    </Button>
  </div>
</template>

<style scoped>

</style>
