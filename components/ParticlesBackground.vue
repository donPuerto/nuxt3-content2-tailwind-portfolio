<!-- eslint-disable no-console -->
<script setup lang="ts">
import { MoveDirection, OutMode } from '@tsparticles/engine'
import { onMounted } from 'vue'
import type { Container } from '@tsparticles/engine'

// Utility function to get CSS variable value
const getCssVariable = (variable: string) => {
  return getComputedStyle(document.documentElement).getPropertyValue(variable).trim()
}

const particlesLoaded = (container?: Container) => {
  // eslint-disable-next-line no-console
  console.log(container)
}
const particleOptions = ref({
  background: {
    color: {
      // Set a default value or make it transparent initially
      value: 'tranparent',
    },
  },
  particles: {
    color: {
      // Fallback value
      value: '#ffff',
    },
    number: {
      value: 100,
    },
    move: {
      direction: MoveDirection.none,
      enable: true,
      outModes: {
        default: OutMode.out,
      },
      random: true,
      speed: 0.1,
      straight: false,
    },
    opacity: {
      animation: {
        enable: true,
        speed: 1,
        sync: false,
      },
      value: { min: 0, max: 1 },
    },
    size: {
      value: { min: 1, max: 3 },
    },
  },
})

const updateParticleColors = () => {
  const themeColor = getCssVariable('text-foreground')
  particleOptions.value.particles.color.value = themeColor
}

onMounted(() => updateParticleColors())
</script>

<template>
  <client-only>
    <vue-particles
      id="tsparticles"
      :options="particleOptions"
      @particles-loaded="particlesLoaded"
    />
  </client-only>
</template>
