import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import VueJsx from '@vitejs/plugin-vue-jsx'
import viteDts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    VueJsx(),
    viteDts({
      // insertTypesEntry: true,
      // staticImport: true,
      // outDir: './dist/types/'
      rollupTypes: true,
      exclude: './vite.config.ts'
    })
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/index.ts'),
      name: 'table',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`
    },
    outDir: path.resolve(__dirname, './dist'),
    rollupOptions: {
      external: ['vue', 'element-plus', 'vxe-table', 'xe-utils'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
