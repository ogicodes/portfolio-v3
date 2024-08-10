import {nextui} from '@nextui-org/theme'
import { color } from 'framer-motion'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  darkMode: "class",
 plugins: [nextui({
  themes: {
    dark: {
      colors: {
        background: '#182035',
        foreground: '#cbd2e9',
        primary: {
          foreground: '#cbd2e9',
          background: '#182035',
          DEFAULT: '#f5a524'
        },
        danger: {
          DEFAULT: '#8c1c34'
        }
      }
    },
    light: {
      colors: {
        background: '#ebf0ff',
        foreground: '#182035',
        primary: {
          foreground: '#182035',
          background: '#ebf0ff',
        },
        danger: {
          DEFAULT: '#8c1c34'
        }
      }
    }
  }
 })],
}
