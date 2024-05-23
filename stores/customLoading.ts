import { defineStore } from 'pinia';

export const useCustomLoadingStore = defineStore({
	id: 'CustomLoadingStore',

	state: () => ({ isLoading: true }),
	actions: {
		setLoading(value: boolean) {
			this.isLoading = value;
		},
	},
});
