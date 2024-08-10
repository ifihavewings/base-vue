<script setup lang="ts">
import { RouterView } from 'vue-router'
import { type IMenuItem } from '@/components/menus/types'
import RecursiveMenu from '@/components/menus/RecursiveMenu.vue'
import FadeTransition from '@/components/transitions/FadeTransition.vue'

const menuData: IMenuItem[] = [
  {
    id: 1,
    name: 'Home',
    children: [
      {
        id: 2,
        name: 'About'
      },
      {
        id: 3,
        name: 'Contact',
        children: [
          {
            id: 4,
            name: 'Location'
          }
        ]
      }
    ]
  },
  {
    id: 5,
    name: 'Services',
    children: [
      {
        id: 6,
        name: 'Service 1'
      },
      {
        id: 7,
        name: 'Service 2'
      }
    ]
  }
]
</script>

<template>
  <div>
    <div class="menu--wrapper">
      <RecursiveMenu :menuData="menuData" />
    </div>
    <FadeTransition>
      <RouterView />
    </FadeTransition>
  </div>
</template>
<style lang="scss" scoped>
// * {
//   color: $primary-color;
// }
.menu--wrapper {
  background-color: antiquewhite;
}
</style>
