<template>
  <div>
  c: {{ $attrs }}
  </div>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue'
const attrs = useAttrs()
console.log('==================孙组件==================');
console.log(attrs);
console.log('==================孙组件==================');
</script>

<style scoped></style>
