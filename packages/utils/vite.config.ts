import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import VueJsx from '@vitejs/plugin-vue-jsx'
import viteDts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    VueJsx(),
    viteDts({
      // insertTypesEntry: true,
      // staticImport: true,
      rollupTypes: true,
      exclude: './vite.config.ts'
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: 'utils',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`
    },
    outDir: resolve(__dirname, './dist')
  }
})
