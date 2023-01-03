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
function sidebarFrontend() {
  return [
    {
      text: 'JavaScript',
      items: [{ text: 'JavaScript基础', link: '/frontend/js/' }]
    },
    {
      text: 'Vue',
      items: [{ text: '通用API', link: '/frontend/vue/api/general' }]
    }
  ]
}
export default {
  '/database/': sidebarDatabase(),
  '/java/': sidebarJava(),
  '/frontend/': sidebarFrontend()
}
