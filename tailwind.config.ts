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
        'theme-text-primary-color': 'var(--text-primary-color)',
        'theme-text-secondary-color': 'var(--text-secondary-color)',
        'theme-bg-primary-color': 'var(--bg-primary-color)',
        'theme-bg-secondary-color': 'var(--bg-secondary-color)',
        'theme-border-color': 'var(--border-color)',
        'theme-bg-anchor-tag-hover-color': 'var(--bg-anchor-tag-hover-color)',
        'theme-bg-hover-color': 'var(--bg-hover-color)',
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
      collections: getIconCollections([
        'mdi',
        'lucide',
        'logos',
        'iconamoon',
        'material-symbols',
        'ph',
        'tdesign',
        'ri',
        'arcticons',
        'hugeicons',
        'clarity',
        'line-md',
      ]),
    }),
  ],
}
