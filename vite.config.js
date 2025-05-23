import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// vite.config.js
export default defineConfig({
  base: "/Props2/", 
  plugins: [
    react(),
    tailwindcss()
  ],
})