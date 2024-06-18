<script setup lang="ts">
import type { Container } from '@tsparticles/engine'
import { MoveDirection, OutMode } from '@tsparticles/engine'

// Utility function to get CSS variable value
const getCssVariable = (variable: string) => {
  return getComputedStyle(document.documentElement).getPropertyValue(variable).trim()
}

const particlesLoaded = (container?: Container) => {
  // eslint-disable-next-line no-console
  console.log(container)
}
const options = ref({
  background: {
    color: {
      value: 'var(--bg-primary-color)',
    },
  },
  particles: {
    color: {
      value: '#333333',
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

onMounted(() => {
  // Update the particle color with the CSS variable once the component is mounted
  options.value.particles.color.value = getCssVariable('--text-primary-color')
  // eslint-disable-next-line no-console
  console.log('Particles options updated with theme color:', options.value.particles.color.value)
})
</script>

<template>
  <client-only>
    <vue-particles
      id="tsparticles"
      :options="options"
      @particles-loaded="particlesLoaded"
    />
  </client-only>
</template>
