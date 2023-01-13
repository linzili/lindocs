# SpringBoot

## 配置文件

### 多环境配置

``` yaml
server:
  port: 8080
spring:
  application:
    name: gateway-service
  profiles:
    #  当前环境配置
    active: dev
---
spring:
  cloud:
    nacos:
      discovery:
        server-addr: 127.0.0.1:8848
  # dev环境配置
  config:
    activate:
      on-profile: dev
---
spring:
  cloud:
    nacos:
      discovery:
        server-addr: 43.143.105.97:8848
  # pro环境配置
  config:
    activate:
      on-profile: pro

```
