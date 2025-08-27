import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Optimize chunks for better loading
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          motion: ['framer-motion'],
          icons: ['lucide-react'],
        },
      },
    },
    // Generate source maps for debugging
    sourcemap: false,
    // Minimize output
    minify: 'terser',
    // Optimize assets
    assetsInlineLimit: 4096,
  },
  // Preview server configuration
  preview: {
    port: 4173,
    host: true,
  },
  // Development server configuration
  server: {
    port: 5173,
    host: true,
  },
})
