<script setup lang="ts">

const props = defineProps({
  name: String,
  age: Number,
  city: String, // 假设这些属性是响应式的
  children: Array,
  wife: Object
})
const emit = defineEmits(['ageChage'])
const change = ()=> {
  emit('ageChage',1)
}
console.log('props')
console.log(props)
</script>
<template>
  <div>
    <div>
      name: {{ name }} <br />
      age: {{ age }} <br />
      city: {{ city }} <br />
      children: {{ children }} <br />
      wife: {{ wife }} <br />
    </div>
    <el-button @click="change">子change</el-button>
  </div>
</template>
