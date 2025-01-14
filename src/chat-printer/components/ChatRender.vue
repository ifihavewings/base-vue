<template>
    <div class="markdown-body" v-html="currentContent"></div>
  </template>
  
  <script>
  import { marked } from 'marked';
  import { ref, watch, onMounted } from 'vue';
  
  export default {
    name: 'MarkdownRenderer',
    props: {
      content: {
        type: String,
        required: true,
      },
      typingSpeed: {
        type: Number,
        default: 50, // 打印机效果的字符速度（毫秒/字符）
      },
    },
    setup(props) {
      const fullContent = ref(''); // 完整 HTML 内容
      const currentContent = ref(''); // 当前渲染的内容
      const typingIndex = ref(0); // 当前字符的索引
  
      // 使用 marked 转换为 HTML
      const convertToHtml = () => {
        fullContent.value = marked(props.content);
      };
  
      // 打印机效果逻辑
      const startTypingEffect = () => {
        currentContent.value = ''; // 重置当前内容
        typingIndex.value = 0;
  
        const interval = setInterval(() => {
          if (typingIndex.value < fullContent.value.length) {
            currentContent.value += fullContent.value[typingIndex.value];
            typingIndex.value++;
          } else {
            clearInterval(interval); // 打字完成，清除定时器
          }
        }, props.typingSpeed);
      };
  
      // 监听内容变化
      watch(
        () => props.content,
        () => {
          convertToHtml();
          startTypingEffect();
        },
        { immediate: true }
      );
  
      // 初始化
      onMounted(() => {
        convertToHtml();
        startTypingEffect();
      });
  
      return {
        currentContent,
      };
    },
  };
  </script>
  
  <style>
  /* 可选：添加打字机效果的光标样式 */
  .markdown-body::after {
    content: '|';
    animation: blink 1s step-start infinite;
    color: #0366d6; /* 光标颜色 */
    font-weight: bold;
  }
  
  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
  </style>
  