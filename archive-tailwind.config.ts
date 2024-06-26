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
        'theme-primary-color': 'var(--primary-color)',
        'theme-secondary-color': 'var(--secondary-color)',
        'theme-success-color': 'var(--success-color)',
        'theme-danger-color': 'var(--danger-color)',
        'theme-warning-color': 'var(--warning-color)',
        'theme-info-color': 'var(--info-color)',
        'theme-text-primary-color': 'var(--text-primary-color)',
        'theme-text-secondary-color': 'var(--text-secondary-color)',
        'theme-bg-primary-color': 'var(--bg-primary-color)',
        'theme-bg-secondary-color': 'var(--bg-secondary-color)',
        'theme-border-color': 'var(--border-color)',
        'theme-bg-anchor-tag-hover-color': 'var(--bg-anchor-tag-hover-color)',
        'theme-bg-hover-color': 'var(--bg-hover-color)',

        'bunker': {
          50: '#f4f6fb',
          100: '#e8ecf6',
          200: '#ccd8eb',
          300: '#a0b8d9',
          400: '#6d92c3',
          500: '#4a74ad',
          600: '#385b91',
          700: '#2f4975',
          800: '#2a4062',
          900: '#273753',
          950: '#080b11',
        },
        'abbey': {
          50: '#f5f5f6',
          100: '#e6e6e7',
          200: '#d0cfd2',
          300: '#afaeb2',
          400: '#88858b',
          500: '#6d6a70',
          600: '#5d5a60',
          700: '#4f4d51',
          800: '#454446',
          900: '#3d3b3e',
          950: '#272527',
        },

        'pigment-indigo': {
          50: '#f9f3ff',
          100: '#f2e5ff',
          200: '#e6cfff',
          300: '#d3a9ff',
          400: '#b872ff',
          500: '#9e3dff',
          600: '#8717ff',
          700: '#7308e8',
          800: '#630dbc',
          900: '#450a7f',
          950: '#370072',
        },

      },

    },
  },
  content: [
    'docs/content/**/*.md',
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
