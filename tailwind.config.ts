/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'

import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons'

export default <Partial<Config>> {
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter Regular', 'sans-serif'],
        'inter-light': ['Inter Light', 'sans-serif'],
        'inter-bold': ['Inter Bold', 'sans-serif'],
        'olupos': ['Olupos', 'sans-serif'],
        'spacegrotesk-light': ['SpaceGrotesk-Light', 'sans-serif'],
        'spacegrotesk-regular': ['SpaceGrotesk-Regular', 'sans-serif'],
        'spacegrotesk-medium': ['SpaceGrotesk-Medium', 'sans-serif'],
        'spacegrotesk-bold': ['SpaceGrotesk-Bold', 'sans-serif'],
      },
      colors: {
        'primary': 'var(--color-primary)',
        'secondary': 'var(--color-secondary)',
        'background': 'var(--bg)',
        'background-secondary': 'var(--bg-secondary)',
        'border': 'var(--border-color)',
        'text': 'var(--color)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
      },

    },
  },
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  plugins: [
    typography(),
    iconsPlugin({
      collections: getIconCollections(['mdi', 'lucide', 'logos']),
    }),
  ],
}
