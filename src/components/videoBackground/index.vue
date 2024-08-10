<script setup lang="ts">
import { ref, onMounted } from "vue";

const autoplay = ref(false)
const videoRef = ref()
onMounted(() => {
    document.addEventListener('mousemove',() => {
        autoplay.value = true
        videoRef.value.play()
    })
})
</script>
<template>
  <div class="wrapper">
    <video ref="videoRef" loop :autoplay="autoplay" src="../../assets/vids/sea.mp4" class="vid"></video>
  </div>
</template>
<style>
.wrapper {
  width: 100vw;
  height: 100vh;
}
.vid {
  width: 100vw;
  height: 100vh;
}
</style>
