<template>
  <div class="wrapper">
    <div class="header">
      <slot name="header">{{ title }}</slot>
    </div>
    <div class="content">
      <slot></slot>
    </div>
    <!-- <div class="footer">
      <slot name="footer"></slot>
    </div> -->
  </div>
</template>

<script setup lang="ts">
const {title} = defineProps({
  title: {
    type: String,
    default: '标题'
  }
})
</script>

<style scoped>
.wrapper {
  padding: 10px;
  background: var(--bg2);
  border: 1px solid var(--bg1);
  border-radius: 4px;
  .header {
    padding-bottom: 10px;
    border-bottom: 1px solid var(--bg5);
  }
  .content {
    padding-top: 10px;
  }
  .footer {
    padding-top: 10px;
    font-size: 12px;
  }
}
</style>
