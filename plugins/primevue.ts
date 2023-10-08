/* eslint-disable vue/no-reserved-component-names */
import PrimeVue from 'primevue/config'
import Tailwind from 'primevue/passthrough/tailwind'

// components
import Button from 'primevue/button'
import Toolbar from 'primevue/toolbar'

export default defineNuxtPlugin((nuxtApp) => {
  const app = nuxtApp.vueApp
  app.use(PrimeVue, { ripple: true, unstyled: true, pt: Tailwind })

  // components
  app.component('Button', Button)
  app.component('Toolbar', Toolbar)
})
