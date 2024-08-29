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
        style="width: 100%; height: 32px"
        :is="getComponentType(field.type)"
        v-model="innerFormConfig.formData[field.prop]"
        v-bind="field.attrs"
        :placeholder="getPlaceholder(field)"
      >
        <!-- works when >=2.6.0, recommended ✔️ not work when <2.6.0 ❌ -->
        <!-- <el-radio value="Value 1">Option 1</el-radio> -->
        <!-- works when <2.6.0, deprecated act as value when >=3.0.0 -->
        <!-- <el-radio label="Label 2 & Value 2">Option 2</el-radio> -->
        <template v-if="field.type === 'radio'">
          <template v-if="versionLessThan260">
            <el-radio
              v-for="item in field.options"
              v-bind="item.attrs"
              :key="item.value"
              :label="item.value"
              >{{ item.label }}</el-radio
            >
          </template>
          <template v-else>
            <el-radio
              v-for="item in field.options"
              v-bind="item.attrs"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </template>
        </template>
        <!-- works when >=2.6.0, recommended ✔️ value not work when <2.6.0 ❌ -->
        <!-- <el-checkbox label="Option 1" value="Value 1" /> -->
        <!-- works when <2.6.0, deprecated act as value when >=3.0.0 -->
        <!-- <el-checkbox label="Option 2 & Value 2" />        -->
        <template v-if="field.type === 'checkbox'">
          <template v-if="versionLessThan260">
            <el-checkbox
              v-for="item in field.options"
              v-bind="item.attrs"
              :key="item.value"
              :label="item.value"
              >{{ item.label }}</el-checkbox
            >
          </template>
          <template v-else>
            <el-checkbox
              v-for="item in field.options"
              v-bind="item.attrs"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </template>
        </template>
        <template v-if="field.type === 'select'">
          <el-option
            v-for="item in field.options"
            v-bind="item.attrs"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </template>
      </component>
    </el-form-item>
    <slot name="footer">
      <el-form-item>
        <el-button type="primary" @click="manager.run">提交</el-button>
        <el-button @click="innerFormConfig.resetForm">重置</el-button>
      </el-form-item>
    </slot>
    <!-- 表单操作按钮 -->
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
import { version } from 'element-plus/package.json'
import { SubmitController } from '@/utils/SubmitController'
import { cloneDeep } from 'lodash'
import { ref, onMounted, watch, computed } from 'vue'

const props = defineProps({
  formConfig: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['managerCreated', 'update:formConfig'])

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
    console.log('innerFormConfig.value', innerFormConfig.value)
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
    manager.submit()
    console.log('Submit result:')
  } catch (error) {
    console.error('Submit error:', error)
  }
}

const compareWith260 = (version: string) => {
  const referenceVersion = '2.6.0'

  const vParts = version.split('.').map(Number)
  const refParts = referenceVersion.split('.').map(Number)

  for (let i = 0; i < Math.max(vParts.length, refParts.length); i++) {
    const v = vParts[i] || 0 // 如果某个版本号部分不存在，则默认为 0
    const ref = refParts[i] || 0

    if (v > ref) {
      return 1 // version 大于 2.6.0
    }
    if (v < ref) {
      return -1 // version 小于 2.6.0
    }
  }

  return 0 // version 等于 2.6.0
}

const versionLessThan260 = computed(() => compareWith260(version) < 0)
const manager = new SubmitController({
  // A function passed as an argument should preferably not have any parameters.
  //  The SubmitController is designed to work with the validator property, whether it's a function, an object, or an array of functions and/or objects.
  // validator: { func: checkForm, args: [ruleFormRef.value] },
  validator: () => formRef.value.validate(),
  callback() {},
  submit: innerFormConfig.value.actions.submit
})

emit('managerCreated', manager)
defineExpose({ manager })
</script>
