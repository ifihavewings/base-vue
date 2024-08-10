<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<template>
  <el-upload
    ref="uploadRef"
    :headers="headers"
    method="post"
    :file-list="fileList"
    class="upload-demo"
    :on-error="errorHandler"
    :auto-upload="false"
    :on-change="fileChange"
  >
    <template #trigger>
      <el-button type="primary">select file</el-button>
    </template>



   
  </el-upload>
  <el-button @click="doUploadForm1">upload1</el-button>
  <el-upload
    ref="uploadRef"
<<<<<<< HEAD
=======
    multiple
>>>>>>> 776446d (form-upload)
    :headers="headers"
    method="post"
    :file-list="fileList2"
    class="upload-demo"
    :on-error="errorHandler"
    :auto-upload="false"
    :on-change="fileChange2"
<<<<<<< HEAD
    multiple
=======
>>>>>>> 776446d (form-upload)
  >
    <template #trigger>
      <el-button type="primary">select files</el-button>
    </template>



   
  </el-upload>
  <el-button @click="doUploadForm2">upload2</el-button>
</template>
<script lang="ts" setup>

import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus';
import {formUpload, formUploadFiles} from "@/apis/upload.api"


const uploadRef = ref()
const fileList = ref([])
const headers = reactive({
  Authorization: localStorage.getItem('token')
})
const errorHandler = (err: any, file: any, fileList: any) => {
  console.log(file, fileList);
  
  ElMessage.error(err.message)
}

const fileChange = (a:any) => {
  console.log(a)
  fileList.value.push(a)
  
  
}

const doUploadForm1 = async () => {
  const data = new FormData()
  data.append('hello', 'hello')
  data.append('world', 'world')
  data.append('file', fileList.value[0].raw)
  console.log(fileList)
  try {
    await formUpload(data)
    
  } catch (error) {
    console.log(error);
    
  }
  
}

const fileList2 = ref([])
const fileChange2 = (file) => {
  fileList2.value.push(file)
}
const doUploadForm2 = async() => {
  const data = new FormData()
  data.append('hello', 'hello')
  data.append('world', 'world')
  fileList2.value.forEach(file => {
    data.append("files[]",file.raw)
  })
  
  console.log(fileList)
  try {
    await formUploadFiles(data)
    
  } catch (error) {
    console.log(error);
    
  }

  
}
</script>
