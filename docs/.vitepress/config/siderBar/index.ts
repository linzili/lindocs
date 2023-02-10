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
      text: 'Gradle',
      items: [{ text: 'Gradle', link: '/java/Gradle' }]
    },
    {
      text: 'Spring全家桶',
      items: [
        { text: 'Spring Security ➕ JWT', link: '/java/spring/springSecurityJwt' },
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

function sidebarSpring() {
  return [
    {
      text: 'springcloud',
      items: [
        { text: 'SpringCloud', link: '/spring/springcloud/SpringCloud' },
        { text: 'nacos', link: '/spring/springcloud/nacos' },
        { text: 'sentinel', link: '/spring/springcloud/sentinel' },
        { text: 'gateway', link: '/spring/springcloud/springcloudgateway' }
      ]
    },
    {
      text: 'springboot',
      items: [{ text: 'springboot', link: '/spring/springboot/SpringBoot' },
        { text: 'rabbitMQ', link: '/spring/springboot/rabbitMQ' }]
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

function sidebarNetwork() {
  return [

    {
      text: 'NetWork',
      items: [
        { text: 'IPv6', link: '/network/IPV6' },
        { text: 'Linux', link: '/network/Linux' }
      ]
    }
  ]
}
export default {
  '/database/': sidebarDatabase(),
  '/java/': sidebarJava(),
  '/frontend/': sidebarFrontend(),
  '/spring': sidebarSpring(),
  '/network': sidebarNetwork(),
}
