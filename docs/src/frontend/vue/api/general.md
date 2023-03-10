# 通用 API

## nextTick()

> 等待下一次 DOM 更新的工具方法。

- 类型

```ts
function nextTick(callback?: () => void): Promise<void>
```

- 详细信息

  在 Vue 中更改响应式状态时，最终的 DOM 更新并不是同步生效的，而是由 Vue 将它们缓存在一个队列中，直到下一个 “tick” 才一起执行。这样是为了确保每个组件无论发生多少状态改变，都仅执行一次更新。

  `nextTick()`可以在状态改变后调用，用来等待 DOM 更新完成。可以传递一个回调函数在 DOM 更新后执行，或者 await 返回的 Promise。

- 示例

```vue
<script setup lang="ts">
import { nextTick, ref } from 'vue'

const count = ref(0)

const increment = async () => {
  count.value++

  // DOM 还未更新
  console.log(document.getElementById('counter').textContent) // 0

  await nextTick()
  // DOM 此时已经更新
  console.log(document.getElementById('counter').textContent) // 1
}
</script>

<template>
  <button id="counter" @click="increment">{{ count }}</button>
</template>
```
