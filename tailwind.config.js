// @ts-check
import { indigo, zinc } from 'tailwindcss/colors'
import { fontFamily } from 'tailwindcss/defaultTheme'

export const content = [
  './node_modules/pliny/**/*.js',
  './app/**/*.{js,ts,jsx,tsx}',
  './pages/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',
  './layouts/**/*.{js,ts,jsx,tsx}',
  './data/**/*.mdx',
]
export const darkMode = 'class'
export const theme = {
  extend: {
    lineHeight: {
      11: '2.75rem',
      12: '3rem',
      13: '3.25rem',
      14: '3.5rem',
    },
    fontFamily: {
      sans: ['var(--font-ibm-plex)', ...fontFamily.sans],
    },
    colors: {
      primary: indigo,
      gray: zinc,
    },
    typography: ({ theme }) => ({
      DEFAULT: {
        css: {
          a: {
            color: theme('colors.primary.500'),
            '&:hover': {
              color: `${theme('colors.primary.600')}`,
            },
            code: { color: theme('colors.primary.400') },
          },
          'h1,h2': {
            fontWeight: '700',
            letterSpacing: theme('letterSpacing.tight'),
          },
          h3: {
            fontWeight: '600',
          },
          code: {
            color: theme('colors.indigo.500'),
          },
        },
      },
      invert: {
        css: {
          a: {
            color: theme('colors.primary.500'),
            '&:hover': {
              color: `${theme('colors.primary.400')}`,
            },
            code: { color: theme('colors.primary.400') },
          },
          'h1,h2,h3,h4,h5,h6': {
            color: theme('colors.gray.100'),
          },
        },
      },
    }),
  },
}
export const plugins = [require('@tailwindcss/forms'), require('@tailwindcss/typography')]