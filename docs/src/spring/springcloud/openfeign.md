# OpenFeign

> Feign是一个声明式的Web服务客户端（Web服务客户端就是Http客户端），让编写Web服务客户端变得非常容易，只需创建一个接口并在接口上添加注解即可。

## 快速入门

1. 引入feign依赖

``` xml
<!--feign客户端依赖-->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-openfeign</artifactId>
</dependency>
```

2. Application启动类加入`@EnableFeignClients`注解

``` java
@SpringBootApplication
@EnableFeignClients
public class OrderApplication {

    public static void main(String[] args) {
        SpringApplication.run(OrderApplication.class, args);
    }
}

```

- 如果client不在启动类路径下,需要指定`basePackages`

可通过自定义注解添加默认`basePackages`路径

``` java

@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.TYPE})
@Documented
@EnableFeignClients()
public @interface EnableRainFeignClients {
    String[] value() default {};

    String[] basePackages() default {"com.rain"};

    Class<?>[] basePackageClasses() default {};

    Class<?>[] defaultConfiguration() default {};

    Class<?>[] clients() default {};
}

```

3. 编写FeignClient接口

``` java
@FeignClient("userservice")
public interface UserClient {
    @GetMapping("/user/{id}")
    User findById(@PathVariable("id") Long id);
}

```
