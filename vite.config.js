import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' ensures assets resolve correctly on GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/under-construction/',
})
