<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
</script>
<template>
  <div>
    <div class="wapper">
      <RouterLink v-zoom active-class="active" class="r-l" to="/vue-api/watch">watch</RouterLink>
      <RouterLink v-zoom active-class="active" class="r-l" to="/vue-api/reactive"
        >reactive</RouterLink
      >
      <RouterLink v-zoom active-class="active" class="r-l" to="/vue-api/toRefs">toRefs</RouterLink>
      <RouterLink v-zoom active-class="active" class="r-l" to="/vue-api/computed"
        >computed</RouterLink
      >
      <RouterLink v-zoom active-class="active" class="r-l" to="/vue-api/props">props</RouterLink>
      <RouterLink v-zoom active-class="active" class="r-l" to="/vue-api/vbind">v-bind</RouterLink>
      <RouterLink v-zoom active-class="active" class="r-l" to="/vue-api/vmodel">v-model</RouterLink>
      <RouterLink v-zoom active-class="active" class="r-l" to="/vue-api/attrs">attrs</RouterLink>
      <RouterLink v-zoom active-class="active" class="r-l" to="/vue-api/slot">slot</RouterLink>
      <RouterLink v-zoom active-class="active" class="r-l" to="/vue-api/provide"
        >provide</RouterLink
      >
      <RouterLink v-zoom active-class="active" class="r-l" to="/vue-api/hooks">hooks</RouterLink>
      <RouterLink v-zoom active-class="active" class="r-l" to="/vue-api/test-reactive"
        >TestReactive</RouterLink
      >
      <RouterLink v-zoom active-class="active" class="r-l" to="/vue-api/transition"
        >transition</RouterLink
      >
      <RouterLink v-zoom active-class="active" class="r-l" to="/vue-api/directive"
        >directive</RouterLink
      >
      <RouterLink v-zoom active-class="active" class="r-l" to="/vue-api/v-model"
        >v-model 传递给子组件</RouterLink
      >
      <hr />
    </div>
    <RouterView />
  </div>
</template>
<style scoped>
.wapper {
  display: flex;
  .r-l {
    margin-right: 10px;
    text-decoration: none;
    &.active {
      font-weight: bold;
    }
  }
}
</style>
