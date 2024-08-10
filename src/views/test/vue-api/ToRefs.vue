<script lang="ts" setup>
import { ref, reactive, toRef, toRefs } from 'vue'
import useHighlight from '@/hooks/useHighlight'
useHighlight()
const data = reactive({
  name: '张三',
  age: 18,
  salary: 2000,
  skills: ['JavaScript', 'HTML', 'CSS']
})

const { name, age, skills } = toRefs(data)
const salary = toRef(data, 'salary')
console.log(salary)

const changeName = () => {
  name.value = '李四'
  console.log(data)
  console.log(name)
}
const changeAge = () => {
  data.age = 200
  console.log(data)
  console.log(age)
}
const changeSalary = () => {
  salary.value = 3000
  console.log(data)
  console.log(salary)
}
</script>

<template>
  <div>
    <h1>toRefs: 将 reactive 对象的每个属性转换成 ref 对象</h1>
    <div>
      <h2>reactive(data) 中的属性</h2>
      <div>name: {{ data.name }}</div>
      <div>age: {{ data.age }}</div>
      <div>salary: {{ data.salary }}</div>
      <div>skills: {{ data.skills }}</div>
    </div>
    <div>
      <h2>toRefs(data) 解构的属性</h2>
      <div>name: {{ name }}</div>
      <div>age: {{ age }}</div>
      <div>salary: {{ salary }}</div>
      <div>skills: {{ skills }}</div>
    </div>
  </div>
  <el-button type="primary" @click="changeName">更改toRefs后的名字</el-button>
  <el-button type="primary" @click="changeAge">更改reactive 对象的年龄</el-button>
  <el-button type="primary" @click="changeSalary">更改toRef 后的工资</el-button>
  <pre>
        <code class="language-javascript">
            import { ref, reactive, toRef, toRefs } from 'vue'
            const data = reactive({
                name: '张三',
                age: 18,
                salary: 2000,
                skills: ['JavaScript', 'HTML', 'CSS']
            })

            const { name, age, skills } = toRefs(data)
            const salary = toRef(data, 'salary')
            console.log(salary)

            const changeName = () => {
                name.value = '李四'
                console.log(data)
                console.log(name)
            }
            const changeAge = () => {
                data.age = 200
                console.log(data)
                console.log(age)
            }
            const changeSalary = () => {
                salary.value = 3000
                console.log(data)
                console.log(salary) 
            }
        </code>
    </pre>
</template>
