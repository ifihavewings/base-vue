<template>
  <el-form
    :model="formManager.formData"
    :rules="formManager.rules"
    ref="formRef"
    :label-position="labelPosition"
    :label-width="labelWidth"
    :inline="inline"
    :disabled="disabled"
  >
    <template>
      <el-form-item
        v-for="field in formConfig"
        :label="field.label"
        :prop="field.prop"
        :key="field.prop"
      >
        <component
          :is="getComponentType(field.type)"
          v-model="formManager.formData[field.prop]"
          v-bind="getComponentProps(field)"
          placeholder="a"
        />
      </el-form-item>
    </template>

    <!-- 表单操作按钮 -->
    <el-form-item>
      <el-button type="primary" @click="handleSubmit">提交</el-button>
      <el-button @click="formManager.resetForm">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { SubmitController } from '@/utils/SubmitController'
import { ref, onMounted } from 'vue'

const props = defineProps({
  formManager: {
    type: Object,
    required: true
  },
  formConfig: {
    type: Array,
    required: true
  },
  labelPosition: {
    type: String,
    default: 'right'
  },
  labelWidth: {
    type: String,
    default: '120px'
  },
  inline: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const formRef = ref()

onMounted(() => {
  props.formManager.setFormRef(formRef.value)
})

/**
 * 根据表单字段类型返回对应的组件名称
 */
const getComponentType = (type) => {
  switch (type) {
    case 'input':
      return 'el-input'
    case 'select':
      return 'el-select'
    case 'checkbox-group':
      return 'el-checkbox-group'
    case 'radio-group':
      return 'el-radio-group'
    case 'date-picker':
      return 'el-date-picker'
    case 'time-picker':
      return 'el-time-picker'
    case 'switch':
      return 'el-switch'
    default:
      return 'el-input' // 默认返回 input
  }
}

/**
 * 根据表单字段配置返回对应的组件属性
 */
const getComponentProps = (field) => {
  switch (field.type) {
    case 'select':
    case 'checkbox-group':
    case 'radio-group':
      return { options: field.options, multiple: field.multiple }
    case 'input':
    case 'date-picker':
    case 'time-picker':
      return {
        placeholder: field.placeholder,
        format: field.format,
        valueFormat: field.valueFormat,
        defaultValue: field.defaultValue
      }
    case 'switch':
      return {
        activeText: '开启',
        inactiveText: '关闭'
      }
    default:
      return {}
  }
}

const handleSubmit = async () => {
  try {
    const result = await props.formManager.submitForm(yourSubmitFunction, true)
    console.log('Submit result:', result)
  } catch (error) {
    console.error('Submit error:', error)
  }
}

const formManager = new SubmitController({
  validator: () => {},
  callback() {
    alert(2)
  },
  submit:() =>{}
})
</script>
