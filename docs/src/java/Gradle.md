# Gradle 工具使用

::: info
Gradle是一款Google推出的 基于JVM、 通用灵活的 项目构建工具， 支持Maven，JCenter多种第三方仓库;支持传递性依赖管理、废弃了繁杂的xml文件，转而使用 简洁的 、 支持多种语言 (例如：java、groovy等)的 build脚本文件 。
:::

## Gradle 构建过程

> Gradle 的构建过程是通⽤的，任何由 Gradle 构建的项⽬都遵循这个过程。

Gradle 构建分为三个阶段，每个阶段都有⾃⼰的职责，每个阶段都完成⼀部分任务，前⼀阶段的成果是下⼀阶
段继续执⾏的前提：

- Initialization --> 初始化阶段。按顺序执⾏ init.gradle -> settings.gradle 脚本，⽣成 Gradle、Setting、Project 对象
- Configuration --> 编译阶段，也叫配置阶段。按顺序执⾏ root build.gradle -> ⼦项⽬ build.gradle 脚本，⽣成 Task 执⾏流程图
- Execution --> 执⾏阶段。按照 Task 执⾏图顺序运⾏每⼀个 Task，完成⼀个个步骤，⽣成最终
APK ⽂件

## Gradle 配置文件

``` groovy
buildscript {//构建gradle脚本自身需要的资源，可以声明的资源包括依赖项、第三方插件、maven仓库地址等
    ext{
        //统一版本管理
        lombokVersion = '1.18.20'//lombok版本
        springBootVersion = '3.0.1'//spring boot 版本
        springCloudVersion = '2022.0.0'//spring cloud 版本
        springCloudAlibabaVersion = '2.2.5.RELEASE'//spring cloud alibaba 版本
        mysqlVersion = '8.0.13'//mysql版本
        mybatisSpringBootVersion = '2.1.1'//mybatis版本
    }

    //设置仓库
    repositories {
        //从前到后顺序执行，找不到就往后找。
        mavenLocal()//本地仓库
        maven { url 'https://maven.aliyun.com/repository/public' }//镜像仓库
        mavenCentral()//官方仓库
    }

    dependencies {
        //spring-boot-gradle插件，方便版本管理
        classpath("org.springframework.boot:spring-boot-gradle-plugin:${springBootVersion}")
    }
}


//全局配置，包括root和其子项目
allprojects {
    apply plugin: 'java'
    group 'com.lin'
    version '1.0-SNAPSHOT'
    sourceCompatibility = 17//java版本
    targetCompatibility = 17//java版本

    tasks.withType(JavaCompile){
        options.encoding = "UTF-8"
    }

    repositories {
        //从前到后顺序执行，找不到就往后找。
        mavenLocal()//本地仓库
        maven { url 'https://maven.aliyun.com/repository/public' }//镜像仓库
        mavenCentral()//官方仓库
    }
}

//配置所有子项目
subprojects {
    apply plugin: 'io.spring.dependency-management'//版本管理插件
    //dependencyManagement版本统一管理，类似maven的dependencyManagement
    dependencies {
        annotationProcessor 'org.projectlombok:lombok'//注释处理器
        implementation 'org.projectlombok:lombok'//引入lombok依赖
    }
    dependencyManagement{
        dependencies {
            //统一版本管理
            dependency "org.projectlombok:lombok:${lombokVersion}"
            dependency "mysql:mysql-connector-java:${mysqlVersion}"
            dependency "org.mybatis.spring.boot:mybatis-spring-boot-starter:${mybatisSpringBootVersion}"
        }
        imports {
            mavenBom "org.springframework.boot:spring-boot-dependencies:${springBootVersion}"//Spring Boot
            mavenBom "org.springframework.cloud:spring-cloud-dependencies:${springCloudVersion}"//Spring Cloud
            mavenBom "com.alibaba.cloud:spring-cloud-alibaba-dependencies:${springCloudAlibabaVersion}"//Spring Cloud Alibaba
        }
    }
}

project("user-service"){
   dependencies {
       implementation 'org.springframework.boot:spring-boot-starter-web'
       implementation 'mysql:mysql-connector-java'
       implementation 'org.mybatis.spring.boot:mybatis-spring-boot-starter'
       implementation 'com.alibaba.cloud:spring-cloud-starter-alibaba-nacos-discovery'
   }
}

project("order-service"){
   dependencies {
       implementation 'org.springframework.boot:spring-boot-starter-web'
       implementation 'mysql:mysql-connector-java'
       implementation 'org.mybatis.spring.boot:mybatis-spring-boot-starter'
       implementation 'com.alibaba.cloud:spring-cloud-starter-alibaba-nacos-discovery'
       implementation 'org.springframework.cloud:spring-cloud-starter-openfeign'
       implementation 'io.github.openfeign:feign-httpclient'
   }
}





```
