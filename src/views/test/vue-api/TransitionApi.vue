<template>
  <div>
    <button @click="toggleVisibility">Toggle Visibility</button>
    <div v-show="isVisible" class="custom-fade">
      <!-- 内容 -->
      <div>1000</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const isVisible = ref(false)

const toggleVisibility = () => {
  isVisible.value = !isVisible.value
}

watch(isVisible, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    const targetElement = document.querySelector('.custom-fade')
    targetElement?.classList.add(newValue ? 'custom-fade-enter' : 'custom-fade-leave')
    targetElement?.addEventListener('animationend', () => {
      targetElement?.classList.remove('custom-fade-enter', 'custom-fade-leave')
    })
  }
})
</script>

<style scoped lang="scss">
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-out {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(20px);
  }
}

.custom-fade {
  animation-duration: 0.5s;
  animation-fill-mode: both;
}

.custom-fade-enter {
  animation-name: fade-in;
}

.custom-fade-leave {
  animation-name: fade-out;
}
</style>
