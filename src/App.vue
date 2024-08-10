<script setup lang="ts">
import './assets/styles/theme.css'
import {useUser} from "@/hooks/useUser"
import Layout from '@/components/layout/Layout.vue'
import Ws from '@/utils/websocket.js'
const ws = new Ws('ws://localhost:3001')

document.addEventListener('websocketMessage', (event) => {
  console.log(event)
})

const {token} = useUser()

</script>
<script lang="ts">
export default {
  name: 'XXX'
}
</script>
<template>
  <el-config-provider size="small">
    <Layout />
  </el-config-provider>
</template>
<style>
#app {
  min-height: 100vh;
}
</style>
