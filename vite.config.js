import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          three: ['three', '@react-three/fiber', '@react-three/drei'],
          animations: ['framer-motion', 'animate.css', '@react-spring/web'],
          ui: ['@mui/material', '@mui/icons-material', '@emotion/react', '@emotion/styled', 'styled-components'],
        },
      },
    },
  },
})
