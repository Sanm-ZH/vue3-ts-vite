import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const resolve = (pathStr: string): string => {
  return path.resolve(__dirname, pathStr)
}

export default defineConfig({
  define: {
    'process.env': process.env
  },
  resolve: {
    alias: {
      '@': resolve('src')
    }
  },
  base: './',
  build: {

  },
  esbuild: {
    target: 'es2019'
  },
  plugins: [vue(), vueJsx()],
  server: {
    host: '127.0.0.1',
    port: 5566,
    open: true
  }
})
