import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://pixelboutique.onrender.com',
        changeOrigin: true,
        secure: false
        // 1. OPTIONAL: Remove '/api' before sending the request to the backend
        // rewrite: (path) => path.replace(/^\/api/, ''), 
      }
    }
  }
})
