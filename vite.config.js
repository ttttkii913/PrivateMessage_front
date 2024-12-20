import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // 환경 변수 로드
  const env = loadEnv(mode, process.cwd()); // mode와 현재 작업 경로 명시적으로 지정
  console.log('Loaded VITE_API_URL:', env.VITE_API_URL); // 디버깅용 로그 출력

  return {
    plugins: [
      vue(),
      vueDevTools(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    assetsInclude: ['**/*.JPG', '**/*.JPEG', '**/*.png', '**/*.jpg', '**/*.mp3', '**/*.MP3'],
    server: {
      proxy: {
        '/api': {
          target: env.VITE_API_URL, // loadEnv로 로드된 환경 변수 사용
          changeOrigin: true, // CORS 문제 해결
          rewrite: (path) => path.replace(/^\/api/, ''), // '/api' 제거 후 전달
        },
      },
    },
  };
});
