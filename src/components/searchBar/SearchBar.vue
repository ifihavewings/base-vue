<script setup lang="ts">
import { onMounted, ref, defineProps, nextTick } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { kebabCase } from 'element-plus/es/utils/strings.mjs';

defineProps({
  customStyle: {
    type: Object,
    default: () => ({})
  }
})
const inputValue = ref('')
const selectValue = ref('google')
const optionMap = new Map([
  ['baidu', 'https://www.baidu.com/s?wd='],
  ['google', 'https://www.google.com/search?q='],
  ['wikipedia', 'https://zh.wikipedia.org/wiki/'],
  ['chatGPT', 'https://chat.openai.com/?q='],
  ['npmjs', 'https://www.npmjs.com/search?q='],
  ['github', 'https://github.com/search?type=repositories&q='],
  ['stackoverflow', 'https://stackoverflow.com/search?q='],
  ['juejin', 'https://juejin.cn/search?query='],
  ['csdn', 'https://so.csdn.net/so/search?q='],
])
const goSearch = () => {
  if (!inputValue.value) {
    return ElMessage({
      type: 'warning',
      message: '请输入检索词'
    })
  }
  const preUrl = optionMap.get(selectValue.value)
  window.open(`${preUrl}${inputValue.value}`)
}

const inputRef = ref()
onMounted(() => {
  nextTick(() => {
    inputRef.value.focus()
  })
})
</script>

<template>
  <div :style="customStyle" class="mt-4">
    <el-input
      size="large"
      ref="inputRef"
      @keyup.enter="goSearch"
      v-model="inputValue"
      placeholder="请输入关键词"
      class="input-with-select"
      clearable
    >
      <template #prepend>
        <el-select size="large" v-model="selectValue" placeholder="请选择" style="width: 115px">
          <el-option v-for="[k] in optionMap" :key="k" :label="k" :value="k">
            <p><span :class="{ inactive: selectValue !== k }"> * </span>{{ k }}</p>
          </el-option>
        </el-select>
      </template>
      <template #append>
        <el-button @click="goSearch" :icon="Search" />
      </template>
    </el-input>
  </div>
</template>

<style scoped>
.inactive {
  color: #fff;
}
</style>
