<script setup lang="ts">
import { ref } from 'vue'
const result = ref(null)
let worker: any = null

const startWorker = () => {
  // worker = new Worker('./worker.js')
  worker = new Worker('http://localhost:5173/workers/index.js')

  // 监听从 Worker 发送的消息
  worker.onmessage = (event: any) => {
    result.value = event.data
    worker.terminate() // 终止 Worker
  }
  const data = {
    nodes: [{
      x:-1432.444890398273
    }],
    edges: [],
    // f:function () {
    //   console.log(5)
    // }
  }
  // 向 Worker 发送消息
  worker.postMessage({data}) // 传递数据给 Worker
}
</script>

<template>
  <h1>worker</h1>
  <button @click="startWorker">Start Worker</button>
  <p v-if="result !== null">Result: {{ result }}</p>
</template>