<script setup lang="ts">
import { ref } from 'vue';
import CardSpotlight from '~/components/CardSpotlight.vue';

const name = ref('Don Puerto');
const nickname = ref('Don');
const intro = ref('I architect innovative digital solutions that bridge cutting-edge technology with real-world impact.');
const background = ref(`Armed with a BS in Computer Engineering and over a decade of hands-on experience, I've established myself as a versatile and forward-thinking software developer. My journey through the digital landscape has been marked by continuous learning, adaptation, and a relentless pursuit of excellence.

Over the years, I've honed my expertise in a diverse array of technologies, including Vue, Nuxt, Next, React Native, Flutter, Supabase, Laravel, and Adonis. This comprehensive skill set allows me to craft bespoke, cross-platform solutions that seamlessly blend functionality with user-centric design.

Throughout my career, I've tackled complex challenges head-on, transforming abstract concepts into robust, high-performance applications. My approach to software development is characterized by:

A commitment to clean, maintainable code;
A focus on scalable and future-proof architecture;
An eye for intuitive user experiences;
A drive for continuous improvement and innovation

What sets me apart is not just my technical proficiency, but my ability to see the bigger picture. I don't just write code; I create digital ecosystems that drive business growth, enhance user engagement, and push the boundaries of what's possible in the digital realm.`);

const techPhilosophy = ref('In the ever-evolving world of technology, I believe in the power of adaptive learning and strategic innovation. My philosophy is to stay ahead of the curve, not just by keeping up with the latest trends, but by anticipating future needs and preparing for them. This forward-thinking approach ensures that the solutions I develop are not only cutting-edge today but will remain relevant and effective well into the future.');

const hobbiesText = ref('While code is my professional medium, I find spiritual renewal and inspiration in God\'s creation. When I\'m not developing digital solutions, you\'ll find me tending to the earth through farming, marveling at His majesty atop mountain peaks, or cycling through scenic landscapes He\'s crafted. These activities not only rejuvenate my spirit but also remind me of the greater purpose behind my work – to use technology as a means to glorify God and serve others.');

const interests = ref([
  'Farming',
  'Mountain Climbing',
  'Biking',
  'Spiritual Rejuvenation',
]);

const closingText = ref('In the vast realm of technology, I see a divine opportunity to positively impact our world. My mission, guided by faith, is to harness this potential to create innovative solutions that not only address today\'s challenges but also pave the way for a brighter, more connected future. Whether I\'m navigating the complexities of a coding problem or scaling a mountain peak, I approach each task with the same spirit of devotion, excellence, and gratitude for the abilities God has bestowed upon me.');
</script>

<template>
  <div class="container mx-auto px-5 sm:px-6 lg:px-8 py-8 max-w-[912px]">
    <div class="bg-background bg-opacity-80 p-8 rounded-lg">
      <h1 class="text-2xl font-bold mb-4 text-foreground text-center">
        About Me
      </h1>

      <p class="text-xl mb-6 text-foreground text-center">
        Greetings! I'm {{ name }}, though {{ nickname }} works just fine 👋. <span class="underline decoration-primary">{{ intro }}</span>
      </p>

      <ClientOnly>
        <UiGradientDivider class="mb-6" />
      </ClientOnly>
      <p
        class="mb-6 text-foreground text-justify"
        v-html="background.replace(/\n\n/g, '<br><br>')"
      />

      <p
        class="mb-6 text-foreground text-justify"
        v-html="techPhilosophy"
      />

      <p
        class="mb-6 text-foreground text-justify"
        v-html="hobbiesText"
      />

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <CardSpotlight
          v-for="interest in interests"
          :key="interest"
          class="aspect-[3/1]"
        >
          {{ interest }}
        </CardSpotlight>
      </div>

      <p
        class="text-muted-foreground text-justify"
        v-html="closingText"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
