import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base URL pour GitHub Pages
  // À modifier avec le nom réel du repo GitHub (ex: '/portfolio/')
  base: '/portfolio/', // Remplacez 'portfolio' par le nom de votre repo GitHub
})
