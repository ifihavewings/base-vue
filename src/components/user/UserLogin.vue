<script lang="ts" setup>
import { reactive, ref, watch } from 'vue'
import { SubmitController } from '@/utils/SubmitController'
import { storeToRefs } from 'pinia'
import type { FormInstance, FormRules } from 'element-plus'
import { login as loginApi } from '@/apis/user'
import isEmail from 'validator/lib/isEmail'
import CustomForm from "@/components/form/CustomForm.vue"
// import { sameString } from '@/validaters/user'
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
const { fetchUserInfo } = userStore
const { userInfo, isLogined } = storeToRefs(userStore)

import { ElMessage, transferCheckedChangeFn } from 'element-plus'
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
  emit('toggleAction', true)
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
        if (!isEmail(value)) {
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

const checkForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return

  return formEl.validate((valid, fields) => {
    if (!valid) {
      const keys: string[] = fields ? Object.keys(fields) : []
      ElMessage({
        type: 'error',
        message: fields?.[keys[0]][0].message ?? '表单验证失败'
      })
    }
  })
}
const doCheckForm = () => checkForm(ruleFormRef.value)

const props = defineProps({
  pId: {
    type: String,
    default: ''
  }
})

const submit = async () =>
  loginApi(ruleForm, {
    isProcess: false
  })
const sumbmitHandler = (res: any) => {
  const token = res.headers.authorization
  localStorage.setItem('token', token)
  fetchUserInfo()
}
const submitController = new SubmitController({
  loadingOption: {
    target: props.pId, // 指定目标容器
  },
  // A function passed as an argument should preferably not have any parameters.
  //  The SubmitController is designed to work with the validator property, whether it's a function, an object, or an array of functions and/or objects.
  // validator: { func: checkForm, args: [ruleFormRef.value] },
  validator: doCheckForm,
  callback: sumbmitHandler,
  submit
})
const login = () => {
  submitController.run()
}

</script>
<template>
  <div id="login">
    <el-form
      :disabled="submitController.isSubmiting"
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
      :size="formSize"
      status-icon
    >
    <CustomForm>  
      
    </CustomForm>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" />
      </el-form-item>
    </el-form>
    <div class="button-wrapper">
      <el-button :disabled="submitController.isSubmiting.value"  @click="login" type="primary"
        >登录1</el-button
      >
      <el-button @click="toggleAction" link>去注册</el-button>
    </div>
  </div>
</template>

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
