<script setup lang="ts">
import { reactive, ref, watch, computed } from 'vue'

// 1.监听 ref 定义的“基本类型”
const a1 = ref(0)
let oldVal1 = 0
let newVal1 = 0

// newVal 和 oldVal是 a1.value 的值
// 并不是 a1 这个 ref对象
watch(a1, (newVal, oldVal) => {
  oldVal1 = oldVal
  newVal1 = newVal
  console.log('newVal:', newVal, 'oldVal', oldVal)
})
const changeA1 = () => {
  a1.value++
}

// 2.监听 ref 定义的“对象类型”，监听的是对象的引用地址
// 若修改的是对象的属性，则 newVal 和 oldVal 都是修改后的对象
// 若修改的是对象的引用地址，则 newVal都是修改后的对象，  oldVal 是未修改前的对象
// 若要深度监听，则应配置深度监听 deep: true
const a2 = ref({
  name: '张三',
  age: 18,
  height: 1.88
})
let oldVal2 = 0
let newVal2 = 0
// watch(a2, (newVal, oldVal)=>{}) 这种写法只能监听 a2.value 的引用地址的变化， 无法监听到属性值的变化
// 必须增加 deep: true 深度监听才能监听到属性值的变化
// watch(a2, (newVal, oldVal) => {
//   alert(2)
//   console.log('newVal:', newVal, 'oldVal', oldVal)
// })
watch(
  a2,
  (newVal, oldVal) => {
    console.log('newVal:', newVal, 'oldVal', oldVal)
  },
  {
    deep: true
  }
)
const changeA2 = () => {
  a2.value.name = '王五'
}
// 监听对象的引用地址变化
// 不需要增加 deep: true 深度监听也能监听到
const changeA22 = () => {
  a2.value = {
    name: '李四',
    age: 19,
    height: 1.16
  }
}

let a3 = reactive({
  name: '张三',
  age: 18,
  height: 1.88
})

watch(a3, (newVal, oldVal) => {
  console.log('newVal:', newVal, 'oldVal', oldVal)
})
const changeA3 = () => {
  a3.name = '王五'
}
const changeA33 = () => {
  Object.assign(a3, {
    name: '李四',
    age: 19,
    height: 1.16
  })
}

// 4.监听 reactive/ref 定义的“对象类型”的属性
// 属性值为基本数据类型
const a4 = reactive({
  name: '张三',
  age: 18,
  height: 1.88
})
watch(
  () => a4.name,
  (newVal, oldVal) => {
    console.log('newVal:', newVal, 'oldVal', oldVal)
  }
)

const changeA4 = () => {
  a4.name = '王五'
}

// 5.监听 reactive/ref 定义的“对象类型”的属性
// 属性值为对象类型
// 可以使用深度监听，也可以使用监听器函数
const a44 = ref({
  name: '张三',
  age: 18,
  height: 1.88,
  wife: {
    name: '李四',
    age: 19,
    height: 1.16
  }
})

watch(
  () => a44.value.name,
  (newVal, oldVal) => {
    console.log('newVal:', newVal, 'oldVal', oldVal)
  }
)

const changeA44 = () => {
  a44.value.name = '王五'
}

watch(
  () => a44.value.wife,
  (newVal, oldVal) => {
    console.log('newVal:', newVal, 'oldVal', oldVal)
  },
  {
    deep: true
  }
)

const changeA45 = () => {
  Object.assign(a44.value.wife, {
    name: '赵六',
    age: 19,
    height: 1.16
  })
}

const changeA46 = () => {
  a44.value = {
    name: '赵六',
    age: 19,
    height: 1.16,
    wife: {
      name: '钱七',
      age: 19,
      height: 1.16
    }
  }
}

// 6.监听多种数据源
const a51 = ref(1)
const a52 = ref({
  name: '张三',
  age: 18,
  height: 1.88
})
const a53 = reactive({
  name: '李四',
  age: 20,
  height: 1.66
})
watch([() => a51.value, () => a52.value.name, a53], (oldvalue, newValue) => {
  console.log('oldvalue, newValue')
  console.log(oldvalue, newValue)
})

const changeA51 = () => {
  a51.value++
}

const changeA52 = () => {
  a52.value.name += 'K'
}

const changeA53 = () => {
  a53.name += 'P'
}

const multStr = computed(() => {
  return `${a51.value} -#- ${a52.value.name} -#- ${a53.name}`
})
</script>
<template>
  <div>
    <h1>1.监听 ref 定义的“基本类型”</h1>
    a1: {{ a1 }}, oldVal1: {{ oldVal1 }}, newVal1: {{ newVal1 }}
    <el-button @click="changeA1">a1</el-button>
    <hr />
    <h1>2.监听 ref 定义的“基本类型”</h1>
    a2: {{ a2 }}, oldVal1: {{ oldVal2 }}, newVal1: {{ newVal2 }}
    <el-button @click="changeA2">a2属性更改</el-button>
    <el-button @click="changeA22">a2引用地址修改</el-button>
    <hr />
    <h1>3.监听 reactive 定义的“对象类型”</h1>
    a3: {{ a3 }}
    <el-button @click="changeA3">a3属性更改</el-button>
    <el-button @click="changeA33">a3用Object.assign</el-button>
    <hr />
    <h1>4.监听 reactive/ref 定义的“对象类型”的属性（属性可以为基本类型或者引用类型）</h1>
    a4: {{ `${JSON.stringify(a4, null, 2)}` }}, a44: {{ a44 }}
    <el-button @click="changeA4">更改 ame</el-button>
    <el-button @click="changeA44">更改name</el-button>
    <el-button @click="changeA45">更改rref老婆</el-button>
    <el-button @click="changeA46">更改reactive老婆</el-button>

    <hr />
    <h1>4.监听 ref定义的对象， reactive定义的对象， ref对象/reactive 对象的属性，中的多种</h1>

    multStr: {{ multStr }}
    <el-button @click="changeA51">a51</el-button>
    <el-button @click="changeA52">a52</el-button>
    <el-button @click="changeA53">a53</el-button>
    <hr />
  </div>
</template>
