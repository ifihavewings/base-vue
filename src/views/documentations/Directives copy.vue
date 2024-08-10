<script setup lang="ts">
import { onMounted } from 'vue'

const mountedTrigger = () => {}
onMounted(mountedTrigger)
</script>
<template>
  <div>
    <br />
    Modifiers are special postfixes denoted by a dot, which indicate that a directive should be bound in some special way
    changes.
  </div>
</template>

<style lang="scss" scoped>
.bold {
  font-weight: bold;
}
</style>
