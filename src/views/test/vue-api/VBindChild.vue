<template>
  <div>name: {{ name }}, age: {{ age }}, gender: {{ gender }}, hobby: {{ hobby }}</div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
interface IProps {
  name: string
  age: number
  gender: string
  hobby: Array<string>
}

const props = defineProps<IProps>()
console.log(props)
</script>

<style scoped></style>
