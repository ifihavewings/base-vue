<script setup lang="ts">
import { ref, reactive } from 'vue'
import PropsChild from './PropsChild.vue'
const a = ref(1)
const b = reactive({ count: 1 })
const c = ref([
  {
    name: 'Alice',
    age: 20,
    gender: 'female',
    height: 1.75
  },
  {
    name: 'Bob',
    age: 25,
    gender: 'male',
    height: 1.75
  }
])

const updateA = (val: number) => {
  a.value += val
}

const updateB = (val: number) => {
  b.count += val
}

const changeC = (newValue: string) => {
  c.value.forEach((item) => (item.name = newValue))
}
const updateHeight = (value: number) => {
  c.value.forEach((item) => (item.height += value))
}
</script>
<template>
  <h1>props & emit</h1>
  <PropsChild
    :a="a"
    :b="b"
    :c="c"
    :updateHeight="updateHeight"
    @update:a="updateA"
    @update:b="updateB"
    @changeC="changeC"
  />
</template>
