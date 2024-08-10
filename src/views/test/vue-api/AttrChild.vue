<template>
  <div>
  a: {{ a }}, b: {{ b }}, c: {{ $attrs }}
  <hr>
  <h1>孙组件</h1>
  <AttrGrandChild v-bind="$attrs" />
  </div>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue'
import AttrGrandChild from './AttrGrandChild.vue';
const { a, b } = defineProps({
  a: {
    type: Object,
    default: () => ({})
  },
  b: {
    type: Object,
    default: () => ({})
  },
})
const attrs = useAttrs()
console.log('====================================');
console.log(a,b,attrs);
console.log('====================================');
</script>

<style scoped></style>
