export default defineAppConfig({
  ui: {
    // strategy: 'override',
    primary: 'pigment-indigo',
    gray: 'abbey',
    colors: ['bunker'],
    variables: {
      light: { // Light theme colors
        background: 'body.light theme-bg-primary-color', // Using Tailwind's built-in 'gray-100' color
        foreground: 'text-gray-700', // Using Tailwind's built-in 'text-gray-700' color
      },
      dark: { // Dark theme colors (optional)
        background: 'body.light theme-bg-primary-color', // Using Tailwind's built-in 'gray-900' color
        foreground: 'text-gray-200', // Using Tailwind's built-in 'text-gray-200' color
      },
    },
  },
  button: {

  },
  icon: {
    size: '24px', // default <Icon> size applied
    class: 'icon', // default <Icon> class applied
    aliases: {
      nuxt: 'logos:nuxt-icon',
    },
  },

})
