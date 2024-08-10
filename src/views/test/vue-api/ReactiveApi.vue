<script setup lang="ts">
import { reactive, watch } from 'vue'
import useHighlight from '@/hooks/useHighlight';
import { useRoute } from 'vue-router';
useHighlight()

const route = useRoute()

watch(() => route.matched, () => {
  console.log('====================================');
  console.log(route.matched);
  console.log('====================================');
}, {immediate: true})
const data = reactive({
  name: '张三',
  age: 30,
  salary: 10000,
  skills: ['JavaScript', 'HTML', 'CSS']
})

const changeAge = () => {
  data.age++
}
const changeSalary = () => {
  data.salary += 1000
}
const changeSkills = () => {
  data.skills.push('Vue.js')
}
const changeAllProperty = () => {
  Object.assign(data, { age: 29, salary: 50000, skills: ['ppp', 'aaa', 'sss', 'Vueddd'] })
  console.log('data')
  console.log(data)
}
</script>

<template>
  <h1>name: {{ data.name }}</h1>
  <div>age: {{ data.age }}</div>
  <div>salary: {{ data.salary }}</div>
  <div>skills: {{ data.skills }}</div>
  <el-button @click="changeAge" type="primary">age++</el-button>
  <el-button @click="changeSalary" type="primary">salary++</el-button>
  <el-button @click="changeSkills" type="primary">skills-change</el-button>
  <el-button @click="changeAllProperty" type="primary">skills-change</el-button>
  <pre>
        <code class="language-javascript">
            import { reactive } from 'vue'

            const data = reactive({
                name: '张三',
                age: 30,
                salary: 10000,
                skills: ['JavaScript', 'HTML', 'CSS']
            })

            const changeAge = () => {
                data.age++
            }
            const changeSalary = () => {
                data.salary += 1000
            }
            const changeSkills = () => {
                data.skills.push('Vue.js')
            }
            const changeAllProperty = () => {
                Object.assign(data, { age: 29, salary: 50000, skills: ['ppp', 'aaa', 'sss', 'Vueddd'] })
                console.log('data')
                console.log(data)
            }
        </code>
    </pre>
</template>
