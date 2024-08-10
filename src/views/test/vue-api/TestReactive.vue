<script setup lang="ts">
import { ref } from 'vue';
import TestReactiveChild from './TestReactiveChild.vue';
const bigObject = ref({
    name: 'John',
    age: 30,
    city: 'New York',
    children: [
        { name: 'Alice', age: 5 },
        { name: 'Bob', age: 8 }
    ],
    wife: { name: 'Emily', age: 28}
});

const change = () => { 
    // 子组件会跟着变
    bigObject.value.name = 'Tom';
    bigObject.value.wife = {
        name: 'Emy',
        age: 66
    }
 }
 const ageChage = (age: number) => {
    bigObject.value.age += age;
 }
</script>
<template>
    <div>
        name: {{ bigObject.name }} <br>
        age: {{ bigObject.age }} <br>
        city: {{ bigObject.city }} <br>
        children: {{ bigObject.children }} <br>
        wife: {{ bigObject.wife }} <br>
        <el-button @click="change">change父</el-button>
        <hr>
        <TestReactiveChild @ageChage="ageChage" v-bind="bigObject" />
    </div>
</template>