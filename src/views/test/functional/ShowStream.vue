<template>
  <img style="width:500px;height: 500px" :src="src" />
  <!-- <embed style="width:500px;height: 500px" :src="src" /> -->
</template>
<script lang="ts" setup>
import { reactive, ref, onMounted } from 'vue'
import {showStream} from "../../../apis/upload.api"
const src = ref('')
const getFile = async () => {
    try {
        
        const response = await showStream()
              
    } catch (error) {
        console.log('response ============================')
        console.log(error)
        console.log('response.data===============================')
        console.log(error.data)
        const url = window.URL.createObjectURL(new Blob([error.data]))
        src.value = url
    }
}
onMounted(getFile)
</script>
