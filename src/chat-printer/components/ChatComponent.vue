<template>
  <div class="chat-container">
    <!-- 聊天内容区域 -->
    <div class="chat-box" ref="chatBox">
      <div v-for="(message, index) in messages" :key="index" class="message">
        <div v-html="message.content"></div>
      </div>
    </div>

    <!-- 输入框和发送按钮 -->
    <div class="input-area">
      <textarea
        v-model="userInput"
        placeholder="输入消息..."
        @keyup.enter="sendMessage"
        ref="textInput"
      ></textarea>
      <button @click="sendMessage">发送</button>
    </div>
  </div>
</template>

<script>
import { ref, nextTick, onMounted } from 'vue';
import { marked } from 'marked';

export default {
  name: 'ChatComponent',
  setup() {
    const userInput = ref(''); // 用户输入的消息
    const messages = ref([]); // 保存聊天消息
    const typingIndex = ref(0); // 当前字符索引
    const isTyping = ref(false); // 是否正在打字

    const chatBox = ref(null);
    const textInput = ref(null);

    // 打字机效果的逻辑
    const addMessageWithTypingEffect = (messageContent) => {
      const newMessage = {
        content: '',
        isTyping: true,
      };
      messages.value.push(newMessage);

      const htmlContent = marked(messageContent);
      typingIndex.value = 0;

      // 模拟打字机效果，每隔一定时间逐字显示
      const interval = setInterval(() => {
        if (typingIndex.value < htmlContent.length) {
          newMessage.content += htmlContent[typingIndex.value];
          typingIndex.value++;
        } else {
          newMessage.isTyping = false;
          clearInterval(interval);
          simulateBotResponse(); // 模拟机器人响应
        }
      }, 30); // 控制打字速度
    };

    // 发送消息
    const sendMessage = () => {
      if (userInput.value.trim()) {
        addMessageWithTypingEffect(userInput.value);
        userInput.value = ''; // 清空输入框
        scrollToBottom(); // 发送后自动滚动到最新消息
      }
    };

    // 模拟机器人响应
    const simulateBotResponse = () => {
      const botMessage = "这是一条模拟机器人响应的消息。";
      setTimeout(() => {
        addMessageWithTypingEffect(botMessage);
        scrollToBottom(); // 机器人消息发送完后滚动到底部
      }, 1000); // 机器人响应延迟1秒
    };

    // 自动滚动到底部
    const scrollToBottom = () => {
      nextTick(() => {
        if (chatBox.value) {
          chatBox.value.scrollTop = chatBox.value.scrollHeight;
        }
      });
    };

    // 初始化聚焦输入框
    onMounted(() => {
      textInput.value?.focus();
    });

    return {
      userInput,
      messages,
      sendMessage,
      scrollToBottom,
      chatBox,
      textInput,
    };
  },
};
</script>

<style scoped>
.chat-container {
  max-width: 600px;
  margin: 20px auto;
  font-family: Arial, sans-serif;
  position: relative;
}

.chat-box {
  height: 400px;
  overflow-y: auto;
  background-color: #f9f9f9;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 10px;
}

.message {
  margin-bottom: 10px;
  padding: 5px;
}

.input-area {
  display: flex;
  gap: 10px;
}

textarea {
  flex: 1;
  height: 50px;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ddd;
  outline: none;
  font-size: 16px;
}

button {
  padding: 10px;
  background-color: #0366d6;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background-color: #0348a0;
}

/* 打字机效果的光标 */
.message::after {
  content: '|';
  animation: blink 1s step-start infinite;
  color: #0366d6;
  font-weight: bold;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
