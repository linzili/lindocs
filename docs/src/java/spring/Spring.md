# Spring-01

## 1.Spring简介

​	Spring是一个开源框架，它由Rod Johnson创建。它是为了解决企业应用开发的复杂性而创建的。

​	目前是JavaEE开发的灵魂框架。他可以简化JavaEE开发，可以非常方便的整合其它框架，无侵入的进行功能增强。

​	Spring的核心就是 控制反转（IoC）和面向切面（AOP）。

## 2.IOC控制反转

### 2.1 概念

​	控制反转，之前对象的控制权在类手上，现在反转后到了Spring手上。



### 2.2 入门案例

#### ①导入依赖

导入SpringIOC相关依赖

```xml
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-context</artifactId>
            <version>5.1.9.RELEASE</version>
        </dependency>
```

#### ②编写配置文件

在resources目录下创建applicationContext.xml文件，文件名可以任意取。但是建议叫applicationContext。

内容如下：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">

    <bean class="com.dunxi.dao.impl.StudentDaoImpl" id="studentDao"></bean>

</beans>
```

#### ③创建容器从容器中获取对象并测试

```java
public static void main(String[] args) {
    //创建容器
    ClassPathXmlApplicationContext app = new ClassPathXmlApplicationContext("applicationContext.xml");
    //获取对象
    StudentDao studentDao = (StudentDao) app.getBean("studentDao");
    //测试
    Student studentById = studentDao.getStudengById(30);
    System.out.println(studentById);
}
```



### 2.3 Bean的常用属性配置

#### 2.3.1 id

​	bean的唯一标识，同一个Spring容器中不允许重复

#### 2.3.2 class

​	全类名，用于反射创建对象

#### 2.3.3 scope

scope主要有两个值：singleton和prototype

如果设置为**singleton**则一个容器中只会有一个bean对象。默认容器创建的时候就会创建该对象。

如果设置为**prototype**则一个容器会有多个该bean对象。每次调用getBean方法获取的时候都会创建一个新对象。



## 3.DI依赖注入

​	依赖注入可以理解成IOC的一种应用场景，反转的是对象间依赖关系维护权。

### 3.1 set方法注入

在要注入属性的bean标签中进行配置。前提是该类有提供属性对应的set方法。

```xml
    <bean class="com.dunxi.domain.Dog" id="dog">
        <property name="age" value="12"></property>
        <property name="name" value="大黄"></property>
    </bean>
        <!--
            name属性用来指定要设置哪个属性
            value属性用来设置要设置的值
            ref属性用来给引用类型的属性设置值，可以写上Spring容器中bean的id
        -->
    <bean class="com.dunxi.domain.Student" id="student">
        <property name="name" value="东南枝"></property>
        <property name="age" value="12"></property>
        <property name="id" value="1"></property>
        <!--用ref引用上面的dog类型里面的变量 实现引用数据类型的赋值-->
        <property name="dog" ref="dog"></property>
    </bean>
```

```java
package com.dunxi.domain;

public class Student {
    private String name;
    private int id;
    private int age;
    private Dog dog;

    public Student(String name, int id, int age, Dog dog) {
        this.name = name;
        this.id = id;
        this.age = age;
        this.dog = dog;
    }

    public Dog getDog() {
        return dog;
    }

    public void setDog(Dog dog) {
        this.dog = dog;
    }

    @Override
    public String toString(){
        return "Student{"+
                "name='" + name + '\'' +
                ",id=" + id +
                ",age=" + age +
                '}';
    }
    public Student(){

    }

    public Student(String name, int id, int age) {
        this.name = name;
        this.id = id;
        this.age = age;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public int getId() {
        return id;
    }

    public int getAge() {
        return age;
    }
}

```



### 3.2有参构造注入

在要注入属性的bean标签中进行配置。前提是该类有提供对应的有参构造。

```xml
<!--使用有参构造进行注入-->
<bean class="com.dunxi.domain.Student" id="student2" >
    <constructor-arg name="name" value="自挂东南枝" ></constructor-arg>
    <constructor-arg name="age" value="3" ></constructor-arg>
    <constructor-arg name="id" value="1" ></constructor-arg>
    <constructor-arg name="dog" ref="dog"></constructor-arg>
</bean>
```

```java
public class Student {
    private String name;
    private int id;
    private int age;
    private Dog dog;

    public Student(String name, int id, int age, Dog dog) {
        this.name = name;
        this.id = id;
        this.age = age;
        this.dog = dog;
    }
}
```



 

### 3.3复杂类属性注入

当遇到复杂类型的时候不要着急不要慌，先写property标签，完事之后写name，然后看一下有没有其他合适的属性给这个类型赋值，如果没有的话，直接结束掉当前标签，去这个标签的里面敲一个尖括号，看一下有没有合适的标签，一些简单的类型这时候是可以直接用value赋值的，例如：String，int之类的，如果是map或者set这种类型的，尖括号也是可以看到类似的标签的，这时候选中该标签，然后继续往下写就好了。

配置如下：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">
    
    <bean class="com.dunxi.domain.Phone" id="phone">
        <property name="price" value="3999"></property>
        <property name="name" value="黑鲨"></property>
        <property name="password" value="123"></property>
        <property name="path" value="QQQ"></property>
    </bean>
    
    <bean class="com.dunxi.domain.User" id="user">
        <property name="age" value="10"></property>
        <property name="name" value="大队长"></property>
        <property name="phone" ref="phone"></property>

        <property name="list">
            <list>
                <value>敦禧</value>
                <value>科技</value>
            </list>
        </property>

        <property name="phones">
            <list >
                <ref bean="phone"></ref>
            </list>
        </property>

        <property name="set">
            <set>
                <value>dunxi</value>
                <value>keji</value>
            </set>
        </property>

        <property name="map">
            <map>
                <entry key="123" value-ref="phone"></entry>
                <entry key="456" value-ref="phone"></entry>
            </map>
        </property>

        <property name="arr" >
            <array>
                <value>12</value>
                <value>13</value>
            </array>
        </property>

        <property name="properties">
            <props>
                <prop key="k1" >v1</prop>
                <prop key="k2" >v2</prop>
            </props>
        </property>
    </bean>
</beans>
```

实体类参数如下：

```java
public class User {
    private int age;
    private String name;
    private Phone phone;
    private List<String> list;
    private List<Phone> phones;
    private Set<String> set;
    private Map<String,Phone> map;
    private int[] arr;
    private Properties properties;
}
```

```java
public class Phone {
    private double price;
    private String name;
    private String password;
    private String path;
}
```



## 4.Lombook

### ①导入依赖

```xml
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <version>1.18.16</version>
</dependency>
```

### ②添加注解

```java
@Data//根据属性生成set、get方法
@AllArgsConstructor//全参构造方法
@NoArgsConstructor//空参构造方法
public class Phone {
    private double price;
    private String name;
    private String password;
    private String path;
}
```



## 5.SPEL

​	我们可以在配置文件中使用SPEL表达式。写法如下：

```xml
<!--可以做一些简单的计算-->
<property name="phone" value="#{phone}"></property>
<!--可以直接引用复杂类型名字，代替ref-->
<property name="price" value="#{39888+111}"></property>
```

注意：SPEL需要写到value属性中，不能写到ref属性里面。



## 6.配置文件

### 6.1 读取properties文件

​	我们可以让Spring读取properties文件中的key/value，然后使用其中的值。

#### ①设置读取properties

在Spring配置文件中加入如下标签：指定要读取的文件的路径。

```xml
<!--读取properties配置文件-->
<context:property-placeholder location="classpath:jdbc.properties"></context:property-placeholder>
```

其中的classpath表示类加载路径下。

我们也会用到如下写法：classpath:*.properties  其中的 * 表示文件名任意。

**注意：context命名空间的引入是否正确**

### ②使用配置文件中的值

在你需要使用的时候可以使用${key}来表示具体的值。注意要在value属性中使用才可以。例如：

```xml
<bean class="com.alibaba.druid.pool.DruidDataSource" id="dataSource">
    <property name="driverClassName" value="${jdbc.driver}"></property>
    <property name="url" value="${jdbc.url}"></property>
    <property name="username" value="${jdbc.username}"></property>
    <property name="password" value="${jdbc.password}"></property>
</bean>
```


### 6.2 引入Spring配置文件

​	我们可以在主的配置文件中通过import标签的resource属性，引入其他的xml配置文件

```xml
<import resource="classpath:jdbc.xml"></import>
```



## 7.低频知识点

### 7.1 bean的配置

#### 7.1.1 name属性

​	我们可以用name属性来给bean取名。例如：

```xml
    <bean class="com.alibaba.druid.pool.DruidDataSource" id="dataSource" name="dataSource2,dataSource3">
        <property name="driverClassName" value="${jdbc.driver}"></property>
        <property name="url" value="${jdbc.url}"></property>
        <property name="username" value="${jdbc.username}"></property>
        <property name="password" value="${jdbc.password}"></property>
    </bean>
```

获取的时候就可以直接使用这个名字来获取了。

```java
ApplicationContext app = new ClassPathXmlApplicationContext("applicationContext.xml");
DruidDataSource dataSource = (DruidDataSource) app.getBean("dataSource3");
System.out.println(dataSource);
```

#### 7.1.2 lazy-init

可以控制bean的创建时间，如果设置为true就是在被第一次调用的时候才创建。（懒汉式）

```xml
<bean class="com.alibaba.druid.pool.DruidDataSource" lazy-init="true" id="dataSource" name="dataSource2,dataSource3">
    <property name="driverClassName" value="${jdbc.driver}"></property>
    <property name="url" value="${jdbc.url}"></property>
    <property name="username" value="${jdbc.username}"></property>
    <property name="password" value="${jdbc.password}"></property>
</bean>
```

#### 7.1.3 init-method

可以用来设置初始化方法，设置完后创建完对象的时候就会调用对应的方法。

```java
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Student {
    private String name;
    private int id;
    private int age;
    //初始化方法
    public void init(){
        System.out.println("对学生对象进行初始化操作");
    }
}
```

```xml
<bean class="com.dunxi.domain.Student" id="student" init-method="init"></bean>
```

**注意：配置的初始化方法只能是空参的。**

#### 7.1.4 destroy-method

可以用来设置对象销毁之前调用的方法，设置完成后容器销毁对象前，就会帮我们去调用销毁方法。

```xml
<bean class="com.dunxi.domain.Student" id="student" destroy-method="close"></bean>
```

```java
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Student {
    private String name;
    private int id;
    private int age;
    public void init(){
        System.out.println("对学生对象进行初始化操作");
    }
    public void close(){
        System.out.println("对象销毁之前调用，进行释放资源");
    }
}
```

**注意：配置的方法只能是空参的。**

#### 7.1.5 factory-bean&factory-method

​	当我们需要让Spring容器使用工厂类来创建对象放入Spring容器的时候可以使用factory-bean和factory-method属性。

##### 7.1.5.1 配置实例工厂创建对象

配置文件中进行配置

```xml
<!--创建实例工厂-->
<bean class="com.dunxi.factory.CarFactory" id="carFactory"></bean>

<!--创建对象-->
<!--factory-bean 是指定使用哪个工厂类型，factory-method是指定使用哪个方法创建，id代表的是创建完之后的对象名字-->
<bean factory-bean="carFactory" factory-method="getCar" id="car"></bean>
```

创建容器获取对象测试

```java
ClassPathXmlApplicationContext app = new ClassPathXmlApplicationContext("applicationContext.xml");

//这时候不能写carFactory作为bean标签的名字，应该使用car 因为我们调用这个属性 就是为了创建car对象的
Car car = (Car) app.getBean("car");
```



##### 7.1.5.2 配置静态工厂创建对象

​	配置文件中进行配置

```xml
<!--使用静态工厂创建Car放入Spring容器-->
<bean class="com.dunxi.factory.CarStaticFactory" factory-method="getCar" id="car2"></bean>
```

​	创建容器获取对象测试

```java
ClassPathXmlApplicationContext app = new ClassPathXmlApplicationContext("applicationContext.xml");

Car car = (Car) app.getBean("car2");
```





# Spring-02

## 1.注解开发

​	为了简化配置，Spring支持使用注解代替xml配置。

## 2.Spring常用注解

### 2.0 注解开发准备工作

​	如果要使用注解开发必须要开启组件扫描，这样加了注解的类才会被识别出来。Spring才能去解析其中的注解。

```xml
<!--注解扫描-->
<!--启动组件扫描，制定对应的扫描包路径，该报及其子包下所有的类都会被扫描，加载包韩指定注解的类-->
<context:component-scan base-package="com.dunxi"></context:component-scan>
```



### 2.1 IOC相关注解

#### 2.1.1 @Component,@Controller,@Service,@Repository

​	上述四个注解都是加到类上的。

​	他们都可以起到类似bean标签的作用。可以把加了该注解类的对象放入Spring容器中。

​	实际在使用时选择任意一个都可以。但是后三个注解是语义化注解。

​	如果是Service类要求使用@Service。

​	如果是Dao类要求使用@Repository

​	如果是Controller类（SpringMVC中会学习到）要求使用@Controller

​	如果是其他类可以使用@Component

例如：

配置文件如下：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd">
    <!--注解扫描-->
    <!--启动组件扫描，制定对应的扫描包路径，该报及其子包下所有的类都会被扫描，加载包韩指定注解的类-->
    <context:component-scan base-package="com.dunxi"></context:component-scan>

    <!--<bean class="com.dunxi.domain.Phone" id="phone"></bean>-->

</beans>
```

类如下：

```java
@Repository("userDao")
public class UserDaoImpl implements UserDao {
    public void show() {
        System.out.println("查询数据库，展示查询到的数据");
    }
}

```

```java
@Data
@NoArgsConstructor
@AllArgsConstructor
@Component("phone")
public class Phone {
    private double price;
    private String name;
    private String password;
    private String path;
}
```

```java
@Service("userService")
public class UserServiceImpl implements UserService {
}
```

测试类如下：

```java
public static void main(String[] args) {
    //创建容器
    ClassPathXmlApplicationContext app = new ClassPathXmlApplicationContext("applicationContext.xml");

    //获取对象
    Phone phone = (Phone) app.getBean("phone");
    System.out.println(phone);

    UserDao userDao = (UserDao) app.getBean("userDao");
    System.out.println(userDao);

    UserService service= (UserService) app.getBean("userService");
    System.out.println(service);
}
```



### 2.2 DI相关注解

​	如果一个bean已经放入Spring容器中了。那么我们可以使用下列注解实现属性注入，让Spring容器帮我们完成属性的赋值。



#### 2.2.1 @Value

​	主要用于String，Integer等可以直接赋值的属性注入。不依赖setter方法，支持SpELl表达式（#{45+3}）。

例如：

```java
@Service("userService")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserServiceImpl implements UserService {
    private UserDao userDao;

    @Value("1000")
    private int num;

    @Value("#{12+8}")
    private Integer sss;
    
    @Value("敦禧科技")
    private String name;

    public void show(){
        userDao.show();
    }
}
```



#### 2.2.2 @AutoWried

​	Spring会给加了该注解的属性自动注入数据类型相同的对象。

前提条件是Spring相关的配置文件都写好了，还有使用这个注解的类 一定要放到spring容器当中

例如：

```java
@Service("userService")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserServiceImpl implements UserService {
    @Autowired
    private UserDao userDao;

    @Value("1000")
    private int num;

    @Value("#{12+8}")
    private Integer sss;

    @Value("敦禧科技")
    private String name;

    public void show(){
        userDao.show();
    }
}
```

​	**required属性代表这个属性是否是必须的，默认值为true。如果是true的话Spring容器中如果找不到相同类型的对象完成属性注入就会出现异常。**



#### 2.2.3 @Qualifier

​	如果相同类型的bean在容器中有多个时，单独使用@AutoWired就不能满足需求，这时候可以再加上@Qualifier来指定bean的名字从容器中获取bean注入。

例如：

```java
@Autowired
@Qualifier("userDao2")
private UserDao userDao;
```

**注意：该注解不能单独使用，需要配合@Autowired使用**



### 2.3 xml配置文件相关注解

#### @Configuration

​	标注在类上，表示当前类是一个注解（配置）类。我们可以用注解来完全替换掉xml配置文件。

​	注意：如果使用配置类替换了xml配置，spring容器需要使用：AnnotationConfigApplicationContext

例如：

```java
@Configuration
public class ApplicationConfig {
}
```



#### @ComponentScan

​		可以用来代替context:component-scan标签来配置组件扫描。

​		basePackages属性来指定要扫描的包。

​		注意要加在配置类上。

例如：

```java
@Configuration
@ComponentScan(basePackages = "com.dunxi")//指定要扫描的包
public class ApplicationConfig {
}
```



#### @Bean

​		可以用来代替bean标签，主要用于第三方类的注入。

​		使用：定义一个方法，在方法中创建对应的对象并且作为返回值返回。然后再方法上加上@Bean注解，注解的value属性来设置bean的名称。

例如：

```java
@Configuration
@ComponentScan(basePackages = "com.dunxi")
public class ApplicationConfig {
    @Bean("dataSource")
    public DruidDataSource getDataSource(){
        DruidDataSource druidDataSource = new DruidDataSource();
        druidDataSource.setDriverClassName("com.mysql.jdbc.Driver");
        druidDataSource.setUsername("root");
        druidDataSource.setUrl("jdbc:mysql://localhost:3306/mybatis_db");
        druidDataSource.setPassword("123456");
        return druidDataSource;
    }
}
```

**注意事项：如果同一种类型的对象在容器中只有一个，我们可以不设置bean的名称。**

具体写法如下：

```java
@Configuration
@ComponentScan(basePackages = "com.dunxi")
public class ApplicationConfig {
    @Bean
    public DruidDataSource getDataSource(){
        DruidDataSource druidDataSource = new DruidDataSource();
        druidDataSource.setDriverClassName("com.mysql.jdbc.Driver");
        druidDataSource.setUsername("root");
        druidDataSource.setUrl("jdbc:mysql://localhost:3306/mybatis_db");
        druidDataSource.setPassword("123456");
        return druidDataSource;
    }
}
```

获取方式如下：

```java
    public static void main(String[] args) {
        //创建注解容器
        AnnotationConfigApplicationContext app = new AnnotationConfigApplicationContext(ApplicationConfig.class);
        //根据对应类的字节码对象获取
        DruidDataSource dataSource = (DruidDataSource) app.getBean(DruidDataSource.class);
        System.out.println(dataSource);
    }
```



#### @PropertySource

​		可以用来代替context:property-placeholder,让Spring读取指定的properties文件。然后可以使用@Value来获取读取到的值。

​		**使用：在配置类上加@PropertySource注解，注解的value属性来设置properties文件的路径。然后在配置类中定义成员变量。在成员变量上使用@Value注解来获取读到的值并给对应的成员变量赋值。**

例如：

```
jdbc.driver=com.mysql.jdbc.Driver
jdbc.url=jdbc:mysql://localhost:3306/mybatis_db
jdbc.username=root
jdbc.password=123456
```

读取文件并获取值

```java
@Configuration
@ComponentScan(basePackages = "com.dunxi")
@PropertySource("jdbc.properties")//括号里面写配置文件的路径
public class ApplicationConfig {
	//先利用Value属性${}读取文件中的内容，然后赋值给变量，然后调用函数的时候直接传入该变量
    @Value("${jdbc.driver}")
    private String driverClassName;

    @Value("${jdbc.url}")
    private String url;

    @Value("${jdbc.username}")
    private String username;

    @Value("${jdbc.password}")
    private String password;

    @Bean
    public DruidDataSource getDataSource(){
        DruidDataSource druidDataSource = new DruidDataSource();
        druidDataSource.setDriverClassName(driverClassName);
        druidDataSource.setUsername(username);
        druidDataSource.setUrl(url);
        druidDataSource.setPassword(password);
        return druidDataSource;
    }
}
```

**注意事项：使用@Value获取读到的properties文件中的值时使用的是${key},而不是#{key}。**



## 3.如何选择

①SSM

​		自己项目中的类IOC和DI都使用注解，对第三方jar包中的类，配置组件扫描时使用xml进行配置。

②SpringBoot

​		纯注解开发



# Spring-03

## 1.AOP

### 1.1 概念

​	AOP为Aspect Oriented Programming的缩写，意为：面向切面编程。它是一种可以再不修改原来的核心代码的情况下给程序动态统一进行增强的一种技术。

​	**SpringAOP：批量对Spring容器中bean的方法做增强，并且这种增强不会与原来方法中的代码耦合。**



### 1.2 快速入门

#### 1.2.1 需求

​	要求让_04_SpringAOP模块中service包下所有类的所有方法在调用前都输出：方法被调用了。

#### 1.2.2 准备工作

##### ①添加依赖

需要添加SpringIOC相关依赖和AOP相关依赖。

```xml
    <!--SpringIOC相关依赖-->
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-context</artifactId>
        <version>5.1.9.RELEASE</version>
    </dependency>
    <!--AOP相关依赖-->
    <dependency>
        <groupId>org.aspectj</groupId>
        <artifactId>aspectjweaver</artifactId>
        <version>1.8.13</version>
    </dependency>
```
##### ②相关bean要注入容器中

开启组件扫描

```xml
<context:component-scan base-package="com.dunxi"></context:component-scan>
```

加@Service注解

```java
@Service
public class PhoneService {
    public void deleteAll(){
        System.out.println("PhoneService中的核心代码");
    }
}
```

```java
@Service
public class UserService {
    public void deleteAll(){
        System.out.println("UserService中的核心代码");
    }
}
```



#### 1.2.3 实现AOP

##### ①开启AOP注解支持

使用**aop:aspectj-autoproxy**标签

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd http://www.springframework.org/schema/aop https://www.springframework.org/schema/aop/spring-aop.xsd">
    <!--开启组件扫描-->
    <context:component-scan base-package="com.dunxi"></context:component-scan>
    <!--开启AOP注解支持-->
    <aop:aspectj-autoproxy></aop:aspectj-autoproxy>
</beans>
```



##### ②创建切面类

创建一个类，在类上面加上@Component和@Aspect

使用@Pointcut注解来指定要被增强的方法

使用@Before注解来给我们的增强代码所在的方法进行标识，并且指定了增强代码是在被增强方法执行之前执行的。

```java
@Component//表示将这个类放到spring容器中
@Aspect//表示这个对象比较特殊，这是一个切面类
public class MyAspect {
    //          对service包下的所有类的所有方法进行增强
    @Pointcut("execution(* com.dunxi.service.*.*(..))")
    public void pt(){

    }
    /*
    	用@Before注解来指定方法中是增强的代码，并且是在被增强方法执行前执行的
    	@Before的属性写上加了@Pointcut注解的方法：方法名()
    */

    @Before("pt()")//括号里面表示调用哪个切点表达式
    public void methodbefore(){
        System.out.println("方法被调用了。");
    }
}
```

#### 1.2.4 测试

```java
public static void main(String[] args) {
    //创建容器
    ApplicationContext applicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
    //获取对象
    PhoneService phoneService = applicationContext.getBean(PhoneService.class);
    UserService userService = applicationContext.getBean(UserService.class);
    //调用方法
    phoneService.deleteAll();
    userService.deleteAll();
}
```



### 1.3 AOP核心概念

- Joinpoint（连接点）：所谓连接点是指那些可以被增强到的点。在spring中，这些点指的是方法，因为spring只支持方法类型的连接点
- **Pointcut（切入点）：所谓切入点是指被增强的连接点（方法）**
- **Advice（通知/增强）：所谓通知是指具体增强的代码**
- Target（目标对象）：被增强的对象就是目标对象
- **Aspect（切面）：是切入点和通知（引介）的结合**
- Proxy(代理)：一个类被AOP增强后，就产生一个结果代理类



### 1.4 切点确定

#### 1.4.1 切点表达式

​		可以使用切点表达式来表示要对哪些方法进行增强。



写法：**execution([修饰符]返回值类型 包名.类名.方法名(参数))**

- 访问修饰符可以省略，大部分情况下省略
- 返回值类型、包名、类名、方法名可以使用星号* 代表任意
- 包名与类名之间一个点.代表当前包下的类，两个点..表示当前包及其子包下的类
- 参数列表可以使用两个点 ..表示任意个数，任意类型做参数列表



例如：

```java
execution(* com.dunxi.service.*.*(..)) //表示com.dunxi.service包下任意类，方法名任意，参数列表任意，返回值类型任意
execution(* com.dunxi.service..*.*(..))//表示com.dunxi.service包下及其子包下任意类，方法名任意，参数列表任意，返回值类型任意。
execution(* com.dunxi.service.*.*())//表示com.dunxi.service包下任意类，方法名任意，要求方法不能有参数，返回值类型任意
execution(* com.dunxi.service.*.delete*(..))//表示com.dunxi.service包下任意类，方法名必须以delete开头，方法不能有参数，返回值类型任意
```



#### 1.4.2 切点函数@annotation

​		我们也可以在要增强的方法上加上注解。然后使用@annotation来表示对加了什么注解的方法进行增强。

写法**@annotation(注解的全类名)**

例如：

定义注解如下

```JAVA
@Retention(RetentionPolicy.RUNTIME)//该注解可以保留到运行时
@Target({ElementType.METHOD})//该注解可以加在方法上
public @interface InvokeLog {
}
```

给需要增强的方法加注解

```java
@Service
public class PhoneService {
    @InvokeLog
    public void deleteAll(){
        System.out.println("PhoneService中的核心代码");
    }
}
```

切面类中使用@annotation来确定要增强的方法

```java
@Component//表示将这个类放到spring容器中
@Aspect//表示这个对象比较特殊，这是一个切面类
public class MyAspect {
    //用Pointcut注解中的属性来指定对哪些方法进行增强
    @Pointcut("@annotation(com.dunxi.aspect.InvokeLog)")
    public void pt(){

    }

    @Before("pt()")//括号里面表示调用哪个切点表达式
    public void methodbefore(){
        System.out.println("方法被调用了。");
    }
}
```



### 1.5 通知分类

- @Before：前置通知，在目标方法执行前执行
- @AfterRetuning：返回后通知，在目标方法执行后执行，如果出现异常不会执行
- @After：后置通知，在目标方法返回结果之后执行，无论是否出现异常都会执行
- @AfterThrowing：异常通知，在目标方法抛出异常后执行
- **@Around：环绕通知，围绕着方法执行**

理解不同的通知执行时机。（**下面的伪代码是用来理解单个通知执行时机的，不能用来理解多个通知情况下的执行顺序。如果需要配置多个通知我们会选择使用Around通知，更加的清晰并且好用**）

```java
public Object test(){
    before();//@Before前置通知
    try{
        Object ret = 目标方法();//目标方法调用
        afterReturing();//@AfterRetuning 返回后通知
    }catch (Throwable throwable) {
        throwable.printStackTrace();
        afterThrowing();//@AfterThwowing 出现异常后通知
    }finally{
        after();//@After 后置通知，不管有没有执行出现异常 都会通知
    }
    return ret;
}
```



环绕同志非常特殊，他可以对目标方法进行全方位的增强。

例如：

```java
@Around("pt()")
public void around(ProceedingJoinPoint pjp ){
    System.out.println("目标方法前，前置通知");
    try {
        pjp.proceed();
        System.out.println("目标方法后，后置通知");
    } catch (Throwable throwable) {
        throwable.printStackTrace();
        System.out.println("目标方法出现异常后通知");
    }finally {
        System.out.println("不管怎样，就是要通知");
    }
}
```



### 1.6 获取被增强方法的相关信息

​	我们实际对方法进行增强时往往还需要获取到被增强代码的相关信息，比如方法名，参数，返回值，异常对象等。

我们可以在出了环绕通知外的所有通知方法中增加一个**JoinPoint类型**的参数。这个参数封装了被增强方法的相关信息。**我们可以通过这个参数获取到除了异常对象和返回值之外的所有信息。**

例如：

```java
@Before("pt()")//括号里面表示调用哪个切点表达式
public void methodbefore(JoinPoint joinPoint){
    Object[] args = joinPoint.getArgs();//方法调用时传入的参数
    Object target = joinPoint.getTarget();//被代理的对象
    MethodSignature signature = (MethodSignature) joinPoint.getSignature();//获取被增强方法签名封装的对象
    System.out.println("方法被调用了。");
}
```

```java
@Before("pt()")
public void printLog(JoinPoint joinPoint){
    //输出被增强的方法的所在类名 方法名 调用时传入的参数
    MethodSignature signature = (MethodSignature) joinPoint.getSignature();
    //获取被增强方法的全类名
    String ClassName = signature.getDeclaringTypeName();
    //获取被增强方法的方法名
    String name = signature.getName();
    //获取被增强防范调用时传入的参数
    Object[] args = joinPoint.getArgs();

    System.out.println(ClassName+"==="+name+ Arrays.toString(args));

    System.out.println("方法被调用了");

}
```

​	

​	如果需要**获取被增强方法中的异常对象或者返回值**则需要在方法参数上加一个对应类型的参数，并且使用注解的属性进行配置。这样Spring会把你想获取的数据赋值给对应的方法参数。

例如：

```java
@AfterReturning(value = "pt()",returning = "ret")//使用returning属性指定了把目标方法返回值赋值给下面方法的参数ret
public void afterReturning(JoinPoint joinPoint ,Object ret){
    System.out.println("AfterReturning");
}
```

```java
@AfterThrowing(value = "pt()",throwing = "e")//使用throwing属性指定了把出现异常的对象赋值给下面方法的参数e
public void afterThrowing(JoinPoint joinPoint ,Throwable e){
    System.out.println("afterThrowing");
}
```



​	还有更简单方便的方法

​	直接在环绕通知方法中增加一个ProceedingJoinPoint类型的参数。这个参数封装了被增强方法的相关信息。

该参数的proceed()方法被调用相当于被增强方法被执行，调用后的返回值就相当于被增强方法的返回值。

例如：

```java
//环绕通知获取参数
@Around("pt()")
public Object around(ProceedingJoinPoint jpj){
    Object[] args = jpj.getArgs();
    Object target = jpj.getTarget();
    MethodSignature signature = (MethodSignature) jpj.getSignature();
    String ClassName = signature.getDeclaringTypeName();
    System.out.println(Arrays.toString(args)+"=="+ClassName+"  "+target);
    Object ret = null;
    try {
        ret = jpj.proceed();//目标方法执行
        System.out.println("返回值："+ret);
    } catch (Throwable throwable) {
        throwable.printStackTrace();
        System.out.println("错误信息："+throwable);
    }
    return ret;
}
```



### 1.7 AOP应用案例

#### 1.7.1 需求

现有AI核心功能代码如下：

```java
public class AIController {
    //AI自动回答
    public String getAnswer(String question){
        //AI核心代码 价值10个亿
        String str = question.replace("吗", "");
        str = str.replace("？","!");
        return str;
    }

    //AI算命
    public String fortuneTelling(String name){
        //AI算命核心代码
        String[] strs = {"女犯伤官把夫克，旱地莲花栽不活，不是吃上两家饭，也要刷上三家锅。","一朵鲜花头上戴，一年四季也不开，一心想要花开时，采花之人没到来。","此命生来脾气暴，上来一阵双脚跳，对你脾气啥都好，经常与人吵和闹。"};
        int index = name.hashCode() % 3;

        return strs[index];
    }
}
```

​		现在为了保证数据的安全性，要求调用方法时fortuneTelling传入的姓名是经过加密的。我们需要对传入的参数进行解密后才能使用。并且要对该方法的返回值进行加密后返回。

​	**PS：后期也可能让其他方法进行相应的加密处理。**

字符串加密解密直接使用下面的工具类即可：

```java
import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import java.security.SecureRandom;

public class CryptUtil {
    private static final String AES = "AES";

    private static int keysizeAES = 128;

    private static String charset = "utf-8";

    public static String parseByte2HexStr(final byte buf[]) {
        final StringBuffer sb = new StringBuffer();
        for (int i = 0; i < buf.length; i++) {
            String hex = Integer.toHexString(buf[i] & 0xFF);
            if (hex.length() == 1) {
                hex = '0' + hex;
            }
            sb.append(hex.toUpperCase());
        }
        return sb.toString();
    }

    public static byte[] parseHexStr2Byte(final String hexStr) {
        if (hexStr.length() < 1)
            return null;
        final byte[] result = new byte[hexStr.length() / 2];
        for (int i = 0;i< hexStr.length()/2; i++) {
            int high = Integer.parseInt(hexStr.substring(i * 2, i * 2 + 1), 16);
            int low = Integer.parseInt(hexStr.substring(i * 2 + 1, i * 2 + 2), 16);
            result[i] = (byte) (high * 16 + low);
        }
        return result;
    }

    private static String keyGeneratorES(final String res, final String algorithm, final String key, final Integer keysize, final Boolean bEncode) {
        try {
            final KeyGenerator g = KeyGenerator.getInstance(algorithm);
            if (keysize == 0) {
                byte[] keyBytes = charset == null ? key.getBytes() : key.getBytes(charset);
                g.init(new SecureRandom(keyBytes));
            } else if (key == null) {
                g.init(keysize);
            } else {
                byte[] keyBytes = charset == null ? key.getBytes() : key.getBytes(charset);
                SecureRandom random = SecureRandom.getInstance("SHA1PRNG");
                random.setSeed(keyBytes);
                g.init(keysize, random);
            }
            final SecretKey sk = g.generateKey();
            final SecretKeySpec sks = new SecretKeySpec(sk.getEncoded(), algorithm);
            final Cipher cipher = Cipher.getInstance(algorithm);
            if (bEncode) {
                cipher.init(Cipher.ENCRYPT_MODE, sks);
                final byte[] resBytes = charset == null? res.getBytes() : res.getBytes(charset);
                return parseByte2HexStr(cipher.doFinal(resBytes));
            } else {
                cipher.init(Cipher.DECRYPT_MODE, sks);
                return new String(cipher.doFinal(parseHexStr2Byte(res)));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public static String AESencode(final String res) {
        return keyGeneratorES(res, AES, "aA11*-%", keysizeAES, true);
    }

    public static String AESdecode(final String res) {
        return keyGeneratorES(res, AES, "aA11*-%", keysizeAES, false);
    }

    public static void main(String[] args) {
        System.out.println(
                "加密后:" + AESencode("将要加密的明文")
        );
        System.out.println(
                "解密后:" + AESdecode("730CAE52D85B372FB161B39D0A908B8CC6EF6DA2F7D4E595D35402134C3E18AB")
        );
    }
}
```



#### 1.7.2  实现

##### ①导入依赖

```xml
    <!--SpringIOC相关依赖-->
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-context</artifactId>
        <version>5.1.9.RELEASE</version>
    </dependency>
    <!--AOP相关依赖-->
    <dependency>
        <groupId>org.aspectj</groupId>
        <artifactId>aspectjweaver</artifactId>
        <version>1.8.13</version>
    </dependency>
```


#### 1.7.2 实现

##### ①导入依赖

```xml
<!--SpringIOC相关依赖-->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-context</artifactId>
    <version>5.1.9.RELEASE</version>
</dependency>
<!--AOP相关依赖-->
<dependency>
    <groupId>org.aspectj</groupId>
    <artifactId>aspectjweaver</artifactId>
    <version>1.8.13</version>
</dependency>
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <version>1.18.16</version>
</dependency>
```

##### ②开启AOP注解支持

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd http://www.springframework.org/schema/aop https://www.springframework.org/schema/aop/spring-aop.xsd">

    <!--配置组件扫描-->
    <context:component-scan base-package="com.dunxi"></context:component-scan>
    <!--启动AOP注解支持-->
    <aop:aspectj-autoproxy></aop:aspectj-autoproxy>
</beans>
```

##### ③自定义注解

```java
package com.dunxi.aspect;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface Crypt {
}
```

##### ④在目标方法上增加注解

**注意：目标对象一定要记得注入Spring容器中**

```java
public class AIController {
    //AI自动回答
    @Crypt
    public String getAnswer(String question){
        //AI核心代码 价值10个亿
        String str = question.replace("吗", "");
        str = str.replace("？","!");
        return str;
    }

    //AI算命
    @Crypt
    public String fortuneTelling(String name){
        //AI算命核心代码
        String[] strs = {"女犯伤官把夫克，旱地莲花栽不活，不是吃上两家饭，也要刷上三家锅。","一朵鲜花头上戴，一年四季也不开，一心想要花开时，采花之人没到来。","此命生来脾气暴，上来一阵双脚跳，对你脾气啥都好，经常与人吵和闹。"};
        int index = name.hashCode() % 3;
        return strs[index];
    }
}
```



##### ⑤定义切面类

```java
package com.dunxi.aspect;

import com.dunxi.util.CryptUtil;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class CryptAspect {

    //确定切点
    @Pointcut("@annotation(com.dunxi.aspect.Crypt)")
    public void pt(){

    }
    //定义通知
    @Around("pt()")
    public Object crypt(ProceedingJoinPoint pjp) {
        //获取目标方法调用时的参数
        Object[] args = pjp.getArgs();
        //对参数进行解密 解密后传入目标方法执行
        String arg = (String) args[0];
        String s = CryptUtil.AESdecode(arg);//解密
        args[0] = s;
        Object proceed = null;
        String ret = null;
        try {
            proceed = pjp.proceed(args);//目标方法调用
            //目标方法执行后需要获取到返回值
            ret = (String) proceed;
            //对返回值加密后进行真正的返回
            ret = CryptUtil.AESencode(ret);
        } catch (Throwable throwable) {
            throwable.printStackTrace();
        }
        return ret;
    }
}
```



### 1.8xml配置AOP

#### ①定义切面类

```java
package com.dunxi.aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.Signature;
import org.aspectj.lang.annotation.*;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
public class MyAspect {
    //          对service包下的所有类的所有方法进行增强
    @Pointcut("execution(* com.dunxi.service..*.*(..))")
//    @Pointcut("@annotation(com.dunxi.aspect.InvokeLog)")
    public void pt(){

    }

//    @Before("pt()")//括号里面表示调用哪个切点表达式
    public void methodbefore(JoinPoint joinPoint){
        Object[] args = joinPoint.getArgs();//方法调用时传入的参数
        Object target = joinPoint.getTarget();//被代理的对象
        MethodSignature signature = (MethodSignature) joinPoint.getSignature();//获取被增强方法签名封装的对象
        System.out.println("方法被调用了。");
    }
//    @Before("pt()")
    public void before(JoinPoint joinPoint){
        System.out.println("before");
    }
//    @AfterReturning(value = "pt()",returning = "ret")
    public void afterReturning(JoinPoint joinPoint ,Object ret){
        System.out.println("AfterReturning"+ret);
    }
//    @After("pt()")
    public void after(JoinPoint joinPoint){
        System.out.println("after");
    }
//    @AfterThrowing(value = "pt()",throwing = "e")
    public void afterThrowing(JoinPoint joinPoint ,Throwable e){
        System.out.println("afterThrowing");
    }
//    @Around("pt()")
//    public void around(ProceedingJoinPoint pjp ){
//        System.out.println("目标方法前，前置通知");
//        try {
//            pjp.proceed();
//            System.out.println("目标方法后，后置通知");
//        } catch (Throwable throwable) {
//            throwable.printStackTrace();
//            System.out.println("目标方法出现异常后通知");
//        }finally {
//            System.out.println("不管怎样，就是要通知");
//        }
//    }
//环绕通知获取参数
public Object around(ProceedingJoinPoint jpj){
    Object[] args = jpj.getArgs();
    Object target = jpj.getTarget();
    MethodSignature signature = (MethodSignature) jpj.getSignature();
    String ClassName = signature.getDeclaringTypeName();
    System.out.println(Arrays.toString(args)+"=="+ClassName+"  "+target);
    Object ret = null;
    try {
        ret = jpj.proceed();//目标方法执行
        System.out.println("返回值："+ret);
    } catch (Throwable throwable) {
        throwable.printStackTrace();
        System.out.println("错误信息："+throwable);
    }
    return ret;
}
}
```

```java
package com.dunxi.aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.Signature;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.stereotype.Component;

import java.lang.reflect.Array;
import java.util.Arrays;
@Component
public class PointLogAspect {
    //对哪些方法进行增强

    @Pointcut("execution(* com.dunxi.service..*.*(..))")
    public void pt(){}

//    怎么增强
    public void printLog(JoinPoint joinPoint){
        //输出被增强的方法的所在类名 方法名 调用时传入的参数
        MethodSignature signature = (MethodSignature) joinPoint.getSignature();
        //获取被增强方法的全类名
        String ClassName = signature.getDeclaringTypeName();
        //获取被增强方法的方法名
        String name = signature.getName();
        //获取被增强防范调用时传入的参数
        Object[] args = joinPoint.getArgs();

        System.out.println(ClassName+"==="+name+ Arrays.toString(args));

        System.out.println("方法被调用了");

    }
}
```

#### ②目标类和切面类注入容器

在切面类和目标类上加上对应的注解。注入如果是使用注解的方式注入容器要记得开启组件扫描。

当然你也可以在xml中使用bean标签的方式注入容器。

```java
@Component
public class MyAspect {
    //省略无关代码
}
```

```java
@Service
public class UserService {
    //省略无关代码
}
```

#### ③配置AOP

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd http://www.springframework.org/schema/aop https://www.springframework.org/schema/aop/spring-aop.xsd">
    <!--开启组件扫描-->
    <context:component-scan base-package="com.dunxi"></context:component-scan>
    <!--配置AOP-->
    <aop:config>
        <!--定义切点-->
        <aop:pointcut id="pt1" expression="execution(* com.dunxi.service..*.*(..))"></aop:pointcut>
        <aop:pointcut id="pt2" expression="@annotation(com.dunxi.aspect.InvokeLog)"></aop:pointcut>
        <!--配置切面-->
        <aop:aspect ref="myAspect">
            <!--<aop:before method="before" pointcut-ref="pt1"></aop:before>-->
            <!--<aop:after method="after" pointcut-ref="pt1"></aop:after>-->
            <!--<aop:after-returning method="afterReturning" pointcut-ref="pt1" returning="ret"></aop:after-returning>-->
            <aop:after-throwing method="afterThrowing" pointcut-ref="pt2" throwing="e"></aop:after-throwing>
        </aop:aspect>
    </aop:config>
</beans>
```



### 1.9 多切面顺序问题

​	在实际项目中我们可能会存在配置了多个切面的情况。这种情况下我们很可能需要控制切面的顺序。

​	我们在默认情况下Spring有它自己的排序规则。（按照类名排序）

​	默认排序规则往往不符合我们的要求，我们需要进行特殊控制。

​	如果是注解方式配置的AOP可以再切面类上加**@Order注解**来控制顺序。**@Order中的属性越小优先级越高**。

​	如果是XML方式配置的AOP，可以通过调整**配置顺序**来控制。



例如：

下面这种配置方式就会先使用CryptAspect里面的增强，再使用APrintLogAspect里的增强

```java
@Component
@Aspect
@Order(2)
public class APrintLogAspect {
    //省略无关代码
}
@Component
@Aspect
@Order(1)//这个值比较小，所以优先执行
public class CryptAspect {
    //省略无关代码
}
```



### 1.10 AOP原理-动态代理

​	实际上Spring的AOP其实底层就是使用动态代理来完成的。并且使用了两种动态代理分别是JDK的动态代理和Cglib动态代理。

​	所以我们接下去来学习这两种动态代理，理解下他们的不同点。



#### 1.10.1 JDK动态代理

​	JDK的动态代理使用的java.lang.reflect.Proxy这个类来进行实现的。要求被代理（被增强）的类需要实现了接口。并且JDK动态代理也只能对接口中的方法进行增强。

```java
    public static void main(String[] args) {
        AIControllerImpl aiController = new AIControllerImpl();
//        String answer = aiController.getAnswer("三连了吗？");
//        System.out.println(answer);

        //使用动态代理增强getAnswer方法

        //1.JDK动态代理
        //获取类加载器
        ClassLoader classLoader = Demo.class.getClassLoader();
        //被代理类所实现接口的字节码对象数组
        Class<?>[] interfaces = AIControllerImpl.class.getInterfaces();
        AIController proxy = (AIController) Proxy.newProxyInstance(classLoader, interfaces, new InvocationHandler() {
            //使用代理对象的方法时 会调用到invoke
            public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
                //proxy是代理对象
                //method是当前被调用的方法封装的Method对象
                //args是调用方法时传入的参数
                //调用被代理对象的对应方法
                //判断 当前调用的是否是getAnswer方法
                if(method.getName().equals("getAnswer")){
                    System.out.println("增强");
                }
                Object ret = method.invoke(aiController,args);
                return ret;
            }
        });
        String answer = proxy.getAnswer("三连了吗？");
        System.out.println(answer);

        String s = proxy.fortuneTelling("张三");
        System.out.println(s);
    }
```



#### 1.10.2 Cglib动态代理

​	使用的是org.springframework.cglib.proxy.Enhancer类进行实现的。

```java
public class CglibDemo {
    public static void main(String[] args) {
        Enhancer enhancer = new Enhancer();
        //设置父类的字节码对象
        enhancer.setSuperclass(AIControllerImpl.class);
        enhancer.setCallback(new MethodInterceptor() {
            //使用代理对象执行方法时都会调用到intercept方法
            @Override
            public Object intercept(Object o, Method method, Object[] objects, MethodProxy methodProxy) throws Throwable {
                //判断当前调用的方法是不是getAnswer方法
                if(method.getName().equals("getAnswer")){
                    System.out.println("增强");
                }
                //调用父类中对应的方法
                Object ret = methodProxy.invokeSuper(o, objects);
                return ret;
            }
        });
        //生成代理对象
        AIController proxy = (AIController) enhancer.create();
//        System.out.println(proxy.getAnswer("你好吗？"));
        System.out.println(proxy.fortuneTelling("nihaohnai"));
    }
}
```



#### 1.10.3 总结

​	JDK动态代理要求被代理（被增强）的类案必须要实现接口，生成的代理对象相当于是被代理对象的兄弟。

![image-20220517154413061](C:\Users\DunXi\AppData\Roaming\Typora\typora-user-images\image-20220517154413061.png)

Cglib的动态代理不要求被代理（被增强）的类要实现接口，生成的代理对象相当于被代理对象的子类对象。

![image-20220517154503628](C:\Users\DunXi\AppData\Roaming\Typora\typora-user-images\image-20220517154503628.png)

​	**Spring的AOP默认情况下有限使用的是JDK的动态代理，如果使用不了JDK的动态代理才会使用Cglib的动态代理。**



### 1.11 切换默认动态代理方式

​	有的时候我们需要修改AOP的代理方式。

​	我们可以使用以下方式修改：

如果我们是采用注解方式配置AOP的话：

设置aop:aspectj-autoproxy标签的proxy-target-class属性为true，代理方式就会修改成Cglib

```xml
<aop:aspectj-autoproxy proxy-target-class="true"></aop:aspectj-autoproxy>
```



如果我们是采用xml方式配置的话：

设置aop:config标签的proxy-target-class属性为true，代理方式就会修改成Cglib

```xml
<aop:config proxy-target-class="true">    </aop:config>
```





# Spring-04

## 1.Spring整合Junit

### ①导入依赖

```xml
<!-- junit -->
<dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.12</version>
</dependency>
<!-- spring整合junit的依赖 -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-test</artifactId>
    <version>5.1.9.RELEASE</version>
</dependency>
```



### ②编写测试类

在测试类上加上

**@RunWith(SpringJUnit4ClassRunner.class)**注解，指定让测试运行于Spring环境

**@ContextConfiguration注解**，指定Spring容器创建需要的配置文件或者配置类

```java
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "classpath:applicationContext.xml")
public class SpringTest {
}
```

### ③注入对象进行测试

​	在测试类中注入要测试的对象，定义测试方法，在其中使用要测试的对象。

```java
package com.dunxi;

import com.dunxi.service.UserService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "classpath:applicationContext.xml")
public class SpringTest {
    // 想测哪个对象，就注入哪个对象
    @Autowired
    private UserService userService;、
    //定义测试方法
    @Test
    public void testJunit(){
        userService.findById(1);
        System.out.println(1);
    }
}
```



## 2.Spring整合Mybatis

​	我们如果想把Mybatis整合到Spring中需要使用一个整合包mybatis-spring

​	官方文档：http://mybatis.org/spring/zh/index.html



### ①导入依赖

```xml
<!-- spring-jdbc -->
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-jdbc</artifactId>
        <version>5.1.9.RELEASE</version>
    </dependency>
<!-- mybatis整合到Spring的整合包 -->
<dependency>
    <groupId>org.mybatis</groupId>
    <artifactId>mybatis-spring</artifactId>
    <version>2.0.4</version>
</dependency>

<!--mybatis依赖-->
<dependency>
    <groupId>org.mybatis</groupId>
    <artifactId>mybatis</artifactId>
    <version>3.5.4</version>
</dependency>
<!--mysql驱动-->
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>5.1.47</version>
</dependency>

<!-- druid数据源 -->
<dependency>
    <groupId>com.alibaba</groupId>
    <artifactId>druid</artifactId>
    <version>1.1.16</version>
</dependency>
```



### ②往容器中注入整合相关对象

```xml
<!--读取properties文件-->
<context:property-placeholder location="classpath:jdbc.properties"></context:property-placeholder>
<!--创建连接池注入容器-->
<bean class="com.alibaba.druid.pool.DruidDataSource" id="dataSource">
    <property name="url" value="${jdbc.url}"></property>
    <property name="username" value="${jdbc.username}"></property>
    <property name="password" value="${jdbc.password}"></property>
    <property name="driverClassName" value="${jdbc.driver}"></property>
</bean>
<bean class="org.mybatis.spring.SqlSessionFactoryBean" id="sessionFactoryBean">
    <property name="dataSource" ref="dataSource"></property>
    <!--配置Mybatis配置文件的路径-->
    <property name="configLocation" value="classpath:mybatis-config.xml"></property>
</bean>

<!--mapper扫描配置，扫描到的mapper对象会注入到Spring容器中-->
<bean class="org.mybatis.spring.mapper.MapperScannerConfigurer" id="mapperScannerConfigurer">
    <property name="basePackage" value="com.dunxi.dao"></property>
</bean>
```

Mybatis配置文件mybatis-config.xml如下：

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>
</configuration>
```

### ③从容器中获取mapper对象进行使用

```java
@Autowired
private UserDao userDao;

@Test
public void testUserDao(){
    List<User> all = userDao.findAll();
    System.out.println(all);
}
```



# 3.Spring声明式事务

### 3.1 事务回顾



#### 3.1.1 事务的概念

​	保证一组数据库的操作，要么同时成功，要么同时失败



#### 3.1.2 四大特性

- 隔离性

  多个事务之间要相互隔离，不能相互干扰

- 原子性

  指事务是一个不可分割的整体，类似一个不可分割的原子

- 一致性

  保障事务前后这组数据的状态是一致的。要么都是成功的，要么都是失败的。

- 持久性

  指事务一旦被提交，这组操作修改的数据就真的发生变化了。即使接下来数据库故障也不应该对其有影响。



### 3.2 实现声明式事务

​	如果我们自己去对事务进行控制的话我们就需要在原来核心代码的基础上加上事务控制相关的代码。而在我们的实际开发中这种控制的操作也是非常常见的。所以Spring提供了声明式事务的方式让我们去控制事务。

​	只要简单的加个注解（或者是xml配置）就可以实现事务控制，不需要事务控制的时候只需要去掉相应的注解即可。



#### 3.2.0 案例环境准备

①数据初始化

```sql
CREATE DATABASE /*!32312 IF NOT EXISTS*/`spring_db` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `spring_db`;
DROP TABLE IF EXISTS `account`;
CREATE TABLE `account` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) DEFAULT NULL,
  `money` DOUBLE DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=INNODB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
INSERT  INTO `account`(`id`,`name`,`money`) VALUES (1,'三更',100),(2,'草堂',100);
```

②Spring整合Mybatis

③创建Service和Dao

```java
public interface AccountService {
    /**
     * 转账
     * @param outUserId 转出账户ID
     * @param inUserId 转入账户ID
     * @param money 钱数
     */
    void transfer(Integer outUserId, Integer inUserId, Double money);
}
```

```java
@Service
public class AccountServiceImpl implements AccountService {
    @Autowired
    private AccountDao accountDao;
    
    public void transfer(Integer outUserId, Integer inUserId, Double money) {
        //增加
        accountDao.updateMoney(inUserId,money);
        //减少
        accountDao.updateMoney(outUserId,-money);
    }
}
```

```java
public interface AccountDao {
    void updateMoney(@Param("id") Integer id , @Param("updateMoney") Double money);
}
```

AccoutDao.xml如下：	

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd" >
<mapper namespace="com.dunxi.dao.AccountDao">
    <update id="updateMoney">
        update account set money = money + #{updateMoney} where id = #{id}
    </update>
</mapper>
```



#### 3.2.1 注解实现

##### ①配置事务管理器和事务注解驱动

在spring的配置文件中添加如下配置：

```xml
    <!--把事务管理器注入Spring容器，需要配置一个连接池-->
    <bean id="txManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
        <property name="dataSource" ref="dataSource"/>
    </bean>
    <!--开启事务注解驱动，配置使用的事务管理器-->
    <tx:annotation-driven transaction-manager="txManager"/>
```

##### ②添加注解

在需要进行事务控制的方法或者类上添加@Transaction注解就可以实现事务控制。

```java
    @Transactional
    public void transfer(Integer outId, Integer inId, Double money) {
        //增加
        accoutDao.updateMoney(inId,money);
//        System.out.println(1/0);
        //减少
        accoutDao.updateMoney(outId,-money);
    }
```

**注意：如果加在类上，这个类的所有方法都会受事务控制，如果加在方法上，就是那一个方法受事务控制。**

注意，因为声明式事务底层是通过AOP实现的，所以最好把AOP相关依赖都加上。

```xml
       <dependency>
            <groupId>org.aspectj</groupId>
            <artifactId>aspectjweaver</artifactId>
            <version>1.9.6</version>
        </dependency>
```



#### 3.2.2 xml方式实现



##### ①配置事务管理器

```xml
<bean id="txManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
    <property name="dataSource" ref="dataSource"/>
</bean>
```
##### ②配置事务切面

```xml
 	<!--定义事务管理的通知类-->
    <tx:advice transaction-manager="txManager" id="txAdvice">
        <tx:attributes>
            <tx:method name="trans*"/>
        </tx:attributes>
    </tx:advice>

    <aop:config>
        <aop:pointcut id="pt" expression="execution(* com.sangeng.service..*.*(..))"></aop:pointcut>
        <aop:advisor advice-ref="txAdvice" pointcut-ref="pt"></aop:advisor>
    </aop:config>
```

注意，因为声明式事务底层是通过AOP实现的，所以最好把AOP相关依赖都加上。

```xml
   <dependency>
        <groupId>org.aspectj</groupId>
        <artifactId>aspectjweaver</artifactId>
        <version>1.9.6</version>
    </dependency>
```


### 3.3 属性配置

#### 3.3.1 事务传播行为propagation

​	当事务方法嵌套调用时，需要控制是否开启新事务传播行为来控制。



测试案例：

```java
@Service
public class TestServiceImpl {
    @Autowired
    AccountService accountService;

    @Transactional
    public void test(){
        accountService.transfer(1,2,10D);
        accountService.log();
    }
}
```

```java
@Service
public class AccountServiceImpl implements AccountService {
    @Autowired
    private AccountDao accountDao;

    @Transactional
    public void transfer(Integer outUserId, Integer inUserId, Double money) {
        //增加
        accountDao.updateMoney(inUserId,money);
//        System.out.println(1/0);
        //减少
        accountDao.updateMoney(outUserId,-money);
    }
    @Transactional
    public void log() {
        System.out.println("打印日志");
//        int i = 1/0;
    }
}
```



| 属性值                         | 行为                                                   |
| ------------------------------ | ------------------------------------------------------ |
| REQUIRED（必须要有）           | 外层方法有事务，内层方法就加入。外层没有，内层就新建   |
| REQUIRES_NEW（必须要有新事务） | 外层方法有事务，内层方法新建。外层没有，内层也新建     |
| SUPPORTS(支持有)               | 外层方法有事务，内层方法就加入。外层没有，内层就也没有 |
| NOT_SUPPORTED(支持没有)        | 外层方法有事务，内层方法没有。外层没有，内层也没有     |
| MANDATORY(强制要求外层有)      | 外层方法有事务，内层方法加入。外层没有，内层就报错     |
| NEVER（绝不允许有）            | 外层方法有事务，内层方法就报错。外层没有，内层也就没有 |



例如：

```java
    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void transfer(Integer outUserId, Integer inUserId, Double money) {
        //增加
        accountDao.updateMoney(inUserId,money);
//        System.out.println(1/0);
        //减少
        accountDao.updateMoney(outUserId,-money);
    }
```



#### 3.3.2 隔离级别isolation

Isolation.DEFAULT 使用数据库默认隔离级别

Isolation.READ_UNCOMMITTED 

Isolation.READ_COMMITTED

Isolation.REPEATABLE_READ

Isolation.SERIALIZABLE

```java
    @Transactional(propagation = Propagation.REQUIRES_NEW ,isolation = Isolation.READ_COMMITTED)
    public void transfer(Integer outUserId, Integer inUserId, Double money) {
        //增加
        accountDao.updateMoney(inUserId,money);
//        System.out.println(1/0);
        //减少
        accountDao.updateMoney(outUserId,-money);
    }
```



#### 3.3.3 只读readOnly

​	如果事务中的操作都是读操作，没涉及到对数据的写操作可以设置readOnly为true。这样可以提高效率。

```java
@Transactional(readOnly = true)
public void log() {
    System.out.println("打印日志");
    int i = 1/0;
}
```

