<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Hls from 'hls.js'
import Player from 'xgplayer'
import 'xgplayer/dist/index.min.css'
import MyVideo from './MyVideo.vue'
let player = null
const initPlayer = () => {
  // player = new Player({
  //   id: 'mse',
  //   url: 'http://1.15.26.177/videos/1.mp4',
  //   height: '500px',
  //   width: '800px',
  //   autoplay: true,
  // })
  const videoUrl = 'http://localhost:3000/videos/output.m3u8'

  const player = new Player({
    id: 'videoContainer',
    url: videoUrl,
    playsinline: true,
    playbackRate: [0.5, 0.75, 1, 1.5, 2],
    defaultPlaybackRate: 1
    // whitelist: ['https://example.com']
    // 其他配置项...
  })

  player.on('ready', () => {
    console.log('播放器已准备就绪')
  })

  player.on('play', () => {
    console.log('视频已开始播放')
  })

  player.on('pause', () => {
    console.log('视频已暂停')
  })

  player.on('ended', () => {
    console.log('视频播放结束')
  })

  player.on('error', (e) => {
    console.error('播放器错误:', e)
  })
}

const videoPlayer = ref<HTMLVideoElement>()
const initHls = () => {
  if (Hls.isSupported()) {
    const hls = new Hls()
    const video = videoPlayer.value

    hls.loadSource('http://localhost:3000/videos/output.m3u8')
    if(video) {
      hls.attachMedia(video)
    }

    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      video && video.play()
    })
  } else if (videoPlayer.value?.canPlayType('application/vnd.apple.mpegurl')) {
    videoPlayer.value.src = 'http://localhost:3000/videos/output.m3u8'
    videoPlayer.value.addEventListener('loadedmetadata', () => {
      videoPlayer.value?.play()
    })
  }
}
// onMounted(initPlayer)
onMounted(initHls)
</script>

<template>
  <div id="videoContainer"></div>
  <video width="300px" draggable="false" ref="videoPlayer" controls></video>
  <MyVideo width="500" videoSrc="http://1.15.26.177/videos/1.mp4" />
</template>

<style>
/* 隐藏视频控件中的拖拽功能 */
/* video::-webkit-media-controls-timeline {
  display: none;
} */

/* 禁用视频控件中的拖拽功能 */
video::-webkit-media-controls-panel {
  -webkit-user-select: none;
  pointer-events: none;
}
</style>
