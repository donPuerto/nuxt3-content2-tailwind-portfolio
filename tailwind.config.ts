/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons';

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
			animation: {
				'gradient-border': 'gradient-border 5s infinite linear',
			},
			keyframes: {
				'gradient-border': {
					'0%': { 'stroke-dashoffset': '0' },
					'100%': { 'stroke-dashoffset': '200' },
				},
			},
			backgroundImage: {
				'gradient-border': 'linear-gradient(90deg, #ff7e5f, #feb47b)',
			},
		},
	},
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./app.vue',
		'./error.vue',
	],
	plugins: [
		typography(),
		iconsPlugin({
			// Select the icon collections you want to use
			// You can also ignore this option to automatically discover all individual icon packages you have installed
			// If you install @iconify/json, you should explicitly specify the collections you want to use, like this:
			collections: getIconCollections(['mdi', 'lucide']),
			// If you want to use all icons from @iconify/json, you can do this:
			// collections: getIconCollections("all"),
			// and the more recommended way is to use `dynamicIconsPlugin`, see below.
		}),
	],
};
