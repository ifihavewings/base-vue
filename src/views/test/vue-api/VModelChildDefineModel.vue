<script setup lang="ts">
import { defineModel } from 'vue'
const model = defineModel()
console.log('model')
console.log(model)
// function update() {
//   model.value++
// }
</script>

<template>
  <div>parent bound v-model is: {{ model }}</div>
</template>