<script lang="ts" setup>
import { TECHNOLOGIES } from '@/utils/constants';

const isForHire = ref(true);

const toggleHireStatus = () => {
  isForHire.value = !isForHire.value;
};
</script>

<template>
  <div class="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
    <div class="text-center max-w-4xl mx-auto">
      <div>
        <div
          class="inline-flex items-center rounded-full p-1 pr-2 text-sm sm:text-base transition-all duration-300 ease-in-out shadow-lg w-56 sm:w-64 justify-between"
          :class="isForHire ? 'bg-green-500 shadow-green-300/50' : 'bg-gray-500 shadow-gray-300/50'"
        >
          <NuxtLink
            to="/contact"
            class="px-3 py-1 text-white text-xs font-semibold leading-5 uppercase tracking-wide rounded-full transition-all duration-300 ease-in-out flex-grow"
            :class="isForHire ? 'bg-green-600 hover:bg-green-700 glow-green' : 'bg-transparent'"
            @click.prevent="isForHire ? $router.push('/contact') : toggleHireStatus()"
          >
            FOR HIRE
          </NuxtLink>
          <button
            class="px-3 py-1 text-white text-xs font-semibold leading-5 uppercase tracking-wide rounded-full transition-all duration-300 ease-in-out flex-grow"
            :class="!isForHire ? 'bg-gray-600 glow-gray' : 'bg-transparent'"
            @click="toggleHireStatus"
          >
            HIRED
          </button>
        </div>
      </div>
      <h1 class="mt-5 font-extrabold tracking-tight">
        <span class="block space-y-1 sm:space-y-2">
          <span class="block text-xl sm:text-2xl md:text-3xl lg:text-4xl">Looking to hire a developer for your</span>
          <span class="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent glow-text">
            web and mobile
          </span>
          <span class="block text-xl sm:text-2xl md:text-3xl lg:text-4xl">applications?</span>
        </span>
      </h1>
      <p class="mx-auto mt-2 max-w-xl text-base sm:text-lg text-secondary-foreground sm:mt-5 md:mt-6">
        Revolutionize your web and mobile projects with Vue, Nuxt, Next, React Native, Ionic, Supabase, Adonis, and Laravel, ready to deliver excellence!
      </p>
      <div class="mt-2 sm:mt-4 flex flex-wrap justify-center gap-2">
        <UiButton
          v-for="tech in TECHNOLOGIES"
          :key="tech.name"
          variant="ghost"
          class="mb-2"
          :to="tech.url"
          target="_blank"
        >
          <Icon
            class="h-4 w-4 mr-1"
            :name="tech.icon"
          />
          {{ tech.name }}
        </UiButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.glow-text {
  background-image: radial-gradient(circle, #818cf8, #ec4899, #8b5cf6);
  background-size: 200% 200%;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(255, 255, 255, 0.5), 0 0 30px rgba(255, 255, 255, 0.3);
  animation: shine 5s ease infinite;
}

@keyframes shine {
  0% {
    background-position: 0% 0%;
  }
  25% {
    background-position: 100% 100%;
  }
  50% {
    background-position: 100% 0%;
  }
  75% {
    background-position: 0% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
}
</style>
