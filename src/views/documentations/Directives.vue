<script setup lang="ts">
import { onMounted } from 'vue'

const mountedTrigger = () => {}
onMounted(mountedTrigger)
</script>
<template>
  <div>
    <br />
    A directive's job is to reactively apply updates to the DOM when the value of its expression
    changes.
  </div>
</template>

<style lang="scss" scoped>
.bold {
  font-weight: bold;
}
</style>
