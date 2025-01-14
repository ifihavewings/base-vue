<script setup lang="ts">
import './assets/styles/theme.css'
import {useUser} from "@/hooks/useUser"
import Layout from '@/components/layout/Layout.vue'
import Ws from '@/utils/websocket.js'
const ws = new Ws('ws://localhost:3001')

document.addEventListener('websocketMessage', (event) => {
  console.log(event)
})

class Person  {
  public name = 'sv'
  public source;

  private age = 19

  protected gender = 'male'

  public add(x:number,y:number) :number{
    return x+y;
  }
}
const p1 = new Person()
console.log(p1.name)
p1.gender = 'f'
p1.age = 20
console.log(p1.source)
console.log(p1.age)
console.log(p1.gender)
console.log(p1.add(1,2))


const {token} = useUser()

</script>
<script lang="ts">
export default {
  name: 'XXX'
}
</script>
<template>
  <el-config-provider size="small">
    <Layout />
  </el-config-provider>
</template>
<style>
#app {
  min-height: 100vh;
}
</style>
