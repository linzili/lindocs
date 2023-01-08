# SpringBoot-基础入门

## 1.SpringBoot简介

### 1.1 为什么要学习SpringBoot

我们之前的SSM还是使用起来不够爽。

- 还需要写很多的配置文件才能进行正常的使用。
- 实现一个功能需要引入很多的依赖，尤其是要自己去维护依赖的版本，特别容易出现依赖冲突等问题。

SpringBoot就能很好的解决上述问题。



### 1.2 SpringBoot是什么

​	SpringBoot是基于Spring开发的全新框架，相当于对Spring做了又一层封装。

​	其设计目的是用来简化Spring应用的初始搭建以及开发过程。该框架使用了特定的方式来进行配置，从而使开发人员不再需要定义样板化的配置。（自动配置）

​	并且对第三方以来的添加也进行了封装简化。（起步依赖）



​	所以Spring能做的他都能做，并且简化了配置。

​	并且还提供了一些Spring没有的特性，比如：

- 内嵌web容器，不再需要部署到web容器中
- 提供准备好的特性，如指标、健康检查和外部化配置



最大特点：**自动配置，起步依赖**



SpringBoot官网：https://spring.io/projects/spring-boot



## 2.快速入门

### 2.1 基本环境要求

JDK：8

Maven：3.5.x

#### Maven配置

~~~~xml
		    <mirrors>
    <mirror>
      <id>aliyunmaven</id>
      <mirrorOf>central</mirrorOf>
      <name>aliyun maven</name>
      <url>https://maven.aliyun.com/repository/public </url>
    </mirror>
  </mirrors>
~~~~

~~~~xml
  <profiles>
    <profile>
      <id>jdk-1.8</id>
      <activation>
        <activeByDefault>true</activeByDefault>
        <jdk>1.8</jdk>
      </activation>
      <properties>
        <maven.compiler.source>1.8</maven.compiler.source>
        <maven.compiler.target>1.8</maven.compiler.target>
        <maven.compiler.compilerVersion>1.8</maven.compiler.compilerVersion>
      </properties>
    </profile>
  </profiles>
~~~~



#### 清理Maven仓库脚本

```java
@echo off
rem create by NettQun
  
rem 这里写你的仓库路径
set REPOSITORY_PATH=E:\Develop\maven_rep
rem 正在搜索...
for /f "delims=" %%i in ('dir /b /s "%REPOSITORY_PATH%\*lastUpdated*"') do (
    echo %%i
    del /s /q "%%i"
)
rem 搜索完毕
pause
```

创建一个bat文件，然后复制上述脚本进去，修改其中maven本地仓库的地址，保存后双击执行即可。



### 2.2 HelloWorld

①继承父工程

在pom.xml中添加一下配置，继承spring-boot-starter-parent这个父工程

```xml
 <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.5.0</version>
    </parent>
```

②添加依赖

```xml
   <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
    </dependencies>
```

③创建启动类

创建一个类在其加上@SpringBootApplication注解标识为启动类。

```java
@SpringBootApplication
public class HelloApplication {
    public static void main(String[] args) {
        SpringApplication.run(HelloApplication.class,args);
    }
}
```

④定义Controller

创建Controller，主要Controller要放在启动类所在包或者其子包下。

```java
@RestController//相当于Controller加上ResponseBody
public class HelloController {
    @RequestMapping("/hello")
    public String hello(){
        return "helloSpringBoot";
    }
}
```

⑤运行测试

直接**运行启动类的main方法**即可。



### 2.3 常见问题及其解决方案

①访问时404

检查Controller是不是在启动类所在的包或者其子包下，如果不是需要进行修改。

②依赖报红

配置阿里云镜像后刷新maven项目让其下载。



### 2.4 打包运行

​	我们可以把SpringBoot的项目打成jar包直接去运行。

①添加maven插件

```xml
   <build>
        <plugins>
            <!--springboot打包插件-->
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>
```

②maven打包

![image-20220629001656080](https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/image-20220629001656080.png)

③运行jar包

在jar包所在目录执行命令 

~~~~
java -jar jar包名称
~~~~

即可运行。

### 2.5 快速构建

​	https://start.spring.io/



## 3.起步依赖

​	SpringBoot依靠父项目中的版本锁定和Starter机制让我们能更轻松的实现对依赖的管理。



### 3.0 依赖冲突及其解决方案

#### 3.0.1 依赖冲突

​	一般程序在运行时发生类似于java.lang.ClassNotFoundException,Method not found:'...'或者莫宁奇妙的异常信息，这种情况一般很大可能就是jar包依赖冲突的问题引起的了。

​	一般是A依赖C（低版本），B也依赖C（高版本）。都是他们依赖的又是不同版本的C的时候会出现。



#### 3.0.2 解决方案

​	如果出现了类似于java.lang.ClassNotFoundException,Method not found:'...'：这些异常检查相关的依赖冲突问题，排除掉低版本的依赖，留下高版本的依赖。

​	使用Maven Helper插件

![image-20220630104543695](https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/image-20220630104543695.png)

![image-20220630104517869](https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/image-20220630104517869.png)

### 3.1 版本锁定

​	我们的SpringBoot模块都需要继承一个父工程：spring-boot-starter-parent。在spring-boot-starter-parent的父工程spring-boot-dependencies中对常用的依赖进行了版本锁定。这样我们在添加依赖时，很多时候不需要添加依赖的版本号了。

​	我们也可以采用覆盖properties配置或者直接指定版本号的方式修改依赖版本。

例如：

直接指定版本号

```xml
        <dependency>
            <groupId>org.aspectj</groupId>
            <artifactId>aspectjweaver</artifactId>
            <version>1.7.2</version>
        </dependency>
```

覆盖properties配置

```xml
<properties>
      <aspectj.version>1.7.2</aspectj.version>
</properties>
```



### 3.2 starter机制

​	当我们需要使用某种功能时只需要引入对应的starter即可。一个starter针对一种特定的场景，其内部引入了该场景所需的依赖。这样我们就不需要单独引入多个依赖了。

​	命名规律

- 官方starter都是以`spring-boot-starter`开头后面跟上场景名称。例如：spring-boot-starter-data-jpa
- 非官方starter则是以 `场景名-spring-boot-starter`的格式，例如：mybatis-spring-boot-starter



## 4.自动配置

​	SpringBoot中最重要的特性就是自动配置。

​	SpringBoot遵循“**约定优于配置**”的原则，自动进行了默认配置。这样我们就不需要做大量的配置。

​	当我们需要使用什么场景时，就会自动配置这个场景相关的配置。

​	如果它的默认配置不符合我们的需求时修改这部分配置即可。





## 5.yaml配置

### 5.1 简介

5.1.1yaml是什么

​		YAML（YAML Ain't a Markup Language) YAML 不是一种标记语言，通常以.yaml为后缀的文件，是一种只管的能够被电脑识别的数据序列化格式，并且容易被人类阅读，容易和脚本语言交互的，可以被支持YAML库的不同的编程语言程序导入，一种专门用来写配置文件的语言。

​		YAML试图用一种比XML更敏捷的方式，来完成XML所完成的任务。

​		例如：

```yaml
student:
	name: dunxi
	age: 15
```

```xml
<student>
	<name>dunxi</name>
    <age>15</age>
</student>
```



#### 5.1.2yaml优点

1. YAML易于人们阅读。

2. 更加简洁明了



### 5.2 语法

#### 5.2.1 约定

- k: v 表示键值对关系，**冒号后面必须要有一个空格**
- 使用空格的缩进表示层级关系，空格数目不重要，**只要是左对齐的一列数据，都是同一个层级的**
- 大小写敏感
- 缩进时**不允许使用tab键，只允许使用空格**。
- Java中对于驼峰命名法，可用原名或使用-代替驼峰，如java中的lastName属性，在yaml中使用lastName或者last-name都可以正确映射。
- yaml中注释前面要加#



#### 5.2.2 键值关系

##### 普通值（字面量）

k: v:字面量直接写；

​	字符串默认不用加上单引号或者双引号；

​	"":双引号；转义字符能够起作用

​		name:  "dunxi \n keji": 输出    ：dunxi 换行 keji

'':单引号；会转义特殊字符，特殊字符最终只是一个普通的字符串数据



~~~~yaml
name1: dunxi 
name2: 'dunxi  \n keji'
name3: "dunxi  \n keji"
age: 15
flag: true
~~~~

##### 日期

~~~~yaml
date: 2019/01/01
~~~~



##### 对象（属性和值）、Map（键值对）

多行写法：

在下一行来写对象的属性和值的关系，注意缩进

```yaml
student:
  name: zhangsanfeng
  age: 20
```

行内写法：

```yaml
student: {name: zhangsanfeng,age: 20}
```

##### 数组、list、set

 用-值表示数组中的一个元素

多行写法：

```yaml
pets:
  - dog
  - pig
  - cat
```



行内写法：

```yaml
pets: [dog,pig,cat]
```



##### 对象数组、对象list、对象set

```yaml
student:
 - name: zhangsan
   age: 22
 - name: lisi
   age: 20
 - {name: wangwu,age: 120}
```



#### 5.2.3 占位符赋值

可以使用${key:defaultValue}的方式来赋值，若key不存在，则会使用defaultValue来赋值。

例如：

```yaml
server:
  port: ${myPort:88}

myPort: 80
```





### 5.3 SpringBoot读取yaml

#### 5.3.1 @Value注解

​	注意使用此注解只能获取简单类型的值（8种基本数据类型及其包装类，String，Date）

```yaml
student:
  lastName: sangeng
```

```java
@RestController//相当于Controller加上ResponseBody
public class HelloController {
    @Value("${name}")
    private String name;
    @Value("${date}")
    private Date date;
    @Value("${student.age}")
    private Integer age;
    
    @RequestMapping("/test")
    public String test(){
        System.out.println(name);
        return "test";
    }
}
```

**注意：加了@Value的类必须是交由Spring容器管理的**

#### 5.3.2 @ConfigurationProperties

​	yaml配置

```yaml
student:
  name: dunxi
  age: 12
```

​	在类上添加注解@Component和@ConfigurationProperties(prefix = "配置前缀")

```java
@Data
@AllArgsConstructor
@NoArgsConstructor
@Component
@ConfigurationProperties(prefix = "student2")
public class Student {
    private String name;
    private Integer age;
}
```

​	从spring容器中获取Student对象

```java
@RestController
public class TestController {

    @Autowired
    private Student student;
    @RequestMapping("/test")
    public String test(){
        System.out.println(student);
        return "hi";
    }
}
```

​	注意事项：要求对应的属性要有set/get方法，并且key要和成员变量名一致才可以对应的上。

**lombok讲解视频：**

https://www.bilibili.com/video/BV1G54y1V7VG?p=12

https://www.bilibili.com/video/BV1G54y1V7VG?p=13

### 5.4.练习

要求把下面实体类中的各个属性在yaml文件中进行赋值。然后想办法读取yaml配置的属性值，进行输出测试。

~~~~java
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Student {
    private String lastName;
    private Integer age;
    private Boolean boss;

    private Date birthday;
    private Map<String,String> maps;
    private Map<String,String> maps2;
    private List<Dog> list;

    private Dog dog;
    private String[] arr;
    private String[] arr2;

    private Map<String,Dog> dogMap;
}
@Data
@AllArgsConstructor
@NoArgsConstructor
class Dog {
    private String name;
    private Integer age;
}
~~~~

### 答案

```yaml
student:
  lastName: dunxi
  age: 12
  boss: true
  birthday: 2022/1/3
  maps:
    name: dunxi
    age: 12
  maps2: { m1: m1,m2: m2}

  list:
    - name: dahuang
      age: 7
    - name: xiaohuang
      age: 7
    - {name: 大黑,age: 3}

  dog:
    name: xiaohong
    age: 5

  arr:
  - arr1
  - arr2

  arr2: [dunxi,keji]
  dogMap:
    xiaobai: { name: dahuang, age: 8}
    xiaohong:
      name: 小红
      age: 3
```

```java
@Data
@AllArgsConstructor
@NoArgsConstructor
@Component
@ConfigurationProperties(prefix = "student")
public class Student {
    private String lastName;
    private Integer age;
    private Boolean boss;

    private Date birthday;
    private Map<String,String> maps;
    private Map<String,String> maps2;
    private List<Dog> list;

    private Dog dog;
    private String[] arr;
    private String[] arr2;

    private Map<String,Dog> dogMap;
}
```

```java
@Data
@AllArgsConstructor
@NoArgsConstructor
@ConfigurationProperties(prefix = "Dog")
public class Dog {
    private String name;
    private Integer age;
}
```



5.5 yaml和properties配置的相互转换

​	我们可以使用一些网站非常方便的实现yaml和properties格式配置的转换。

转换网站：https://www.toyaml.com/index.html



### 5.6 配置提示

​	如果使用了@ConfigurationProperties注解，可以增加以下依赖，让我们在书写配置时有相应提示。

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-configuration-processor</artifactId>
    <optional>true</optional>
</dependency>
```

**注意：添加完依赖加完注解后要运行一次程序才会有相应的提示。**



# SpringBoot-常见场景

## 1.热部署

​	SpringBoot为我们提供了一个方便我们开发测试的工具dev-tools。使用后可以实现热部署效果。当我们运行了程序后对程序进行了修改，程序会自动重启。

​	原理是使用了两个ClassLoder，一个ClassLoader加载哪些不会改变的类（第三方jar包），另一个ClassLoader加载会更改的类。称之为Restart ClassLoader，这样在有代码更改的时候，原来的Restart Classloader被丢弃，重新创建一个Restart ClassLoader，由于需要加载的类相比较少，所以实现了较快的重启。



### 1.1 准备工作

①设置idea自动编译

​	在idea中的setting做下面配置

![image-20220630102408854](https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/image-20220630102408854.png)

②设置允许程序运行时自动启动

​	ctrl+shift+alt+/ 这组快捷键后会有一个小弹窗，点击Registry就会进入下面的界面，找到下面的配置项并勾选啊，勾选后直接点击close

![image-20220630102601968](https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/image-20220630102601968.png)

### 1.2 使用

①添加依赖

~~~~xml
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-devtools</artifactId>
            <optional>true</optional>
        </dependency>
~~~~

②触发热部署

​	当我们在修改完代码或者静态资源后可以切换到其他软件，让idea自动进行编译，自动编译后就会触发热部署。

​	或者使用Ctrl+F9手动触发重新编译。



## 2.单元测试

​	我们可以使用SpringBoot整合Junit进行单元测试。

​	**Spring Boot 2.2.0 版本开始引入JUnit 5 作为单元测试默认库**

​	Junit5功能相比于Junit4也会更强大。但是本课程是SpringBoot的课程，所以主要针对SpringBoot如何整合Junit进行单元测试做讲解。暂时不针对Junit5的新功能做介绍。

### 2.1 使用

#### ①添加依赖

~~~~xml
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
        </dependency>
~~~~

#### ②编写测试类

```java
@SpringBootTest(classes = HelloApplication.class)
public class ApplicationTest {

    @Autowired
    HelloController helloController;
    @Test
    public void testJunit(){
        System.out.println(1);
    }
}
```

**注意：测试类所在的包需要和启动类是在同一个包下。否则就要使用如下写法指定启动类。**

```java
//指定启动类
@SpringBootTest(classes = HelloApplication.class)
public class ApplicationTest {

    @Autowired
    HelloController helloController;
    @Test
    public void testJunit(){
        System.out.println(1);
    }
}
```



2.2 兼容老版本

​	如果是对老项目中的SpringBoot进行了版本升级会发现之前的单元测试代码出现了一些问题。

​	因为Junit5和之前的Junit4有比较大的不同。

先看一张图：



![image-20220630163615349](https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/image-20220630163615349.png)

​	从上图可以看出JUnit5 = Junit Platform + Junit Jupiter + Junit Vingtage



- Junit Platform: 这是Junit提供的平台功能模块，通过它，其他的测试引擎也可以接入
- Junit Jupiter： 这个是Junit5的核心，是一个基于JunitPlatform的引擎实现，它包含许多丰富的新特性来使得自动化测试更加方便和强大。
- Junit Vintage: 这个模块是兼容Junit3 、Junit4 版本的测试引擎，使得旧版本的自动化测试也可以在Junit5下正常运行。



​	虽然Junit5包含了Junit Vintage来兼容Junit3 和Junit4，但是SpringBoot 2.4以上的版本对应的**spring-boot-starter-test**移除了默认对Vintage的依赖。所以当我们仅仅依赖spring-boot-starter-test时会发现之前我们使用的@Test注解和@RunWith注解都不能用了。

​	我们可以单独在依赖vintage来进行兼容。

```xml
        <dependency>
            <groupId>org.junit.vintage</groupId>
            <artifactId>junit-vintage-engine</artifactId>
            <scope>test</scope>
        </dependency>
```

注意：

​	**org.junit.Test对应的是Junit4的版本，就搭配@RunWith注解来使用。**

SpringBoot2.2.0之前版本的写法

```java
import com.dunxi.controller.HelloController;
//import org.junit.jupiter.api.Test;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

//classes属性来指定启动类
@SpringBootTest
@RunWith(SpringRunner.class)
public class ApplicationTest {

    @Autowired
    private HelloController helloController;

    @Test
    public void testJunit(){
        System.out.println(1);
        System.out.println(helloController);
    }
}
```



## 3.整合Mybatis

### 3.1 准备工作

①数据准备

``` sql
/*Table structure for table `user` */
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `address` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

/*Data for the table `user` */

insert  into `user`(`id`,`username`,`age`,`address`) values (2,'pdd',25,'上海'),(3,'UZI',19,'上海11'),(4,'RF',19,NULL),(6,'三更',14,'请问2'),(8,'test1',11,'cc'),(9,'test2',12,'cc2');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

```

②实体类

```java
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import net.bytebuddy.asm.Advice;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    private Integer id;
    private String username;
    private Integer age;
    private String address;
}
```



### 3.2 整合步骤

​	GitHub： https://github.com/mybatis/spring-boot-starter/

#### ①导入依赖

~~~~xml
        <!--mybatis启动器-->
        <dependency>
            <groupId>org.mybatis.spring.boot</groupId>
            <artifactId>mybatis-spring-boot-starter</artifactId>
            <version>2.2.0</version>
        </dependency>
        <!--mysql驱动-->
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <scope>runtime</scope>
        </dependency>
~~~~

#### ②配置数据库信息

```yaml
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/springboot_test?characterEncoding=utf-8&serverTimezone=UTC
    username: root
    password: 123456
    driver-class-name: com.mysql.cj.jdbc.Driver
```

#### ③配置Mybatis相关配置

```yaml
mybatis:
  mapper-locations: classpath:mapper/*Mapper.xml #mapper映射文件的路径
  type-aliases-package: com.dunxi.domain #配置哪个包下的类有默认的别名
```

#### ④编写Mapper接口

​	注意在接口上加上@Mapper和@Repository注解。主要是假@Mapper，在加上@Repository之后就不会有红色波浪线了

```java
@Mapper
@Repository
public interface UserMapper {
    public List<User> findAll();
}
```



#### ⑤编写mapper接口对应的xml文件

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd" >
<mapper namespace="com.dunxi.mapper.UserMapper">
    <select id="findAll" resultType="com.dunxi.domain.User">
        select * from user
    </select>
</mapper>
```

#### ⑥测试

~~~~java
@SpringBootTest(classes = HelloApplication.class)
public class SpringMyTest {

    @Autowired
    UserMapper userMapper;


    @Test
    public void tesMapper(){
        System.out.println(userMapper.findAll());
    }
}
~~~~



## 4.Web开发

### 4.1 静态资源访问

​	由于SpringBoot的项目是打成jar包的所以没有之前web项目的那些web资源目录（webapps).

​	那么我们的静态资源要放到哪里呢？

​	从SpringBoot官方文档中我们可以知道，我们可以把静态资源放到`resources/static`（或者`resources/public `或者`resources/resources `或者 `resources/META-INF/resources`)中即可。

​	静态资源放完后，

​	例如我们想访问文件：resources/static/index.html 只需要在访问时资源路径写/index.html即可。

​	例如我们想访问文件：resources/static/pages/login.html 访问资源路径写成：/pages/login.html即可。



#### 4.1.1 修改静态资源访问路径

​	SpringBoot默认的静态资源路径匹配为/**。如果是想要修改可以通过spring.mvc.static-path-patern这个配置进行修改。

​	例如想要让访问静态资源的URL必须前缀有/res。例如：/res/index.html才能访问到static目录中的资源。我们可以修改如下：

在application.yaml中

~~~~yaml
spring:
  mvc:
    static-path-pattern: /res/** #修改静态资源访问路径
~~~~



#### 4.1.2 修改静态资源存放目录

​	我们可以修改spring.web.resources.static-locations这个配置来修改静态资源存放目录。

例如：

```yaml
spring:
  web:
    resources:
    	- classpath:/sgstatic/
    	- classpath:/static/
```



### 4.2 设置请求映射规则@RequestMapping

​	详细讲解：https://www.bilibili.com/video/BV1AK4y1o74Y  P5-P12

​	该注解可以加到方法上或者是类上。（查看其源码可知）

​	我们可以用其来设定所能匹配请求的要求。只有符合了设置的要求，请求才能被加了该注解的方法或类处理。

#### 4.2.1 指定请求路径

​	path或者value属性都可以用来指定请求路径。

例如：

​	我们期望让请求的资源路径为**/test/testPath**的请求能够被**testPath**方法处理则可以写如下代码

~~~~java
@RestController
@RequestMapping("/test")
public class HelloController {
    @RequestMapping("/testPath")
    public String testPath(){
        return "testPath";
    }
}
~~~~

~~~~java
@RestController
public class HelloController {

    @RequestMapping("/test/testPath")
    public String testPath(){
        return "testPath";
    }
}
~~~~

#### 4.2.2 指定请求方式

​	method属性可以用来指定可处理的请求方式。

例如：

​	我们期望

让请求的资源路径为/test/testMethod/的POST请求能够被testMethod方法处理。则可以写如下代码

```java
@RestController
@RequestMapping("/test")
public class TestController {

    @RequestMapping(value = "/testMethod",method = RequestMethod.POST)
    public String testMethod(){
        System.out.println("testMethod处理了请求");
        return "testMethod";
    }
}

```

注意：我们可以也可以运用如下注解来进行替换

- ​    @PostMapping    等价于   @RequestMapping(method = RequestMethod.POST) 

- ​	@GetMapping    等价于   @RequestMapping(method = RequestMethod.GET) 
- ​	@PutMapping    等价于   @RequestMapping(method = RequestMethod.PUT) 
- ​	@DeleteMapping    等价于   @RequestMapping(method = RequestMethod.DELETE) 

例如：

​	上面的需求我们可以使用下面的写法实现

```java
@RestController
@RequestMapping("/test")
public class TestController {

    @PostMapping(value = "/testMethod")
    public String testMethod(){
        System.out.println("testMethod处理了请求");
        return "testMethod";
    }
}
```



#### 4.2.3 指定请求参数

​	我们可以使用params属性来对请求参数进行一些限制。可以要求必须具有某些参数，或者是某些参数是某个值，或者是某些参数不是某个值。

例如：

​	我们期望让请求的资源路径为**/test/testParams**的**GET**请求,并且请求参数中**具有code参数**的请求能够被testParams方法处理。则可以写如下代码

~~~~java
@RestController
@RequestMapping("/test")
public class TestController {
    @RequestMapping(value = "/testParams",method = RequestMethod.GET,params = "code")
    public String testParams(){
        System.out.println("testParams处理了请求");
        return "testParams";
    }
}
~~~~

​	

​	如果是要求**不能有code**这个参数可以把改成如下形式

~~~~java
@RestController
@RequestMapping("/test")
public class TestController {
    @RequestMapping(value = "/testParams",method = RequestMethod.GET,params = "!code")
    public String testParams(){
        System.out.println("testParams处理了请求");
        return "testParams";
    }
}
~~~~

​	

​	如果要求有code这参数，并且这参数值必须**是某个值**可以改成如下形式

~~~~java
@RestController
@RequestMapping("/test")
public class TestController {
    @RequestMapping(value = "/testParams",method = RequestMethod.GET,params = "code=sgct")
    public String testParams(){
        System.out.println("testParams处理了请求");
        return "testParams";
    }
}
~~~~



​	如果要求有code这参数，并且这参数值必须**不是某个值**可以改成如下形式	

~~~~java
@RestController
@RequestMapping("/test")
public class TestController {
    @RequestMapping(value = "/testParams",method = RequestMethod.GET,params = "code!=sgct")
    public String testParams(){
        System.out.println("testParams处理了请求");
        return "testParams";
    }
}
~~~~

#### 4.2.4 指定请求头

​	我们可以使用headers属性来对请求头进行一些限制。

例如：	

​	我们期望让请求的资源路径为/test/testHeaders的GET请求，并且请求头中具有deviceType的请求能够被testHeaders方法处理。则可以写如下代码

```java
@RestController
@RequestMapping("/test")
public class TestController {
    
    @RequestMapping(value = "/testHeaders",method = RequestMethod.GET,headers = "deviceType")
    public String testHeaders(){
        System.out.println("testHeaders处理了请求");
        return "testHeaders";
    }
}
```

​	如果是要求不能有**deviceType**这个请求头可以把改成如下形式

~~~~java
@RestController
@RequestMapping("/test")
public class TestController {
    
    @RequestMapping(value = "/testHeaders",method = RequestMethod.GET,headers = "!deviceType")
    public String testHeaders(){
        System.out.println("testHeaders处理了请求");
        return "testHeaders";
    }
}
~~~~



​	如果要求有deviceType这个请求头，并且其值必须**是某个值**可以改成如下形式

~~~~java
@RestController
@RequestMapping("/test")
public class TestController {
    
    @RequestMapping(value = "/testHeaders",method = RequestMethod.GET,headers = "deviceType=ios")
    public String testHeaders(){
        System.out.println("testHeaders处理了请求");
        return "testHeaders";
    }
}
~~~~



​	如果要求有deviceType这个请求头，并且其值必须**不是某个值**可以改成如下形式

~~~~java
@RestController
@RequestMapping("/test")
public class TestController {
    
    @RequestMapping(value = "/testHeaders",method = RequestMethod.GET,headers = "deviceType!=ios")
    public String testHeaders(){
        System.out.println("testHeaders处理了请求");
        return "testHeaders";
    }
}
~~~~



#### 4.2.4 指定请求头Content-Type

​	我们可以使用consumes属性来对Content-Type这个请求头进行一些限制。



##### 范例一

我们期望让请求的资源路径为**/test/testConsumes**的POST请求,并且请求头中的Content-Type头必须为 **multipart/from-data** 的请求能够被testConsumes方法处理。则可以写如下代码

~~~~java
    @RequestMapping(value = "/testConsumes",method = RequestMethod.POST,consumes = "multipart/from-data")
    public String testConsumes(){
        System.out.println("testConsumes处理了请求");
        return "testConsumes";
    }
~~~~

##### 范例二

​	如果我们要求请求头Content-Type的值必须**不能为某个multipart/from-data**则可以改成如下形式：

~~~~java
    @RequestMapping(value = "/testConsumes",method = RequestMethod.POST,consumes = "!multipart/from-data")
    public String testConsumes(){
        System.out.println("testConsumes处理了请求");
        return "testConsumes";
    }
~~~~



### 4.3 获取请求参数

#### 4.3.1 获取路径参数

​	RestFul风格的接口一些参数是在请求路径上的。类似： /user/1  这里的1就是id。

​	如果我们想获取这种格式的数据可以使用**@PathVariable**来实现。



##### 范例一

​	要求定义个RestFul风格的接口，该接口可以用来根据id查询用户。请求路径要求为  /user  ，请求方式要求为GET。

​	而请求参数id要写在请求路径上，例如  /user/1   这里的1就是id。

​	我们可以定义如下方法，通过如下方式来获取路径参数：

~~~~java
@RestController
public class UserController {

    @RequestMapping(value = "/user/{id}",method = RequestMethod.GET)
    public String findUserById( @PathVariable("id")Integer id){
        System.out.println("findUserById");
        System.out.println(id);
        return "findUserById";
    }
}
~~~~

##### 范例二

​	如果这个接口，想根据id和username查询用户。请求路径要求为  /user  ，请求方式要求为GET。

​	而请求参数id和name要写在请求路径上，例如  /user/1/zs   这里的1就是id，zs是name

​	我们可以定义如下方法，通过如下方式来获取路径参数：

~~~~java
@RestController
public class UserController {
    @RequestMapping(value = "/user/{id}/{name}",method = RequestMethod.GET)
    public String findUser(@PathVariable("id") Integer id,@PathVariable("name") String name){
        System.out.println("findUser");
        System.out.println(id);
        System.out.println(name);
        return "findUser";
    }
}

~~~~



#### 4.3.2 获取请求体中的JSON个数参数

​	RestFul风格的接口一些比较复杂的参数会转换成JSON通过请求体传递过来。这种时候我们可以使用@RequestBody注解获取请求体中的数据。

##### 4.3.2.1 配置

​	SpringBoot的web启动器已经默认导入了Jackson的依赖，不再需要额外导入依赖了。



##### 4.3.2.2 使用

###### 范例一

​	要求定义个RestFul风格的接口，该接口可以用来新建用户。请求路径要求为/user ,请求方式为POST。

用户数据会转换成json通过请求体传递。

​	请求体数据

```json
{"name":"敦禧","age":15}
```



1.获取参数封装成实体对象

​	如果我们想把Json数据获取出来封装User对象,我们可以这样定义方法：

~~~~~java
@RestController
public class UserController {
    @RequestMapping(value = "/user",method = RequestMethod.POST)
    public String insertUser(@RequestBody User user){
        System.out.println("insertUser");
        System.out.println(user);
        return "insertUser";
    }
}
~~~~~

​	User实体类如下：

~~~~java
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    private Integer id;
    private String name;
    private Integer age;
}

~~~~

​	

2.获取参数封装成Map集合

​	也可以把该数据获取出来封装成Map集合：

~~~~java
    @RequestMapping(value = "/user",method = RequestMethod.POST)
    public String insertUser(@RequestBody Map map){
        System.out.println("insertUser");
        System.out.println(map);
        return "insertUser";
    }
~~~~



###### 范例二

​	如果请求体传递过来的数据是一个User集合转换成的json，Json数据可以这样定义：

~~~~java
[{"name":"三更1","age":14},{"name":"三更2","age":15},{"name":"三更3","age":16}]
~~~~

​	方法定义：

~~~~java
    @RequestMapping(value = "/users",method = RequestMethod.POST)
    public String insertUsers(@RequestBody List<User> users){
        System.out.println("insertUsers");
        System.out.println(users);
        return "insertUser";
    }
~~~~

##### 4.3.2.3 注意事项

​	如果需要使用@RequestBody来获取请求体中的json并且进行转换，要求请求头Content-Type的值要为：application/json。



#### 4.3.3 获取QueryString格式参数

​	如果接口的参数是使用QueryString的格式的话，我们也可以使用SpringMVC快速获取参数。

​	我们可以使用**@RequestParam**来获取QueryString格式的参数。

##### 4.3.3.1 使用

###### 范例一

​	要求定义个接口，该接口请求路径要求为  /testRequestParam，请求方式无要求。参数为id和name和likes。使用QueryString的格式传递。



1.参数单独的获取

​	如果我们想把id，name，likes单独获取出来可以使用如下写法：

​	在方法中定义方法参数，方法参数名要和请求参数名一致，这种情况下我们可以省略**@RequestParam**注解。

~~~~java
    @RequestMapping("/testRquestParam")
    public String testRquestParam(Integer id, String name, String[] likes){
        System.out.println("testRquestParam");
        System.out.println(id);
        System.out.println(name);
        System.out.println(Arrays.toString(likes));
        return "testRquestParam";
    }

~~~~

​	如果方法参数名和请求参数名不一致，我们可以加上**@RequestParam**注解例如：

~~~~java
    @RequestMapping("/testRquestParam")
    public String testRquestParam(@RequestParam("id") Integer uid,@RequestParam("name") String name, @RequestParam("likes")String[] likes){
        System.out.println("testRquestParam");
        System.out.println(uid);
        System.out.println(name);
        System.out.println(Arrays.toString(likes));
        return "testRquestParam";
    }
~~~~



2.获取参数封装成实体对象

​	如果我们想把这些参数封装到一个User对象中可以使用如下写法：

~~~~java
    @RequestMapping("/testRquestParam")
    public String testRquestParam(User user){
        System.out.println("testRquestParam");
        System.out.println(user);
        return "testRquestParam";
    }
~~~~

​	User类定义如下：

~~~~java
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    private Integer id;
    private String name;
    private Integer age;
    private String[] likes;
}
~~~~

​	测试时请求url如下：

~~~~java
http://localhost:8080/testRquestParam?id=1&name=三更草堂&likes=编程&likes=录课&likes=烫头
~~~~



​	**注意：实体类中的成员变量要和请求参数名对应上。并且要提供对应的set/get方法。**



#### 4.3.4 相关注解其他属性

##### 4.3.4.1 required

​	代表是否必须，默认值为true也就是必须要有对应的参数。如果没有就会报错。

​	如果对应的参数可传可不传则可以把其设置为fasle

例如：

~~~~java
    @RequestMapping("/testRquestParam")
    public String testRquestParam(@RequestParam(value = "id",required = false) Integer uid,@RequestParam("name") String name, @RequestParam("likes")String[] likes){
        System.out.println("testRquestParam");
        System.out.println(uid);
        System.out.println(name);
        System.out.println(Arrays.toString(likes));
        return "testRquestParam";
    }
~~~~



##### 4.3.4.2 defaultValue

​	如果对应的参数没有，我们可以用defaultValue属性设置默认值。

例如：

~~~~java
    @RequestMapping("/testRquestParam")
    public String testRquestParam(@RequestParam(value = "id",required = false,defaultValue = "777") Integer uid,@RequestParam("name") String name, @RequestParam("likes")String[] likes){
        System.out.println("testRquestParam");
        System.out.println(uid);
        System.out.println(name);
        System.out.println(Arrays.toString(likes));
        return "testRquestParam";
    }
~~~~



### 4.4 响应体相应数据

​	无论是RestFul风格还是我们之前web阶段接触过的异步请求，都需要把数据转换成json放入响应体中。



#### 4.4.1 数据放到响应体

​	我们的SpringMVC为我们提供了**@ResponseBody**来非常方便的把JSON放到响应体中。

​	@ReponseBody可以加在哪些东西上面？类上和方法上

具体代码清参考范例。



#### 4.4.2 数据转换成json

##### 4.4.2.1 配置

​	SpringBoot项目中使用了web的start后，不需要进行额外的依赖和配置



##### 4.4.2.2 使用

​	只要把要转换的数据作为方法的返回值返回即可。SpringMVC会帮我们把返回值转换为json。具体代码参考范例。

#### 4.4.3 范例

##### 范例一

​	要求定义个RestFul风格的接口，该接口可以用来根据id查询用户。请求路径要求为  /response/user  ，请求方式要求为GET。

​	而请求参数id要写在请求路径上，例如   /response/user/1   这里的1就是id。

​	要求获取参数id,去查询对应id的用户信息（模拟查询即可，可以选择直接new一个User对象），并且转换成json响应到响应体中。

~~~~java
@Controller
@RequestMapping("/response")
public class ResponseController {

    @RequestMapping("/user/{id}")
    @ResponseBody
    public User findById(@PathVariable("id") Integer id){
        User user = new User(id, "三更草堂", 15, null);
        return user;
    }
}
~~~~



### 4.5 跨域请求

#### 4.5.1 什么是跨域

​	浏览器出于安全的考虑，使用XMLHttpRequest对象发起 HTTP请求时必须遵守同源策略，否则就是跨域的HTTP请求，默认情况下是被禁止的。同源策略要求源相同才能进行正常通信，即协议、域名、端口号完全一致。



#### 4.5.2 CORS解决跨域

​	CORS是一个W3C标准，全称是“跨域资源共享”（Cross-origin resource sharing),允许浏览器向跨源服务器，发出XMLHttpRequest请求，从而克服了AJAX只能同源使用的限制。

​	它通过服务器增加一个特殊的Header[Access-Control-Allow-Origin]来告诉客户端跨域的限制，如果浏览器支持CORS、并且判断Origin通过的话，就会允许XMLHttpRequest发起跨域请求。



#### 4.5.3 SpringBoot使用CORS解决跨域

##### 1.使用@CrossOrigin

可以在支持跨域的方法上或者是Controller上加上注解@CrossOrigin注解

```java
@RequestMapping("/user")
@RestController
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping("/findAll")
    public ResponseResult findAll(){
        //调用service查询数据，进行返回
        List<User> users = userService.findAll();
        return new ResponseResult(200,users);
    }
}
```

##### 2.使用WebMvcConfigurer的addCorsMappings方法配置CorsInterceptor

```java
@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // 设置允许跨域的路径
        registry.addMapping("/**")
                // 设置允许跨域请求的域名
                .allowedOriginPatterns("*")
                // 是否允许cookie
                .allowCredentials(true)
                // 设置允许的请求方式
                .allowedMethods("GET", "POST", "DELETE", "PUT")
                // 设置允许的header属性
                .allowedHeaders("*")
                // 跨域允许时间
                .maxAge(3600);
    }
}
```



### 4.6 拦截器

#### 4.6.0 登录案例



##### 4.6.0.1 思路分析

​	在前后端分离的场景中，很多时候会采用token的方案进行登录校验。

​	登录成功时，后端会根据一些用户信息生成token字符串返回给前端。

​	前端会存储这个token。以后前端发送请求的时候如果有token就会把token放在请求头中发送给后端。

​	后端接口就可以获得请求头中的token信息进行解析，如果解析不成功说明token超时了或者是不正确的token，相当于是未登录的状态。

​	如果解析成功，说明前端是已经登录过的。



##### 4.6.0.2 Token生成方案-JWT

​	本案例采用目前企业中运用比较多的JWT来生成token。

​	使用时先引入相关依赖

```xml
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt</artifactId>
    <version>0.9.0</version>
</dependency>
```

​	然后可以使用下面的工具类来生成和解析token

​		然后可以使用下面的工具类来生成和解析token

~~~~java
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import java.util.Base64;
import java.util.Date;
import java.util.UUID;

/**
 * JWT工具类
 */
public class JwtUtil {

    //有效期为
    public static final Long JWT_TTL = 60 * 60 *1000L;// 60 * 60 *1000  一个小时
    //设置秘钥明文
    public static final String JWT_KEY = "sangeng";

    /**
     * 创建token
     * @param id
     * @param subject
     * @param ttlMillis
     * @return
     */
    public static String createJWT(String id, String subject, Long ttlMillis) {

        SignatureAlgorithm signatureAlgorithm = SignatureAlgorithm.HS256;
        long nowMillis = System.currentTimeMillis();
        Date now = new Date(nowMillis);
        if(ttlMillis==null){
            ttlMillis=JwtUtil.JWT_TTL;
        }
        long expMillis = nowMillis + ttlMillis;
        Date expDate = new Date(expMillis);
        SecretKey secretKey = generalKey();

        JwtBuilder builder = Jwts.builder()
                .setId(id)              //唯一的ID
                .setSubject(subject)   // 主题  可以是JSON数据
                .setIssuer("sg")     // 签发者
                .setIssuedAt(now)      // 签发时间
                .signWith(signatureAlgorithm, secretKey) //使用HS256对称加密算法签名, 第二个参数为秘钥
                .setExpiration(expDate);// 设置过期时间
        return builder.compact();
    }

    /**
     * 生成加密后的秘钥 secretKey
     * @return
     */
    public static SecretKey generalKey() {
        byte[] encodedKey = Base64.getDecoder().decode(JwtUtil.JWT_KEY);
        SecretKey key = new SecretKeySpec(encodedKey, 0, encodedKey.length, "AES");
        return key;
    }
    
    /**
     * 解析
     *
     * @param jwt
     * @return
     * @throws Exception
     */
    public static Claims parseJWT(String jwt) throws Exception {
        SecretKey secretKey = generalKey();
        return Jwts.parser()
                .setSigningKey(secretKey)
                .parseClaimsJws(jwt)
                .getBody();
    }


}
~~~~

##### 4.6.0.3 登录接口实现

数据准备

~~~~sql
DROP TABLE IF EXISTS `sys_user`;
CREATE TABLE `sys_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

/*Data for the table `sys_user` */

insert  into `sys_user`(`id`,`username`,`password`) values (1,'root','root'),(2,'sangeng','caotang');


~~~~

实体类

~~~~java
@Data
@NoArgsConstructor
@AllArgsConstructor
public class SystemUser {

    private Integer id;
    private String username;
    private String password;
}

~~~~

SystemUserController

```java
package com.dunxi.controller;

import com.dunxi.domain.ResponseResult;
import com.dunxi.domain.SystemUser;
import com.dunxi.service.SystemUserService;
import com.dunxi.service.UserService;
import com.dunxi.utils.JwtUtil;
import io.jsonwebtoken.Jwt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/sys_user")
public class SystemUserController {
    @Autowired
    private SystemUserService userService;

    @PostMapping("/login")
    public ResponseResult login(@RequestBody SystemUser user) {
        //校验用户名密码是否正确
        SystemUser loginUser = userService.login(user);
        Map<String, Object> map;
        if (loginUser != null) {
            //如果正确 生成token
            map = new HashMap<>();
            String token = JwtUtil.createJWT(UUID.randomUUID().toString(), String.valueOf(loginUser.getId()), null);
            map.put("token",token);
        } else {
            //如果不正确 给出相应提示
            return new ResponseResult(300, "用户名或密码错误，请重新登录");
        }

        return new ResponseResult(200, "登录成功", map);
    }
}
```

Service

```java
public interface SystemUserService {
    public SystemUser login(SystemUser user);
}

@Service
public class SystemUserServiceImpl implements SystemUserService {

    @Autowired
    private SystemUserMapper systemUserMapper;

    @Override
    public SystemUser login(SystemUser user) {
        SystemUser loginUser = systemUserMapper.login(user);
        return loginUser;
    }
}

```

dao

```java
@Mapper
@Repository
public interface SystemUserMapper {
    SystemUser login(SystemUser user);
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd" >
<mapper namespace="com.dunxi.mapper.SystemUserMapper">
    <select id="login" resultType="com.dunxi.domain.SystemUser">
        select * from sys_user where username = #{username} and password=#{password}
    </select>
</mapper>
```



##### 4.6.0.4 登录页面

```html
<!-- 开发环境版本，包含了有帮助的命令行警告 -->
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

<script>
    var v = new Vue({
        el:"#app",
        data:{
            user:{}
        },
        methods:{
            handleLogin(){
                //请求后台登录接口，把接收到的数据渲染展示在页面中
                axios.post("http://localhost:80/sys_user/login",this.user).then((res)=>{
                    // console.log(res);
                    //判断是否成功
                    if(res.data.code == 200){
                        //登录成功
                        // alert("登录成功")
                        //存储token
                        localStorage.setItem("token",res.data.data.token);
                        //跳转页面到index.html
                        location.href = "/index.html";
                    }else{
                        //登录失败
                        alert(res.data.msg)
                    }
                })/*.catch(()=>{

               })*/
            }
        }
    });
</script>
```



#### 4.6.1 拦截器的概念

​	如果我们想在多个Handler方法执行之前或者之后都进行一些处理，甚至某些情况下需要拦截掉，不让Handler方法执行。那么可以使用SpringMVC为我们提供的拦截器。

#### 4.6.1 使用步骤

##### ①创建类实现HandlerInterceptor接口

```java
public class LoginInterceptor implements HandlerInterceptor {}
```

##### ②实现方法

```java
@Component
public class LoginInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        //获取请求头中的token
        String token = request.getHeader("token");
        //判断token是否为空，如果为空也代表未登录
        if(!StringUtils.hasText(token)){
            response.sendError(HttpServletResponse.SC_UNAUTHORIZED) ;
            return false;
        }
        //解析token判断看看是否成功
        try {
            Claims claims = JwtUtil.parseJWT(token);
            String subject = claims.getSubject();
            System.out.println(subject);
        } catch (Exception e) {
            e.printStackTrace();
            //如果解析过程中没有出现异常,说明是登录状态
            //如果出现了异常,说明未登录,提醒重新登录(401)
            response.sendError(HttpServletResponse.SC_UNAUTHORIZED) ;
            return false;
        }
        return true;
    }
}
```

##### ③配置拦截器

```java
@Configuration
public class LoginConfig implements WebMvcConfigurer {

    @Autowired
    private LoginInterceptor loginInterceptor;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(loginInterceptor)//添加拦截器
        .addPathPatterns("/**")//配置拦截路径
        .excludePathPatterns("/sys_user/login");//配置排除路径
    }
}

```



4.7 异常统一处理

##### ①创建类加上@ControllerAdvice注解进行标识

```java
@ControllerAdvice
public class MyControllerAdvice {
}
```

##### ②定义异常处理方法

​	定义异常处理方法，使用**@ExceptionHandler**标识可以处理的异常。

```java
@ControllerAdvice
public class MyControllerAdvice {
    @ExceptionHandler(RuntimeException.class)
    @ResponseBody
    public ResponseResult handlerException(Exception e){
        //获取异常信息，存入ResponseRust的msg属性
        String message = e.getMessage();
        ResponseResult result = new ResponseResult(300,message);
        //把ResponseRust作为返回值返回，要求到时候转换成json存入响应体中
        return result;
    }
}
```

### 4.8 获取web原生对象

​	我们只需要在方法上添加对应类型的参数即可，但是注意数据类型不要写错了，SpringMVC会把我们需要的对象传给我们的形参。

```java
@RestController
public class TestController {
    @RequestMapping("/getRequestAndResponse")
    public ResponseResult getRequestAndResponse(HttpServletResponse response, HttpServletRequest request, HttpSession session){
        System.out.println(request);
        return new ResponseResult(200,"成功");
    }

}
```



### 4.9 自定义参数解析

​	如果我们想实现像获取请求体中的数据那样，在Handler方法的参数上增加一个@RequestBody注解就可以获取到对应的数据的话。

​	可以使用HandlerMethodArgumentResolver来实现自定义参数解析。

①定义用来标识的注解

```java
@Target(ElementType.PARAMETER)
@Retention(RetentionPolicy.RUNTIME)
public @interface CurrentUserId {
}
```

②创建类实现HandlerMethodArgumentResolver接口并重写其中的方法

**注意加上@Component注解注入Spring容器**

```java
@Component
public class UserIdArgumentResolver implements HandlerMethodArgumentResolver {
    //判断方法参数是否能使用当前的参数解析器进行解析
    @Override
    public boolean supportsParameter(MethodParameter methodParameter) {
        //如果方法参数有加上CurrentUserId注解，就能被我们的解析器所解析
        return methodParameter.hasParameterAnnotation(CurrentUserId.class);
    }

    //进行参数解析的方法，可以在方法中获取对应的数据，然后把数据作为返回值返回，方法的返回值就会赋值给对应的方法参数
    @Override
    public Object resolveArgument(MethodParameter methodParameter, ModelAndViewContainer modelAndViewContainer, NativeWebRequest nativeWebRequest, WebDataBinderFactory webDataBinderFactory) throws Exception {
        //获取请求头中的token
        String token = nativeWebRequest.getHeader("token");
        //解析token，获取userId
        if (StringUtils.hasText(token)){
            Claims claims = JwtUtil.parseJWT(token);
            String userId = claims.getSubject();
            return userId;
        }
        //返回结果
        return null;
    }
}
```

③配置参数解析器

```java
@Configuration
public class ArgumentResolverConfig implements WebMvcConfigurer {
    @Autowired
    private UserIdArgumentResolver userIdArgumentResolver;

    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> resolvers) {
        resolvers.add(userIdArgumentResolver);
    }
}
```

④测试

在需要获取UserId的方法中增加对应的方法参数，然后使用@CurrentUserId进行标识即可获取到数据

```java
@RequestMapping("/user")
@RestController
//@CrossOrigin
public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping("/findAll")
    public ResponseResult findAll(@CurrentUserId String userId) throws Exception {
        System.out.println(userId);
        //调用service查询数据，进行返回
        List<User> users = userService.findAll();
        return new ResponseResult(200,users);
    }
}
```



### 4.10 声明式事务

​	直接在需要事务控制的方法上加上对应的注解@Transactional，如果方法执行的过程中出现了异常，回滚到之前的版本。

```java
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public List<User> findAll() {
        return userMapper.findAll();
    }

    @Override
    @Transactional
    public void insertUser() {
        //添加两个用户
        User user = new User(null,"dunxi",15,"泰安");
        User user2 = new User(null,"dunxi2",13,"济南");
        userMapper.insertUser(user);
        System.out.println(1/0);
        userMapper.insertUser(user2);
    }
}
```



### 4.11 AOP

​	AOP详细知识学习见：https://space.bilibili.com/663528522  中的Spring教程

​	在SpringBoot中默认是开启AOP功能的。如果不想开启AOP功能可以使用如下配置设置为false

```yaml
spring:
  aop:
    auto: false
```

#### 4.11.1 使用步骤

①添加依赖

```xml
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-aop</artifactId>
        </dependency>
```

②自定义注解

```java
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface InvokeLog {
    
}
```

③定义切面类

```java
@Aspect  //标识这是一个切面类
@Component
public class InvokeLogAspect {
    //确定切点
    @Pointcut("@annotation(com.dunxi.aop.InvokeLog)")
    public void pt(){

    }

    @Around("pt()")
    public Object printInvokeLog(ProceedingJoinPoint joinPoint) {
        //目标方法调用前
        Object proceed = null;
        MethodSignature signature = (MethodSignature) joinPoint.getSignature();
        String methodName = signature.getMethod().getName();
        System.out.println(methodName+"即将被调用");
        try {
            proceed = joinPoint.proceed();
            //目标方法调用后
            System.out.println(methodName+"被调用");
        } catch (Throwable throwable) {
            throwable.printStackTrace();
            //目标方法出现异常了
            System.out.println(methodName+"出现了异常");
        }
        return proceed;
    }

}
```

④在需要增强的地方增加对应的注解

```java
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Override
    @InvokeLog
    public List<User> findAll() {
        return userMapper.findAll();
    }
}
```



#### 4.11.2 切换动态代理

​	有的时候我们需要修改AOP的代理方式.

​	我们可以使用以下方式修改:

​	在配置文件中配置spring.aop.proxy-target-class为false这为使用jdk动态代理.该配置默认为true,代表使用cglib动态代理.

```yaml
spring:
  aop:
    proxy-target-class: false #切换动态代理的方式
```



### 4.12 模板引擎相关-Thymeleaf

#### 4.12.1 快速入门

##### 4.12.1.1 依赖

```xml
        <!--thymeleaf依赖-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-thymeleaf</artifactId>
        </dependency>
```

##### 4.12.1.2 定义Controller

在controller中往域中存放数据,并且跳转

```java
@Controller
public class ThymeleafController {
    @Autowired
    private UserService userService;

    @RequestMapping("/thymeleaf/users")
    public String users(Model model){
        //获取数据
        List<User> users = userService.findAll();
        //往域中存入数据
        model.addAttribute("users",users);
        model.addAttribute("msg","hello thymeleaf");
        //页面跳转
        return "table-standard";
    }
}
```



4.12.1.3 html

在**resources\templates**下存放模板页面.

在html标签中加上xmlns:th="http://www.thymeleaf.org"

获取域中的name属性的值可以使用:${name} 注意要在th开头的属性中使用

```html
<html lang="en" class="no-ie" xmlns:th="http://www.thymeleaf.org">
    ....
<div class="panel-heading" th:text="${msg}">Kitchen Sink</div>
```

如果需要引入静态资源，需要使用如下写法。

```html
<link rel="stylesheet" th:href="@{/app/css/bootstrap.css}">
<!-- Vendor CSS-->
<link rel="stylesheet" th:href="@{/vendor/fontawesome/css/font-awesome.min.css}">
<link rel="stylesheet" th:href="@{/vendor/animo/animate+animo.css}">
<link rel="stylesheet" th:href="@{/vendor/csspinner/csspinner.min.css}">
<!-- START Page Custom CSS-->
<!-- END Page Custom CSS-->
<!-- App CSS-->
<link rel="stylesheet" th:href="@{/app/css/app.css}">
<!-- Modernizr JS Script-->
<script th:src="@{/vendor/modernizr/modernizr.js}" type="application/javascript"></script>
<!-- FastClick for mobiles-->
<script th:src="@{/vendor/fastclick/fastclick.js}" type="application/javascript"></script>
```

遍历语法:遍历的语法 th:each="自定义的元素变量名称：${集合变量名称}"

```html
<tr th:each="user:${users}">
   <td th:text="${user.id}"></td>
   <td th:text="${user.username}"></td>
   <td th:text="${user.age}"></td>
   <td th:text="${user.address}"></td>
</tr>
```



### 5.整合Redis

### ①依赖

```xml
        <!--redis-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-redis</artifactId>
        </dependency>
```

### ②配置Redis地址和端口号

```yaml
spring:
  redis:
    host: 127.0.0.1 #redis服务器ip地址
    port: 6379  #redis端口号
```



### ③注入RedisTemplate使用

```java
@Autowired
private StringRedisTemplate redisTemplate;

@Test
public void testRedis(){
    redisTemplate.opsForValue().set("name","三更");
}
```


## 6.环境切换

### 6.1 为什么要使用profile

​	在实际项目开发环境中，我们存放在开发环境的配置，部署环境的配置，测试环境的配置等等，里面的配置信息很多时，例如：端口、上下文路径、数据库配置等等、若每次初切环境时，我们都需要修改这些信息，会比较麻烦，profile的出现就是为了解决这个问题。它可以让我们针对不同的环境进行不同的配置，然后可以通过激活、指定参数等方式来快速切换环境。



### 6.2 使用

#### 6.2.1 创建profile配置文件

​	我们可以使用application-xxx.yaml的命名方式来创建配置文件，其中xxxx可以根据自己的需求来定义。

例如：

​		我们需要一个测试环境的配置文件，则可以命名为：application-test.yaml

​		需要一个生产环境的配置文件，可以命名为：application-prod.yaml

我们可以不同环境下不同的配置放到对应的profile文件中进行配置。然后把不同环境下都相同的配置放到application.yaml文件中配置。



#### 6.2.2 激活环境

​	我们可以在application.yaml文件中使用spring.profiles.active属性来配置激活哪个环境

​	也可以使用虚拟机参数来指定激活环境.例如:-Dspring.proflies.active=test

​	也可以使用命令行参数来激活环境.例如: --spring.profiles.active =test



## 7.日志

​	开启日志

~~~~yaml
debug: true #开启日志
logging:
  level:
    com.sangeng: debug #设置日志级别
~~~~





## 8.指标监控

​	我们在日常开发中需要对程序内部的运行情况进行监控,比如:健康度,运行指标,日志信息,线程状况,等等.而SpringBoot的监控,Actuator就可以帮我们解决这些问题.



### 8.1 使用

①添加依赖

```xml
<dependency>
 	<groupId>org.springframework.boot</groupId>
 	<artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
```

②访问监控接口

http://localhost:81/actuator

③配置启用监控端点

~~~~yaml
management:
  endpoints:
    enabled-by-default: true #配置启用所有端点
	web:
      exposure:
        include: "*" #web端暴露所有端点
~~~~



### 8.2 常用端点

| 端点名称         | 描述                                      |
| :--------------- | :---------------------------------------- |
| `beans`          | 显示应用程序中所有Spring Bean的完整列表。 |
| `health`         | 显示应用程序运行状况信息。                |
| `info`           | 显示应用程序信息。                        |
| `loggers`        | 显示和修改应用程序中日志的配置。          |
| `metrics`        | 显示当前应用程序的“指标”信息。            |
| `mappings`       | 显示所有`@RequestMapping`路径列表。       |
| `scheduledtasks` | 显示应用程序中的计划任务。                |



8.3 图形化界面 SpringBoot Admin

①创建SpringBoot Admin Server应用

要求引入spring-boot-admin-starter-server依赖

~~~~xml
        <dependency>
            <groupId>de.codecentric</groupId>
            <artifactId>spring-boot-admin-starter-server</artifactId>
        </dependency>
~~~~

然后在启动类上加上@EnableAdminServer注解



②配置SpringBoot Admin client应用

在需要监控的应用中加上spring-boot-admin-starter-client依赖

```xml
        <dependency>
            <groupId>de.codecentric</groupId>
            <artifactId>spring-boot-admin-starter-client</artifactId>
            <version>2.3.1</version>
        </dependency>
```

然后配置SpringBoot Admin Server的地址

~~~~yaml
spring:
  boot:
    admin:
      client:
        url: http://localhost:8888 #配置 Admin Server的地址
~~~~



###### 小练习

```java
    @Test
    public void testVolunteer(){
        //考生分数
        Segment22 segment22 = new Segment22(467,208438);

        //线差法计算今年考的分数对应去年的分数
        double fractionDif = segment22.getFraction() - (437 - 444);
        System.out.println(fractionDif);

        //两年的比例
        //21年本科线排名/22年本科线排名*22年排名=21年排名=21年分数
        double scale = (double) 274805 / 301611;

        //计算今年对应去年的位次
        int rank = (int) (scale * segment22.getAddUp());
        System.out.println(rank);

        //查表
        List<Integer> list = sm.selectAddUp();
        //根据换算后的位次查出对应21年的排名
        int addUp21 = search(list, rank);
        System.out.println(addUp21);
        //用排名去查出对应的分数
        Integer fraction21 = sm.selectByaddUp(addUp21);

        //取两个方法的平均值，降低一下误差
        int aveScore = (int) ((fraction21 + fractionDif) / 2);
        //根据平均成绩查表，对应位次
        int aveRank = search(list,aveScore);
        //用户21年的成绩和位次
        Segment21 userSegment = new Segment21(aveScore,aveRank);
//        Segment21 userSegment = new Segment21(467,208438);



        List<VolunteerContent> volunteerContents = new ArrayList<>();
        String s = "3-2-1";
        String[] subjects = SubjectUtils.getSubjects(s);
        for (String subject : subjects) {
            volunteerContents.addAll(vcm.selectBySubject(subject));
        }
        userSegment.setFraction(650);
//        VolunteerContent volunteerContent = new VolunteerContent(208438,467);
        for (VolunteerContent volunteerContent : volunteerContents) {
            if(volunteerContent.getLowestScore() >= userSegment.getFraction() && volunteerContent.getLowestScore() <= userSegment.getFraction()+50){
                Integer useraddup = 1695;
                Integer volunteeraddup = volunteerContent.getLowestRank();
                double currentScore = volunteerContent.getLowestScore();
                double difScore =  currentScore - userSegment.getFraction();//差值
                double percentScore = difScore * 0.005;//成绩差的百分点之和
                double percentRank = (((double)useraddup - (double)volunteeraddup) / (double)useraddup) * 10*percentScore;
                //成绩


                double percent = percentRank + percentScore;
                if((0.65-percent) <= 0.01){
//                    System.out.println("1%");
                    continue;
                }else{
                    double a = (0.65 - percent) * 100;
                    a=(double)Math.round(a*100)/100;
                    DecimalFormat decimalFormat = new DecimalFormat("0.00#");
                    String scoreStr = decimalFormat.format(a);
                    if (a > 30){
                        System.out.printf(volunteerContent.toString()+"------"+percentRank+"---"+percentScore+"----");
                        System.out.println(scoreStr+"%");
                    }

                }
            }
            /*else if(volunteerContent.getLowestScore() >= userSegment.getFraction()-20 && volunteerContent.getLowestScore() <= userSegment.getFraction()){
                double percentRank = ( ( (double)volunteerContent.getLowestRank() - (double)userSegment.getAddUp()  ) / (double)volunteerContent.getLowestRank()) * 0.5;
                //成绩
                double currentScore = volunteerContent.getLowestScore();
                double difScore =  userSegment.getFraction() - currentScore;//专业分数跟考生分数的差值
                double percentScore = difScore * 0.005;//成绩差的百分点之和

                double percent = percentRank + percentScore;
                if((percent) >= 1){
                    System.out.println("99%");
//                    continue;
                }else{
                    if ((percent) < 100) {
                        System.out.println((percent)  + "%");
                    }
                }
            }*/

        }
    }
    //二分查找，快速找到表中对应的位次和分数
    public int search( List<Integer> nums, int target) {
        int low = 0;
        int high = nums.size()-1;
        int mid = 0;
        while (low <= high) {
            mid = low + (high - low) / 2;
            if (nums.get(mid) > target)
                high = mid - 1;
            else if (nums.get(mid) < target)
                low = mid + 1;
            else
                return nums.get(mid);
        }
        return nums.get(mid+1);
    }
```





# SpringBoot源码学习

![image-20221022160547968](https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/image-20221022160547968.png)





### @Import注解



![image-20221026091503592](https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/image-20221026091503592.png)

![image-20221025151146740](https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/image-20221025151146740.png)

![image-20221026091757033](https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/image-20221026091757033.png)



### @Import引入ImportSelector



![image-20221026093145166](https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/image-20221026093145166.png)





![image-20221119144425069](https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/image-20221119144425069.png)

\表示换行

![image-20221119145445716](https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/image-20221119145445716.png)

**lambda表达式看不懂的情况下可以把光标点在小箭头前面alt加回车 选择转换成匿名内部类的写法先看懂**

![image-20221119145147405](https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/image-20221119145147405.png)

排除类名，写在里面的类不会被加载到Spring容器中

![image-20221119153451757](https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/image-20221119153451757.png)



