import { fontFamily } from 'tailwindcss/defaultTheme'
import tailwindcss from 'tailwindcss'
import formsPlugin from '@tailwindcss/forms'
import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
        },
        screens: {
          '2xl': '1300px',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'Inter', ...fontFamily.sans],
        mono: ['"Liberation Mono"', ...fontFamily.mono],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem',
        '10xl': '8rem',
        '11xl': '9rem',
        '12xl': '10rem',
        '13xl': '11rem',
        '14xl': '12rem',
        '15xl': '13rem',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0px' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0px' },
        },
        'fadeIn': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'fadeOut': {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        'collapse-down': {
          from: { height: '0px' },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        'collapse-up': {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: '0px' },
        },
        'background': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fadeIn': 'fadeIn 0.2s ease-out',
        'fadeOut': 'fadeOut 0.2s ease-out',
        'collapse-down': 'collapse-down 0.2s ease-out',
        'collapse-up': 'collapse-up 0.2s ease-out',
        'border': 'background ease infinite',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      lineClamp: {
        7: '7',
        8: '8',
        9: '9',
        10: '10',
      },
    },
  },
  variants: {
    lineClamp: ['responsive', 'hover'],
  },
  plugins: [
    tailwindcss(),
    formsPlugin({ strategy: 'class' }),
    plugin(function ({ addComponents }) {
      addComponents({
        '.blog-content-heading': {
          // marginTop: '0.5em',
          // marginBottom: '1.5em',
          // fontWeight: '800',
          // lineHeight: '1.2',
          color: 'hsl(var(--foreground))',
        },

      })
    }),
  ],
}
