<script setup lang="ts">
import { logoutApi } from '@/apis/user'
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
const { $reset } = userStore
const logout = async () => {
  await logoutApi()
  $reset()
  localStorage.removeItem('token')
}
</script>

<template>
  <el-button @click="logout" type="primary">退出</el-button>
</template>
<style scoped lang="scss"></style>
