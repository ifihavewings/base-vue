<script setup lang="ts">
import { ref,reactive } from 'vue'
const dropEndHandler = (e: DragEvent) => {
    e.preventDefault();
    isOver.value = false;
  console.log('====================================')
  console.log(e.dataTransfer?.files)
}
const isOver = ref(false)
const dragenterHander = (e:DragEvent) => {
    e.preventDefault();
    isOver.value = true;
    
}
const dragoverHandler =  (e:DragEvent) => {
    e.preventDefault();
    
}
const dragleave =  (e:DragEvent) => {
    e.preventDefault();
    isOver.value = false;
    
}

const fileList = ref<File[]>()
const inputChangeHandler = (e: Event) => {
    console.log('====================================');
    // @ts-ignore
    console.log(e.target?.files);
    // @ts-ignore
    fileList.value = e.target?.files
    console.log('====================================');
}

</script>

<template>
  <div
    @drop="dropEndHandler"
    @dragenter="dragenterHander"
    @dragover="dragoverHandler"
    @dragleave="dragleave"
    class="droppable"
    :class="{ over: isOver }"
  ><input @change="inputChangeHandler" multiple class="file-input" type="file"></div>

  <ul>
    <li v-for="item in fileList" :key="item.name">{{ item.name }}</li>
  </ul>
</template>

<style scoped>
.droppable {
  width: 100px;
  height: 100px;
  cursor: pointer;
  border-radius: 4px;
  border: 1px dashed #99d;
  &:hover {
    border: 1px solid #55d;
  }
}
.over {
    border: 1px solid #55d;
}
.file-input {
    opacity: 0;
    width: 100%;
    height: 100%;
    background: #000;
}
</style>
