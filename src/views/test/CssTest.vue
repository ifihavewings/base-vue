<script setup lang="ts">
const changeColor = () => {
    const root = document.documentElement;
    root.style.setProperty('--primary-color', 'blue');
}
</script>

<template>
    <div>
        <h1>使用 :root 变量</h1>
        <div>
            <el-button @click="changeColor" type="primary">变色</el-button>
        </div>
        <ul>
            <li class="li1">abcdefgh</li>
            <li class="li2">abcdefgh</li>
        </ul>
        <hr />
    </div>
</template>
<style scoped lang="scss">
.li1 {
    color: var(--primary-color);
}
.li2 {
    color: var(--primary-color1);
}
</style>
