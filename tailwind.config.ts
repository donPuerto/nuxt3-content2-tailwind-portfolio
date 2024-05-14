/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'
const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons")

export default <Partial<Config>> {
  theme: {
    extend: {},
  },
  content: [],
  plugins: [
    typography(),
    iconsPlugin({
      // Select the icon collections you want to use
      // You can also ignore this option to automatically discover all individual icon packages you have installed
      // If you install @iconify/json, you should explicitly specify the collections you want to use, like this:
      collections: getIconCollections(["mdi", "lucide"]),
      // If you want to use all icons from @iconify/json, you can do this:
      // collections: getIconCollections("all"),
      // and the more recommended way is to use `dynamicIconsPlugin`, see below.
    }),
  ],
}

