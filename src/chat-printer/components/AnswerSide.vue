<template>
    <div class="answer-message-wrapper">
        <div class="icon"></div>
        <p v-html="props.content" class="message markdown-body"></p>
    </div>
</template>

<script setup>
import "github-markdown-css/github-markdown.css";
import 'prismjs/themes/prism.css';  // 或者你可以选择不同的主题
import './style.scss'
import { defineProps } from "vue"
const props = defineProps({
    content: {
        type: String,
        requiredequired: true
    }
})
</script>
<style>
.answer-message-wrapper {
    margin-bottom: 20px;
    display: flex;
    .message {
        flex: 1
    }
    .icon {
        margin-left: 10px;
        height: 50px;
        background-color: aqua;
        border-radius: 50%;
        width: 50px;
    }
    .message {
        word-wrap: break-word;
    }
}
</style>