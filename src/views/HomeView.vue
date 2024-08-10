<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Leading from '@/components/Leading.vue'


const ENV = ref(null)
ENV.value = import.meta.env.VITE_APP_ENV
onMounted(() => {
  console.log(import.meta.env.VITE_APP_ENV)
})

</script>

<template>
  <main>
    <Leading />
  </main>
</template>