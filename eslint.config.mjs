// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // ...Custom flat configs append after nuxt's configs
   {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
        //'no-console': 'off' // allow console.log in TypeScript files
     }
   }
) .prepend(
  // ...Prepend some flat configs in front
)
.override('nuxt/typescript', {
  rules: {
    // ...Override rules, for example:
    // '@typescript-eslint/ban-types': 'off'
    
  }
})
