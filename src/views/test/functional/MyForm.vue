<template>
  <div>
    <form ref="formRef">
      <input @change="changeHandler" multiple type="file" placeholder="选择文件" />
    </form>
    <ul>
        <li v-for="item in fileList" :key="item.lastModified">{{ 
            item.name + ' - ' + item.size + ' - ' + item.type + ' - ' + item.lastModified 
         }}</li>
    </ul>
    <button @click="upload">上传</button>


  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { uploadApi } from '@/apis/upload.api';

const formRef = ref(null)
const fileList = ref<FileList>()
const changeHandler = (e: any) => {
  console.log('e.target.files')
  console.log(e.target.files)
  fileList.value = e.target.files

}

const upload = () => {
    const formData = new FormData()
    Array.from(fileList.value ?? []).forEach((file:File)=> {
        formData.append('files', file)
    })
    uploadApi(formData).then(res => {
        console.log('====================================');
        console.log(res);
        console.log('====================================');
    }).catch(e => {
        console.log(e)
    })
}
</script>

<style lang="scss" scoped></style>
