<!-- eslint-disable no-console -->
<script setup lang="ts">
import type { Container } from '@tsparticles/engine'
import { MoveDirection, OutMode } from '@tsparticles/engine'

// Utility function to get CSS variable value
const getCssVariable = (variable: string) => {
  const value = getComputedStyle(document.documentElement).getPropertyValue(variable).trim()
  console.log(`Fetched CSS variable ${variable}: ${value}`) // Debugging log
  return value
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

const themeColors = {
  textPrimaryColor: ref(getCssVariable('--text-primary-color')),
  bgPrimaryColor: ref(getCssVariable('--bg-primary-color')),
}

const updateParticleColors = () => {
  particleOptions.value.particles.color.value = themeColors.textPrimaryColor.value
  particleOptions.value.background.color.value = themeColors.bgPrimaryColor.value

  console.log('Particle options updated with theme colors:', {
    particlesColor: particleOptions.value.particles.color.value,
    backgroundColor: particleOptions.value.background.color.value,
  })
}

const watchThemeChanges = () => {
  watchEffect(() => {
    // Ensure getComputedStyle is available and run only on client side
    if (import.meta.client) {
      themeColors.textPrimaryColor.value = getComputedStyle(document.documentElement).getPropertyValue('--text-primary-color').trim()
      themeColors.bgPrimaryColor.value = getComputedStyle(document.documentElement).getPropertyValue('--bg-primary-color').trim()

      updateParticleColors()
    }
  })
}

// Watch for theme changes
onMounted(() => {
  watchThemeChanges()
})
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
