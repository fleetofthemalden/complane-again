import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // The site is published at https://minnick.co/complane-again/, so every
  // built asset URL needs that prefix.
  base: '/complane-again/',
  plugins: [react(), tailwindcss()],
})
