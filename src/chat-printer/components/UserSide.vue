<template>
    <div class="user-message-wrapper">
        <div class="message-box">
            <p class="message">{{ props.content }}</p>
        </div>

        <div class="icon"></div>
    </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
    content: {
        type: String,
        required: true
    }
});
</script>

<style>
.user-message-wrapper {
    margin-right: 10px;
    margin-bottom: 20px;
    display: flex;             /* 使用 flex 布局 */
    justify-content: flex-end; /* 使整个容器内容靠右对齐 */
    align-items: center;       /* 垂直居中对齐 */
}

.message-box {
    background: #d6ebff;
    border-radius: 2px;
    padding: 15px;
    text-align: right;         /* 文字右对齐 */
    word-wrap: break-word;     /* 防止文本溢出 */
    margin-right: 10px;        /* 给文本和图标之间留些空隙 */
}

.message {
    display: inline-block;    /* 根据内容自适应宽度 */
}

.icon {
    height: 50px;
    width: 50px;
    background-color: aqua;
    border-radius: 50%;
    flex-shrink: 0; /* 防止图标被压缩 */
}
</style>
