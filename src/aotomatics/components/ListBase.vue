<template>
    <div class="list-base-wrapper">
        <div>123</div>
        <FormBase class="search-block"></FormBase>
        <div class="display-block">
            <slot name="ahead"></slot>
            <slot name="table"></slot>
        </div>

    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, reactive, inject, onBeforeMount } from 'vue';
import { Page } from '../Page';
import FormBase from './FormBase.vue';
import { provide } from 'vue';[]

const baseOptions = inject('baseOptions')
const page = new Page(baseOptions)
provide('page', page )
onBeforeMount(page.query)

</script>

<style scoped lang="scss">
.list-base-wrapper {

    .search-block {}

    .display-block {}

}
</style>