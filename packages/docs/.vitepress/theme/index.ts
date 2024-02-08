// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import RyanForm from '@ryan-json-schema-vue3/form'
import '@ryan-json-schema-vue3/form/dist/style.css'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import RyanTable from '@ryan-json-schema-vue3/table'
import {
  AntDesignContainer,
  ElementPlusContainer,
  NaiveUIContainer
} from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.use(ElementPlus)
    app.use(RyanForm)
    app.use(VXETable)
    app.use(RyanTable)
    app.component('demo-preview', ElementPlusContainer)
  }
} satisfies Theme
