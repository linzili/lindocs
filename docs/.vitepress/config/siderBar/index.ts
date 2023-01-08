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
      items: [{ text: 'Spring Security ➕ JWT', link: '/java/spring/springSecurity+jwt' },
      { text: 'SpringFrameword', link: '/java/spring/Spring' },
      { text: 'SpringMvc', link: '/java/spring/SpringMVC' },
      { text: 'SpringBoot', link: '/java/spring/SpringBoot' },
      { text: 'SSM整合', link: '/java/spring/SSM整合' },
        { text: 'Mybatis', link: '/java/spring/Mybatis' },
        { text: 'MyBatis Plus', link: '/java/spring/MybatisPlus' }
      ]
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
      items: [
        { text: '快速开始', link: '/frontend/vue/quick-start' },
        { text: '代码规范', link: '/frontend/vue/code-standard' },
        { text: '通用API', link: '/frontend/vue/api/general' }
      ]
    }
  ]
}
export default {
  '/database/': sidebarDatabase(),
  '/java/': sidebarJava(),
  '/frontend/': sidebarFrontend()
}
