<template>
  <el-upload
    ref="uploadRef"
    action="/api/v1/upload/formidable"
    :headers="headers"
    method="post"
    multiple
    :file-list="fileList"
    class="upload-demo"
    :on-error="errorHandler"
  >
    <template #trigger>
      <el-button type="primary">select file</el-button>
    </template>



   
  </el-upload>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus';
const uploadRef = ref()
const fileList = ref([])
const headers = reactive({
  Authorization: localStorage.getItem('token')
})
const errorHandler = (err: any, file: any, fileList: any) => {
  ElMessage.error(err.message)
}
</script>
