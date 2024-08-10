<script setup lang="ts">
import { computed, ref } from 'vue'
const a = ref('a')
const b = ref('b')
const c = computed(() => a.value + b.value)

const a1 = ref('a1')
const b1 = ref('b1')
const c1 = computed({
  get() {
    return a1.value + '~' + b1.value
  },
  set(value) {
    // 这里不能修改a1和b1
    const [arr1, arr2] = value.split('~')
    a1.value = arr1
    b1.value = arr2
  }
})

const changeA = () => {
    a.value += "-ooo"
}
const changeA1 = () => {
    a1.value += "-ppp"
}
const changeC1 = () => {
    c1.value = "yyy~iii"
}
</script>
<template>
  <div>
    a: {{ a }},
    b: {{ b }},
    c: {{ c }}
  </div>
  <div>
    a1: {{ a1 }},
    b1: {{ b1 }},
    c1: {{ c1 }}
  </div>
  <el-button @click="changeA">更改a</el-button>
  <el-button @click="changeA1">更改a1</el-button>
  <el-button @click="changeC1">更改c1</el-button>
</template>
