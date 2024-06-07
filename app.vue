<script setup lang="ts">
import LoadingIndicator from '@/components/LoadingIndicator.vue'

// const colorMode = useColorMode();
// console.log(colorMode.preference);

// Initialize the loading indicator with custom settings
const { start, finish } = useLoadingIndicator({
  duration: 2000,
  throttle: 200,
  estimatedProgress: (duration, elapsed) => (2 / Math.PI * 100) * Math.atan(elapsed / duration * 100 / 50),
})

// Use onMounted lifecycle hook to control the loading indicator programmatically
onMounted(() => {
  setTimeout(() => {
    start()
    setTimeout(() => {
      finish()
    }, 2000)
  }, 1000)
})

// console.log(colorMode);
</script>

<template>
  <NuxtLoadingIndicator
    color="#158876"
    error-color="#ff0000"
    :height="5"
  />
  <NuxtLayout>
    <div class="">
      Tailwind
    </div>
    <p class="p-4 pb-2" />
    <!-- <div>Color Mode: {{ $colorMode.preference }}</div> -->

    <select v-model="$colorMode.preference">
      <option value="system">
        System
      </option>
      <option value="light">
        Light
      </option>
      <option value="dark">
        Dark
      </option>
      <option value="sepia">
        Sepia
      </option>
    </select>

    <NuxtPage />

    <div>Font:</div>
    <div>
      <div class="font-inter-light">
        This is text with the Inter Light font.
      </div>
      <div class="font-inter-regular">
        This is text with the Inter Regular font.
      </div>
      <div class="font-inter-bold">
        This is text with the Inter Bold font.
      </div>
      <div class="font-olupos">
        This is text with the Olupos font.
      </div>
      <div class="font-spacegrotesk-light">
        This is text with the Space Grotesk Light font.
      </div>
      <div class="font-spacegrotesk-regular">
        This is text with the Space Grotesk Regular font.
      </div>
      <div class="font-spacegrotesk-medium">
        This is text with the Space Grotesk Medium font.
      </div>
      <div class="font-spacegrotesk-bold">
        This is text with the Space Grotesk Bold font.
      </div>
    </div>

    <br>
    <div>Iconify</div>
    <div>
      <p>Material Design Icon (MDI)</p>
      <span class="i-mdi-home hover:i-mdi-home-alert text-5xl cursor-pointer text-green-800" />
      <br>
      <p>Lucile</p>
      <span
        class="i-lucide-a-arrow-down
        text-5xl
        cursor-pointer
        text-green-800"
      />
      <br>
      <p>SVG Logos</p>
      <span class="i-logos-vue text-5xl text-green-800 cursor-pointer transition duration-300 ease-in-out transform hover:scale-110" />
      <br>
      <p class="bg-red-700">
        Tailwind IntelliSense
      </p>
      <h1 class="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-100">
        Gradient title
      </h1>
    </div>
  </NuxtLayout>
  <LoadingIndicator />
</template>

<style lang="scss">

</style>
