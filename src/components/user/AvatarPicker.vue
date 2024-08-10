<template>
  <div>
    <ul>
      <li v-for="item in avatarList" :key="item"><img :src="item" :key="item" /></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
// /avatar/1.png
const MAX = 20
const avatarList = reactive<string []>([])
for (let i = 1; i <= MAX; i++) {
    if(i < 20 ) {
        avatarList.push(`http://1.15.26.177/avatar/${i}.png`)
    }
}

</script>

<style scoped></style>
