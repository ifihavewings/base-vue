<template>
  <div class="video-player">
    <video :width="`${parseInt(width)}px`" ref="video" :src="videoSrc" class="custom-video"></video>
    <div class="controls">
      <button @click="togglePlay">{{ isPlaying ? 'Pause' : 'Play' }}</button>
      <input type="range" min="0" max="100" v-model="volume" @input="adjustVolume" />
      <input type="range" min="0" max="100" v-model="currentTime" @input="seek" />
      <button @click="toggleFullScreen">Full Screen</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const a = defineProps({
  videoSrc: {
    type: String,
    required: true
  },
  width: {
    type: String || Number,
    default: '300px'
  }
})
alert(a.videoSrc)

const isPlaying = ref(false)
const volume = ref(100)
const currentTime = ref(0)

const video = ref<HTMLVideoElement>()

const togglePlay = () => {
  isPlaying.value = !isPlaying.value
  if (video.value instanceof HTMLVideoElement) {
    if (isPlaying.value) {
      video.value.play()
    } else {
      video.value.pause()
    }
  }
}

const adjustVolume = () => {
  if (video.value instanceof HTMLVideoElement) {
    video.value.volume = volume.value / 100
  }
}

const seek = () => {
  if (video.value instanceof HTMLVideoElement) {
    video.value.currentTime = (currentTime.value / 100) * video.value.duration
  }
}

const toggleFullScreen = () => {
  if (video.value instanceof HTMLVideoElement) {
    if (video.value.requestFullscreen) {
      video.value.requestFullscreen()
      //@ts-ignore
    } else if (video.value.mozRequestFullScreen) {
      //@ts-ignore
      video.value.mozRequestFullScreen()
      //@ts-ignore
    } else if (video.value.webkitRequestFullscreen) {
      //@ts-ignore
      video.value.webkitRequestFullscreen()
      //@ts-ignore
    } else if (video.value.msRequestFullscreen) {
      //@ts-ignore
      video.value.msRequestFullscreen()
    }
  }
}
</script>

<style scoped>
.video-player {
  position: relative;
  width: 100%;
}

.custom-video {
  width: 100%;
  height: auto;
}

.controls {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  padding: 5px;
}

.controls button {
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
}

.controls input[type='range'] {
  -webkit-appearance: none;
  width: 100px;
  height: 3px;
  background: white;
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s;
  margin: 0 10px;
}

.controls input[type='range']:hover {
  opacity: 1;
}

.controls input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 10px;
  height: 10px;
  background: white;
  cursor: pointer;
  border-radius: 50%;
}

.controls input[type='range']::-moz-range-thumb {
  width: 10px;
  height: 10px;
  background: white;
  cursor: pointer;
  border-radius: 50%;
}

.controls input[type='range']::-webkit-slider-runnable-track {
  width: 100%;
  height: 3px;
  cursor: pointer;
  background: white;
}
</style>
