import { defineConfig } from 'vitepress'
import nav from './config/nav'
import sidebar from './config/siderBar'
import algolia from './config/algolia'
export default defineConfig({
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  // 资源目录
  srcDir: './src',
  // 语言
  lang: 'zh-CN',
  // 标题
  title: 'LinDocs',
  // seo优化
  description: 'Vite & Vue powered static site generator.',
  // 最后更新时间
  lastUpdated: true,
  // 代码行
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    // 导航
    nav,
    // 侧边栏
    sidebar,
    // 页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2021-present Lin ZiLi'
    },
    algolia
  }
})