]<template>
  <div class="wrapper">
    <div v-for="item in chatter.chatList" :key="chatter.getUUID(item)">
      <UserSide v-if="item.source==='user'" :content="item.message"/>
      <AnswerSide v-if="item.source === 'answer'"  :content="item.message"/>
    </div>
    <TypeBox v-model="chatter.area.model.value" class="type-area" :rows="4" />
  </div>
</template>

<script setup>
import { onMounted, provide } from 'vue';
import { Chatter } from "./components/Chatter"
import UserSide from './components/UserSide.vue';
import AnswerSide from './components/AnswerSide.vue';
import TypeBox from './components/TypeBox.vue';
import axios from "axios"
import {chat}from "./service"

const chatter = new Chatter({ })
console.log(chatter)

provide('chatter', chatter)

onMounted(async () => {

  const data = await chat()
  console.log(data)


})
</script>

<style scoped>
.wrapper {
  padding: 0 0 200px 0;
  min-height: 100vh;
  width: 1200px;
  margin: 0 auto;
  background-color: #f5f5f5;

  .type-area {
    position: fixed;
    bottom: 0;
    left: 50%;
    margin-left: -600px;
    width: 1200px;
  }

}
</style>
