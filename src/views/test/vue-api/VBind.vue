<template>
  <div>
    <h1>v-bind 传递一个ref响应式数</h1>
    <div>子组件通过 defineProps 接收响应式数据后， props 仍然是一个响应式对象。</div>
    <VBindChild v-bind="a" />
    <el-button @click="changeA">changeA</el-button>
    <hr />
    <VBindChildReactive v-bind="b" />
    <el-button @click="changeB">changeB</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import VBindChild from './VBindChild.vue'
import VBindChildReactive from './VBindChildReactive.vue'
const a = ref({
  name: '张三',
  age: 18,
  gender: '男',
  hobby: ['篮球', '足球', '游泳']
})
const b = reactive({
  name: 'Sven',
  age: 26,
  gender: '男',
  hobby: ['篮球', '足球', '游泳']
})
const changeA = () => {
  a.value.name = '李四'
  a.value.age = 20
  a.value.gender = '女'
  a.value.hobby[0] = '乒乓球'
  a.value.hobby[1] = '羽毛球'
  a.value.hobby[2] = '跑步'
}
const changeB = () => {
  b.name = 'Lucy'
  b.age = 22
  b.gender = '女'
  b.hobby[0] = '乒乓球'
  b.hobby[1] = '羽毛球'
  b.hobby[2] = '跑步'
}
</script>

<style scoped></style>
