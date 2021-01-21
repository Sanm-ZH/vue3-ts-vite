import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const resolve = (pathStr: string): string => {
  return path.resolve(__dirname, pathStr)
}

export default defineConfig({
  alias: {
    '@': resolve('./src')
  },
  build: {
    base: './'
  },
  esbuild: {
    target: 'es2020'
  },
  plugins: [vue(), vueJsx()],
  server: {
    host: '127.0.0.1',
    port: 5566,
    open: true
  }
})
