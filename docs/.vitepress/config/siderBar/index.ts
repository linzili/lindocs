function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      items: [{ text: 'What is VitePress?', link: '/guide/what-is-vitepress' }]
    }
  ]
}

export default {
  '/guide/': sidebarGuide()
}
