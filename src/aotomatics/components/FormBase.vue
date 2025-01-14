<template>
    <div>
        <el-form>
            <el-row>
                <el-col :span="8">
                    <el-form-item v-for="(item, index) in baseOptions.form.elements" :key="index"
                        v-bind="item.formItemAttrs">
                        <component :is="formElementMap[item.type]" v-model="baseOptions.form.model[item.key]"
                            v-bind="item.attrs" :placeholder="getPlaceholder(item)">
                            <el-option 
                                v-for="option in item?.option?.data || []" 
                                :key="option[option.valueKey]"
                                :value="item[option.valueKey]" 
                                :label="option.labelKey">
                            </el-option>
                        </component>
                    </el-form-item>
                </el-col>
                <el-col v-if="true" :span="8">
                    <el-button @click="search">查询</el-button>
                    <el-button @click="reset">重置</el-button>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>

<script lang="ts" setup>

import { inject } from "vue";
import { formElementMap, getPlaceholder } from "./util"
const baseOptions = inject("baseOptions")
const page = inject('page')
const search = () => {
    page.options.list.query()
}
const reset = () => {

}
</script>