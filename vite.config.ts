import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components/'),
      '@layouts': path.resolve(__dirname, './src/layouts/'),
      '@interfaces': path.resolve(__dirname, './src/interfaces/'),
      '@assets': path.resolve(__dirname, './src/assets/'),
      '@store': path.resolve(__dirname, './src/store/'),
      '@constants': path.resolve(__dirname, './src/constants/'),
      '@utils': path.resolve(__dirname, './src/utils/'),
      '@hooks': path.resolve(__dirname, './src/hooks/'),
      '@pages': path.resolve(__dirname, './src/pages/'),
    },
    dedupe: ['react', 'react-dom'],
  },
})
