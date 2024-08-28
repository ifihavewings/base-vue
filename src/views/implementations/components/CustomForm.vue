<template>
  <el-form
    label-width="120px"
    :model="innerFormConfig.formData"
    :rules="innerFormConfig.rules"
    ref="formRef"
  >
    <el-form-item
      v-for="field in innerFormConfig.formItems"
      :label="field.label"
      :prop="field.prop"
      :key="field.prop"
    >
      <component
        id="formItem"
        style="width: 100%; height: 32px"
        :is="getComponentType(field.type)"
        v-model="innerFormConfig.formData[field.prop]"
        v-bind="field.attrs"
        :placeholder="getPlaceholder(field)"
      >

          <template v-if="field.type === 'radio'">
            <el-radio v-for="i in 3" :key="i" value="i">{{i}}</el-radio>
          </template>
          <template v-if="field.type === 'checkbox'">
            <el-checkbox v-for="i in 3" :key="i" value="i">{{i}}</el-checkbox>
          </template>
          
      </component>
    </el-form-item>

    <!-- 表单操作按钮 -->
    <el-form-item v-if="innerFormConfig.footer">
      <el-button type="primary" @click="handleSubmit">提交</el-button>
      <el-button @click="innerFormConfig.resetForm">重置</el-button>
    </el-form-item>
    <el-form-item v-else>
      <el-button type="primary" @click="handleSubmit">提交</el-button>
      <el-button @click="innerFormConfig.resetForm">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import {
  ElInput,
  ElSelect,
  ElCheckboxGroup,
  ElRadioGroup,
  ElDatePicker,
  ElTimePicker,
  ElSwitch
} from 'element-plus'
import { SubmitController } from '@/utils/SubmitController'
import { cloneDeep } from 'lodash'
import { ref, onMounted, watch } from 'vue'

// 3.4 才有
const props = defineProps({
  formConfig: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['create', 'update:formConfig'])

const innerFormConfig = ref({})
watch(
  () => props.formConfig,
  () => {
    Object.assign(innerFormConfig.value, props.formConfig)
  },
  { deep: true, immediate: true }
)
watch(
  () => innerFormConfig.value,
  () => {
    emit('update:formConfig', innerFormConfig.value)
  },
  { deep: true, immediate: true }
)

const formRef = ref()

onMounted(() => {
  console.log(props.formConfig)
})

/**
 * 根据表单字段类型返回对应的组件名称
 */
const getComponentType = (type: string) => {
  switch (type) {
    case 'input':
      return ElInput
    case 'select':
      return ElSelect
    case 'checkbox':
      return ElCheckboxGroup
    case 'radio':
      return ElRadioGroup
    case 'date-picker':
      return ElDatePicker
    case 'time-picker':
      return ElTimePicker
    case 'switch':
      return ElSwitch
    default:
      console.warn(`未知组件类型: ${type}`)
      return ElInput
  }
}


const getPlaceholder = (field: Record<string, any>) => {
  switch (field.type) {
    case 'input':
      return `请输入${field.label}`
    case 'select':
    case 'date-picker':
    case 'time-picker':
    case 'checkbox-group':
    case 'radio-group':
      return `请选择${field.label}`
    default:
      break
  }
}

const handleSubmit = async () => {
  try {
    // const result = await props.formManager.submitForm(yourSubmitFunction, true)
    console.log('Submit result:')
  } catch (error) {
    console.error('Submit error:', error)
  }
}

// emit('create', formManager)
// defineExpose({ formManager })
</script>
