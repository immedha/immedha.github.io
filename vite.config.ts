import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/', // You can use '/' for user pages like immedha.github.io
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true
  }
})
