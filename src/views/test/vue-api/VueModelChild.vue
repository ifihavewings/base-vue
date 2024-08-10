<script setup lang="ts">
import { defineModel } from 'vue';
const model = defineModel('a')
console.log("model============")
console.log(model)
const childHandler = () => {
    model.value = '子组件修改了值';
}

</script>

<template>
    <div>
    <h1>======子组件 model 值==========</h1>
    <p>{{ model }}</p>
    <button type="button" @click="childHandler">子组件修改</button>
    </div>
</template>