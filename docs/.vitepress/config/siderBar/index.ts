function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      items: [{ text: 'What is VitePress?', link: '/guide/what-is-vitepress' }]
    }
  ]
}
function sidebarDatabase() {
  return [
    {
      text: 'MySql',
      items: [{ text: 'mysql基础', link: '/database/mysql-base' }]
    }
  ]
}
export default {
  '/guide/': sidebarGuide(),
  '/database/': sidebarDatabase()
}
