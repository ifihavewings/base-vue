<template>
  <div>
    <h1>slot:</h1>
    <SlotChild>
      <template v-slot:first>
        <h1 style="font-size: 20px;margin-bottom: 20px;">这是标题</h1>
      </template>
      <template #second>
        <h1 style="padding-bottom: 10px;">这是副标题</h1>
      </template>
      <template #forth="{count}">
        <h1 style="padding-bottom: 10px;">
            <div>name: {{ count.age }}, age: {{ count.age }}</div>
            <div>wife: {{ count.wife.name }}</div>
            <div>son: {{ count.wife.son.name }}</div>
        </h1>
      </template>
      <template #third>
        <p style="font-size: 12px;margin-bottom: 12px;">
          3这里是一些正文3这里是一些正文3这里是一些正文3这里是一些正文3这里是一些正文3这里是一些正文3这里是一些正文3这里是一些正文3这里是一些正文3这里是一些正文3这里是一些正文3这里是一些正文。3这里是一些正文
        </p>
      </template>
      <template #default>
        <p style="font-size: 12px;"> 这里是一些简单的说明。</p>
       </template>
    </SlotChild>
  </div>
</template>

<script setup lang="ts">
import SlotChild from "./SlotChild.vue";
</script>

<style scoped></style>
