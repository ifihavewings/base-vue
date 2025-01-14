<template>
    <el-input v-model="model" type="textarea" placeholder="Please input" v-bind="$attrs" @keydown="enterHandler" />
</template>

<script setup>
import { ref, defineEmits, computed, defineProps, inject } from 'vue'
import { ElMessage } from 'element-plus';
const chatter = inject('chatter')
const emit = defineEmits(['update:modelValue'])
const enterHandler = (event) => {
  console.log(event)
  if (event.keyCode === 13) {
    event.preventDefault(); // 阻止换行
    chatter.send(model.value)
  }
}
const props = defineProps({
  modelValue: {
    type: String,
    required: true
  }
})
const model = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

</script>