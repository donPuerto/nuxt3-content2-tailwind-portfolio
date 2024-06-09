<script setup lang="ts">
import type { Container } from '@tsparticles/engine'
import { MoveDirection, OutMode } from '@tsparticles/engine'

const particlesLoaded = (container?: Container) => {
  // eslint-disable-next-line no-console
  console.log(container)
}
const options = ref({
  background: {
    color: {
      value: 'var(--background-color)',
    },
  },
  particles: {
    color: {
      value: '#ffffff',
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
