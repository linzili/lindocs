import { defineConfig } from 'vitepress'
import nav from './config/nav'
import sidebar from './config/siderBar'
import algolia from './config/algolia'
export default defineConfig({
  base: '/lindocs/',
  head: [
    ['link', { rel: 'icon', href: './favicon.ico' }],
    [
      'script',
      {},
      "var _hmt = _hmt || [];(function () { var hm = document.createElement('script') hm.src = 'https://hm.baidu.com/hm.js?9a9e392378488c5210fec8d7808cdd68' var s = document.getElementsByTagName('script')[0] s.parentNode.insertBefore(hm, s)})()"
    ]
  ],
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
    lineNumbers: true,
    theme: 'github-dark'
  },
  themeConfig: {
    recommend: {
      mpwx: 'https://markdown-1303834149.cos.ap-shanghai.myqcloud.com/markdown/img/6593924985b60756ef48c391e43d48a.png'
    },
    outline: [2, 3],
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
