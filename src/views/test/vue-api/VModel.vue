<template>
    <div>
        <h1>v-model</h1>
        <div>v-model 是v-bind 和 emit('update:xxx') 的语法糖</div>
        <VModelChild v-model="count" />
        <el-button @click="changeCount">父组件更改 count --</el-button>
        <hr>
        <VModelChildDefineModel v-model="num" />
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import VModelChild from "./VModelChild.vue";
import VModelChildDefineModel from "./VModelChildDefineModel.vue";
const count = ref(0);
const changeCount = () => {
    count.value--
}

// ===============  VModelChildDefineModel  ==================
const num = ref(0);



</script>

<style scoped>

</style>