<script setup>
const particlesId = 'tsparticles'
const particlesLoaded = () => {
  // eslint-disable-next-line no-console
  console.log('Particles loaded')
}

const particlesOptions = ref({
  background: {
    color: {
      value: 'var(--background-color)',
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push',
      },
      onHover: {
        enable: true,
        mode: 'repulse',
      },
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: '#ffffff',
    },
    links: {
      color: '#ffffff',
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: 'bounce',
      random: false,
      speed: 6,
      straight: false,
    },
    number: {
      density: {
        enable: true,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: 'star', // Use star shape
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
})
</script>

<template>
  <client-only>
    <vue-particles
      :id="particlesId"
      :options="particlesOptions"
      @particles-loaded="particlesLoaded"
    />
  </client-only>
</template>
