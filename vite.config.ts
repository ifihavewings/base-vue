import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

console.log(process.env.VITE_APP_ENV)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    // 自动导入 Element-UI 组件
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      // 这里是配置 Sass 的地方
      scss: {
        additionalData: `@import "@/assets/styles/variables.scss";`, // 可以添加全局的样式变量等
      },
    },
  },
  server: {
    proxy: {
      '/api/v1/nest': {
        target: 'http://localhost:3000', // 代理目标的基础路径
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api\/v1\/nest/, ''), // 将请求路径中的 /api 前缀重写为空
      },
      '/api': {
        target: 'http://localhost:3000', // 代理目标的基础路径
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '/api'), // 将请求路径中的 /api 前缀重写为空
      },

      
      
    },
  },
})
