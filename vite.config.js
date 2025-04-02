import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#34353b',
        secondary: '#3d3e42',
        accent: '#fec86a',
        lightText: '#fbfbfb',
        darkText: '#98999a',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'libre': ['Libre Baskerville', 'serif'],
      },
    },
  },
  plugins: [react(),tailwindcss()],
  
})

