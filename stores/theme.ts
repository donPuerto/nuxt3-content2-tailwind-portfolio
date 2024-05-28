import { useStorage } from '@vueuse/core';
import { defineStore } from 'pinia';

export const useThemeStore = defineStore({
	id: 'themeStore',
	state: () => ({
		currentTheme: useStorage<'light' | 'dark' | 'sepia'>('theme', 'light'),
	}),
	actions: {
		setTheme(theme: 'light' | 'dark' | 'sepia') {
			this.currentTheme = theme;
			// document.documentElement.classList.remove('light', 'dark', 'sepia');
			// document.documentElement.classList.add(theme);
		},
		toggleTheme() {
			const nextTheme = this.currentTheme === 'light'
				? 'dark'
				: this.currentTheme === 'dark' ? 'sepia' : 'light';
			this.setTheme(nextTheme);
		},
		initializeTheme() {
			const colorMode = useColorMode();
			if (!localStorage.getItem('theme')) {
				this.setTheme(colorMode.preference as 'light' | 'dark' | 'sepia');
			}
			else {
				// document.documentElement.classList.add(this.currentTheme);
			}
		},
	},

});
