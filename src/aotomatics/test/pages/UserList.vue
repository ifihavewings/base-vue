<template>
    <div>
        <ListBase></ListBase>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, provide } from 'vue';
import ListBase from '@/aotomatics/components/ListBase.vue';
import { listConfig } from './userConfs';



provide('baseOptions', listConfig)

</script>