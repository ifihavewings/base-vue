<template>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
    :size="formSize"
    status-icon
  >
    <el-form-item label="用户名" prop="username">
      <el-input v-model="ruleForm.username" />
    </el-form-item>
    <!-- <el-form-item label="手机号码" prop="phone">
      <AvatarPicker />
    </el-form-item> -->
    <el-form-item label="电子邮箱" prop="email">
      <el-input v-model="ruleForm.email" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input type="password" v-model="ruleForm.password" />
    </el-form-item>
    <el-form-item label="确认密码" prop="passwordRepeat">
      <el-input type="password" v-model="ruleForm.passwordRepeat" />
    </el-form-item>
  </el-form>
  <div class="button-wrapper">
    <el-button :disabled="submitController.isSubmiting" @click="register" type="primary">注册</el-button>
    <el-button @click="toggleAction" link>去登录</el-button>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { register as registerApi } from '@/apis/user'
// import { sameString } from '@/validaters/user'
import * as validator from 'validator'
import AvatarPicker from '@/components/user/AvatarPicker.vue'
import { ElMessage } from 'element-plus'
import { SubmitController } from '@/utils/SubmitController'
interface RuleForm {
  username: string
  password: string
  passwordRepeat: string
  email: string
}

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  username: '',
  password: '',
  passwordRepeat: '',
  email: ''
})

const emit = defineEmits(['toggleAction'])
const toggleAction = () => {
  emit('toggleAction', false)
}

const rules = reactive<FormRules<RuleForm>>({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 4, max: 8, message: '用户名长度为4~8个字符', trigger: 'blur' }
  ],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    {
      validator: (rule, value, callback) => {
        if (!validator.isEmail(value)) {
          callback(new Error('请输入正确的邮箱地址'))
        } else {
          callback()
        }
      },
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 8, message: '密码长度为6~8个字符', trigger: 'blur' }
    // {
    //   validator: sameString(ruleForm.passwordRepeat), trigger: 'blur'
    // }
  ],
  passwordRepeat: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 8, message: '密码长度为6~8个字符', trigger: 'blur' }
    // {
    //   validator: sameString(ruleForm.password), trigger: 'blur'
    // }
  ]
})

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

const checkForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  return formEl.validate((valid, fields) => {
    if (!valid) {
      const keys = Object.keys(fields ?? {})
      ElMessage({
        type: 'error',
        message: fields?.[keys[0]][0].message
      })
    }
  })
}
const doCheckForm = () => checkForm(ruleFormRef.value)

const submit = async () => {
  if (ruleForm.password !== ruleForm.passwordRepeat) {
    return ElMessage({
      type: 'error',
      message: '两次密码不一致'
    })
  }
  await registerApi(ruleForm)
}
const props = defineProps({
  pId: {
    type: String,
    default: ''
  }
})
const submitController = new SubmitController({
  loadingOption: {
    target: props.pId, // 指定目标容器
    text: 'loading...', // 显示的文本
    spinner: 'el-icon-loading', // 自定义加载图标
    background: 'rgba(255, 255, 255, 0.3)' // 背景颜色
  },
  // A function passed as an argument should preferably not have any parameters.
  //  The SubmitController is designed to work with the validator property, whether it's a function, an object, or an array of functions and/or objects.
  // validator: { func: checkForm, args: [ruleFormRef.value] },
  validator: doCheckForm,
  callback() {
    alert(2)
  },
  submit
})
const register = async () => {
  submitController.run()
}
</script>

<style scoped lang="scss">
.button-wrapper {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  :deep(.el-form-item__content) {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
