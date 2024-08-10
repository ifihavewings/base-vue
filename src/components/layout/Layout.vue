<script setup lang="ts">
import { RouterView } from 'vue-router'
import { type IMenuItem } from '@/components/menus/types'
import RecursiveMenu from '@/components/menus/RecursiveMenu.vue'
import SearchBar from '@/components/searchBar/SearchBar.vue'
import UserIcon from '@/components/user/UserIcon.vue'
</script>

<template>
  <div>
    <UserIcon class="user-icon"></UserIcon>
    <div>
      <SearchBar
        :customStyle="{
          padding: '50px 0',
          margin: '0 auto',
          width: '60%'
        }"
      />
    </div>
    <RouterView />
  </div>
</template>
<style lang="scss" scoped>
* {
  color: $primary-color;
}
.menu--wrapper {
  background-color: antiquewhite;
}
.user-icon {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
}
</style>
