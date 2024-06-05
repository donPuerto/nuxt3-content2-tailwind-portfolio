// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(

  // ...Custom flat configs append after nuxt's configs
  {

    ignores: [
      '**/dist',
      '**/node_modules',
      '**/.nuxt',
      '**/.output',
      '**/.vercel',
    ],
    files: ['**/*.ts', '**/*.tsx'],

    rules: {
      'vue/no-v-html': 'off',
      '@typescript-eslint/explicit-function-return-type': 'error',
      'no-trailing-spaces': ['warn'],
      'vue/multi-word-component-names': 'off',
      // @ts-ignore
      'vue/multi-word-component-names': ['error', {
        ignores: ['error', 'Error'],
      }],
    },

  },

)
