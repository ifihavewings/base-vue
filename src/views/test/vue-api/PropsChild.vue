<script setup lang="ts">
const props = defineProps({
  a: {
    type: Number,
    default: 0
  },
  b: {
    type: Object,
    default: () => ({})
  },
  c: {
    type: Array,
    default: () => []
  },
  updateHeight: {   
    type: Function,
    default: ()=> () => {}
  }
})
// props 是一个 reactive 对象， 并且会对 ref 对象进行自动解包
console.log(props)



const emit = defineEmits(['update:a', 'update:b', 'changeC'])
const changeA = () => {
  emit('update:a', 100)
}
const changeC = () => {
  emit('changeC', '王六六')
}
</script>
<template>
  <div class="about">
    <h1>子组件</h1>
    <p>a: {{ a }}</p>
    <p>b: {{ b }}</p>
    <p>c: {{ c }}</p>
    <el-button @click="changeA">changeA</el-button>
    <el-button @click="$emit('update:b', 5)">changeB</el-button>
    <el-button @click="changeC">changeC</el-button>
    <el-button @click="props.updateHeight(0.01)">changeHeight</el-button>
  </div>
</template>
