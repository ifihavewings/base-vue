<script setup lang="ts">
import { defineModel } from 'vue';
console.log(defineModel)
const props = defineProps({
    modelValue: {
        type: Number,
        default: 0
    }
})

</script>
<template>
  <div>parent bound v-model is: {{ modelValue }}</div>
  <el-input type="number" @input="$emit('update:modelValue', Number($event))"></el-input>
  <el-button @click="$emit('update:modelValue', 10)">子组件更改model</el-button>
</template>