import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',
    port: 3001,
    open: true,
  },
  build: {
    rollupOptions: {
      input: "./index.html",
    },
  },
  // Add this for client-side routing in production
  resolve: {
    alias: {
      "@": "/src",
    },
  },
})
