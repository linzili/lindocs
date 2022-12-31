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

function sidebarJava() {
  return [
    {
      text: 'Java',
      items: [{ text: 'java基础', link: '/java/java-base' }]
    },
    {
      text: 'Spring全家桶',
      items: [{ text: 'Spring Security ➕ JWT', link: '/java/spring-security+jwt' }]
    }
  ]
}
export default {
  '/guide/': sidebarGuide(),
  '/database/': sidebarDatabase(),
  '/java/': sidebarJava()
}
