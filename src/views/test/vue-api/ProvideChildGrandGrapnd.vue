<template>
  <div>
    <div>孙孙组件</div>
    <div>user:{{ (user as User).user }}</div>
    <el-button type="primary" @click="clickHandler">updateUser</el-button>
  </div>
</template>

<script setup lang="ts">
interface User {
  user: {
    [key:string]: any
  }
  updateUser: () => void
}
import { inject } from 'vue';
import { SymbUser } from '@/symbols';
const user = inject(SymbUser);
console.log('injected:user=====');
console.log(user);
const clickHandler = () => {
  console.log('孙孙组件按钮被点击');
  (user as User).updateUser()
};
</script>

<style scoped></style>
