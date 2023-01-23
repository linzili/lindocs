# Kotlin

## basic

### 程序入口点

Kotlin 应用程序的入口点是 `main` 函数

``` kotlin
fun main() {
  println("Hello world!")
}
```

`main` 的另一种形式接收可变数量的 `String` 参数

``` kotlin
fun main(args: Array<String>) {
  println(args.contentToString())
}
```

### 类型

#### 基本类型

>在 Kotlin 中，所有东西都是对象，在这个意义上讲可以在任何变量上调用成员函数与属性。一些类型可以有特殊的内部表示——例如，数字、字符以及布尔可以在运行时表示为原生类型值，但是对于用户来说，它们看起来就像普通的类。

##### 数字

###### 整数类型

::: tip
当初始化一个没有显式指定类型的变量时，编译器会自动推断为足以表示该值的最小类型。
如果不超过 Int 的表示范围，那么类型是 Int 。 如果超过了， 那么类型是 Long 。 如需显
式指定 Long 值，请给该值追加后缀 L 。 显式指定类型会触发编译器检测该值是否超出指
定类型的表示范围。
:::

``` kotlin
val one = 1 // Int
val threeBillion = 3000000000 // Long
val oneLong = 1L // Long
val oneByte: Byte = 1
```

###### 浮点类型
>
>对于实数，Kotlin 提供了浮点类型 Float 与 Double 类型，遵循 IEEE 754 标准。 Float 表达 IEEE 754 单精度，而 Double 表达双精度。
可以使用带小数部分的数字初始化 Double 与 Float 变量。 小数部分与整数部分之间用句点（ . ）分隔 对于以小数初始化的变量，编译器会推断为 Double 类型：

``` kotlin
val pi = 3.14 // Double
// val one: Double = 1 // 错误：类型不匹配
val oneDouble = 1.0 // Double
```

::: kotlin
val pi = 3.14 // Double
// val one: Double = 1 // 错误：类型不匹配
val oneDouble = 1.0 // Double
:::

如需将一个值显式指定为 `Float` 类型，请添加 f 或 F 后缀。 如果这样的值包含多于 6～7
位十进制数，那么会将其舍入：
::: kotlin
val e = 2.7182818284 // Double
val eFloat = 2.7182818284f // Float，实际值为 2.7182817
:::

与一些其他语言不同，Kotlin 中的数字没有隐式拓宽转换。 例如，具有 Double 参数的函数
只能对 `Double` 值调用，而不能对 `Float` 、 `Int` 或者其他数字值调用：

::: kotlin
fun main() {
    fun printDouble(d: Double) { print(d) }
    val i = 1
    val d = 1.0
    val f = 1.0f
    printDouble(d)
// printDouble(i) // 错误：类型不匹配
// printDouble(f) // 错误：类型不匹配
}
:::

##### 字符串
>
>字符串字面值可以包含模板表达式——一些小段代码，会求值并把结果合并到字符串中。 模板表达式以美元符（ $ ）开头，要么由一个的名称构成:

::: kotlin
fun main() {
//sampleStart
  val i = 10
  println("i = $i") // 输出“i = 10”
//sampleEnd
}
:::
要么是用花括号括起来的表达式:
::: kotlin
fun main() {
//sampleStart
  val s = "abc"
  println("$s.length is ${s.length}") // 输出 "abc.length is 3"
//sampleEnd
}
:::

### 流程控制

#### if表达式

在 Kotlin 中， `if` 是一个表达式：它会返回一个值。 因此就不需要三元运算符`（ 条件 ? 然后: 否则 ）`，因为普通的 `if` 就能胜任这个角色。
::: kotlin
var max = a
if (a < b) max = b

// With else
var max: Int
if (a > b) {
  max = a
} else {
  max = b
}

// 作为表达式
val max = if (a > b) a else b
:::
`if` 表达式的分支可以是代码块，这种情况最后的表达式作为该块的值：
::: kotlin
val max = if (a > b) {
  print("Choose a")
  a
} else {
  print("Choose b")
  b
}
:::

#### When 表达式

::: kotlin
when (x) {
  1 -> print("x == 1")
  2 -> print("x == 2")
  else -> {
    print("x is neither 1 nor 2")
  }
}
:::
`when`将它的参数与所有的分支条件顺序比较，直到某个分支满足条件。

`when` 既可以作为表达式使用也可以作为语句使用。如果它被当做表达式， 第一个符合条件
的分支的值就是整个表达式的值，如果当做语句使用， 则忽略个别分支的值。 类似于 `if` ，
每一个分支可以是一个代码块，它的值是块中最后的表达式的值。

如果其他分支都不满足条件将会求值 `else` 分支。 如果 `when` 作为一个表达式使用，那么必
须有 `else` 分支， 除非编译器能够检测出所有的可能情况都已经覆盖了， 例如，对于 `枚举（ enum ）类`条目与`密封（ sealed ）类`子类型］。
::: kotlin
enum class Bit {
  ZERO, ONE
}
val numericValue = when (getRandomBit()) {
  Bit.ZERO -> 0
  Bit.ONE -> 1
  // 'else' is not required because all cases are covered
}
:::

### 包与导入

### 类与对象

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

### Spring

#### 自动注入

``` kotlin 3
class TestClass (
  // 自动注入的对象
  private val serviceX: ServiceX
) { yourCode }
```
