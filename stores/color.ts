import { defineStore } from 'pinia'

export const useColorStore = defineStore({
  id: 'colorStore',
  state: () => ({
    primaryColor: '#158876', // Default primary color
  }),
  actions: {
    setPrimaryColor(newColor: string) {
      this.primaryColor = newColor
    },

  },
})
