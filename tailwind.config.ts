/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'

import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons'

/** @type {import('tailwindcss').Config} */
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
        'primary': 'var(--primary-color)',
        'secondary': 'var(--secondary-color)',
        'success': 'var(--success-color)',
        'danger': 'var(--danger-color)',
        'warning': 'var(--warning-color)',
        'info': 'var(--info-color)',
        'theme-text-color': 'var(--color)',
        'theme-bg-color': 'var(--bg-color)',
        'theme-border-color': 'var(--border-color)',
      },

    },
  },
  content: [
    'components/**/*.{vue,js,ts}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'composables/**/*.{js,ts}',
    'plugins/**/*.{js,ts}',
    'App.{js,ts,vue}',
    'app.{js,ts,vue}',
    'Error.{js,ts,vue}',
    'error.{js,ts,vue}',
    'content/**/*.md',
  ],
  plugins: [
    typography(),
    iconsPlugin({
      collections: getIconCollections(['mdi', 'lucide', 'logos', 'iconamoon', 'material-symbols']),
    }),
  ],
}
