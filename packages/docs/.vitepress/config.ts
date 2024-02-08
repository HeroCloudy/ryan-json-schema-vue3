import { defineConfig } from 'vitepress'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Ryan JSON Schema 组件',
  description: '基于 Vue3、Element Plus、VxeTable 实现的 JSON Schema 表单和列表',
  themeConfig: {
    logo: '/logo.png',
    logoLink: '/',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '快速上手', link: '/getting-start/installation.md' },
      { text: '组件', link: '/components/index' }
    ],

    sidebar: [
      { text: 'Ryan JSON Schema', link: '/components/index' },
      {
        text: '快速上手',
        items: [
          { text: '安装使用', link: '/getting-start/installation.md' },
          { text: 'JSON Schema', link: '/getting-start/json-schema.md' }
        ]
      },
      {
        text: 'Form 表单',
        items: [
          { text: 'Json Form JSON 表单', link: '/components/json-form' },
          {
            text: 'Json Form Description JSON 表单/描述',
            link: '/components/json-form-description'
          }
        ]
      },
      {
        text: 'Table 表格',
        items: [{ text: 'Json Table JSON 表格', link: '/components/json-table' }]
      }
    ],

    outline: {
      level: 'deep'
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
  },
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  }
})
