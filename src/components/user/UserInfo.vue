<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const { userInfo } = storeToRefs(userStore)

const a = {
  id: 3,
  username: 'qqqaz',
  password: '',
  email: 'ewwe@cm.com',
  create_time: '2024-02-26T18:04:29.000Z',
  phone: null,
  avatar: null,
  gender: null,
  age: null,
  iat: 1709197984,
  exp: 1709284384
}
</script>

<template>
  <div>
    {{ userInfo.username }}
  </div>
</template>
<style lang="scss" scoped>
.user-prop-item {
  display: flex;
  .key {
    width: 120px;
    text-align: right;
  }

  .value {
    flex: 1 1 auto;
    text-align: left;
  }
}
</style>
