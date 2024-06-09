import Particles from '@tsparticles/vue3'
import { loadFull } from 'tsparticles'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Particles, {
    init: async (engine) => {
      await loadFull(engine) // you can load the full tsParticles library from "tsparticles" if you need it
    },
  })
})
