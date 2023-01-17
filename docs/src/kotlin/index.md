# Kotlin

## basic

### 数据类型

#### 常量

``` kotlin
const val NAME = "content"
```

### 对象

#### 伴生对象

> kotlin通过引入“伴生对象”的概念来替代java里的静态变量及方法。

“伴生对象”这个名词听上去很古怪，其实非常简单：在类的内容使用companion来标记一个对象。所有需要“静态化”的变量和方法都放在这个对象里。

``` kotlin
class StaticTest {
    companion object{//伴生对象是可以指定名字的，不过一般都省略掉。
        var STATIC_VAR = 0

        fun staticMethod(str: String?) {
            println(str)
        }
    }
}
```

### 函数

#### 基本使用

Kotlin 函数使用 fun 关键字声明：

``` kotlin
fun double(x: Int): Int {
    return 2 * x
}
```

### Spring

#### 自动注入

``` kotlin 3
class TestClass (
  // 自动注入的对象
  private val serviceX: ServiceX
) { yourCode }
```
