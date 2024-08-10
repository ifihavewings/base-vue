<template>
  <div>
    <h2>父组件 user</h2>
    <div>user: {{ user }}</div>
    <ProvideChild />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { provide } from 'vue'
import { SymbUser } from '@/symbols'
import ProvideChild from './ProvideChild.vue'

const user = ref({
  name: '张三',
  age: 30,
  hobbies: ['篮球', '足球', '游泳'],
  friends: [
    { name: '李四', age: 35, hobbies: ['1', '2'] },
    { name: '王五', age: 40, hobbies: ['3', '4']}
  ]
})
const updateUser = () => {
  user.value.name += '1'
  user.value.age += 1
  user.value.hobbies.push('1')
  user.value.friends[0].name += '1'
  user.value.friends[0].age += 1
  user.value.friends[0].hobbies.push('1')
  user.value.friends[1].name += '1'
  user.value.friends[1].age += 1
}


provide(SymbUser, {
  user,
  updateUser,
})
</script>
