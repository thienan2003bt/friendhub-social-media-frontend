import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // port: 3000,
    host: '0.0.0.0',  // Ensure Docker can expose the server
    proxy: {
      // Proxy API requests to the backend during development
      '/api': {
        target: 'http://localhost:8100',  // Change to backend URL in development
        changeOrigin: true,
      }
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      }
    }
  },
  //  Add this:
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  // Fix for SPA routing issues
  historyApiFallback: true,
})
