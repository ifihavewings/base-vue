<template>
  <div class="zoom-wrapper" :style="style" @mouseover="zoomIn" @mouseleave="zoomOut">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const { scale } = defineProps({
  scale: {
    type: Object,
    default: () => ({
      x: 1.2,
      y: 1.2
    })
  }
})
const style = ref('')
const zoomIn = () => {
  style.value = `transform: scale(${scale.x}, ${scale.y})`
}
const zoomOut = () => {
  style.value = ``
}
</script>

<style scoped>
.zoom-wrapper {
  transition: transform 0.5s ease;
}
</style>
