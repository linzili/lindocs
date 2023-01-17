# SpringFramework

## 常用注解

### Bean与Qualifier

``` java
@Bean("Bean的名称")


// 可以指定自动注入的bean的名称,通常在声明多个同类型bean的时候使用
@Qualifier("需要注入的Bean名称")
```
