# Nacos

## 注册中心

[nacos 快速开始](https://nacos.io/zh-cn/docs/quick-start.html)

[nacos spring cloud 快速开始](https://nacos.io/zh-cn/docs/quick-start-spring-cloud.html)

1. 引入依赖

``` xml
<dependency>
   <groupId>com.alibaba.cloud</groupId>
   <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
</dependency>
```

2. 项目配置

application.yaml

``` yaml
server:
  port: 8080
spring:
  application:
    name: nacos-provider
spring:
  cloud:
    nacos:
      discovery:server-addr: 127.0.0.1:8848
```

## 配置中心

### 基本使用

[中文文档](https://github.com/alibaba/spring-cloud-alibaba/blob/2022.x/spring-cloud-alibaba-docs/src/main/asciidoc-zh/nacos-config.adoc)

1. 引入依赖

``` xml
<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>spring-cloud-starter-alibaba-nacos-config</artifactId>
</dependency>
```

2. 创建配置
下图表示 DataId 使用 `order-service`, GROUP 使用 `DEFAULT_GROUP`，配置格式为 `yaml` 的一个配置项:
![配置详情](https://cdn.azhiyuan.com.cn/markdown/img/2023/01/12/20230112201344.png)

::: warning
在`springboot 2.5.x`以上版本,默认禁用了`bootstrap`模块

所以需要重新引入 `org.springframework.cloud:spring-cloud-starter-bootstrap` 模块
:::
bootstrap.yaml

``` yaml
spring:
  application:
    name: order-service
  profiles:
    #  当前环境配置
    active: dev
  cloud:
    nacos:
      config:
        server-addr: 127.0.0.1:8848
        # 配置后缀名
        file-extension: yaml
```

### profile粒度配置

::: tip
Nacos Config 在加载配置的时候，不仅仅加载了以 DataId 为 ${spring.application.name}.${file-extension:yaml} 为前缀的基础配置，还加载了DataId为 ${spring.application.name}-${profile}.${file-extension:yaml} 的基础配置。在日常开发中如果遇到多套环境下的不同配置，可以通过Spring 提供的 ${spring.profiles.active} 这个配置项来配置。
:::
`spring.profiles.active=develop` 此时会匹配 `${spring.application.name}-develop.yaml` 的配置文件

### 优先级
>
> 优先级：bootstrap优先执行，application在bootstrap加载后再执行
>
bootstrap会在加载配置中心前执行,预先加载配置中心配置

Nacos Config 目前提供了三种配置能力从 Nacos 拉取相关的配置

- A: 通过 spring.cloud.nacos.config.shared-dataids 支持多个共享 Data Id 的配置

- B: 通过 spring.cloud.nacos.config.ext-config[n].data-id 的方式支持多个扩展 Data Id 的配置

- C: 通过内部相关规则(应用名、应用名+ Profile )自动生成相关的 Data Id 配置

当三种方式共同使用时，他们的一个优先级关系是: A < B < C

### 动态更新
>
> Nacos Config 默认支持配置的动态更新
>
> 可以通过配置 `spring.cloud.nacos.config.refresh.enabled=false` 来关闭动态刷新
