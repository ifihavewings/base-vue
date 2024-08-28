<template>
  <div class="form-wrapper">
    <CustomForm :formConfig="formConfig" ref="formRef"></CustomForm>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance,  FormRules } from 'element-plus'
import { register as registerApi } from '@/apis/user'
// import { sameString } from '@/validaters/user'
import * as validator from 'validator'
import { ElMessage } from 'element-plus'
import { SubmitController } from '@/utils/SubmitController'
import CustomForm from './components/CustomForm.vue'
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

const formData = ref({
  username: '',
  password: '',
  passwordRepeat: '',
  gender: '',
  email: '',
  hobby: [],
  birthDate: '',
  taste: []
})
const formItems = ref([
  {
    prop: 'username',
    type: 'input',
    label: '用户名',
    attrs: {
      clearable: true
    },
  },
  {
    prop: 'password',
    type: 'input',
    attrs: {
      type: 'password'
    },
    label: '密码'
  },
  {
    prop: 'passwordRepeat',
    type: 'input',
    attrs: {
      type: 'password'
    },
    label: '重复密码'
  },
  {
    prop: 'email',
    type: 'input',
    label: '邮箱'
  },
  {
    prop: 'gender',
    type: 'radio',
    label: '性别',
    options: [
      {
        label: 'f',
        value: 1
      },
      {
        label: 'm',
        value: 0
      },
  ]
  },
  {
    prop: 'hobby',
    type: 'checkbox',
    label: '兴趣爱好',
    options: [
      {
        label: '游泳',
        value: 1,
        // pass
        // attrs: {
        //   disabled: true
        // }
      },
      {
        label: '钓鱼',
        value: 2,
      },
    ],
    // pass
    attrs: {
      // disabled: true,
      // multiple: true,
    },
  },
  {
    prop: 'taste',
    type: 'select',
    label: '饮食偏好',
    options: [
      {
        label: '豆腐脑',
        value: 1,
        // pass
        // attrs: {
        //   disabled: true
        // }
      },
      {
        label: '油条',
        value: 2,
      },
    ],
    // pass
    // attrs: {
    //   disabled: true,
    //   multiple: true,
    // },
  },
  {
    prop: 'birthDate',
    type: 'date-picker',
    label: '出生日期',
    attrs: {
      type: 'daterange',
      valueFormat: 'YYYY-MM-DD',
      format: 'YYYY-MM-DD'
    }
  }
])
const formConfig = ref({
  formData,
  formItems,
  rules
})

</script>

<style scoped lang="scss">
.form-wrapper {
  width: 60%;
  height: auto;
  padding: 20px;
  border-radius: 4px;
  margin: 0 auto;
}
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
