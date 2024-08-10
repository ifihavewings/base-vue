<script setup lang="ts">
import { onMounted } from 'vue';


const mountedTrigger = () => {

}
onMounted(mountedTrigger)
</script>
<template>
  <div>
    <br>
    <strong class="bold">usage of config.globaleProperties</strong>
    <br>
    <br>
    <p>1. Properties attached to the global object can be used globally within the template.</p>
    <br>
    <h5>this system({{ systemInfo.name }}) is at version {{ systemInfo.version }}, auhthored by {{systemInfo.author}}</h5>
    <br>
    <p>2. the window obj is attached to the global object, so that we can use it in template</p>
    <br>
    <el-button @click="window.alert(1)">test global window </el-button>
  </div>
</template>

<style lang="scss" scoped>
.bold {
    font-weight: bold;
}
</style>
