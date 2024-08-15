<script setup lang="ts">
import { onMounted, ref } from 'vue'
const refa = ref({
  a: 1,
  b: {
    b1: 'b1',
    b2: 2,
    b3: [1, 2, 3],
    b4: {
      b11: 1,
      b12: 'b12',
      b13: [4, 5, 6],
      b14: {
        b111: '1',
        b112: 1,
        b113: 'b12',
        b114: [4, 5, 6]
      }
    }
  },
  c: [
    1,
    'c1',
    {
      c1: 1,
      c2: [
        {
          c11: 1,
          c12: [
            'b',
            {
              c11: 'c11'
            }
          ]
        }
      ]
    }
  ]
})

onMounted(() => {
  console.log('refa =======================')
  console.log(refa)


})

const test1 = () => {
  refa.value.c[0] = 100
}
const test2 = () => {
    refa.value.b.b4.b14.b114.push(9999)
}
</script>
<template>
  <div>
    <p>mutate refa.value.c[0]: {{ refa.c[0] }} <el-button @click="test1">refa.value.c[0] = 100</el-button></p>
    <p>{{ refa.b.b4.b14.b114 }} <el-button @click="test2">refa.value.b.b4.b14.b114.push(9999)</el-button> </p>
    <div>
      Top-level imports, variables and functions declared in `script setup` are automatically usable
      in the template of the same component.
    </div>
  </div>
</template>
