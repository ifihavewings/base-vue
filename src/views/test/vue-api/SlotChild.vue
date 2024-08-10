<template>
  <div>
    <slot name="first"> 标题 </slot>
    <slot name="second"> 副标题 </slot>
    <slot name="forth" :count="count"> 作者信息</slot>
    <slot name="third"> 内容</slot>
    <slot> 简单说明 </slot>
    <el-button @click="change">wife</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const count = ref({
  name: '张三',
  age: 18,
  gender: '男',
  wife: {
    name: '李四',
    age: 18,
    gender: '女',
    son: {
      name: '王五',
      age: 18,
      gender: '男'
    }
  }
})
const change = () => {  
  count.value.wife.name = 'lisisi'
}
</script>

<style scoped></style>
