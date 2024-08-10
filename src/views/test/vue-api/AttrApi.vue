<template>
    <h1>attrs</h1>
  <AttrChild v-bind="{ a, b, c }" />
  <el-button @click="updateAttrs">父组件更新 attrs</el-button>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import AttrChild from './AttrChild.vue'
const a = ref({
  name: '张三',
  age: 18,
  gender: '男'
})
const b = reactive({
  name: 'lisi',
  age: 20,
  gender: 'nv'
})
const c = reactive([
  { name: '张三', age: 18, gender: '男' },
  { name: 'lisi', age: 18, gender: '男' }
])

const updateAttrs = () => {
c[0].name="hahah"
c[1].name="heihei"
}
</script>

<style scoped></style>
