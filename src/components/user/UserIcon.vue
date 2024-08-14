<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { onClickOutside } from '@vueuse/core'
import UserLogin from './UserLogin.vue'
import UserRegister from './UserRegister.vue'
import userLogout from './userLogout.vue'
import FadeTransition from '@/components/transitions/FadeTransition.vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'

// 切换显示隐藏
const isShowDetail = ref(false)
const toggleDetailVisible = (bool: boolean) => {
  isShowDetail.value = bool
}

const userIcon = ref(null)
onClickOutside(userIcon, () => {
  toggleDetailVisible(false)
})

const toggle = () => (isShowDetail.value = !isShowDetail.value)

const userStore = useUserStore()
const { userInfo, isLogined } = storeToRefs(userStore)
const isShowLoginPopover = ref(true)
const setIsShowLoginPopover = () => {
  setTimeout(() => {
    isShowLoginPopover.value = !isShowLoginPopover.value
  })
}

const isShowLogin = computed(() => {
  return !isLogined.value && isShowLoginPopover.value
})
const isShowRegister = computed(() => {
  return !isLogined.value && !isShowLoginPopover.value
})

</script>

<template>
  <div ref="userIcon" class="user-container">
    <img
      v-if="isLogined"
      :src="'http://1.15.26.177/avatar/' + userInfo.avatar"
      @click="toggle"
      class="head-icon"
    />
    <span v-else @click="toggle" class="head-icon iconfont icon-a-morentouxiang2x"></span>
    <FadeTransition>
      <div v-if="isShowDetail"  id="userIcon" class="user-box">
        <UserLogin pId="#userIcon" @toggleAction="setIsShowLoginPopover" v-if="isShowLogin" />
        <UserRegister @toggleAction="setIsShowLoginPopover" v-if="isShowRegister" />
        <UserInfo :userInfo="userInfo" v-if="isLogined" />
        <userLogout v-if="isLogined" />
      </div>
    </FadeTransition>
  </div>
</template>

<style lang="scss" scoped>
.user-container {
  position: relative;
  .head-icon {
    width: 30px;
    height: 30px;
  }
  .user-box {
    position: absolute;
    z-index: 100;
    width: 300px;
    right: 0;
    top: 30px;
    padding: 10px;
    border-radius: 10px;
    background-color: var(--bg1);
    border: 1px solid var(--bg4);
    &:hover {
      cursor: default;
    }
    .action-buttons {
      display: flex;
      justify-content: space-evenly;
      .action-button {
        flex: 1;
        text-align: center;
        height: 20px;
        line-height: 20px;
        font-size: 12px;
        background-color: var(--bg2);
        cursor: pointer;
        &:first-child {
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
        }
        &:last-child {
          border-top-right-radius: 5px;
          border-bottom-right-radius: 4px;
        }
        &:hover {
          background-color: var(--bg4);
        }
      }
    }
  }
}
#login_container {
  width: 200px;
  height: 200px;
}
</style>
