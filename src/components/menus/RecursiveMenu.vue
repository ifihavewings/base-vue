<template>
  <ul class="menu-ul">
    <li class="menu-li" v-for="menuItem in menuData" :key="menuItem.id">
      {{ menuItem.name }}
      <RecursiveMenu class="menu-ul-re" :menuData="menuItem.children" v-if="menuItem.children" />
    </li>
  </ul>
</template>

<script setup lang="ts">
defineProps(['menuData'])
</script>

<style lang="scss" scoped>
.menu-ul {
  display: flex;
  .menu-li {
    cursor: pointer;
    padding: 10px 10px 10px 20px;
    background-color: var(--bg1);
    &:hover {
      background-color: var(--bg3);
    }
  }
}
.menu-li {
  position: relative;
  .menu-ul {
    display: none;
  }
  &:hover > .menu-ul {
    display: block;
    position: absolute;
    z-index: 100;
    top: 36px;
    left: 0;
  }
}
.menu-li > .menu-ul {
  display: none;
}
</style>
