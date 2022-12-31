# Windows 操作系统

### 打开控制台的几种方式：

Win +R 之后输入 cmd 打开
在 Windows 资源管理器界面搜索框输入 cmd 打开
在文件夹内按住 shift 键之后右击点击打开 shell 命令行

##### Windows 环境下的 dos 命令：

help:帮助命令，直接输入 help 会显 示所有的 dos 命令
help+具体指令名，会显示详细的指令帮助文档
help dir 碰到不会使用的命令，问一下 help 怎么使用

##### dir 命令：

查看当前目录下的文件（相当于 linux 环境下的 ls）

##### cd 命令：

进入到指定文件夹 or 返回上一级文件夹

cd 目标文件夹 cd .. 返回上一级

##### cls 命令：

清楚屏幕

##### 切换盘符命令：

直接输入想要进入到的盘符，后面加冒号

##### mkdir 命令：

创建文件夹

###### notepad 命令（类似于 vim 编辑器）：

创建记事本
打开记事本，notepad+记事本的名字

###### find 命令：

在一个或多个文件中搜索一个文本字符串

| 操作       | 说明                              |
| ---------- | --------------------------------- |
| help       | 查看帮助文档                      |
| 盘符名称： | 盘符切换。E:回车，表示切换到 E 盘 |
| dir        | 查看当前路径下的内容。            |
| cd 目录名  | 进入单级目录。 cd aaa             |
| cd ..      | 回退到上一级目录 cd ..            |
| cls        | 清屏。                            |

## JVM、JRE、JDK

JVM (ava VirtualMachine）是 JAVA 虚拟机所有的 JAVA 程序都要在 jvm 上运行
JRE (Java Runtime Environment)是 JAVA 的运行环境，包含了 JVM 和 JAVA 的核心类库
JDK (Java Development Kit)称为 JAVA 开发工具，包含了 JRE 和开发工具

![image-20221124153605734](https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/image-20221124153605734.png)

###### 要开发首先要安装 java 的 JDK

安装 JDK 时不要装到 C 盘，不要有中文目录
安转完成之后需要配置环境变量，只有环境变量配置好了，才可以在其他目录下使用安装好的 JDK

###### 环境变量的配置方式：

此电脑->右键属性->高级系统设置->环境变量->在系统栏添加项->变量名尽量用 java 开头，变量值为 JDK 的安装目录
选择 path 变量->编辑->添加一项内容为“%JAVA_HOME%\bin”两个百分号中间为刚配置的变量名，然后把这一项内容移至最顶端
这样就可以在其他目录下使用 java 命令了

###### 编写第一个 java 程序

新建一个.java 文件，编辑代码
开启 cmd 控制台，然后用 javac 编译，编译完之后会生成一个.class 的文件
用 java 空格加程序名字运行编译好的程序，后面不需要跟后缀名

###### IDEA 的安装与使用

IDE 就是一个编译器
eclipse 之前是比较流行的，但是现在有点落后了
IDEA 是目前主流的 java 集成开发环境

2021 版本的试用 30 天需要先注册一个账号， 注册成功之后的操作，先配置 jdk 从 java 那个选项栏里面选择 jdk 找到之前下载安装的 jdk 文件夹，点击选择之后系统自动识别 jdk 版本

配置好 jdk 之后，新建一个空项目，名字随便给

建立好项目之后右键项目文件夹，新建一个 class，名字随便，这个操作有点类似于 webstorm，上手还是比较迅速的

在新文件的类名下面大括号内，输入 psvm 回车自动补齐主函数前面的变量名字以及括号内的内容，输入 sout 回车自动补齐 System.out.println();只需要输入括号内要打印的东西就行，很方便了

###### 设置字体大小：

菜单栏>file>setting>font>设置（跟 webstorm 一样）

###### 包创建（为了更好的分类管理文件）：

右键文件夹，选择 package，创建文件夹，可以是一个，也可以是多级的，新建一个 com 文件夹，新建一个 com.sangeng 的意思是在 com 文件夹下有个子文件夹 sangeng，这时候我们可以在这个包下面进行创建类，编写代码，更有利于我们分类管理文件

## 注释：

java 中有三种注释方式：

单行注释、多行注释、文档注释

#### IDEA 快捷键

| 功能               | 快捷键          |
| ------------------ | --------------- |
| 增加或取消单行注释 | ctrl+/          |
| 增加或取消多行注释 | ctrl+shift+/    |
| 文档注释           | 输入/\*\*+enter |

##### 字面值：

- 整数值 没有小数点后面的东西 100，1,20 1 2 3

- 小数值 带小数点的（浮点型）100.1

- 字符值 单引号引起来的一个字符 'a' 'b' 'c' '1' '2' '3'

- 字符串值 双引号引起来的一串字符 "asdfasdfaqwerqwerasdf" "123123141"

- 布尔值 用来表示真或假 true 和 false 即 0 和 1 对 错 真 假 1 0

- 空值 代表空值，null 空的 没有东西

#### 计算机存储单位：

位（bit)：是计算机中数据最小的单位。

字节（Byte，B）：计算机中数据的基本单位，每 8 位组成一个字节。

###### 各个单位的换算关系：

1B(字节) = 8bit

1KB = 1024B

1MB = 1024KB

1GB = 1024MB

1TB = 1024GB

### 数据类型

java 中有两种数据类型，基本数据类型和引用数据类型

<img title="" src="https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/202201032222121.png" alt="" width="476" data-align="inline">

#### 整数型

- byte 1 字节
- short 2 字节
- int 4 字节
- long 8 字节

#### 浮点型

- float
- double

#### 字符型

- char

#### 字符串

- string

#### 布尔型

- boolean

**在 java 当中，我们写的整数值默认就是 int 类型，小数值默认就是 double 类型**

## 变量

在程序运行过程中我们要对一些临时的数据进行保存和存储，这个就是变量。

在程序运行的过程中，变量的值可以在一定范围内变化的。

#### 定义格式

1.光定义，不赋值

格式：**数据类型 变量名；**

int num;

2.定义并赋值

格式：数据类型 变量名 = 初始化值；

int num = 1024；

3.一次定义多个变量（不推荐使用）

int a = 10,b = 20;

int c,d;

##### 变量的使用

变量在定义完成后，直接使用该变量名就可以引用

##### 作用域

1. 变量定义之后有一个作用范围，他的作用只在定义他的那个大括号内，出了大括号就没有用了

2. 在同一个作用范围内不允许有重名的变量。

3. 变量在使用之前必须先初始化

4. 定义 long 类型的时候，赋值时需要在数据后面加 L,表示长整型（java 中正常的整数值默认是 int 类型的，所以要加 l 后缀表示长整型）

5. 给 float 赋值的时候，直接写小数会报错，因为默认小数值是 double 类型的，这时候需要用 F 表示（大小写都可以推荐使用大写）；

###### 报错的处理方案：

报错之后，idea 会有标红，这时候使用 alt+enter 可以使用系统提供的解决方案

### 数据类型转换

##### 自动类型转换

数据绝对安全的类型转换是可以自动转换的，直接写即可

- 小的数据放到大的容器里面是安全的，这时候会自动转换 例如：int 类型的值转换为 long

- 相反的 long 类型转换为 int 类型时，这时候是不安全的，数据大的话转换过程中可能会丢失数据，所以是不安全的，不会自动转换

- 把 int 类型的转换成 double 类型的 这也是安全的

- double 类型转换成 int 类型 ，小数部分会丢失， 所以是不安全的

- 总之 小的东西转换到大的是安全的 反之不安全

#### 强制类型转换

转换后可能导致出现问题（数据溢出，丢失数据精度）的类型转换叫做强制类型转换。因为可能会出现问题，必须给计算机声明一下，我就是要转换，出了问题算我的

###### 书写格式(前面加小括号即可)：

目标数据类型 变量名 = （目标数据类型）值或者变量；

int a = (int)a;

#### 标识符（变量名字）：

###### Java 中的命名规则

#### 命名规则

- 由字母、数字、下划线，美元符号“$”组成

- 不能使用数字开头

- 不能使用 java 中的关键字用作名字

#### 命名规范

- 小驼峰式命名：变量名、方法名（函数名）

  首字母小写，从第二个单词开始每个单词的首字母大写。例如 setAge getAge

- 大驼峰式命名：类名

  每个单词的首字母都大写。例如 HelloWorld FileUploadController

- 标识符要见名知意，不要采用拼音和英文混写的方式，尽量都要用英文

### Scanner-键盘录入数据

我们可以通过 scanner 类来获取用户的键盘录入数据。

#### 使用步骤

1、导包。

import java.util.Scanner;

2、创建对象

Scanner sc = new Scanner(System.in);

3、接受用户录入的数据并存储

int num = sc.nextInt();

#### 算数运算符

| 符号 | 作用 | 不同之处                                                                                            |
| ---- | ---- | --------------------------------------------------------------------------------------------------- |
| +    | 加   | 单纯的使用数字的时候和数学中的加号没有区别                                                          |
| -    | 减   | 无                                                                                                  |
| \*   | 乘   | 无                                                                                                  |
| /    | 除   | 整数相除只能得到整数，如果想要得到小数必须使用带小数点的值参与计算，**例如：10/3 = 3 而不是 3.333** |
| %    | 取余 | 获取两个数相除之后的余数   **例如：10%3 = 1**                                                       |

如果字符参与了运算：

char 类型参与算数运算符，会把字符转换成对应的数字（参照 ASCII 表）然后进行运算

字符'A'=65 'a' = 97

如果字符串参与了+运算：

**当+操作中出现字符串时，这个+是会<u>进行字符串的拼接</u>，而不会进行数据计算**

#### 赋值运算符：

**一个等号是赋值**

可以用来修改变量的值。复制运算符左边写要被修改的变量名，右边写参与计算的值，可以是具体的值，也可以是表达式或者变量

| 符号 | 功能       | 举例                                 |
| ---- | ---------- | ------------------------------------ |
| =    | 赋值       | a=12,将 10 赋值给变量 a              |
| +=   | 加后赋值   | a+=10;相当于 a=(a 的数据类型)(a+10); |
| -=   | 减后赋值   | a-=10;相当于 a=(a 的数据类型)(a-10); |
| \*=  | 乘后赋值   | a*=b;//相当于 a=(a 的数据类型)(a*b); |
| /=   | 除后赋值   | a/=b;//相当于 a=(a 的数据类型)(a/b); |
| %=   | 取余后赋值 | a%=b;//相当于 a=(a 的数据类型)(a%b); |

#### 自增自减运算符

| 符号 | 作用 | 举例              |
| ---- | ---- | ----------------- |
| ++   | 自增 | a++;相当于 a=a+1; |
| --   | 自减 | a--;相当于 a=a-1; |

这里牵扯到++前置跟后置的区别，**前置时，先自增**，再参与赋值运算，**后置时，先用当前的值，然后自增**

--运算符同上

#### 比较运算符

一个等号是赋值，两个等号是 判断等于

| ==  | 比较左右两边是否相等                                      |
| --- | --------------------------------------------------------- |
| <   | 比较左边是否比右边小                                      |
| >   | 比较左边是否大于右边                                      |
| <=  | 比较左边是否小于等于右边                                  |
| >=  | 比较左边是否大于等于右边                                  |
| !=  | 比较左右两边是否**不相等**，_不相等为 true，相等为 false_ |

### 逻辑运算符

| 符号 | 作用     | 说明                                     |
| ---- | -------- | ---------------------------------------- |
| &    | 逻辑与   | 理解成并且的意思，左右两边都要为真才为真 |
| \|   | 逻辑或   | 逻辑或                                   |
| ^    | 逻辑异或 | 左右两边不同结果才为真                   |
| !    | 逻辑非   | 取反                                     |
| &&   | 短路与   | 作用和&相同，但是有短路效果              |
| \|\| | 短路或   | 短路或                                   |

在程序中常用的是短路与跟短路或，这样节省时间，前面的结果已经出来了，后面就没有计算的必要了

##### 三元运算符：

##### 格式

布尔表达式？表达式 1：表达式 2；

##### 执行流程

先判断布尔表达式的结果，如果为真，则执行表达式 1，否则执行表达式 2

```java
    public static void main(String[] args) {
        //键盘录入两个数比较大小
        //键盘录入两个数
        Scanner sc = new Scanner(System.in);
        System.out.println("请输入一个数：");
        int a = sc.nextInt();
        System.out.println("请输入第二个数");
        int b = sc.nextInt();
        //判断大小
        int result = a>b?a:b;
        System.out.println(result);
    }
```

### 流程控制语句-if

分支结构，最常用的流程控制语句

##### 格式

if 语句有三种部分组成

三个部分:

1.  if 部分

    if(判断表达式)

    {

    ​ 语句块；

    }

2.  else if 部分

    else if(判断表达式){

    ​ 语句块；

    }

        	3.  else部分

    else(判断表达式){

    ​ 语句块；

    }

一个完整的 if 语句，首先在最前面有且仅有一个 if 部分，后面会有 0 个或多个 else if 语句，会有 0 个或 1 个 else 语句

例如：

```java
if(判断表达式1){
	语句块1;
}
```

```java
if(判断表达式1){
    语句块1;
}else if(判断表达式2{
    语句块2;
}
```

```java
if(判断表达式1){
    语句块1;
}else if(判断表达式2{
    语句块2;
}else{
    语句块n+1;
}
```

##### 执行流程

从上到下依次执行判断表达式

​ 结果为 true：则执行后面紧跟着的语句体，语句体执行完了整个 if 语句就结束了

​ 结果为 false：则继续执行判断下面的一个判断表达式

如果所有判断表达式的判断结果都为 false，在有 else 语句的情况下执行 else 里面的语句，没有的话直接结束判断

```java
    public static void main(String[] args) {
        //输入年龄 判断是否可以进入网吧
        Scanner sc = new Scanner(System.in);
        System.out.println("请输入你的年龄");
        int age = sc.nextInt();
        //判断是否大于等于18
        if( age >= 18){
            System.out.println("可以进入网吧");
        }else{
            System.out.println("未成年不可以进入网吧哦");
        }
    }
```

#### 注意

**平时写代码的时候缩进要规范**

一旦执行了一个大括号中的语句体，整个 if 语句就结束了，不可能出现执行两个语句体的情况。

_世界上最遥远的距离莫过于你在 if 里我在 else 里_

如果大括号中的语句体只有一行代码，这时候可以把大括号省略，**但是建议永远不要省略**

```java
public static void main(String[] args) {
    int a = 10;
    int b;
    if(a%2 == 0)
    {
        b = 1;
    }else if(a%2 == 1){
        b = 0;
    }
    System.out.println(b);
}
//上述代码这样写会报错，因为编译器觉得两个if有可能都不成立，这种情况就没有给赋值了，所以提示可能没有给b初始化值
```

上述代码这样写会报错，因为编译器觉得两个 if 有可能都不成立，这种情况就没有给赋值了，所以提示可能没有给 b 初始化值

```java
public static void main(String[] args) {
    int a = 10;
    int b;
    if(a%2 == 0)
    {
        b = 1;
    }else{
        b = 0;
    }
    System.out.println(b);
}
```

像下面这样写就可以了，因为编译器知道 if 和 else 必定会有一个被执行，执行之后 b 就有值了

### 流程控制语句-switch

使用 switch 也可以根据判断不同的情况做不同的处理

#### 格式

```java
switch(表达式){
    case 值1:
        语句体1;
        break;
    case 值2:
        语句体2;
        break;
	case 值3:
        语句体3;
        break;
    default:
        语句体n+1;
        break
case 值1:
        语句体1;
        break;//最后一个break语句可以省略，但是推荐不要省略
}
```

switch 后面小括号当中只能是下列数据类型：

​ **基本数据类型：byte/short/char/int**

​ **引用数据类型：String 字符串、enum 枚举**

例如：

```java
public static void main(String[] args) {
	int num = 1;
	switch (num){
		case 1:
			System.out.print1n(1);
		break;
		case 2：
			system.out.print1n（2）;
		break;
		case 3:
			System.out.print1n(3);
		break;
		default:
			system.out.print7n("default");
		break;
    }
}
```

#### 执行流程

---

从上到下依次看表达式结果和哪个 case 后面的值相同，相同就执行哪个 case 后面的语句体，碰到 break 就结束 switch。

如果没有符合要求的 case 则执行 default 后面的语句体。

#### 注意事项

1. switch 可以没有 default，但是一般都会加上
2. case 语句后面不可以不加 break，但是如果不加 break 就可能会出现 case 穿透的问题，匹配哪一个 case 就从哪一个位置向下执行，直到遇到了 break 或者整个 switch 结束为止

## 循环语句

### for 循环

```java
for(初始化语句;条件判断表达式;步进语句){
    循环体;
}
```

例如：

```java
for(int i = 1;i <= 5;i++){
    System.out.println(i);//1 2 3 4 5
}
```

执行流程

1. 先执行初始化语句

2. 然后看布尔表达式的结果

   1. 结果为 true 执行循环体
   2. 结果为 false 循环结束

3. 循环体执行完之后执行步进语句，然后继续执行 2 判断布尔表达式的结果（注意：这里不是初始化语句）

   然后以此类推。

#### 注意

1. 初始化语句、布尔表达式、步进语句之间是用分号分隔，而不是逗号。但是在初始化语句和步进语句部分，我们可以使用逗号将一系列的表达式隔开，那些语句均会独立执行。例如：

   ```java
   for(int i = 1,j = 10;i<j;i++,j--){
       循环体;
   }
   ```

2. 无论初始化语句，布尔表达式，还是步进语句，都可以空着不写，但是分号不能少。例如：

```java
for(;;){
    循环体;
}
```

3. 如果在初始化语句中定义了变量，那么这个变量只在循环中使用，循环结束了就超出了这个变量的作用域

4. 也可以使用循环之外的变量

### while 循环

#### 格式

```java
while(布尔表达式){
    循环体；
}
```

例如：

```java
while(i <= 10){
    System.out.println(i);
    i++;
}
```

#### 执行流程

​ ① 看布尔表达式的结果

​ 如果为 false 循环结束

​ 如果为 true，则执行循环体。

​ ② 循环体执行完后继续执行 ① 以此类推

先看前几次循环 找到一个规律，然后看最后一次执行的结果

### do...while 循环

#### 格式

```java
do{
    循环体；
}while(布尔表达式);
```

例如：

```java
    public static void main(String[] args) {
        int num = 0;
        do{
            //让用户输入一个数字
            System.out.println("请输入一个数字：");
            num = sc.nextInt();
        }while(num != -1);
    }
```

注意：while 小括号后面必须跟一个分号。

#### 执行流程

① 执行循环体

② 然后看布尔表达式的结果

​ 如果为 true 则继续执行循环体

​ 如果为 false 则结束循环

​ 以此类推

## 循环总结

循环之间都是可以相互转换的，所以用哪种循环都是可以的，一般最常用的是 for 循环，已知的情况下一般使用 for 循环，未知的循环或者是死循环需要用到 while 循环，do...while 循环用的是最少的， 了解这个格式就可以了

## 循环控制语句

我们在循环过程中可能需要用到跳过某次或者某几次循环、甚至直接结束循环，这个时候我们就需要使用循环控制语句。

循环控制语句主要有两个：break,continue

### break

在循环过程中，遇到 break 整个循环就结束了

```java
for(int i = 0;i<10;i++){
    if(i == 5)
        break;
}
```

注意：break 只能出现在循环中或者 switch 中

### continue

如果在循环中碰到了 continue，则跳过本次循环，继续下次循环

```java
for(int i = 0;i<10;i++){
    if(i == 5)
        continue;
}
```

##### println 输出完自动换行，print 输出完不自动换行

用循环写程序的时候，先去找规律，用最笨的方法找到规律之后，再去写代码，这样会事半功倍。磨刀不如砍柴工。

## Random-生成随机数

我们可以通过 Random 类来生成随机数

### 使用步骤

1、导包

```java
import java.util.Random;
```

2、创建对象

```java
Random r = new Random();
```

3、生成随机数

```java
int num = r.nextInt(10);
//小括号内表示生成的数字范围，10包含0-9，但是不包括10
```

演示：

```java
//导包
import java.util.Random;
public class RandomDemo{
    Random r = new Random();
    int mum = r.nextInt(10)+1;//【1-10】
    System.out.println(num);
}
```

## 数组

我们可以使用数组来保存同一个数据类型的多个数据

### 数组的特点

​ ① 数组的长度一旦确定就不能改变

​ ② 一个数组中元素的数据类型都是一样的

### 数组初始化

#### 动态初始化

##### 格式

​ 数据类型[]数组名 = new 数据类型[长度]；

例如：

```java
int[] arr = new int[10];//动态定义了一个长度为10的数组，数组元素为int类型
```

#### 静态初始化

##### 格式

​ 标准格式：

数据类型[]数组名 = new 数据类型[]{元素值 1，元素值 2，元素值 3，...}；

例如：

```java
int arr = new int[]{1,2,3,4,5};

//省略写法
int [] array = {1,2,3,4,5,6,7};
```

​ 省略格式（推荐使用）

​ 数据类型[] 数组名 = {元素值 1，元素值 2，元素值 3，....};

例如：

```java
int[] arr = {1,2,4,5,6};
```

#### 总结

​ 静态初始化和动态初始化都可以对数组进行初始化

​ 如果数组元素都确定好了，并且个数有限的情况下我们可以使用静态初始化，因为更方便。如果只能确定数组的长度，数组的元素值需要后面再赋值的话可以使用动态初始化。

## 数组元素的表示

### 格式

​ 数组名[索引值]；

例如：

```java
int[] arr = {1,3,4,5};
//输出数组arr的第一个元素
System.out.println(arr[0]);
//修改数组第三个元素的值
arr[2] = 5;
```

### 数组的内存结构

![image-20221121154421292](https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/image-20221121154421292.png)

**实际上，数组的试题保存在堆中，数组名实际保存的是数组实体的地址值**

## 数组长度

在 java 中我们可以非常方便的获取数组长度，格式如下：

​ 数组名.length;

```java
int arr[] = {1,3,34,5,3};
System.out.println(arr.length);
```

### 数组的遍历

​ 可以用 for 循环对数组进行一个遍历，配合 length 使用

```JAVA
int[] arr = {1,2,3,4,4,45};
//遍历数组输出元素
for(int i = 0;i<arr.length;i++){
    System.out.println(arr[i]);
}
```

### 常见问题

数组索引越界异常 ArrayIndexOutOfBoundsException

**在计算机中数组的下标是从 0 开始的，而不是从 1 开始的！！**

掌握代码调试，排查错误的能力！

##### 数组练习

1.定义一个长度为 100 的 int 数组,要求里面的元素分别为 1,3,5,7,9
最后还要把数组里面的每个元素都打印出来 2.定义一个长度为 10 的 int 数组，要求用户使用键盘录入分别给数组的每个元素赋值。最后计算出该数组所有元素
的总和，最大值，最小值并打印到控制台中。 3.定义 2 个长度为 5 的字符串数组 arrA 和 arrB，arrA 包含元素{"1","2","3","4","5"}，arrA 中的所有元素按逆序存储在
数组 arrB 中,
在控制台打印输出 arrB 数组中所有元素 4.分析以下需求，并用代码实现：
(1).定义一个 int 类型的数组，内容为{171,72,19,16,118,51,210,7,18}
(2).求出该数组中特定元素的和，特定元素是指个位和十位不包含 7 的偶数。

5.分析以下需求，并用代码实现
定义一个数组，数组的元素为：{3，4，11，55，32，10，8，5}，要求使用代码对该数组进行从大到小的排序，
排序后的结果为{55, 32，11，10，8，5，4，3} 6.分析以下需求，并用代码实现
有一对兔子，从出生后第三个月起每个月都生一对兔子，小兔子长到第三个月后每个月又生一对兔子，假如兔子都
不死，问第二十个月的兔子对数为多少？

# 方法（函数）

我们在编程中会遇到一些固定套路的代码，我们可以把这些代码封装成方法，这样我们后面去使用的时候会更加方便，并且代码也会更简洁，代码复用性更高。

### 方法的定义格式

```java
修饰符 返回值类型 方法名(参数类型1 参数名1，参数类型2 参数名2，...){
    方法体；
    return 返回值；
}
```

​ 修饰符：目前阶段使用 public static 后期学完权限修饰符和 static 等修饰符后可以灵活使用

​ 参数：执行方法所需要的的数据

​ 返回值：方法执行完后得到的结果

​ 方法体：方法中的代码

​ 返回值类型：返回类型就是结果的数据类型，如果没有结果就写成 void

例如：

```java
public static void printInt(int num){
    System.out.println(num);
}
public static void getSum(int a,int b){
	return a+b;
}
```

## 方法调用格式

```java
方法名（参数1，参数2...）；
```

### 注意：

​ 传参数时候方法定义里有几个参数就传几个参数。方法定义的时候参数是什么类型就传什么类型。

​ 如果方法有返回值，一般用变量来接收返回值，返回值是什么类型，就用什么类型的变量来接收。

例如：

```java
public class Demo{
    public static void printInt(int num){
        System.out.println(num);
    }
        public static int getSum(int a,int b){
			return a+b;
    }
        public static void main(Stirng[] arg){
			printInt(10);
			printInt(20);
         	int sum = getSum(1,2);
    }


 }
```

#### 方法练习题

1.定义一个方法，该方法能够求两个整数中的最大值。定义完后尝试调用它。
1.1.定义一个方法，该方法能够打印两个整数的最大值。定义完后尝试调用它。 2.定义一个方法，该方法能够求三个整数中的最大值。定义完后尝试调用它。 3.定义一个方法，该方法可以把一个数组打印出来，打印格式如下：{1,2,3,4,5} 4.定义一个方法，该方法可以求一个数组中的最大值 5.定义一个方法，该方法可以把一个数组进行排序（从小到大） 6.定义一个方法，该方法可以获取一个任意长度的随机字符串，字符串中的字符可能是 英文大小写和数字

### 执行流程

程序运行过程中，遇到方法，先去调用方法，从函数里面执行完之后再返回到调用处，继续往下执行代码

![image-20221121154534851](https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/image-20221121154534851.png)

函数先进栈，执行完成之后出栈，最后 main 函数也会出栈

## return 的作用

1.  返回方法的返回值

2.  结束方法(return 语句执行之后，整个方法就结束了)

    只要有 return 就会返回，不管它后面有没有跟返回值

## 方法重载

定义：在同一个类中，方法名相同，参数列表不同的方法才叫方法重载（与返回值无关）

参数列表不同：1.参数类型不同 2.参数个数不同 3.参数顺序不同

如何判断参数列表是否相同？把参数类型全部拼接成一个字符串，如果字符串的内容不同就算参数列表不同。

```java
//同一个类里面
public class Demo{
    public int test(int a,int b){}
    public void test(int a,int b){}//错误；与上面的参数类型一样了


    public void test(int a,int b,int c){}
    public void test(int x,int y){}//错误，用来区分参数列表的是参数类型，而不是参数名字
    public void test(int a,double b){}
    //两个double的顺序不同，也是可以的
    public void test(double a,int b){}
    public void test(double a,double b){}
}
```

调用同名字的方法之后，计算机会根据传入的参数类型，来选择执行哪个方法

一个方法只能有一个返回结果，但是可以通过数组的方式返回

#### 文档注释

斜杠 星 星 回车 /\*\*

#### 小思考

形参：方法定义时写的参数

实参：方法调用时实际传入的值

问题：java 中方法调用的时候，形参的改变会不会影响实参？

答：

如果方法的参数是基本数据类型，形参的改变不会影响实参，如果方法的参数是引用数据类型，形参的改变会影响实参

要根据情况而定，传入的值只是一个具体数据的时候，这个时候是通过值传递的方式，仅仅复制了一份值，不会改变实参的值，如果传进去的是地址值，这时候形参跟实参指向的都是同一个堆中的地址，所以这时候会改变堆中的内容

# 面向对象基础

## 1.面向对象思想

​ 面向对象的思想其实就是让我们去**指挥别人**或者是**使用工具**帮我们去把要做的事完成。

## 2.类和对象

### 2.1 概念

类：对一类事物共同点的<font color='red'>描述</font>

对象：对象是某类事物的一个<font color='red'>个体</font>

类仅仅只是描述，我们要指挥事物，指挥的肯定是某类事物中的一个个体。我们去指挥或者使用事物的时候肯定时使用其中的具体的人个体，也就是对象。

### 2.2 类的定义

我们去描述一类事物的共同点可以分成两种，一种是属性，一种是行为（技能）。

属性：具有具体指的共同点就是属性（例如：姓名，年龄，血量），我们用成员变量表示。

行为（技能）：具体的技能或者功能，这些都包含了一系列的动作。这些共同点就是行为，我们用成员方法表示。（例如：吃饭，睡觉）。

成员变量：定义在类中方法外的变量就是成员变量。

成员方法：没有 static 修饰的方法就是成员方法。

```java
public class Phone {
    //属性（成员变量）：品牌 价格 颜色
    //数据类型 变量名
    String brand;//品牌
    double price;//价格
    String color;//颜色
    //行为（成员方法）：打电话 发短信
    public void call(){
        System.out.println("打电话");
    }
    public void sendMessage(){
        System.out.println("发短信");
    }

//    public static void main(String[] args) {
//        int num = 10;
//    }
}
```

### 2.3 对象的创建和使用

#### 2.3.1 创建对象格式

​ <font color='red'>**类名 对象名 = new 类名();**</font>

```java
Phone phone = new Phone();
Student stu = new Student();
```

#### 2.3.2 成员变量的使用格式

​ <font color='red'>**对象名.成员变量名** </font>

注意：在定义的类中使用本类的变量名时“对象名."可以不写，直接写 成员变量名

```java
Phone phone = new Phone();
//设置phone的brand属性
phone.brand = "huawei";
//打印phone的brand属性
```

#### 2.3.3 成员变量的使用格式

​ <font color='red'>**对象名.方法名(参数)** </font>

注意：在定义的类中使用本类的成员方法时“对象名."可以不写，直接写 方法名(参数);

```java
Phone phone = new Phone();
//使用phone的sendMessage方法
phone.sendMessage();
```

### 3.构造方法

#### 3.1 定义格式

构造方法的定义格式就是在普通成员方法的基础上加了两个强制性的要求。

要求：① 没有返回值类型，连 void 都不能写！② 方法名和类名必须相同

例如：

```java
public class Student {
    //属性 成员变量  数据类型 变量名
    String name;
    int age;
    //构造方法 没有返回值类型 方法名和类名相同
    //有参构造
    public Student(String name,int age){
        this.name = name;
        this.age = age;
    }
    //无参构造
    public Student(){

    }
}
```

#### 3.2 调用格式

​ <font color='red'>**new 类名(参数)；** </font>

```java
Student stu = new Student();//无参构造
Student stu1 = new Student("三更",15);//有参构造
```

#### 3.3 构造方法的作用

- 创建对象
- 在创建对象的时候更便捷的对成员赋值
- <font color='red'>对类中的成员变量进行**默认初始化** </font>

#### 3.4 注意事项

​ **如果一个类中没有写构造方法，编译器会默认送我们一个无参构造方法，但是如果自己写了，编译器就不会送了。这种情况下建议自己再加一个无参构造**

![image-20221121154609269](https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/image-20221121154609269.png)

# 面向对象-封装

## 1.封装的概念

​ 封装其实就相当于把不需要用户了解细节（隐私或者特别复杂的细节）包装（隐藏）起来，只 仅对外提供公共访问方式。

## 2.成员变量私有化（封装的一种体现形式）

​ 我们可以使用 private 来修饰成员变量，提供对应的 set/get 方法提供刚刚的访问方式。

### 2.1 private

​ private 是一个修饰符，他可以用来修饰类中的成员变量或者成员方法，被他修饰的成员变量只能在本类中访问，不能再其他类中直接访问

例如：

```java
public class Phone{
    private String brand;//在成员变量定义的前面加上private修饰
}
```

### 2.2 set/get 方法

​ setXxx 方法用来对成员变量赋值，所以方法参数一般是和这个成员变量是同一个数据类型，没有返回值。

​ getXxx 方法用来获取成员变量的值，所以方法一般是没有参数，有返回值，返回值类型就是这个成员变量的数据类型。

​ 注意：上面的 Xxx 代表成员变量名，注意遵循小驼峰命名规范

例如：

```java
    //用private 修饰成员变量
    private int age;

	//用来给age设置值

	public void setAge(int age){
        //判断输入的值是否符合规范，写在这里一劳永逸
        if(age>0){
            this.age = age;
        }
    }

    //用来获取age的值
    public int getAge(){
        return age;
    }
```

## 3. this

​ this 可以用来在局部变量和成员变量重名的时候区分它们，加了 this 就是成员变量。

​ 注意：我们只能在一个类的成员方法或者构造方法中使用 this。

### 3.1 小思考

​ this 代表什么呢？代表当前的对象

## 4.思考

构造方法和 set 方法有什么区别？

![image-20221121154643578](https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/image-20221121154643578.png)

构造方法只能在创建对象的时候调用一次，一旦创建成功了，我们再去修改他的值时，一定要使用 set 方法！

否则就会在堆中开辟新的内存空间，发生地址调包现象

#### 一个标准的类

    1.  成员变量都用private修饰

2.  提供对应的 get/set 方法
3.  提供空参和全参构造

（以上可以使用 alt+insert 快捷键生成）

# 面向对象-继承

## 1.继承的概念

​ 继承可以理解为就是让两类事物产生从属关系，有了从属关系子类就肯定会具有父类的特征（弗雷中的非私有成员），这样我们用类去描述一些事物的时候就可以更方便

### 1.1 相关名词

​ 超类，父类都是同一个概念就是叫法不同

​ 派生类，子类都是同一个概念也是叫法不同

## 2.继承的格式

​ 在子类名后面加 extends 父类名

例如：

```java
public class Dog extends Animal {
    //Dog就成为了Animal的一个子类
}
```

## 3.继承的注意事项

- Java 中类只能单继承，一个类只能有一个父类，但可以多层继承

![image-20221121154712144](https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/image-20221121154712144.png)

- 要有实际的从属关系才可以加上继承，不能不合逻辑的任意继承。

```
//把猫继承给狗，这样继承代码上看似没有报错，但是狗属于猫的一种有点不合逻辑！
//所以我们要找猫和狗的共同点，让他们继承与同一个父类
```

## 4.继承的优缺点

### 4.1 优点

​ 提高了代码的复用性

### 4.2 缺点

​ 增加了类和类之间的耦合性。违背了**高内聚，低耦合**原则

## 5.继承后成员相关语法

### 5.1 成员变量

    1. 父类非私有的成员变量才会继承给子类。所以当我们看到使用子类对象的某个成员变量时，有可能这个成员变量是定义在子类中，也有可能是定义在父类中的。

2. 父类中如果已经有了某个成员变量，我们不应该再在子类中定义同名的成员变量。否则可能会导致非常难排查的 Bug。

### 5.2 构造方法

1. 构造方法不会继承给子类
2. 子类的构造中必须调用父类的构造并且要求在第一行。
3. 子类的构造默认都会在第一行调用父类的无参构造，所以当父类没有无参构造的时候子类构造中会报错。解决方案是给父类加上无参构造或者在子类构造中显示调用父类的有参构造。

##### **理解**

问：继承的时候构造方法为什么不会被继承？

_因为构造方法名必须和类名保持一致，继承了就不符合这个条件了_

问：子类的构造方法会默认调用父类的无参构造 super().为什么？

因为父类中可能有成员变量，并且这个成员变量是要继承给子类使用，但是在使用之前必须先赋值，而父类的成员变量只能用父类的构造方法进行初始化。即使你不调，编译器也会帮你自动调用，安全起见编译器会在你操作父类成员之前默认加上一句调用父类构造方法的语句。

问：在子类的构造方法中，能不能把父类的构造方法放到第二行？

不可以，编译器自动调用父类的构造方法是为了初始化，放到第二行的话，第一行就有可能会出错，所以编译器会报错。

### 5.3 成员方法

​ 父类非私有的成员方法会继承给子类。所以当我们看到使用子类对象的某个成员的成员方法时，有可能成员方法是定义在子类中。也有可能是定义在其父类中。

这里牵扯到方法重写，类似于函数重载。

## 6.方法重写

### 6.1 方法重写的概念

​ 当子类拥有父类继承下来的某个功能（成员方法），但是在子类中对这个方法的具体实现和父类不同。这个时候我们在子类中定义了一个和父类方法相同的方法（包括返回值类型，方法名，参数列表），这就叫做方法重写。

### 6.2 注意事项

-     我们在重写方法的时候方法的权限修饰符其实可以和父类不同**（一般都是相同）**。但是子类方法的权限不能比父类低。（**权限修饰符：private < 默认（什么都不写）<protected <public)**
- ​ 我们在重写方法的时候方法的返回值类型其实可以不同**（一般都相同）**。但是要求子类中方法的返回值类型必须是父类方法返回值类型的子类。
- ​ 我们可以使用@Override 注解来校验是不是方法重写。
- ​ 私有的方法不能被重写，因为私有的方法不会被继承

### 6.3 小思考

面试题：说说 overload 和 override 的区别。

答：

**方法重载：在同一个类中，方法名相同，参数列表不同，和返回值无关**

**方法重写：在子父类中，子类有一个和父类方法名相同，参数列表相同，返回值类型也相同的方法。这个就叫方法重写。**

## 7.this 和 super

​ this 就代表本类的，super 就代表父类的

使用：

- 访问成员变量 + this.成员变量名 本类的成员变量 + super.成员变量名 父类的成员变量
- 访问成员方法
  - this.成员方法名（参数） 调用本类的成员方法
  - super.成员方法名(参数) 调用父类的成员方法
- 调用构造方法
  - this(参数) 调用本类的构造方法
  - super(参数) 调用父类的构造方法

# 面向对象-多态

## 1.多态的概念

​ 同一个数据类型不同对象对同一种行为会有多种不同的实现。

## 2.多态的前提

​ ① 子类重写了父类的方法

​ ② 父类引用指向子类对象（创建的是一个子类对象，并把该对象赋值给一个变量，这个变量的类型是其父类类型）

例如：

```JAVA
        Animal a = new Dog();
        a.eat();

        Animal b = new Cat();
        b.eat();
```

## 3.父类引用指向子类对象后成员访问的特点

​ 除了成员方法编译器看左边，运行看右边。其他所有成员都是编译器看左边，运行看左边。

​ 解读：编译期间回去看左边（父类），看父类有没有这个成员方法。如果没有则直接报错，如果有则编译通过，不报错。运行期间，实际执行代码，看的是右边（子类），看子类中有没有重写该方法，如果有则执行子类中的该方法，如果没有则运行父类中的该方法。

## 4.多态的应用场景

​ 多态最大的应用场景其实就是用在方法的参数上。在适当的时候把方法的参数类型定义成父类类型。调用方法的时候就可以传入任意的子类对象。提高了代码的复用性和可拓展性。

## 5.多态的优缺点

优点：提高了代码的复用性和可拓展性

缺点：不能直接使用子类的成员（编译时左边是父类，父类中没有子类特有的方法，所以会报错）

## 6.向上转型，向下转型

### 6.1 向上转型

​ 向上转型就是子类转换成父类。这个是绝对安全的，所以会自动进行转换，我们直接写就可以了。

例如：父类引用指向子类对象

```java
Animal a = new Dog();
```

狗一定是一个动物，所以是绝对安全的。

### 6.2 向下转型

​ 向下转型就是父类转子类。因为不是绝对安全的所以必须使用强转的方式来进行转换。

例如：

```java
Animal a = new Dog();
Dog d = (Dog)a;
```

注意：必须是这个子类的对象才可以转换成该子类，否则会出异常。也就是说父类指向的子类必须和强制转换的是一个子类才行。

### 6.3 instanceof 进行类型判断

​ 在向下转型的时候为了保证安全我们可以使用 instanceof 进行类型判断。判断一个对象是否是某个类的对象。如果是的话我们再把他转化成该类型，这样会更加安全。

#### 6.3.1 使用格式

​ 对象 instanceof 类名/接口名

示例：

```java
    //调用feed方法
        Cat cat = new Cat();
        feed(cat);

        Dog dog = new Dog();
        feed(dog);

//如果是猫的话就调用特有的方法catchMouse
        if(a instanceof  Cat){
            Cat c = (Cat) a;
            c.catchMouse();
        }else if(a instanceof Dog){//如果是狗的话就调用特有的方法watchDoor
            Dog d = (Dog) a;
            d.watchDoor();
        }
```

## 7.思考题

下面代码会输出什么

```java
public class DynamicTest {
    public static void main(String[] args) {
        A a1 = new A();
        A a2 = new B();
        B b = new B();
        C c = new C();
        D d = new D();
        System.out.println(a1.show(b));//a a
        System.out.println(a1.show(c));//a a
        System.out.println(a1.show(d));//a d

        System.out.println(a2.show(b));//b a
        System.out.println(a2.show(c));//b a
        System.out.println(a2.show(d));//a d

        System.out.println(b.show(b));//b b
        System.out.println(b.show(c));//b b
        System.out.println(b.show(d));//a d
    }
}
class A {
    public String show(D obj) {
        return ("A and D");
    }

    public String show(A obj) {
        return ("A and A");
    }
}
class B extends A {
    public String show(B obj) {
        return ("B and B");
    }

    public String show(A obj) {
        return ("B and A");
    }
}
class C extends B{}
class D extends B{}
```

上面主要用到了多态的概念 继承性 父类引用指向子类对象 调用方法时的就近原则

# 修饰符

## 1.包和权限修饰符

### 1.1 包

​ 包其实就是文件夹，用来管理我们的类的。一个类的全名其实是包名加类名。

#### 1.1.1 包的定义格式

​ 在类名的最上面加上 package 包名；

例如

```java
package com.dunxi
```

#### 1.1.2 导包

​ 当我们在一个类中使用另外一个类的时候，如果这个类在另外一个包下。我们必须要写全类名或者导包（如果是在 java.lang 包下的类就不用）。

格式：import 全类名；

例如

```JAVA
import java.util.Scanner;
import java.util.*;//使用星号通配符 将java.util下的所有包都导进来，后面就不用再去导包了，但是我们不推荐这样写，这样会吧我们用不到的很多包也导进来 效率会比较低
```

### 1.2 权限修饰符

​ 我们使用权限修饰符来控制被修饰的成员的使用权限。Java 中有四种权限修饰符：public、protected、default（default 并不是关键字，而是代表不写权限修饰符，即默认）、private

#### 1.2.1 权限

​ 被不同的权限修饰符修饰后，被修饰的成员可以在不同范围内被使用。

| 权限，范围 | 本类中 | 同一个包下 | 子类 | 不同包非子类 |
| ---------- | :----: | :--------: | :--: | :----------: |
| public     |   √    |     √      |  √   |      √       |
| protected  |   √    |     √      |  √   |              |
| 默认       |   √    |     √      |      |              |
| private    |   √    |            |      |              |

#### 1.2.2 使用规律总结

​ 我们在工作中一般不使用默认权限，如果一个成员我们只想在本类中使用，我们就给他加上 private，如果想要在本类中和继承给子类使用，我们就用 protected，如果想被任意使用，我们就加 public。

## 2.static

​ static 是一个修饰符，被其修饰的成员就属于类了。会被类的所有对象所共享。

可以用来修饰成员方法或者成员变量（只占用一个内存空间）

### 2.1 静态成员的调用格式

​ 无论是成员变量还是成员方法。用 static 修饰后我们既可以用对象名来调用也可以用类名来调用。一般都是用类名称进行调用。

使用类名调用的时候可以不用创建对象

​ 静态变量：**类名.静态变量名**

​ 静态方法：**类名.静态方法名(参数)**

例如：

```java
public class Student {
    int age;
    String name;
    //加了static之后他就变成了共享的一个值
    static String teacherName = "敦禧";
    public static void study(){
        System.out.println("学习");
    }
}

public static void main(String[] args) {
//        Student stu = new Student();
//        Student stu2 = new Student();

//        stu.teacherName = "四更";
//
//        System.out.println(stu.teacherName);
//        System.out.println(stu2.teacherName);

        //使用类名调用的时候可以不用创建对象
        Student.teacherName = "zangdunxi";
        System.out.println(Student.teacherName);

        Student.study();

    }
```

#### 内存图：

![内存图](https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/%E5%86%85%E5%AD%98%E5%9B%BE.png)

### 2.2 注意事项

    1. 静态方法中不能直接使用非静态的成员

2. 静态方法中不能使用 this

### 2.3 理解

​ 因为被 static 修饰的东西就属于类了，所以可以直接使用类名来调用
​ 因为被 static 修饰的东西就属于类了，类的加载是优先于对象的，所以在静态方法中不能使用非静态的成员（非静态的成员属于对象，对象是类创建出来的东西），类出现的时候对象还没有创建，所以不能使用还不存在的东西
​ 因为被 static 修饰的东西就属于类了，而 this 代表某个对象，类加载的时候对象还没有创建，所以在静态方法中不能使用 this，因为对象还没有出现呢。

​

### 2.4 使用场景

① 如果需要共享数据，可以使用 static
②**如果想要方便调用某些成员，可以使用 static 修饰**（PS：因为就可以直接使用类名来调用，不需要创建对象）

## 3.final

​ final 可以修饰类，成员方法，局部变量，成员变量。

​ 修饰后的作用如下：

​ ① 可以修饰类，被 final 修饰的类不能被继承。
​ ② 可以修饰成员方法，被 final 修饰的成员方法不能被重写
​ ③ 可以修饰局部变量，被 final 修饰的局部变量就变成了常量，赋值之后不能被修改
​ ④ 可以修饰成员变量，被 final 修饰的成员变量就变成了常量，一旦赋值之后就不能被修改。并且必须初始化。有两种初始化方式，一种是直接赋值，另外一种是要在类的所有构造方法中对其进行赋值。

# 面向对象-抽象类

## 1.为什么要抽象

​ 当一个类中有一个方法，这个方法在不同的子类中有不同的实现的时候，在父类中我们没有办法去写具体的方法体，这个时候就可以使用抽象。（即不写方法体）

## 2.抽象类和抽象方法的格式

### 2.1 抽象方法

​ 在成员方法的返回值类型前加 abstract 修饰，然后去掉方法的大括号，加上一个分号。

例如：

```java
public abstract void eat();
```

### 2.2 抽象类

​ 在 class 关键字前面加上 abstract 修饰。

例如

```java
public abstract class Animal {
    int age;
    String name;
    public abstract void eat();
}
```

## 3.抽象类的特点

- 抽象类可以有抽象方法，还有就是不能直接创建对象（因为抽象类中的抽象方法不可被调用 ），其他所有都和普通类一样
- 抽象类的子类，要么重写父类中的所有抽象方法，要么子类也是一个抽象类
- 防止同事写代码时忘记重写方法。

# 面向对象-接口

## 1.接口的概念

​ 接口就是规范/规则，我们可以使用接口来定义一些规则（比如要求某个方法的方法名必须叫什么，方法的参数列表必须是什么，方法的返回值类型必须是什么）

​ 现实生活中的规范

![image-20221121154830076](https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/image-20221121154830076.png)

## 2.接口的格式

### 2.1 定义格式

使用**interface**来定义接口

```java
public interface 接口名{
    //定义抽象方法
    void method();
    //前面不需要加public 和 abstract 这两个会被默认加上

}
```

### 2.2 实现接口

​ 在要实现接口的类名后面加上<font color='red'>implements 接口名</font >。**如果要实现多个接口，多个接口名用逗号分开。**我们在理解的时候可以把接口理解成一个特殊的父类。

```java
//				类名						接口名
public class InterfaceImpl implements InterfaceA,InterfaceB,...{		@Override
    public void method() {
        System.out.println("method这个方法被调用了");
    }
}
```

## 3.接口中的成员

### 3.1 常用成员

​ 在 jdk7 版本中接口中只能有常量和抽象方法。

​ 我们接口中定义不了变量。因为定义的成员变量默认都会修饰为：public static final

​ 我们在接口中定义的方法默认修饰符为 public abstract

例子

```java
public interface InterfaceA {
    //常量
    int num = 10;//等价于public static final int num = 10；
    //抽象方法
    void method();//等价于public abstract void method();
}
```

### 3.2 新增成员

​ 在新版本的 jdk 中接口中允许出现更多的成员。

#### 3.2.1 默认方法

​ 在 jdk8 中允许我们在接口中定义默认方法。默认方法允许有方法体。

​ 默认方法可以**选择**不进行重写。

##### 3.2.1.1 格式

​ 使用 default 关键字进行修饰。

```java
public interface InterfaceA{
	//默认方法
    default void method(){

    }
}
```

##### 3.2.1.2 注意事项

​ 如果两个接口中有相同的默认方法。一个类同时实现了这两个接口，必须要重写该方法。

##### 3.3.1.3 应用场景

​ 如果在接口升级的时候某些方法并不想让所有的实现类进行重写，可以使用默认方法来定义。

#### 3.2.2 静态方法

​ 在 jdk8 中允许我们在接口中定义静态方法。静态方法允许有方法体。

​ 静态方法不能被重写。

##### 3.2.2.1 格式

​ 使用 static 关键字进行修饰

```java
public interface InterfaceA {
	//静态方法
    static void staticMethod(){

    }
}
public class Demo {
    public static void main(String[] args) {
        //使用接口名.方法名（参数）来调用
        InterfaceA.staticMethod();
    }
}

```

##### 3.2.2.2 应用场景

​ 如果在接口升级的时候需要给接口增加一些工具方法。不想让实现类去重写该方法，可以使用静态方法来定义。

#### 3.2.3 私有方法

​ 在 jdk9 中允许我们在接口中定义私有方法。私有方法允许有方法体。

​ 私有方法不可以被重写。

##### 3.2.3.1 格式

```java
public interface InterfaceA {

    default void method1(){
//        for (int i = 0; i < 10; i++) {
//            System.out.println(i);
//        }
        privateMethod();
        System.out.println("method1");
    }
    static void method2(){
//        for (int i = 0; i < 10; i++) {
//            System.out.println(i);
//        }
        staticMethod();
        System.out.println("method2");
    }
	//默认方法抽取出来的重复代码
    private  void privateMethod(){
        for (int i = 0; i < 10; i++) {
            System.out.println(i);
        }
    }
    //静态方法抽取出来的重复代码
    static  void staticMethod(){
        for (int i = 0; i < 10; i++) {
            System.out.println(i);
        }
    }
}

```

##### 3.2.3.2 应用场景

​ 对魔忍方法或者是静态方法中重复的代码进行抽取，提高代码复用度。

## 4.继承实现关系

​ 在 java 中一个类可以实现多个接口

例如：

```java
public class Preson implements InterfaceA,InterfaceB{}
```

​ 在 Java 中接口和接口之间可以有继承关系。继承之后会把父接口的成员继承下来。

```java
public interface InterfaceC extends InterfaceA {
//    void method1();
}
```

## 5.抽象类和接口的使用区别

接口中的基本都是抽象的，而在抽象类中可以有一部分是非抽象方法。而非抽象类中是不可以有抽象方法的。

​ 我们就发现接口是最抽象的，其次是抽象类，最后是非抽象类。
​ 所以我们最顶层设计成接口，然后实现类设计成抽象类（实现部分抽象方法），抽象类的子类可以设计成非抽象类（对剩下的所有抽象方法进行实现）。

# 面向对象-代码块

## 1.局部代码块

### 1.1 格式

​ 在方法中直接写一对大括号即可

```java
public class Demo{
    public void test(){
        int a = 19;
        //下面是一个局部代码块
        {
            int b = 10;
        }
    }
}
```

### 1.2 应用场景

​ 如果需要控制局部变量的生命周期，想让其使用完后尽快销毁，可以把局部变量定义在局部代码块。

## 2.构造代码块

### 2.1 格式

​ 在勒种方法外直接写一堆大括号即可

```java
public class Student{
    int age;
    //下面是一个构造代码块
    {
        age = 0;
    }
}
```

​

### 2.2 调用时机

​ 构造代码块会在调用构造方法的时候执行，并且会在构造方法中的代码执行前执行。

### 2.3 应用场景

​ 用来抽取构造方法中重复的代码，提高代码复用性。

## 3.静态代码块

### 3.1 格式

​ 在类中方法外部直接写一对大括号即可，在括号前用 static 修饰

```java
public class Student{
	static int age;

    //下面是静态代码块,用于初始化类中的静态成员
    static{
        age = 0;
    }
}
```

### 3.2 调用时机

​ 在类加载的时候会执行，同一个类在程序运行过程中只会被加载一次，所以只会执行一次

### 3.3 应用场景

​ 用来给类当中的静态成员进行初始化。

# 面向对象-内部类

## 1.局部内部类

### 1.1 格式

#### 1.1.1 定义格式

​ 把类定义在方法中即可

```java
public class Outer{

    public void test(){
        class Inner{//定义了一个局部内部类
            public void print(){
                System.out.pringln("局部内部类");
            }
        }
    }
}
```

#### 1.1.2 对象创建格式

​ 直接在定义局部内部类的方法中按照之前创建对象的格式进行创建即可。如果在该方法外就不能使用局部内部类了。

```java
public class outer{
public void test(){
class Inner{//定义了一个局部内部类
public void print(){
System.out.print1n（"局部内部类"）；
Inner inner = new Inner〇;
inner.print();
```

### 1.2 应用场景

​ 如果需要定义一个在方法中临时使用的类时可以使用局部内部类。不过该内部类基本不会使用到。

### 1.3 注意事项

​ 内部类可以使用外部的局部变量。但是要求这些局部变量必须是**事实常量**。即赋值之后不会再改变值的变量。

## 2.成员内部类

### 2.1 格式

#### 2.1.1 定义格式

​ 把类定义在类中即可

```java
public class Outer{

    class Inner{//定义了一个成员内部类
        public void print(){
            System.out.println("成员内部类");
        }
    }
}
```

#### 2.1.2 对象创建格式

​ 在定义内部类的类中创建对象即可。

```java
public class Outer{
    private Inner inner = new Inner();
    class Inner{//定义了一个成员内部类
        public void print(){
            System.out.println("成员内部类");
        }
    }
}
```

```java
//内部类
class Itr implements Iterator {

    int index = -1;

    @Override
    public int next() {
        ++index;
        return arr[index];
    }

    @Override
    public boolean hsaNext() {
        return (index+1)<size;
    }
}
```

### 2.2 特点

​ ① 在成员内部类中可以直接使用外部类的成员，即使这个成员是私有的。

​ ② 如果外部类的成员和内部类的成员重名了，可以使用外部类名.this.成员名来进行修饰，表示外部类的成员

​ ③ 成员内部类中不能定义静态的成员。（非静态中不能使用静态）

```java
public class MyArray {
    //存放集合数据
    int arr[];

//    集合大小
    int size;

    public Iterator iterator(){
        Itr itr = new Itr();
        return itr;
    }

    //内部类
    class Itr implements Iterator {

        int index = -1;

        @Override
        public int next() {
            ++index;
            return arr[index];
        }

        @Override
        public boolean hsaNext() {
            return (index+1)<size;
        }
    }

    public MyArray(int ... arr){
        this.arr = arr;
        size = arr.length;
    }

    public  void  sort(){
        Arrays.sort(arr);
    }
}
```

### 2.3 应用场景

​ 一个类不会单独使用，需要和另外类（外部类）一起使用才有意义。并且会用到外部类中的私有成员的时候可以把该类定义为一个内部类。例如 ArrayList 中的 Itr

## 3.静态内部类

### 3.1 格式

#### 3.1.1 定义格式

​ 把类定义在类中方法外，然后使用 static 关键字修饰即可。

```java
public class Outer{

   static class Inner{//定义了一个静态内部类
        public void print(){
            System.out.println("静态内部类");
        }
    }
}
```

### 3.2 特点

​ 在静态内部类中可以直接使用外类静态，即使是私有的。

### 3.2 应用场景

​ 一个类不会单独使用，需要和另外类（外部类）一起使用才有意义。需要在内部类中定义静态成员的时候，可以把成员内部类使用 static 修饰编程静态内部类。例如 Integer 中的 IntegerCache

## 4.匿名内部类

​ 匿名内部类本质是一个对象，它是某个类（接口）的子类（实现类）对象。

### 4.1 格式

```java
new 接口名/类名（）{
    //重写要重写的方法
};
```

```java
interface Runner{
    void run();
}
public class Demo{
    public static void main(String[] args) {
        Runner r = new Runner(){
            public void run(){
                System.out.println("匿名内部类重写了run方法");
            }
        };
        r.run();
    }

}
```

### 4.2 应用场景

​ 如果需要创建一个类或者接口的子类对象。但是这个子类只会使用一次，就没必要创建单独的一个类。就可以使用匿名内部类的形式实现效果。

# 常见类

## 1.Object(祖宗类)

## API 文档

https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html

### 1.1 概述

​ 在 JDK 的 java.lang 包下定义了 Object 这个类。

​ java 中所有的类都直接或间接的继承 Object。所以人以类的对象都可以使用 Object 中定义的方法。不过内部的实现可能在不同的子类中有不同的重写。

​ 我们可以直接使用空参构造创建 Object 的对象，但是一般我们不会直接创建 Object 对象，更多的是使用多态的写法。

### 1.2 常用方法

#### 1.2.1 toString 方法

​ 取得对象信息，返回该对象的字符串表示。Object 的 toString 方法返回值的是类全类名和对象 hash 值的拼接。

​ 内部实现如下：

```java
public String toString (){
    return getClass().getName()+"@"+Integer.toHexString(hashCode());
}
```

​ 正常情况下 Object 的 toString 的返回值对我们是没有意义的。所以若果有需要的话我们都会在自己的类中重写 toString 方法。

1.2.2 equals 方法

​ 比较两个对象是否相同。

​ 内部实现如下：

```java
    public boolean equals(Object obj) {
        return (this == obj);
    }
```

​ 很多情况下判断两个对象是否相同的时候不能单纯的使用==去判断。这种情况下就可以重写 equals 方法。实现自己的判断逻辑。

## 2.String

### 2.1 概述

​ Java 提供的用于描述字符串的类。在 JDK 中的 java.lang 包下定义了 String 这个类。在该类中定义了很多我们常用的成员方法，用于对字符串进行常用操作。

### 2.2 对象创建

#### 2.2.1 直接使用字面值

​ 可以直接使用 String 类型的变量直接给其赋值一个字符串字面值

```java
String name = "敦禧";
```

#### 2.2.2 使用构造方法

​ 可以使用 String 中定义的构造方法来创建对象。String 有 10 多个构造方法。我们就针对其中比较常用的几个进行演示。

```java
String()
String(byte[] bytes)
String(byte[] bytes, int offset, int length)
String(char[] value)
String(char[] value, int offset, int count)
```

演示如下：

```JAVA
    public static void main(String[] args) {
//        String s = "敦禧";

//        String()  空参构造
        String s2 = new String();
        System.out.println(s2);

//        String(byte[] bytes)  ASCII
        byte[] bytes = {97,98,99,100};
        String s3 = new String(bytes);
        System.out.println(s3);

//        String(byte[] bytes, int offset, int length)

        String s4 = new String(bytes,1,1);
        System.out.println(s4);

//        String(char[] value)
        char[] chars = {'a','b','c','d'};
        String s5 = new String(chars);
        System.out.println(s5);

//        String(char[] value, int offset, int count)
        String s6 = new String(chars,1,3);
        System.out.println(s6);

    }
```

### 2.3 常用方法

> String[] split(String regex) 把一个字符串按照指定的分隔符切割成多个字符串，把多个字符串放在一个字符串数组中返回
>
> char[] toCharArray(); 把一个字符串内容转换成一个字符数组
>
> byte[] getBytes(); 把一个字符串内容转换成 byte 数组
>
> String substring(int index) 把某个字符串从 index 索引开始截取到最后
>
> String substring(int begin,ing end) 把某个字符串索引 begin 到索引 end 截取出来
>
> boolean equals(Object anObject) 判断两个字符串的内容是否相同

split:

```java
String s = "敦禧，男，151";
String[] strs = s.split("，");
for (int i = 0; i < strs.length; i++) {
    System.out.println(strs[i]);
}
```

char[] toCharArray(); 把一个字符串内容转换成一个字符数组

```java
String s = "abcd";
char[] chars = s.toCharArray();
System.out.println(chars);
```

byte[] getBytes(); 把一个字符串内容转换成 byte 数组

```java
byte[] bytes =  "asdfasdf".getBytes();
   System.out.println();
```

String substring(int index) 把某个字符串从 index 索引开始截取到最后

```java
String s2 = "abcd".substring(1);
System.out.println(s2);
```

String substring(int begin,ing end) 把某个字符串索引 begin 到索引 end 截取出来

```java
        String s3 = "asdfasdlf".substring(2, 6);
        System.out.println(s3);//包左不包右
```

boolean equals(Object anObject) 判断两个字符串的内容是否相同

```java
//boolean  equals(Object anObject)  判断两个字符串的内容是否相同
        String s = "abc";
        String s2 = "abcd";
        System.out.println(s.equals(s2));
```

### 2.4 特点

1.  一个字符串一旦创建其内容是永远不会改变的
2.  字符串出效果相当于是 char[]字符数组，但是底层其实是 byte[] 字节数组

## 3.包装类

### 3.1 概述

​ Java 为每一个基本数据类型提供了对应的一个包装类。包装类是一个类，这样 Java 就可以在包装类中提供常用的方法供我们使用。

​ 基本数据类型和对应包装类的对应关系为：

| 基本数据类型 | 包装类    |
| ------------ | --------- |
| byte         | Byte      |
| boolean      | Boolean   |
| short        | Short     |
| char         | Character |
| int          | Integer   |
| long         | Long      |
| float        | Float     |
| double       | Double    |

​ 包装类的功能基本类似，下面就以 Integer 为例子演示。

### 3.2 创建对象

#### 3.2.1 直接使用字面值

```java
public static void main(String[] args) {
    Integer i = 10;
}
```

#### 3.2.2 使用构造方法

```java
    public static void main(String[] args) {
//        Integer i = 10;
        Integer i2 = new Integer(10);
        Integer i3 = new Integer("10");
    }
```

#### 3.2.3 使用静态方法 valueOf

```java
Integer val = Integer.valueOf(10);
Integer val1 = Integer.valueOf("11");
```

### 3.3 常用方法

> static Integer valueOf(int i) 把 int 转换成 Integer 对象返回
>
> static Integer valueOf(String s) 把字符串转换成 Integer 对象返回 要求字符串的内容必须为纯数字
>
> static int parseInt(string s) 把字符串转换成 int 返回 要求字符串的内容必须为纯数字

```java
        Integer val = Integer.valueOf(10);
        Integer val1 = Integer.valueOf("11");
        int i = Integer.parseInt("123");
        System.out.println(i);
        System.out.println(val);
        System.out.println(val1);

```

### 3.4 自动装箱与自动拆箱

#### 3.4.1 概述

​ 在 JDK1.5 中就增加了自动装箱和自动拆箱。主要是让基本数据类型和对应的包装类进行**自动转换**，方便我们的使用。

#### 3.4.2 自动装箱

​ 自动装箱就是基本数据类型可以**自动**转换成对应的包装类。例如：

```java
Integer i = 10;
int num = 20;
Integer i2 = num;
```

#### 3.4.3 自动拆箱

​ 自动拆箱就是包装类可以**自动**转换成基本数据类型。例如：

```java
Integer i = new Integer(10);
int num = i;
```

#### 3.4.4 原理

​ 自动装箱其实是通过包装类的静态方法 valueOf 来实现转换的。

```java
public static void main(String[] args) {
    Integer i = 10;
    Integer i2 = 10;

    Integer i3 = 300;
    Integer i4 = 300;
    System.out.println(i == i2);

    System.out.println(i3 == i4);
    //为什么这个返回的是false呢？
    //因为自动装箱过程中使用了valueOf方法，他提供了一个地址池，当需要转换的内容在地址池范围内的时候，直接从
    //地址池里面拿数据，所以在-128到127之间的时候，返回的地址值是一样的，而==比较的正是地址值，所以i和i2相等
    //但是300不在这个范围内，所以valueOf  new了两个对象，这时候==比较的地址值不一样 所以返回false
}
```

## 4.StringBuilder

### 4.1 概述

​ StringBuilder 是专门用来进行字符串拼接的。我们可以使用他来进行拼接字符串。

### 4.2 创建对象

​ 可以使用构造方法来创建对象。例如：

```java
public static void main() {
	StringBuilder sb = new StringBuilder("三更草堂");
	StringBuilder sb1 = new StringBuilder();//创建出来的对象内容相当于空字符串
}
```

### 4.3 常用方法

> append 方法 用于拼接内容
>
> reverse 方法 可以翻转内容
>
> toString 方法 把 StringBuilder 转换为 String 类型

append 方法演示：

```java
StringBuilder sb2 = new StringBuilder();
System.out.println(sb2);
sb2.append(1);
sb2.append(2);
sb2.append(3).append(4).append(5);
```

reverse 方法演示：

```java
sb2.reverse();
System.out.println(sb2);
```

toString 方法演示：

```java
String s = sb2.toString();
System.out.println(s);
```

# 异常体系

## 1.异常继承体系

​ Java 中异常体系的核心类是 Throwable，他有两个子类 Error 和 Exception。

​ Error 代表一些非常严重的错误。我们一般不必特意在代码中处理他们。

​ Exception 相当于一些小错误。可以用来提示我们出现了什么问题。我们后面主要讲的就是 Exception。

​ 异常主要分为两种：

​ 运行时异常（编译期间不会去做检查，不需要在代码中做预处理）

​ 运行时异常都是 RuntimeException 的子类，例如：NullPointerException，ArrayIndexOutOfBoundsException

​ 编译时异常（编译时就会做检查，如果一段代码中可能出现编译时异常必须在代码中做预处理）

​ 编译时异常是指非继承自 RuntimeException 的 Exception 的子类，例如：FileNotFoundException

## 2.异常处理

### 2.1throws 声明抛出异常

​ 有些时候我们需要把异常抛出，在适当的地方去处理异常。这个时候就可以使用 throws 抛出异常，把异常交给方法的调用者处理。

格式：

​ 在方法声明处加上 throws 异常类型.如果有多个异常用逗号分隔

示例：

抛出一个异常

```java
    public static void test() throws FileNotFoundException {
//        String s = null;
//        System.out.println(s.length());
        FileInputStream fis = new FileInputStream("asdfas.txt");
    }
```

抛出多个异常

```java
public static void main(String[] args) throws FileNotFoundException, ParseException {
    test();
    System.out.println(21);
}

public static void test() throws FileNotFoundException, ParseException {
    FileInputStream fis = new FileInputStream("asdfas.txt");
    SimpleDateFormat sf = new SimpleDateFormat("www");
    sf.parse("ss");
}
```

### 2.2try...catch 抓取异常

​ 我们可以对可能出现异常的代码提前做好准备。这个时候就可以使用 try...catch 了。

#### 2.2.1 格式

```java
try{
    //可能出现异常的代码
}catch(异常类型 标识符){
    //对异常做相应的处理
}
```

示例：

```java
try {
    FileInputStream fis = new FileInputStream("asdfas.txt");
    System.out.println(1);//如果上面出现异常 此行代码就不会执行了
}catch (FileNotFoundException e){
    e.printStackTrace();//打印异常信息
}
        System.out.println(2);//异常出现之后不影响后面得代码执行
```

#### 2.2.2 执行流程

​ 如果 try 中的代码真的出现了异常，并且异常类型和 catch 中的异常类型能匹配上。这个时候就会进入指定的 catch 块中执行，而异常对象也会赋值给我们在 catch 中定义的异常变量接收。

​ 如果没有异常 try 中代码执行完就去执行 try...catch 之后的代码

#### 2.2.3 注意事项

如果可能有多种异常，有多种处理方式。

① 可以选择使用多个 catch。

例如：

```java
try {
    FileInputStream fis = new FileInputStream("a.txt");
    SimpleDateFormat sf = new SimpleDateFormat("www");
    sf.parse("ss");
    System.out.println(1);
}catch (FileNotFoundException e){
    e.printStackTrace();
} catch (ParseException e) {
    e.printStackTrace();
}
```

② 直接定义一个父类类型

```java
try {
    FileInputStream fis = new FileInputStream("a.txt");
    SimpleDateFormat sf = new SimpleDateFormat("www");
    sf.parse("ss");
    System.out.println(1);
}catch (Exception e){//父类引用指向子类对象
    e.printStackTrace();
}
```

## 3.自定义异常

​ 我们也可以自定义异常类。如果要自定义运行时异常，只要继承 RuntimeException，定义构造方法即可。如果定义编译时异常，则改成继承 Exception。

示例：

```java
public class MyException extends Exception{
    public MyException(String s){
        super(s);
    }
}
```

```java
public class MyException extends RuntimeException{
    public MyException(String s){
        super(s);
    }
}
```

我么可以去使用下自定义的异常。可以在代码中使用 throw 抛出异常对象。

```java
public class Demo04 {
    public static void main(String[] args) throws MyException {
        test();
    }

    public static void test() throws MyException {
        throw new MyException("出现异常喽");
    }
}
```

编译时异常，必须对异常进行预处理。如果是运行时异常，不做预处理也没有问题。

## 4.异常的作用

1. 异常可以帮助我们知道具体的错误原因
2. 异常可以让我们在方法调用过程中出现问题的时候，把具体的问题反馈到方法调用处。

# 集合-1

## 1.集合的概念

​ 集合就是用于存储多个数据的容器。相对于具有相同功能的数组来说，集合的长度可变会更加灵活方便。Java 中提供了使用不同数据结构存储数据的不同集合类，他们有各自不同的特点，并且在类中提供了很多常用方法，便于我们使用。

## 2.集合体系结构

集合类主要有两个顶层接口，Colletcion 和 Map。

![image-20221121155000598](https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/image-20221121155000598.png)

## 3.常用 list 集合

### 3.1 list 集合的特点

​ List 接口下的集合都会有以下特点：

- 有索引
- 可以存储重复元素
- 元素存入的顺序和实际存储的顺序相同

### 3.2 ArrayList

#### 3.2.1 创建对象

```java
public static void main(String[] args) {
    //没有元素类型限制
    ArrayList list = new ArrayList();
    list.add("三更草堂");
    list.add(new Object());
    list.add(new Integer(10));

    //只能存储指定类型的数据
    ArrayList<String> list1 = new ArrayList<>();
    list1.add("sangengcaotang");

}
```

#### 3.2.2 常用方法

> ```java
> boolean add(E e)   //添加元素，直接添加到集合的末尾，返回值代表是否添加成功
> void add(int index E element)   //往指定索引位置添加元素
> boolean remove(Object o)  //删除元素
> E remove(int index)   //删除指定索引位置的元素，返回值是被删除的元素
> E set(int index, E element)   //修改指定索引位置的元素，返回值为修改之前的元素
> E get(int index)      //获取指定索引位置的元素  返回值为对应元素
> int size()  //获取集合中的元素个数
> boolean contains(Object o)   //判断集合中是否存在某个元素，返回值表示是否存在
> ```

我们 平时对集合用的最多的就是 add,remove,get,set,size 这几个方法

#### 3.2.3 遍历

1.使用索引遍历

```java
ArrayList<String> list = new ArrayList<>();
list.add("三");
list.add("更");
list.add("草");
list.add("堂");

//遍历
for (int i = 0; i < list.size(); i++) {
    //获取集合元素
    String s = list.get(i);
    System.out.println(s);
}
```

2.使用迭代器遍历

```java
ArrayList<String> list = new ArrayList<>();
list.add("三");
list.add("更");
list.add("草");
list.add("堂");

//迭代器遍历
Iterator<String> it = list.iterator();
while(it.hasNext()){
    System.out.println(it.next());
}
```

注意：为了避免并发修改异常（ConcurrentModificationException）的出现。避免在使用迭代器遍历的过程中对集合进行操作。

```java
        //迭代器遍历
        ArrayList<String> removeList = new ArrayList<>();
        Iterator<String> it = list.iterator();
        while(it.hasNext()){
            String s = it.next();
            //判断是否是“更”,如果是就删除
            if ("更".equals(s)){
//                list.remove(s);
                removeList.add(s);
            }
//            System.out.println(s);
        }
        list.removeAll(removeList);
        System.out.println(list);
//      for (int i = list.size() - 1; i >= 0; i--) {
//            String s = list.get(i);
//            //判断是否是“更”,如果是就删除
//            if ("更".equals(s)){
//                list.remove(s);
//            }
//            System.out.println(s);
//        }
```

3.使用 foreach 遍历

​ foreach 是 java 提供的一个语法糖。可以让我们更方便的遍历集合或数组。

格式如下：

```java
for(元素数据类型 变量名 : 遍历的集合或者数组){
	//遍历的时候会把遍历到的元素赋值给我们上面定义的变量
}
```

例如:

```java
public static void main(String[] args) {
	ArrayList<String> list = new ArrayList<>();
    list.add("三");
	list.add("更");
	list.add("草");
	list.add("堂");
    for(String s : list) {
        System.out.println(s);
    }
}
```

```java
String [] arr = {"三","更","草","堂"};
for (String s : arr){
    System.out.println(s);
}
```

![image-20221121155850772](https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/image-20221121155850772.png)

操作集合时，编译器在编译过程中自动把 foreach 转换成了迭代器的格式，所以这种写法也是会出现并发修改异常的

4.转换为数组遍历

```java
ArrayList<String> list = new ArrayList<>();
list.add("三");
list.add("更");
list.add("草");
list.add("堂");

Object[] objects = list.toArray();
for (int i = 0; i < objects.length; i++) {
    System.out.println(objects[i]);

}
```

更推荐用下面这种方法

```java
String[] strings = list.toArray(new String[0]);
for (String string : strings) {
    System.out.println(string);
}
```

### 3.3 LinkedList

#### 3.3.1 创建对象

```java
LinkedList list = new LinkedList<>();//不限定集合中存放元素的数据类型
LinkedList<数据类型> list2 = new LinkedList<>();//限定集合中存放元素的数据类型
```

#### 3.3.2 常用方法

> ```java
> boolean add(E e)   //添加元素，直接添加到集合的末尾，返回值代表是否添加成功
> void add(int index E element)   //往指定索引位置添加元素
> boolean remove(Object o)  //删除元素
> E remove(int index)   //删除指定索引位置的元素，返回值是被删除的元素
> E set(int index, E element)   //修改指定索引位置的元素，返回值为修改之前的元素
> E get(int index)      //获取指定索引位置的元素  返回值为对应元素
> int size()  //获取集合中的元素个数
> boolean contains(Object o)   //判断集合中是否存在某个元素，返回值表示是否存在
> ```

```java
    public static void main(String[] args) {
        LinkedList<String> list = new LinkedList<>();
        //添加元素
        list.add("更");
        list.add(0,"三");
        //删除元素
        list.remove("三");
        //修改元素
        list.set(0,"三更草堂");
        //获取元素
        String s = list.get(0);
        //获取集合大小
        int size = list.size();
        //判断元素是否存在
        boolean sangeng = list.contains("三更草堂");

    }
```

上面这些给发其实和 ArrayList 中的常用方法都是相同的。因为 LinkedList 和 ArrayList 都是 List 接口的实现类，上面的很多方法都是他们共同接口中定义的方法，所以都会有。

下面是 LinkedList 的一些特有方法：

> ```java
> void addFirst(E e)  //把元素添加到集合最前面
> void addLast(E e)   //把元素添加到集合最后面
> E removeFirst()     //删除集合最前面的一个元素，返回被删除的元素
> E removeLast()     //删除集合最后面的一个元素，返回被删除的元素
>
> ```

```java
public static void main(String[] args) {
    LinkedList<String> list = new LinkedList<>();
    list.add("三");
    list.add("更");
    list.add("草");
    list.add("堂");

    list.addFirst("[");
    list.addLast("]");

    list.removeFirst();
    list.removeLast();
}
```

#### 3.3.3 遍历

​ 和 ArrayList 一样

### 3.4 ArrayList 和 LinkedList 的区别

​ 都是实现了 List 接口，不同点是底层存储数据的结构不同。ArrayList 底层是用数组来存储，而 LinkedList 是链表。所以各自的特点也和数据结构的特点一样。

​ **ArrayList ： 查找快，增删慢**

​ **LinkedList：增删快，查找慢**

# 集合-2

## 1.常用 Set 集合

### 1.1 Set 集合的特点

​ Set 接口下的集合都会有以下特点:

- 不能存储重复元素
- 没有索引

### 1.2 HashSet

HashSet 集合的特点

- 底层数据结构是哈希表
- 存储元素的顺序和遍历获取出来的顺序可能不一致
- 没有索引
- 集合中不能存储重复元素

#### 1.2.1 创建对象

```java
HashSet<元素数据类型> set = new HashSet<>();
```

```java
public static void main(String[] args) {
    HashSet<String> set = new HashSet<>();
}
```

#### 1.2.2 常用方法

> ```java
> boolean add(E e)   //添加元素，如果元素添加不成功    返回值代表是否添加成功
> boolean remove(Object o)  //删除元素，返回值代表是否删除成功
> boolean contains(Object o)  //判断元素是否存在
> int size() //获取集合的大小
> ```

```java
public static void main(String[] args) {
    HashSet<String> set = new HashSet<>();
    //添加元素
    boolean f = set.add("三");
    set.add("更");
    set.add("草");
    set.add("堂");

    boolean f2 = set.add("三");
    //删除元素
    boolean f3 = set.remove("三");
    boolean f4 = set.remove("三");

    //判断元素是否存在
    boolean geng = set.contains("更");

    //获取集合大小
    int size = set.size();

}
```

#### 1.2.3 遍历

1.转换为数组遍历

```java
        //转换成数组遍历
        String[] strings = set.toArray(new String[0]);
        for (int i = 0; i < strings.length; i++) {
            System.out.println(strings[i]);
        }
```

2.迭代器遍历

```java
//迭代器遍历
Iterator<String> iterator = set.iterator();
while(iterator.hasNext()){
    String s = iterator.next();
    System.out.println(s);
}
```

3.foreach 语法糖遍历

```java
for (String s : set) {
    System.out.println(s);
}
```

## 2.泛型

### 2.1 概述

​ 泛型可以把类型明确的工作推迟到创建对象或调用方法的时候才去明确的特殊的类型。

​ 相当于把数据类型作为参数来进行传递。

​ **注意：泛型只能是引用数据类型。**

### 2.2 使用

#### 2.2.1 泛型类&泛型接口

​ 泛型类和泛型接口的作用都相同，下面我们以泛型类为例进行讲解。

​ 泛型类就是把泛型定义在类上，用户使用该类的时候，才把类型明确下来。

##### 2.2.1.1 自定义泛型

​ 在类名后加<>,在<>中定义泛型,<>中的内容相当于泛型的名字,可以随便写.在泛型类中我们可以把这个泛型的名字当做一个数据类型来使用.

```java
public class TestClass<T> {
    //.....
}
```

##### 2.2.1.2 使用泛型

​ 在泛型类中可以使用在类名后面定义的泛型.

```java
public class TestClass<T> {
    public void test(T t){
    }
}
```

##### 2.2.1.3 泛型的确定

① 创建对象时确定

​ 在创建泛型类对象的时候确定之前定义的泛型代表什么数据类型。在定义泛型类对象的时候，在类名的后面加<>，在其中写一个具体的数据类型。

```java
public static void main(String[] args) {
    Box<String> box = new Box<>();
    box.put("三更草堂");

    Box<Integer> integerBox = new Box<>();
    integerBox.put(10);
}
```

② 定义子类时确定

​ 在定义子类的时候可以确定泛型。具体用法如下：

```java
public class SubClass extends TestClass<String> {
    @Override
    public void test(String s){

    }
}
```

​ 这样在子类 SubClass 中泛型就确定为 String 类型了

**注意：**我们在定义子类时也可以选择不确定泛型，让其在创建对象的时候再确定。写法如下：

```java
public class SubClass<T> extends TestClass<T> {
    @Override
    public void test(T s){
        super.test(t);
    }
}
```

#### 2.2.2 泛型方法

##### 2.2.2.1 定义泛型

​ 在方法返回值类型的前面加<>,在<>中定义泛型,<>中的内容相当于泛型的名字,可以随便写.在该泛型方法中我们可以把这个泛型的名字当做一个数据类型来使用.

```java
public static <T> T test(T t){
    return t;
}
```

##### 2.2.2.2 使用泛型

​ 在泛型方法中可以使用定义的泛型。并且我们一般是在参数列表中或者是返回类型上使用这个泛型。

```java
public static <T> T test(T t){
    return t;
}
```

##### 2.2.2.3 泛型方法的确定

​ **在调用泛型方法**的时候才真正确定之前定义的泛型代表什么数据类型。**在调用泛型方法的时候**，程序会根据你的调用自动推导泛型的具体类型。

```java
public static void main(String[] args) {
    Integer test = test(1);
    String s = test("三更草堂");
}
```

### 2.3 泛型上限&泛型下限

#### 2.3.1 泛型限定的概念

​ 我们在使用确定泛型的时候可以使用任意的引用数据类型去确定。但是在某些场景下我们要求这个泛型必须是某个子类或者某个类的父类。这种情况下我们就需要用到泛型上限和泛型下限来限制泛型的范围。

#### 2.3.2 泛型上限

​ 限制泛型必须是某个类或者是其子类。

格式：

```java
<? extends 具体的类型>
```

例如：

```java
public static void test(List<? extends Person> t){

}
```

```java
public class Demo05 {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();
        ArrayList<Integer> list2 = new ArrayList<>();
        ArrayList<Person> list3 = new ArrayList<Person>();
        list3.add(new Person(12,"lsadfjk"));
//        test(list);
//        test(list2);

        ArrayList<Student> list4 = new ArrayList<Student>();
        list4.add(new Student(12,"xiaoming"));
        test(list3);
        test(list4);

    }

    public static void test(List<? extends Person> list){
        Person o = list.get(0);
        System.out.println(o.getAge());
    }
```

这样我们再调用 test 方法的时候只能存入泛型为 Person 或者是 Person 子类的 List 集合对象。

#### 2.3.3 泛型下限

​ 限制泛型必须是某个类或者其父类。

格式：

```java
<? super 具体的类型>
```

例如：

```java
public static void test(List<? super Student> t){

}
```

这样我们再调用 test 方法的时候只能存入泛型类型为 Student 或者是 Student 父类的 List 集合对象。

#### 2.3.4 注意事项

1. 泛型上限可以在定义泛型类和方法参数上使用。

```java
public class Box<T extends Person> {
    T e;
}//下限这样写没有意义，所以不需要从类上限制
```

1. 泛型下限主要在方法参数上使用。

# 集合-3

## 1.常用 Map 集合

### 1.1 Map 集合的概述

​ Map 接口是双列集合的顶层接口，下面是 Map 接口的定义

```java
interface Map<K,V> K:键的类型；V：值的类型
```

​ 存储的数据必须包含 key 和 value。

​ key 和 value 在 Map 集合中是一一对应的关系。一个 key 对应一个 value，称为键值对

​ key 在 Map 集合中是不会重复的。

### 1.2HashMap

HashMap 集合的特点

- 底层数据结构是哈希表
- 存储元素的顺序和遍历获取出来的顺序可能不一致
- key 不会重复

#### 1.2.1 创建对象

```java
HashMap<key的数据类型，value的数据类型> map = new HashMap<>();
```

例如：

```java
public static void main(String[] args) {
    HashMap<String,String> map = new HashMap<>();
    HashMap<String,Integer> map1 = new HashMap<>();
}
```

#### 1.2.2 常用方法

> ```java
> V put(K key, V value) //添加元素，如果key不存在就添加，如果key已经存在则是修改对应的value的值，并且返回修改前的value
> V get(Object key) //根据可以获取对应的value值返回.如果key不存在就返回null
> V remove(Object key) //根据key删除map中对应的键值对.并且把删除的value返回
> boolean containsKey(Object key) //判断key是否存在
> int size() //集合中键值对的对数
> void clear() //清空集合中的所有键值对
> ```

```java
public class Demo02 {
    public static void main(String[] args) {
        HashMap<String,String> map = new HashMap<>();
//        map.put()

        //添加元素
        map.put("name","三更");
        map.put("age","123");
        String v = map.put("name", "三更草堂");

        String name = map.get("name");
        String age = map.get("age");

        //删除元素
        String age1 = map.remove("age");

        //判断key是否存在
        if(map.containsKey("name")) {
            String age111 = map.get("name");
            System.out.println(age111.length());
        }

        //size方法
        System.out.println(map.size());

        //清空键值对
        map.clear();
    }
```

#### 1.2.3 遍历

1.使用 entrySet 遍历

​ map 集合的 entrySet 方法可以获取一个 Set 集合，集合中存放的是 Entry 对象，一个 Entry 对象相当于一个键值对。我们可以遍历 set 集合拿到 Entry 对象，然后获取出里面的键和值。

![image-20221121155954007](https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/image-20221121155954007.png)

```java
    public static void main(String[] args) {
        HashMap<String,String> map = new HashMap<>();
        //添加元素
        map.put("name","三更");
        map.put("age","15");

        //遍历集合
        Set<Map.Entry<String, String>> entries = map.entrySet();
//        System.out.println(entries);
        for (Map.Entry<String, String> entry : entries) {
            System.out.println(entry.getKey()+"==="+entry.getValue());
        }
    }
```

2.使用 KeySet 遍历

​ map 集合的 keySet 方法可以获取一个 Set 集合，集合中存放的是所有的 key。我们可以遍历 set 集合拿到 key 对象，然后通过 key 获取对应的对象。

```java
    public static void main(String[] args) {
        HashMap<String,String> map = new HashMap<>();
        //添加元素
        map.put("name","三更");
        map.put("age","15");
        //遍历
        Set<String> strings = map.keySet();
//        System.out.println(strings);
        for (String key : strings) {
            System.out.println(key + "===" + map.get(key));
        }
    }
```

### 1.3 HashMap 的 key 去重原理

​ HashMap 在添加元素的时候会判断集合中是否有 key 和本次存入的 key 相同。判断的时候主要是通过 hashCode 方法和 equals 方法来进行判断的。hashCode 相同，并且 equals 判断也相同就会认为是同一个 key。

![image-20221121160016406](https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/image-20221121160016406.png)

​ 所以如果我们要村粗到 HashMap 中的 key 是一个自定义的类型。就需要根据情况判断下是否需要重写 hashCode 方法和 equals 方法。重写的时候使用 IDEA 提示即可。

```java
public class Student {
    private int age;
    private String name;

    public void setAge(int age) {
        this.age = age;
    }
	//重写equals
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Student student = (Student) o;
        return age == student.age &&
                Objects.equals(name, student.name);
    }

    //重写hashCode
    @Override
    public int hashCode() {
        return Objects.hash(age, name);
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public String getName() {
        return name;
    }

    public Student() {
    }

    public Student(int age, String name) {
        this.age = age;
        this.name = name;
    }
}
```

# IO 流-1

## 1.File

### 1.1 概述

​ File 对象主要是用来表示文件或者是目录的路径的。类中提供了很多对文件或者文件夹操作的常用方法。

### 1.2 创建对象

- 绝对路径

  以磁盘名开头的路径。例如：D:\xxx\xxx

- 相对路径

  不是以盘符开头的，相对于当前项目下的路径。例如：a.txt

```java
File(String pathname)  //通过字符串类型的路径来创建对象
File(String parent， String child)  //通过父目录的路径（字符串类型）和（文件夹）名称来创建对象
File(File parent, String child) //通过父目录的路径（File类型）和文件（文件夹）名称来创建对象
```

### 1.3 常用方法

```java
boolean createNewFile()//根据路径创建一个文件，返回值表示是否创建成功
boolean mkdir() //根据路径创建一个文件夹，返回值表示是否创建成功
boolean mkdirs() //根据路径创建一个文件夹，如果父目录不存在会自动创建父目录

boolean exists() //判断文件或者文件夹是否存在
boolean isFile() //判断是否是一个文件
boolean isDirectory() //判断是否是一个文件夹

boolean delete() //删除文件，或者删除空文件夹，返回值代表删除是否成功

long length() //获取一个文件的大小，对文件夹无意义

String getName() //获取文件或文件夹的名字
File getPartentFile() //获取父目录的File对象
String getAbsolutePath() //获取File对象的绝对路径
```

### 1.4 重要方法

```java
File[] list Files() //如果当前File对象是一个文件夹，可以获取文件夹下的所有文件或者文件夹的File对象。
```

注意：如果不是文件夹或者文件夹的权限受限返回值是 null。所以一定要对返回结果做非空判断。

## 2.递归

​ 在方法中调用方法本身 就是递归

例如：

```java
public int f(int n){
    if(n == 1){
        return 1;
    }
    return n*f(n-1);
}
```

**注意：我们在使用递归的过程中一定要保证递归能结束，不能无限递归下去，不然会出现栈溢出（StackOverflowError）的情况。**

![image-20221121160053549](https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/image-20221121160053549.png)

小结：如果既可以用递归解决又可以用循环解决。我们一般用循环解决

# IO 流-2

## 1.IO 流概述

​ 当需要进行数据的传输的时候可以使用 IO 流来进行。例如：把磁盘中文件的数据读取到内存中。把内存中的数据写入到磁盘中。把网络中的数据读取到内存中。

## 2.IO 流的分类

​ IO 流根据处理数据类型的不同分为字符流和字节流，根据数据流向不同分为输入流和输出流，对输入流只能进行读操作，对输出流只能进行写操作。

| 数据类型 | 流向       | 顶层父类             |
| -------- | ---------- | -------------------- |
| 字节流   | 输入（读） | java.io.InputStream  |
| 字节流   | 输出（写） | java.io.OutputStream |
| 字符流   | 输入（读） | java.io.Reader       |
| 字符流   | 输出（写） | java.io.Writer       |

## 3.字节输入流

​ 所有字节输入流的父类是 java.io.InputStream,它是以字节为单位的输入流。

​ 我们就以 FileInputStream 为例进行学习。

### 3.1 FileInputStream 概述

​ FileInputStream 是用来读取文件数据的字节输入流。

### 3.2 FIleInputStream 对象创建

构造方法如如下：

```java
FileInputStream(String name) throws FileNotFoundException //传入文件路径创建对象
FileInputStream(File file) throws FileNotFoundException //传入文件路径的File对象来创建流对象
```

范例：

```java
public static void main(String[] args) throws FileNotFoundException {
    FileInputStream fis = new FileInputStream("C:\\Users\\DunXi\\Desktop\\test\\sadf.txt");

    File file = new File("C:\\Users\\DunXi\\Desktop\\test\\sadf.txt");
    FileInputStream fis2 = new FileInputStream(file);
}
```

### 3.3 读取数据

​ 我们可以使用 FileInputStream 来读取文件中的数据。

#### 3.3.1 一次读取一个字节

核心方法如下：

```java
public int read() throws IOException //读取一个字节的数据作为返回值返回 返回值为-1时，表示里面已经没有数据
```

范例：

```java
    public static void main(String[] args) throws IOException {
        FileInputStream fis = new FileInputStream("C:\\Users\\DunXi\\Desktop\\test\\sadf.txt");
//        读取数据
//        int b = fis.read();
        int b;
        while((b = fis.read()) != -1){
            System.out.println(b);
        }
        //释放资源
        fis.close();
    }
```

3.3.2 一次读取一个字节数组

```JAVA
public int read(byte b[]) throws IOException //传入一个数组，最多读取一个字节数组的数据，并且会把数据存入数组中，返回值代表本次读取到的字节的个数。返回值为-1代表读到了末尾
```

范例：

```java
    public static void main(String[] args) throws IOException {
        FileInputStream fis = new FileInputStream("C:\\Users\\DunXi\\Desktop\\test\\sadf.txt");
//        读取数据 一次读一个字节数组
        byte[] bytes = new byte[2];
        int len;
        while ((len = fis.read(bytes)) != -1){
            System.out.println(new String(bytes,0,len));
        }
        //释放资源
        fis.close();
    }
```

### 3.4 资源释放

​ 我们在前面处理异常的时候都同意了声明抛出的处理。但是这很有可能导致在出现了异常时资源没有被正确的释放。所以我们要更合理的处理异常，尤其是处理还资源释放的问题。

#### 3.4.1 JDK6 版本

```java
    public static void main(String[] args) {
        FileInputStream fis = null;
        try {
            fis = new FileInputStream("C:\\Users\\DunXi\\Desktop\\test\\sadf.txt");
//        读取数据 一次读一个字节数组
            byte[] bytes = new byte[2];
            int len;
            while ((len = fis.read(bytes)) != -1){
                System.out.println(new String(bytes,0,len));
            }

        }catch (IOException e){
            e.printStackTrace();
        }finally {//无论有没有出现异常 这里面的代码都会被执行
            //释放资源
            if (fis != null){
                try {
                    fis.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }

    }
```

#### 3.4.2 JDK7 版本

可以使用 try...catch...resource 的写法，在 try 的后面加小括号，把需要释放的资源在小括号中定义。我们就不需要自己去释放资源，jvm 会帮我们在最后调用 close 方法释放资源。

```java
    public static void main(String[] args) {
        //有了这个接口，无论有没有异常，程序都会给我们调用释放资源的方法
        try(FileInputStream fis = new FileInputStream("C:\\Users\\DunXi\\Desktop\\test\\sadf.txt");){
            //        读取数据 一次读一个字节数组
            byte[] bytes = new byte[2];
            int len;
            while ((len = fis.read(bytes)) != -1){
                System.out.println(new String(bytes,0,len));
            }
            //释放资源
//            fis.close();
        }catch (IOException e){
            e.printStackTrace();
        }
    }
```

#### 3.4.3 JDK9 版本

```java
FileInputStream fis = new FileInputStream("C:\\Users\\DunXi\\Desktop\\test\\sadf.txt");
try(fis){
    //        读取数据 一次读一个字节数组
    byte[] bytes = new byte[2];
    int len;
    while ((len = fis.read(bytes)) != -1){
        System.out.println(new String(bytes,0,len));
    }
    //释放资源
    fis.close();
}catch (IOException e){
    e.printStackTrace();
}
```

## 4.字节输出流

​ 所有字节输出流的父类是 java.io.OutputStream,它是以字节为单位的输出流。

​ 我们就以 FileOutputStream 为例进行学习。

### 4.1 FileOutputStream 概述

​ FileOutputStream 是用来往文件中写入数据的字节输出流。

### 4.2 FileOutputStream 对象创建

常用构造方法如下：

```java
FileOutputStream(String name) throws FileNotFoundException //传入文件路径创建对象
FileOutputStream(File file) throws FileNOtFoundException //传入文件路径的File对象来创建流对象
```

示例：

```java
    public static void main(String[] args) throws FileNotFoundException {
        FileOutputStream fos = new FileOutputStream("C:\\Users\\DunXi\\Desktop\\test\\sadf.txt");
        File file = new File("C:\\Users\\DunXi\\Desktop\\test\\sadf.txt");
        FileOutputStream fos2 = new FileOutputStream(file);
//        另外一种写法：匿名对象 构造写法 也是可以的
//        FileOutputStream fos3 = new FileOutputStream(new File("C:\\Users\\DunXi\\Desktop\\test\\sadf.txt"););
    }
```

### 4.3 写数据

​ 我们可以使用 FileOutputStream 来往文件中写入字节数据。

#### 4.3.1 一次写一个字节

核心方法如下：

```java
public void write(int b) throws IOException //传入一个字节数据，把字节数据写入文件
```

范例：

```java
    public static void main(String[] args) throws IOException {
        File file = new File("C:\\Users\\DunXi\\Desktop\\test\\sadf.txt");
        FileOutputStream fos2 = new FileOutputStream(file);
        fos2.write('a');
        fos2.close();
    }
```

#### 4.3.2 一次写一个字节数组

核心方法如下：

```java
public void write(byte b[]) throws IOException //存入一个字节数组，把字节数组中的数据全部写入文件
public void write(byte b[] , int off, in len) throws IOException //存入一个字节数组，把字节数组中从off索引开始len个元素写入文件
```

范例：

```java
     public static void main(String[] args) throws IOException {
        File file = new File("C:\\Users\\DunXi\\Desktop\\test\\sadf.txt");
        FileOutputStream fos2 = new FileOutputStream(file);
        byte[] bytes = "abc".getBytes();
//        fos2.write(bytes);//一次把整个数组都写进去
        fos2.write(bytes,0,2);//只写入数组中的部分数据
        fos2.close();
    }
```

### 4.4 文件续写

​ 如果之前使用构造方法创建的流对象，每次流对象创建的时候就会把文件中的内容清空。所以没有办法实现续写效果。如果需要续写就需要使用另外的构造方法。

```java
FileOutputStream(String name,boolean append) throws FileNotFoundException //第二个参数代表是否续写
FileOutputStream(File file, boolean append) throws FileNotFoundException //第二个参数代表是否续写
```

​ 使用什么的构造创建流对象，并且第二个参数传入 true，就不会清空文件中原有的内容。实现文件续写的效果。

范例：

```java
    public static void main(String[] args) throws IOException {
        File file = new File("C:\\Users\\DunXi\\Desktop\\test\\sadf.txt");
        FileOutputStream fos2 = new FileOutputStream(file,true);
        byte[] bytes = "abc".getBytes();
//        fos2.write(bytes);
        fos2.write(bytes,0,2);
        fos2.close();
    }
```

## 5.练习

### 5.1 文件复制

​ 要求定义一个方法，该方法能够实现文件的复制

```java
    public static void main(String[] args) throws IOException {
//        要求定义一个方法，该方法能够实现文件的复制
        //文件的复制就是循环的读写，直到操作完所有的数据为止
        File src = new File("C:\\Users\\DunXi\\Desktop\\test\\sadf.txt");
        File destDir = new File("C:\\Users\\DunXi\\Desktop\\test\\a");
        copyFile(src,destDir);

    }
    //原文件路径 File srcFile
    //目标文件的存放为止 File destDir
    public static void copyFile(File srcFile, File destDir) throws IOException {
        //在destDir下创建一个跟srcFile同名的文件
        File destFile = new File(destDir,srcFile.getName());
        //读取源文件，然后把读到的数据写入目标文件
        FileInputStream fis = new FileInputStream(srcFile);
        FileOutputStream fos = new FileOutputStream(destFile,true);
        byte[] bytes = new byte[1024];
        int len;
        while((len = fis.read(bytes)) != -1){
            //把读到的内容写到新文件中
            fos.write(bytes,0,len);
        }
        //释放资源
        fis.close();
        fos.close();
    }
```

### 5.2 文件夹复制

​ 要求定义一个方法，该方法能够实现文件夹的复制

```java
public static void main(String[] args) throws IOException {
//        要求定义一个方法，该方法能够实现文件夹的复制 ,考虑有子文件夹的情况
        File srcDir = new File("C:\\Users\\DunXi\\Desktop\\test");
        File destDir = new File("C:\\Users\\DunXi\\Desktop\\test2");
        copyDir(srcDir,destDir);
    }
    //File srcDir  源文件夹
    //File destDir  要复制到的文件夹
    public static void copyDir(File srcDir,File dest) throws IOException {

        if(!(srcDir.exists() && srcDir.isDirectory())){
            throw new RuntimeException("源文件夹必须存在并且是一个文件夹");
        }
        if(!dest.isDirectory()){
            throw new RuntimeException("目标文件夹必须是一个文件夹");
        }
        //1.在目标文件夹下创建一个和源文件夹同名的文件夹
        File destDir = new File(dest,srcDir.getName());
        destDir.mkdir();
        //2.获取源文件夹下的所有子文件
        File[] files = srcDir.listFiles();
        if(files != null){
            //3.遍历数组，复制每一个文件到目标文件夹下
            for (File file : files) {
                if (file.isFile()){
                    copyFile(file,destDir);
                }else{
                    copyDir(file,destDir);
                }
            }
        }
    }
    public static void copyFile(File srcFile, File destDir) throws IOException {
        //在destDir下创建一个跟srcFile同名的文件
        File destFile = new File(destDir,srcFile.getName());
        //读取源文件，然后把读到的数据写入目标文件
        FileInputStream fis = new FileInputStream(srcFile);
        FileOutputStream fos = new FileOutputStream(destFile,true);
        byte[] bytes = new byte[1024];
        int len;
        while((len = fis.read(bytes)) != -1){
            //把读到的内容写到新文件中
            fos.write(bytes,0,len);
        }
        //释放资源
        fis.close();
        fos.close();
    }
```

# IO 流-3

## 1.编码表

​ 计算机要准确的存储和识别各种字符集符号，就需要进行字符编码，一套字符集必然至少有一套字符编码。**如果编码和解码不是用一个编码表**就会出现**乱码**问题。

​ 编码（加密）看懂的---》看不懂

​ 解码（解密）看不懂---》看懂的

### 1.1 常见的编码表

- **ASCII**

  ​ 用于显示现代英语，主要包括控制字符（回车键、退格、换行键等）和可显示字符（英文大小写字符、阿拉伯数字和西文符号）

  ​ 基本的 ASCII 字符集，使用 7 位表示一个字符，共 128 字符。ASCII 的扩展字符集使用 8 位表示一个字符，共 256 字符，方便支持欧洲常用字符。是一个系统支持的所有字符的集合，包括该各国家文字、标点符号、图形符号、数字等

- **GBK**

  ​ 最常用的中文码表。是在 GB2312 标准的基础上的扩展规范，使用了双字节编码方案，共收录了 21003 个汉字，完全兼容 GB2312 标准，同时支持繁体汉字以及日韩汉子等

- **Unicode**

  ​ UTF-8 编码：可以用来表示 Unicode 标准中任意字符，它是电子邮件、网页及其他存储或传送文字的应用中，优先采用的编码。互联网工程工作小组（IETF）要求所有互联网协议都必须支持 UTF-8 编码。它使用一至四个字节为每个字符编码

  ​ 编码规则：

  ​ 128 个 US-ASCII 字符，只需要一个字节编码

  ​ 拉丁文等字符，需要二个字节编码

  ​ 大部分常用文字（含中文），使用三个字节编码

  ​ 其他极少使用 Unicode 辅助字符，使用四个字节编码

- **ANSI**

  ​ 其实不是具体的编码表，它指代系统默认的编码表。例如：简体中文的 Windows 系统默认编码是 GBK。

- 切换编码表只需要在创建对象的构造方法内，**Charset.forName("gbk")**写要切换的编码表就可以了

## 2.字符流

​ 当需要读取/写入的数据是纯文本形式时我们可以使用字符流来进行操作会更加方便。

### 2.1 字符输入流

​ 所有字符输入流的父类都是 java.io.Reader,它是以字符为单位的输入流。

​ 我们就以其子类 FileReader 为例进行学习。

#### 2.1.1 FileReader 概述

​ FileReader 是用来从文件中读取数据的字符输入流。

#### 2.1.2 FileReader 创建对象

构造方法如下：

```java
public FileReader(String fileName) throws FileNotFoundException//传入文件路径创建对象
public FileReader(File file) throws FileNotFoundException//传入文件路径的File对象来创建流对象
```

范例：

```java
    public static void main(String[] args) throws FileNotFoundException {
        //这个路径要对应一个文件，不能是文件夹
        FileReader fr = new FileReader("C:\\Users\\DunXi\\Desktop\\test\\sadf.txt");
//        File f = new File("C:\\Users\\DunXi\\Desktop\\test\\sadf.txt");
        FileReader fr2 = new FileReader(new File("C:\\Users\\DunXi\\Desktop\\test\\sadf.txt"));
        //匿名对象创建
    }
```

#### 2.1.3 读取数据

##### 2.1.3.1 一次读取一个字符

核心方法如下：

```java
public int read() throws IOException //一次读取一个字符返回
```

范例：

```java
public static void main(String[] args) throws IOException {
    //创建流对象
    FileReader fr = new FileReader("C:\\Users\\DunXi\\Desktop\\test\\sadf.txt");
    //调用方法
    int c;
    while((c = fr.read()) != -1)//如果读到循环末尾，返回值为-1
    {
        System.out.println((char) c);
    }
    //释放资源
    fr.close();
}
```

##### 2.1.3.2 一次读取一个字符数组

核心方法如下：

```java
public int read(char cbuf[]) throws IOException //一次读取一个字符返回
```

范例：

```java
public static void main(String[] args) throws IOException {
    FileReader fr = new FileReader("C:\\Users\\DunXi\\Desktop\\test\\sadf.txt");
    char[] ch = new char[127];
    int len;
    while ((len = fr.read(ch)) != -1){
        System.out.println(ch);
    }
    fr.close();
}
```

### 2.2 字符输出流

​ 所有字符输出流的父类是 java.io.Writer,它是以字符为单位的输出流。

​ 我们就以 FileWriter 为例进行学习。

#### 2.2.1 FileWriter 概述

​ FileWriter 是采用来往文件写入数据的字符输出流。

#### 2.2.2 FileWriter 对象创建

构造方法如下：

```java
public FileWriter(String fileName) throws IOException //传入文件路径创建对象
public FileWriter(File file) throws IOException //传入文件路径的File对象来创建流对象
```

范例：

```java
public static void main(String[] args) throws IOException {
    FileWriter fw = new FileWriter("C:\\Users\\DunXi\\Desktop\\test\\sadf.txt");

    FileWriter fw2 = new FileWriter(new File("C:\\Users\\DunXi\\Desktop\\test\\sadf.txt"));

}
```

#### 2.2.3 写入数据

##### 2.2.3.1 一词写一个字符

核心方法如下：

```java
public void write(int c) throws IOException //把一个字符写入目的地
public void flush() throws IOException //把缓存区中的数据写入硬盘
```

范例：

```java
public static void main(String[] args) throws IOException {
    //创建流对象
    FileWriter fw = new FileWriter("C:\\Users\\DunXi\\Desktop\\test\\sadf.txt");

    //写数据
    //直接调用write会先把要写的内容放到缓冲区里面，要么等缓冲区满了，要么自己调用flush刷新一下
    fw.write("敦");
    fw.write("禧");
    fw.flush();
    fw.write("科");
    fw.write("技");
    //释放资源
    fw.close();//释放资源之后系统也会自动把数据存盘
}
```

##### 2.2.3.2 一次写入一个子字符数组

核心方法如下：

```java
public void write(char cbuf[]) throws IOException //把一个字符数组写入目的地
```

范例：

```java
public static void main(String[] args) throws IOException {
    //创建流对象
    FileWriter fw = new FileWriter("C:\\Users\\DunXi\\Desktop\\test\\sadf.txt");

    //写数据
    char[] chars = "敦禧科技".toCharArray();
    fw.write(chars);
    fw.flush();
    chars = "666".toCharArray();
    fw.write(chars);
    //释放资源
    fw.close();//释放资源之后系统也会自动把数据存盘
}
```

##### 2.2.3.3 一次写入一个字符串

核心方法如下：

```java
public void write(String str) throws IOException //把一个字符串写入目的地
```

范例：

```java
public static void main(String[] args) throws IOException {
    //创建流对象
    FileWriter fw = new FileWriter("C:\\Users\\DunXi\\Desktop\\test\\sadf.txt");

    //写数据
    fw.write("敦禧科技");
    fw.flush();
    //释放资源
    fw.close();//释放资源之后系统也会自动把数据存盘
}
```

##### 2.2.3.4 如何抉择？

​ 随机应变，根据情况选择合适的重载类型，有什么类型的数据就使用对应的重载形式。

## 练习

1.使用字符流实现纯文本文件的复制。

```java
    public static void main(String[] args) throws IOException {
        //创建流对象
        File file = new File("C:\\Users\\DunXi\\Desktop\\test\\sadf.txt");
        FileReader fr = new FileReader(file);
        FileWriter fw = new FileWriter("C:\\Users\\DunXi\\Desktop\\test\\22.txt");
        //循环读写
        char[] chars = new char[3];
        int len;
        while((len = fr.read(chars)) != -1){
            //把读到的内容写入新文件中
            fw.write(chars,0,len);
//            fw.flush();
        }
//        释放资源
        fw.close();
        fr.close();
    }
```

# IO 流-4

## 1.高效缓冲流

### 1.1 概述

​ 对硬盘进行数据的读取相比于从内存中存取数据要慢得多。所以 JDK 为我们提供了高效缓冲流来提高我们 IO 流的效率。内部原理就是借助内存的缓冲区来减少磁盘 IO 的次数，提高性能。

![image-20221121160130585](https://bed-1309358403.cos.ap-shanghai.myqcloud.com/img/image-20221121160130585.png)

### 1.2 分类

- 字节流

  输入流

  ​ BufferedInputStream

  输出流

  ​ BufferedOutputStream

- 字符流

  输入流

  ​ BufferedReader

  输出流

  BufferedWriter

### 1.2 对象的创建

```java
public BufferedInputStream(InputStream in)
public BufferedOutputStream(OutputStream out)
public BufferedReader(Reader in)
public BufferedWriter(Writer out)
```

范例：

```java
    public static void main(String[] args) throws FileNotFoundException {
        BufferedInputStream bis = new BufferedInputStream(new FileInputStream("C:\\Users\\DunXi\\Desktop\\test\\sadf.txt"));
        BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream("C:\\Users\\DunXi\\Desktop\\test\\sadf.txt"));

        BufferedReader br = new BufferedReader(new FileReader("C:\\Users\\DunXi\\Desktop\\test\\sadf.txt"));
        BufferedWriter bw = new BufferedWriter(new File("C:\\Users\\DunXi\\Desktop\\test\\sadf.txt"));
    }
```

### 1.3 特有的方法

| 类             | 方法                                        | 作用                                      |
| -------------- | ------------------------------------------- | ----------------------------------------- |
| BufferedReader | public String readLine() throws IOException | 一次读取一行数据，读到了文件末尾返回 null |
| BufferedWriter | public void newLine() throws IOException    | 写入一个换行符，会根据系统变化            |

范例：

```java
public static void main(String[] args) throws IOException {
    //readLine
    //创建对象
    BufferedReader br = new BufferedReader(new FileReader("C:\\Users\\DunXi\\Desktop\\test\\333.txt"));
    //读取数据
    String line;
    while ((line = br.readLine()) != null){
        //把读到的内容输出
        System.out.println(line);
    }

    //释放资源
    br.close();
}
```

```java
public static void main(String[] args) throws IOException {
    //newLine
    //创建对象
    BufferedWriter bw = new BufferedWriter(new FileWriter("C:\\Users\\DunXi\\Desktop\\test\\444.txt"));

    //写入数据
    bw.write("你好 啊");
    //写入换行符
    bw.newLine();
    bw.write("我很好");
    //释放资源
    bw.close();
}
```

练习：

用高效缓冲流实现文件的复制操作

```java
public static void main(String[] args) throws IOException {
    //newLine
    //创建对象
    BufferedReader br = new BufferedReader(new FileReader("C:\\Users\\DunXi\\Desktop\\test\\333.txt"));
    BufferedWriter bw = new BufferedWriter(new FileWriter("C:\\Users\\DunXi\\Desktop\\test\\444.txt"));

    //循环读写数据，把读到的数据写入目标文件中
    String line;
    while((line = br.readLine()) != null){
        //把读到的数据写入文件
        bw.write(line);
        //写入换行符
        bw.newLine();
    }

    //释放资源
    bw.close();
    br.close();
}
```
