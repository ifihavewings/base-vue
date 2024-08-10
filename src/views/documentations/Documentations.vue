<script setup lang="ts" ></script>

<template>
    <div>
        <router-link class="link" to="/documentations/templateSyntax">TemplateSyntax</router-link>
        <router-link class="link" to="/documentations/directives">Directives</router-link>
    </div>
    <router-view></router-view>
</template>

<style lang="scss" scoped>
.link:not(:last-child) {
    margin-right: 5px
}
</style>