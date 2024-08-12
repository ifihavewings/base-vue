<script setup lang="ts">
const props = defineOptions({
    title: {
        type: String,
        default: '标题'
    }
})
</script>

<template>
    <div>{{props.title}}</div>
</template>