<template>
  <el-button @click="download('1000')">download</el-button>
</template>
<script lang="ts" setup>
import { ElMessage } from 'element-plus'
import { downloadApi } from '@/apis/upload.api'
import { downloadByBlob, getFilenameFromHeader } from '@/utils'
const download = async (id?: string) => {
  try {
    const res = await downloadApi(id as string)
    const filename =  getFilenameFromHeader(res.headers)
    downloadByBlob(res.data, filename)
  } catch (error) {
    ElMessage({
      type: 'error',
      message: '下载失败'
    })
  }
}
</script>
