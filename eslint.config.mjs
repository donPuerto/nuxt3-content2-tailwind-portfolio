// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // ...Custom flat configs append after nuxt's configs
 
) .prepend(
  // ...Prepend some flat configs in front
)
.override('nuxt/typescript', {
  rules: {
    // ...Override rules, for example:
    // '@typescript-eslint/ban-types': 'off'
    
  }
})
