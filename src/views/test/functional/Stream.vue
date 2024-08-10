<template>
    <h1>hello stream</h1>
    <!-- <img width="400" height="400" :src="src" alt="" srcset=""> -->
    <iframe :src="src" width="400" height="400"></iframe>
</template>

<script lang="ts" setup>
import {ref, onMounted} from "vue"
import {stream }from "@/apis/download.api"

const src = ref("")

const getFile = async () => {
    try {
        const response = await stream()
        console.log(response)
    } catch (error) {
        console.log(error)
        const url = window.URL.createObjectURL(new Blob([error.data], {type: 'application/pdf'}))
        // const url = window.URL.createObjectURL(new Blob([error.data, {type: 'application/pdf'}]))
        console.log(url)
        src.value = url
        const a = document.createElement('a')
        a.href=url
        a.download= "2sss.pdf"
        a.click()

        // let blob = new Blob([error.data], {type:"application/pdf"}) // { type: "application/octet-stream;charset=utf-8" }
        // let iframe = document.createElement('iframe')
        // let href = window.URL.createObjectURL(blob)
        // iframe.src = href
        // iframe.width='500'
        // iframe.height='500'
        // iframe.style.position='absolute'
        // iframe.style.top='0'
        // iframe.style.backgroundColor = '#fff'
        // document.body.appendChild(iframe)
    }
}
onMounted(getFile)
</script>