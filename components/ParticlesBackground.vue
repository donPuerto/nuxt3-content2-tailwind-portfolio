<!-- eslint-disable no-console -->
<script lang="ts" setup>
import { shallowRef, ref, onMounted, onUnmounted, nextTick } from 'vue';
import type { Container, ISourceOptions } from '@tsparticles/engine';

const options = shallowRef<ISourceOptions>({
  fullScreen: {
    enable: false,
  },
  background: {
    color: {
      value: 'transparent',
    },
  },
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
      },
    },
    color: {
      value: 'random',
    },
    shape: {
      type: 'circle',
    },
    opacity: {
      value: { min: 0.1, max: 0.9 },
      animation: {
        enable: true,
        speed: 1,
        sync: false,
      },
    },
    size: {
      value: { min: 1, max: 3 },
    },
    move: {
      enable: true,
      speed: 0.1,
      direction: 'none' as const,
      random: true,
      straight: false,
      outModes: 'out',
    },
    twinkle: {
      particles: {
        enable: true,
        color: 'random',
        frequency: 0.05,
        opacity: 1,
      },
    },
  },
});

const particlesContainer = shallowRef<Container | null>(null);
const isMounted = ref(false);

const onLoad = (container: Container) => {
  particlesContainer.value = container;
  // console.log('Particles loaded', container)
};

onMounted(async () => {
  await nextTick();
  isMounted.value = true;
});

onUnmounted(() => {
  if (particlesContainer.value) {
    particlesContainer.value.destroy();
  }
});
</script>

<template>
  <ClientOnly>
    <Suspense>
      <template #default>
        <NuxtParticles
          v-if="isMounted"
          id="tsparticles"
          class="absolute inset-0"
          :options="options"
          @load="onLoad"
        />
      </template>
      <template #fallback>
        <div class="absolute inset-0 bg-primary-900" />
      </template>
    </Suspense>
  </ClientOnly>
</template>
