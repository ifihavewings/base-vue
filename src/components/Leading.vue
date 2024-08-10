<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <RoundContainer class="round-container" v-for="item in data" :key="item.title">
    <template #header> {{ item.title }} </template>
    <ul class="ul">
      <li v-zoom v-for="[title, { alt, src, url }] in item.data" :key="url" :title="title">
        <a :href="url" target="_blank">
          <img v-if="src" :src="src" :alt="alt" />
          <strong v-else>{{ title }}</strong>
          <div class="small-text" v-if="src">{{ title }}</div>
        </a>
      </li>
    </ul>
    <template #footer> 真实尾部 </template>
  </RoundContainer>
</template>

<script setup lang="ts">
import RoundContainer from './RoundContainer.vue'
import data from './data/leading.data'
</script>

<style lang="scss" scoped>
.round-container {
  width: 80%;
  margin: 10px auto 0;
  background-color: var(--bg2rgba);
  &:hover {
    background-color: var(--bg2);
  }
  transition: all 0.5s ease-in-out;

}
.ul {
  display: flex;
  align-items: left;
  flex-direction: row;
  li {
    flex: 0 1 10%;
    text-align: center;
    a {
      display: block;
      text-decoration: none;
      width: 100%;
      height: 100%;
      img {
        height: 20px;
      }
    }
    .small-text {
      font-size: 12px;
    }
  }
}
</style>
