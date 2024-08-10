<template>
  <div>
    <iframe ref="iframeRef" src="http://localhost:5173" frameborder="0" @load="load" style="width: 100%;height:400px"></iframe>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
const iframeRef = ref()
const load = () =>{

    alert(2)
    const iframeDocument = iframeRef.value.contentDocument || iframeRef.value.contentWindow.document
    console.log('222====================================')
    console.log(iframeDocument.querySelector("body").innerHTML)
    console.log('222====================================')
    iframeDocument.querySelector("body").innerHTML = iframeDocument.querySelector("body").innerHTML.replace(/others/gi,'<span style="background:#f00">others</span>')
 
}
</script>

<style scoped></style>
