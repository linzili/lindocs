function sidebarDatabase() {
  return [
    {
      text: 'MySql',
      items: [
        { text: 'mysql基础', link: '/database/mysql/mysql-base' }
        // { text: 'navicat安装', link: '/database/mysql/navicat' }
      ]
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
      items: [{ text: 'Spring Security ➕ JWT', link: '/java/springSecurity+jwt' }]
    }
  ]
}
export default {
  '/database/': sidebarDatabase(),
  '/java/': sidebarJava()
}
