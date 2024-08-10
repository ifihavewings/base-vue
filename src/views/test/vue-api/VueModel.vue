<script setup lang="ts">
import { ref } from 'vue'
import  VueModelChild from './VueModelChild.vue'
const a = ref('hello')
const clickHanlder = () => {
    a.value = 'a 的值为父组件修改的， 就是看到的这行文字'
}
</script>

<template>
  <div>
    <h1>VueModelParent</h1>
    <p>a: {{ a }}</p>
    <button type="button" @click="clickHanlder">父组件修改</button>
    <VueModelChild v-model="a" />
  </div>
</template>
