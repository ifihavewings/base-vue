<template>
  <div>x: {{ x }}, y: {{ y }}</div>
  <ul>
    <li v-for="item in res" :key="item.id">
        <div>{{ item.title }} - {{ item.id }} - {{ item.userId }}</div>
        <div>{{ item.body }}</div>
        <hr>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useMouse } from '@/hooks/useMouse'
import { useList } from './hooks/useList'
const { x, y } = useMouse()
const { res, err } = useList({ url: 'https://jsonplaceholder.typicode.com/posts' })
console.log('res, err')
console.log(res, err)
</script>

<style lang="scss" scoped></style>
