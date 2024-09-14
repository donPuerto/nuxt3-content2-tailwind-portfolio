<script lang="ts" setup>
import { ref } from 'vue'

const technologies = [
  { name: 'Vue', url: 'https://vuejs.org/', icon: 'logos:vue' },
  { name: 'Nuxt', url: 'https://nuxt.com/', icon: 'logos:nuxt-icon' },
  { name: 'Next', url: 'https://nextjs.org/', icon: 'logos:nextjs-icon' },
  { name: 'Ionic', url: 'https://ionicframework.com/', icon: 'logos:ionic-icon' },
  { name: 'React Native', url: 'https://reactnative.dev/', icon: 'logos:react' },
  { name: 'Supabase', url: 'https://supabase.com/', icon: 'logos:supabase-icon' },
  { name: 'Laravel', url: 'https://laravel.com/', icon: 'logos:laravel' },
  { name: 'Adonis', url: 'https://adonisjs.com/', icon: 'logos:adonisjs-icon' },
]

const isForHire = ref(true) // true for "FOR HIRE", false for "HIRED"

const toggleHireStatus = () => {
  isForHire.value = !isForHire.value
}
</script>

<template>
  <div class="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
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
      <h1 class="mt-3 font-extrabold tracking-tight">
        <span class="block space-y-1 sm:space-y-2">
          <!-- Smaller text for the first line -->
          <span class="block text-xl sm:text-2xl md:text-3xl lg:text-4xl">Looking to hire a developer for your</span>
          <!-- Larger text for "web and mobile" as the highlight -->
          <span class="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-indigo-400 to-pink-600 bg-clip-text text-transparent">
            web and mobile
          </span>
          <!-- Smaller text for "applications?" -->
          <span class="block text-xl sm:text-2xl md:text-3xl lg:text-4xl">applications?</span>
        </span>
        <div class="mt-4 sm:mt-6 flex items-center justify-center">
          <!-- Combined "Full stack Developer" and "Don Puerto" with different font sizes -->
          <span class="text-lg sm:text-xl md:text-2xl mr-2">Full stack Developer</span>
          <span class="relative text-2xl sm:text-3xl md:text-4xl text-primary">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              class="absolute top-3/4 left-0 right-0 m-auto h-[0.58em] w-full fill-pink-400/50"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
            </svg>
            <span class="relative">Don Puerto</span>
          </span>
        </div>
      </h1>
      <p class="mx-auto mt-4 max-w-xl text-base sm:text-lg text-secondary-foreground sm:mt-5 md:mt-6">
        Revolutionize your web and mobile projects with Vue, Nuxt, Next, React Native, Ionic, Supabase, Adonis, and Laravel, ready to deliver excellence!
      </p>
      <div class="mt-6 sm:mt-8 flex flex-wrap justify-center gap-2">
        <UiButton
          v-for="tech in technologies"
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
.glow-green {
  box-shadow: 0 0 5px #4ade80, 0 0 10px #4ade80, 0 0 15px #4ade80;
  animation: pulse-green 2s infinite;
}

.glow-gray {
  box-shadow: 0 0 5px #9ca3af, 0 0 10px #9ca3af, 0 0 15px #9ca3af;
  animation: pulse-gray 2s infinite;
}

@keyframes pulse-green {
  0% {
    box-shadow: 0 0 5px #4ade80, 0 0 10px #4ade80, 0 0 15px #4ade80;
  }
  50% {
    box-shadow: 0 0 10px #4ade80, 0 0 20px #4ade80, 0 0 30px #4ade80;
  }
  100% {
    box-shadow: 0 0 5px #4ade80, 0 0 10px #4ade80, 0 0 15px #4ade80;
  }
}

@keyframes pulse-gray {
  0% {
    box-shadow: 0 0 5px #9ca3af, 0 0 10px #9ca3af, 0 0 15px #9ca3af;
  }
  50% {
    box-shadow: 0 0 10px #9ca3af, 0 0 20px #9ca3af, 0 0 30px #9ca3af;
  }
  100% {
    box-shadow: 0 0 5px #9ca3af, 0 0 10px #9ca3af, 0 0 15px #9ca3af;
  }
}
</style>
