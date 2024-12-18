import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  assetsInclude: ['**/*.JPG', '**/*.JPEG', '**/*.png', '**/*.jpg', '**/*.mp3', '**/*.MP3'],

  server: {
    proxy: {
      '/api': {
        target: import.meta.env.VITE_API_URL,
        changeOrigin: true, // CORS 문제 해결
        rewrite: (path) => path.replace(/^\/api/, ''), // '/api' 제거 후 전달
      },
    },
  },
})
