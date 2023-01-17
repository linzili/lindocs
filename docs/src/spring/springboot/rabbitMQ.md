# RabbitMQ

## 基本使用

1. 引入依赖

``` groovy
implementation 'org.springframework.boot:spring-boot-starter-amqp'
```

2. 添加配置

``` yaml
spring:
  rabbitmq:
    addresses: 127.0.0.1
    port: 5672
    username: guest
    password: guest
```

3. 声明配置类

``` kotlin
@Configuration
class RabbitMQConfig {
    companion object{
        const val EXCHANGE_NAME = "boot_topic_exchange"
        const val QUEUE_NAME = "boot_queue"
    }
    @Bean("bootExchange")
    fun bootExchange(): Exchange {
        return ExchangeBuilder.topicExchange(EXCHANGE_NAME).durable(true).build()
    }

    @Bean("bootQueue")
    fun bootQueue(): Queue {
        return QueueBuilder.durable(QUEUE_NAME).build()
    }

    @Bean
    fun bindQueueExchange(
        @Qualifier("bootQueue") queue: Queue,
        @Qualifier("bootExchange") exchange: Exchange
    ): Binding {
        return BindingBuilder.bind(queue).to(exchange).with("boot.#").noargs()
    }
}

```

4. 消息生产者

``` kotlin
@RestController
class HelloController(
    // 自动注入
    private val rabbitTemplate: RabbitTemplate
) {
    @GetMapping("/")
    fun testSend(): String {
        // 发送消息
        rabbitTemplate.convertAndSend(
            // 交换机
            RabbitMQConfig.EXCHANGE_NAME,
            // 路由key
            "boot.haha",
            // 消息内容
            "boot mq hello"
        )
        return "hello"
    }
}
```

5. 消息消费者

``` kotlin

  // 侦听器
  @RabbitListener(queues = ["boot_queue"])
  fun listenerQueue(message:Message) {
      // 消息对象
      println(message)
      // 消息体
      println(String(message.body))
  }
```

::: tip 可使用以下方式替代`3.` `5.`步

``` kotlin
@RabbitListener(
        // 声明绑定关系
        bindings =[ QueueBinding(
            // 声明队列
            value = Queue(value = "order-queue"),
            // 声明交换机
            exchange = Exchange(value = "order-exchange", type = "topic"),
            // 声明路由键
            key = ["order.*"]
        )]
    )
```

:::

## RabbitMQ高级特性

### 消息可靠性投递

- `confirm` 确认模式
- `return`  退回模式

rabbitmq 的消息投递路径为:
`producer` -> `rabbitmq broker` -> `exchange` -> `queue` -> `consumer`

- 消息从 `producer` 到 `exchange` 则会返回一个 `confirmCallback`
- 消息从 `exchange` -> `queue` 投递失败则会返回一个 `returnCallback`

#### 确认模式

1. 开启确认模式

- publish-confirm-type: 开启publisher-confirm,这里支持两种类型:
  - simple:同步等待confirm结果,直到超时
  - correlated:异步回调,定义ConfirmCallback,MQ返回结果时会回调这个ConfirmCallback

``` yaml
spring:
  rabbitmq:
    publisher-confirm-type: correlated
```

1. 设置ConfirmCallback

``` kotlin
  /**
   * correlationData 配置信息
   * ack 交换机是否收到消息. true 成功, false 失败
   * cause 失败原因
   */
    rabbitTemplate.setConfirmCallback { correlationData, ack, cause ->
            println("confirm方法被执行了...")
        }
    rabbitTemplate.convertAndSend(
            RabbitMQConfig.EXCHANGE_NAME,
            "boot.haha",
            "boot mq hello")
```

#### 回退模式

1. 开启回退模式

  ``` yaml
  spring:
    rabbitmq:
      # 开启publish-return功能
      publisher-returns: true
      # 定义消息路由失败时的策略. true,则调用ReturnCallback
      template:
        mandatory: true
  ```

1. 设置ReturnCallBack(可用[全局Callback](#全局callback))
2. 设置Exchange处理消息的模式: (失败)
   1. 丢弃消息
   2. 返回给消息的发送方ReturnCallBack (默认)

``` kotlin
rabbitTemplate.run {
    setMandatory(true)
    setReturnsCallback { returnedMessage: ReturnedMessage ->
        println(returnedMessage.message)   // 消息对象
        println(returnedMessage.replyCode) // 错误码
        println(returnedMessage.replyText) // 错误信息
        println(returnedMessage.exchange)  // 交换机
        println(returnedMessage.routingKey)// 路由键
    }
    convertAndSend(RabbitMQConfig.EXCHANGE_NAME, "boot.haha", "boot mq hello")
}
```

#### 全局Callback
>
> 由于每个RabbitTemplate只能配置一个ReturnCallback,因此推荐用以下方法统一配置

``` kotlin
@Configuration
class CommonConfig : ApplicationContextAware {
    override fun setApplicationContext(applicationContext: ApplicationContext) {
        var rabbitTemplate = applicationContext.getBean(RabbitTemplate::class.java)
        rabbitTemplate.setReturnsCallback {
            println(it.replyText)
        }
    }
}

```

### Consumer ACK

> ack指Acknowledge,确认。表示消费端收到消息后的确认方式。

有三种确认方式：

- 自动确认：`acknowledge="none"`
- 手动确认：`acknowledge="manual"`
- 根据异常情况确认：`acknowledge="auto"` (这种方式使用麻烦)

其中自动确认是指，当消息一旦被`Consumer`接收到，则自动确认收到，并将相应`message`从`RabbitMQ`的
消息缓存中移除。但是在实际业务处理中，很可能消息接收到，业务处理出现异常，那么该消息就会丢失。如
果设置了手动确认方式，则需要在业务处理成功后，调用`channel.basicAck()`,手动签收，如果出现异常，则
调用`channel.basicNack()`方法，让其自动重新发送消息。

1. 设置手动签收

``` yaml
spring:
  rabbitmq:
    listener:
      simple:
        acknowledge-mode: manual
```

2. 监听器接收`Channel`对象

``` kotlin 2
 @RabbitListener(queues = ["boot_queue"])
    fun listenerQueue(map: Map<String, Any>, message: Message, channel: Channel) {

        println("处理业务逻辑....")
        var deliveryTag = message.messageProperties.deliveryTag
        try {
            // 抛出异常
            1/0
            // 3. 如果消息处理成功, 则签收
            channel.basicAck(deliveryTag, true)
        } catch (e: Exception) {
            // 4. 如果消息处理失败,则拒绝签收,broker重新发送给consumer
            // deliveryTag: 当前消息的tag
            // multiple: true 签收当前消息前面的所有消息
            // requeue: 重回队列
            channel.basicNack(deliveryTag,true,true)
        }
    }
```

#### spring失败重试

> 当消费者出现异常后,消息会不断requeue(重新入队)到队列,再重新发送给消费者,然后再次异常,再次requeue,无限循环,导致mq的消息处理飙升,带来不必要的压力
> 因此可以采用spring的retry机制,在异常时利用本地重试,而不是无限制的requeue到mq队列

``` yaml
spring:
  rabbitmq:
    listener:
      simple:
        acknowledge-mode: manual
        retry:
          enabled: true  # 开启消费者失败重试
          initial-interval: 1000  # 初次的失败等待时长为1秒
          multiplier: 2     # 下次失败的等待时长倍数,下次等待时长 = multiplier * last-interval
          max-attempts: 3   # 最大重试次数
          stateless: true   # true为无状态;false有状态,如果业务中包含事务,这里改为false

```

#### 失败消息处理策略

>在开启重试模式后，重试次数耗尽，如果消息依然失败，则需要有MessageRecoverer:接口来处理，它包含三种不同的实现

- RejectAndDontRequeueRecoverer:重试耗尽后，直接reject,丢弃消息。默认就是这种方式
- ImmediateRequeueMessageRecoverer:重试耗尽后，返回nack,消息重新入队
- RepublishMessageRecoverer:重试耗尽后，将失败消息投递到指定的交换机

``` kotlin
@Bean
    fun messageRecover(rabbitTemplate: RabbitTemplate):MessageRecoverer{
        return  RepublishMessageRecoverer(rabbitTemplate,"exchange","route_key")
    }
```

### 消费端限流

#### 限流

`Consumer` 限流机制

1. 确保ack机制为手动确认
2. 配置 `perfetch: 1` 表示消费者每次从mq拉取一条消息来消费,确认签收后,才会继续拉下一条消息

``` yaml
spring:
  rabbitmq:
    listener:
      simple:
        acknowledge-mode: manual
        prefetch: 2
```

#### 并发

`concurrency`消费端的监听个数（既`@RabbitListener`开启几个线程去处理数据）

``` kotlin
// 两个线程
@RabbitListener(queues = "limitingQueue",concurrency = "2")
// 最小并发数是5，10代表最大并发
@RabbitListener(queues = "limitingQueue",concurrency = "5-10")
```

### TTL

> RabbitMQ可以对消息设置过期时间,也可以对整个队列(Queue)设置过期时间

- 对整个队列设置过期时间

``` kotlin
    // arguments 队列参数数组
    // Argument  队列单数   name:属性值 value:值  type:值类型
    // x-message-ttl 过期时间, 值为毫秒,type 为 Long 
    @RabbitListener(
        bindings = [QueueBinding(
            value = Queue(value = "ttl_queue",
                arguments = [Argument(name = "x-message-ttl",value="10000", type = "java.lang.Long")]),
            exchange = Exchange(value = "ttl_exchange", type = "topic"),
            key = ["ttl.*"]
        )]
    )
    fun ttlListenerQueue(user: User, message: Message, channel: Channel) {
        ...
    }
```

- 对消息设置过期时间

``` kotlin
convertAndSend("ttl_exchange","ttl.haha",user) {
    // 消息后处理回调 给meesage对象设置过期时间为5000毫秒
    it.messageProperties.expiration = "5000"
    return@convertAndSend it
  }
```

::: warning
如果设置了消息的过期时间,也设置了队列的过期时间,它以时间短的为准.

如果触发队列过期时间,消息过期立刻就会被移除.

如果是消息中设置的过期时间,只有在队列顶端,才会去判断是否过期(移除掉)

:::

### 死信队列

>死信队列: Dead Letter Exchange(死信交换机) 当消息成为 Dead message后,可以被重新发送到另一个交换机,这个交换机就是DLX.

#### 消息成为死信的三种情况

1. 队列消息长度到达限制；
2. 消费者拒接消费消息，`basicNack/basicReject`,并且不把消息重新放入原目标队列，`requeue=false`;
3. 原队列存在消息过期设置，消息到达超时时间未被消费：

#### 基本使用

1. 声明死信交换机

``` kotlin
@RabbitListener(
  bindings = [QueueBinding(
    value = Queue(value = "queue_dlx"),
    exchange = Exchange(value = "exchange_dlx", type = "topic"),
    key = ["dlx.*"]
  )]
)
fun queueDlx(user: User, message: Message, channel: Channel) {
    println(user)
    println("死信交换机消费了...")
    channel.basicAck(message.messageProperties.deliveryTag, true)
}
```

2. 声明正常交换机

``` kotlin
@RabbitListener(
  bindings = [QueueBinding(
    value = Queue(
      value = "test_queue",
      arguments = [
        // 死信交换机名称
        Argument(name = "x-dead-letter-exchange", value = "exchange_dlx"),
        // 发给死信交换机的路由键
        Argument(name = "x-dead-letter-routing-key", value = "dlx.hehe"),
        Argument(name = "x-message-ttl", value = "10000", type = "java.lang.Integer"),
        Argument(name = "x-max-length", value = "10", type = "java.lang.Integer")]
    ),
    exchange = Exchange(value = "test_exchange", type = "topic"),
    key = ["test.dxl.*"]
  )]
)
fun testQueue(user: User, message: Message, channel: Channel) {
    println(user)
    println("正常交换机消费了...")
    channel.basicReject(message.messageProperties.deliveryTag, false)
    println("正常交换机拒绝了...")
}
```

当消息成为死信后,如果该队列绑定了死信交换机,则消息会被死信交换机重新路由到死信队列

### 延迟队列

::: warning
如果使用在消息属性上设置 TTL 的方式，消息可能并不会按时“死亡”，因为 RabbitMQ 只会检查第一个消息是否过期，如果过期则丢到死信队列，如果第一个消息的延时时长很长，而第二个消息的延时时长很短，第二个消息并不会优先得到执行。
引入 `Rabbitmq` 插件实现在消息粒度上的 TTL，并使其在设置的 TTL 时间及时死亡，设计成一个通用的延时队列。
:::

1. 安装插件

[github下载直达](https://github.com/rabbitmq/rabbitmq-delayed-message-exchange/releases)

2. 安装插件

``` shell
# 拷贝插件
docker cp /opt/soft-ware/rabbitmq_delayed_message_exchange-3.9.0.ez  rabbitmq:/opt/rabbitmq/plugins/

# 进入容器内
docker exec -it rabbitmq bash

# 查看插件列表
rabbitmq-plugins list 

# 开启插件支持 
rabbitmq-plugins enable rabbitmq_delayed_message_exchange

# 退出容器
ctrl + p +q

# 重启容器
docker restart rabbitmq
```

3. 查看控制台
进入`rabbitmq`控制台页面，查看`exchange`类型，如果出现`x-delayed-message` 则安装成功!
![安装成功](https://cdn.azhiyuan.com.cn/markdown/img/2023/01/17/20230117154047.png)

- 消费者

``` kotlin
 @RabbitListener(bindings = [QueueBinding(
        value = Queue(value = "delay_queue"),
        // 指定交换机类型为 x-delayed-message
        // x-delayed-type 指定交换机路由类型
        exchange = Exchange(value = "delay_Exchange", delayed = "true", arguments =[Argument(name = "x-delayed-type", value = "topic")] ),
        key = ["delay.*"]
    )])
    fun delayListener(map: Map<String,Any>,message: Message, channel: Channel) {
        println(map)
        channel.basicAck(message.messageProperties.deliveryTag,true)
    }
```

- 生产者

``` kotlin
 @GetMapping("/{message}/{delaytime}")
    fun testSend(@PathVariable message:String,@PathVariable delaytime:Int ): String {
        var map = mapOf("message" to message, "delaytime" to delaytime)
        rabbitTemplate.convertAndSend("delay_Exchange","delay.haha",map) {
            // 设置延迟时间
            it.messageProperties.delay=delaytime
            return@convertAndSend it
        }
        return "发送成功"
    }
```

- 注意:这种方式会触发returnCallback失败

可通过以下方法判断是否是延迟消息

``` kotlin
rabbitTemplate.setReturnsCallback {
     if(it.message.messageProperties.receivedDelay>0){
         println("延迟消息")
     }
```

### RabbitMQ日志

RabbitMQ默认日志存放路径：var/log/rabbitmq/rabbit@xxx.log
日志包含了RabbitMQ的版本号、Erlang的版本号、RabbitMQ服务节点名称、cookie的hash值、
RabbitMQ配置文件地址、内存限制、磁盘限制、默认账户guest的创建以及权限配置等等。

### 消息追踪

#### Firehose

firehose的机制是将生产者投递给rabbitmg的消息，rabbitmg投递给消费者的消息按照指定的格式发送到默认的exchange.上。这个默认的exchange的名称为amq.rabbitmg.trace,它是一个topic类型的exchange。发送到这个exchange.上的消息的routing key为publish.exchangename和deliver.queuename 其中exchangename和queuename为实际exchange和queue的名称，分别对应生产者投递到exchange的消息，和消费者从queue上获取的消息。

注意：打开trace会影响消息写入功能，适当打开后请关闭。

`rabbitmgctl trace on`:开启Firehose命令

`rabbitmgctl trace off`:关闭Firehose命令

#### rabbitmq_tracing

启用插件：`rabbitmq-plugins enable rabbitmq_tracing`
![](https://cdn.azhiyuan.com.cn/markdown/img/2023/01/17/20230117182837.png)
在此处添加 `trace` 进行监控

## RabbitMQ应用问题

### 消息可靠性保障

![](https://cdn.azhiyuan.com.cn/markdown/img/2023/01/17/20230117183604.png)

### 消息幂等性处理

![](https://cdn.azhiyuan.com.cn/markdown/img/2023/01/17/20230117184910.png)

### 惰性队列
>
>从RabbitMQ的3.6.0版本开始，就增加了Lazy Queues的概念，也就是惰性队列。

- 接收到消息后直接存入磁盘而非内存
- 消费者要消费消息时才会从磁盘中读取并加载到内存
- 支持数百万条的消息存储

#### 基于命令行设置lazy-queue

而要设置一个队列为惰性队列，只需要在声明队列时，指定x-queue-mode属性为lazy即可。可以通过命令行将一个运行中的队列修改为惰性队列：

```sh
rabbitmqctl set_policy Lazy "^lazy-queue$" '{"queue-mode":"lazy"}' --apply-to queues  
```

命令解读：

- `rabbitmqctl` ：RabbitMQ的命令行工具
- `set_policy` ：添加一个策略
- `Lazy` ：策略名称，可以自定义
- `"^lazy-queue$"` ：用正则表达式匹配队列的名字
- `'{"queue-mode":"lazy"}'` ：设置队列模式为lazy模式
- `--apply-to queues`：策略的作用对象，是所有的队列

### 基于注解声明LazyQueue

``` kotlin
@RabbitListener(bindings = [QueueBinding(
        value = Queue(value = "delay_queue"),
        exchange = Exchange(value = "delay_Exchange", delayed = "true",
            arguments =[Argument(name = "x-queue-mode", value = "lazy")] ),
        key = ["delay.*"]
    )])
    fun delayListener(map: Map<String,Any>,message: Message, channel: Channel) {
       ...
    }
```

## RabbitMQ集群搭建

>RabbitMQ的是基于Erlang语言编写，而Erlang又是一个面向并发的语言，天然支持集群模式。RabbitMQ的集群有两种模式

- **普通集群**：是一种分布式集群，将队列分散到集群的各个节点，从而提高整个集群的并发能力。

- **镜像集群**：是一种主从集群，普通集群的基础上，添加了主从备份功能，提高集群的数据可用性。

镜像集群虽然支持主从，但主从同步并不是强一致的，某些情况下可能有数据丢失的风险。因此在RabbitMQ的3.8版本以后，推出了新的功能：**仲裁队列**来代替镜像集群，底层采用Raft协议确保主从的数据一致性。

### 普通集群

#### 集群结构和特征

普通集群，或者叫标准集群（classic cluster），具备下列特征：

- 会在集群的各个节点间共享部分数据，包括：交换机、队列元信息。不包含队列中的消息。
- 当访问集群某节点时，如果队列不在该节点，会从数据所在节点传递到当前节点并返回
- 队列所在节点宕机，队列中的消息就会丢失

结构如图：

![image-20210718220843323](https://cdn.azhiyuan.com.cn/markdown/img/2023/01/17/20230117202928.png)

### 镜像集群

#### 集群结构和特征

镜像集群：本质是主从模式，具备下面的特征：

- 交换机、队列、队列中的消息会在各个mq的镜像节点之间同步备份。
- 创建队列的节点被称为该队列的**主节点，**备份到的其它节点叫做该队列的**镜像**节点。
- 一个队列的主节点可能是另一个队列的镜像节点
- 所有操作都是主节点完成，然后同步给镜像节点
- 主宕机后，镜像节点会替代成新的主

结构如图：

![image-20210718221039542](https://cdn.azhiyuan.com.cn/markdown/img/2023/01/17/20230117202926.png)

### 仲裁队列

#### 集群特征

仲裁队列：仲裁队列是3.8版本以后才有的新功能，用来替代镜像队列，具备下列特征：

- 与镜像队列一样，都是主从模式，支持主从数据同步
- 使用非常简单，没有复杂的配置
- 主从同步基于Raft协议，强一致

#### Java代码创建仲裁队列

```java
@Bean
public Queue quorumQueue() {
    return QueueBuilder
        .durable("quorum.queue") // 持久化
        .quorum() // 仲裁队列
        .build();
}
```

### SpringAMQP连接MQ集群

注意，这里用address来代替host、port方式

```java
spring:
  rabbitmq:
    addresses: 192.168.150.105:8071, 192.168.150.105:8072, 192.168.150.105:8073
    username: guest
    password: guest
    virtual-host: /
```

## 常见问题

### 控制台

#### Management API returned status code 500

``` shell
因为是使用docker 容器安装的，所有需要进入容器
docker exec -it rabbitmq /bin/bash

进入目录
cd /etc/rabbitmq/conf.d/

执行命令
echo management_agent.disable_metrics_collector = false > management_agent.disable_metrics_collector.conf

退出容器
exit

重启rabbitmq
docker restart rabbitmq


```
