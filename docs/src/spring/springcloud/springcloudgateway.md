# Spring Cloud Gateway

SpringCloud Gateway 是 Spring Cloud 的一个全新项目，它旨在为微服务架构提供一种简单有效的统一的 API 路由管理方式。

## 快速入门

1. 添加依赖

``` xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-gateway</artifactId>
</dependency>
```

2. 配置路由

``` yaml
spring:
  cloud:
    gateway:
      # 路由规则
      routes:
          # 服务名称
        - id: system-service
          uri: lb://system-service
          # 断言规则
          predicates:
            - Path=/system/**
          # 过滤前缀
          filters:
            - StripPrefix=1
```

::: warning
在springcloud 2021以上版本移除了内置的ribbon模块,如果使用`gateway` + 注册中心进行转发,需要手动添加`LoadBalance`依赖
:::

``` xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-loadbalance</artifactId>
</dependency>
```

## CORS跨域

``` yaml
spring:
  cloud:
    gateway:
      globalcors:
        add-to-simple-url-handler-mapping: true
        corsConfigurations:
          '[/**]':
            allowedHeaders: "*"
            allowedOrigins: "*"
            allowedMethods:
              - GET
              - POST
              - DELETE
              - PUT
              - OPTION
```

## 整合 sentinel 限流

1. 添加依赖

``` xml
 <!--假如网关层面进行限流,添加如下依赖-->
  <dependency>
      <groupId>com.alibaba.cloud</groupId>
      <artifactId>spring-cloud-starter-alibaba-sentinel</artifactId>
  </dependency>
  <dependency>
      <groupId>com.alibaba.cloud</groupId>
      <artifactId>spring-cloud-alibaba-sentinel-gateway</artifactId>
  </dependency>
```

2. 配置sentinel控制台地址

``` yaml
spring:
  cloud:
    sentinel:
      transport:
        dashboard: 127.0.0.1:8080
```

3. 对网关发送请求,然后到控制台查看

4. 自定义限流、降级规则

``` java
@Component
public class GatewayConfig {
    @PostConstruct
    public void init() {
        BlockRequestHandler blockRequestHandler = new BlockRequestHandler() {
            @Override
            // 编写自定义降级响应
            public Mono<ServerResponse> handleRequest(ServerWebExchange exchange, Throwable t) {
                Map<String, Object> map = new HashMap<>();
                map.put("code", HttpStatus.TOO_MANY_REQUESTS.value());
                map.put("message", "限流了");
                return ServerResponse.status(HttpStatus.OK).contentType(MediaType.APPLICATION_JSON)
                        .body(BodyInserters.fromValue(map));
            }
        };
        // 设置handler到gateway
        GatewayCallbackManager.setBlockHandler(blockRequestHandler);
    }
}
```

### 持久化

想要让gateway持久化可以参考我修改后的源码[github](https://github.com/linzili/sentinel-gateway-nacos),过于复杂不在此赘述.
