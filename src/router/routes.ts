export default [
    {
        path: '/axios-test',
        name: 'axiosTest',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/test/AxiosTest.vue')
    },
    {
        path: '/css-test',
        name: 'cssTest',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/test/CssTest.vue')
    },
    {
        path: '/worker-test',
        name: 'workerTest',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/test/WorkerTest.vue')
    },
    {
        path: '/vue-api',
        name: 'vueAPi',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/test/vue-api/ApiWrapper.vue'),
        children: [
            {
                path: 'watch',
                name: 'WatchApi',
                // route level code-splitting
                // this generates a separate chunk (About.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import('@/views/test/vue-api/WatchApi.vue'),
            },
            {
                path: 'reactive',
                name: 'ReactiveApi',
                // route level code-splitting
                // this generates a separate chunk (About.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import('@/views/test/vue-api/ReactiveApi.vue'),
            },
            {
                path: 'toRefs',
                name: 'ToRefs',
                // route level code-splitting
                // this generates a separate chunk (About.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import('@/views/test/vue-api/ToRefs.vue'),
            },
            {
                path: 'computed',
                name: 'computed',
                // route level code-splitting
                // this generates a separate chunk (About.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import('@/views/test/vue-api/ComputedApi.vue'),
            },
            {
                path: 'props',
                name: 'props',
                component: () => import('@/views/test/vue-api/PropsApi.vue'),
            },
            {
                path: 'vbind',
                name: 'VBind',
                component: () => import('@/views/test/vue-api/VBind.vue'),
            },
            {
                path: 'vmodel',
                name: 'VModel',
                component: () => import('@/views/test/vue-api/VModel.vue'),
            },
            {
                path: 'attrs',
                name: 'AttrApi',
                component: () => import('@/views/test/vue-api/AttrApi.vue'),
            },
            {
                path: 'slot',
                name: 'SlotApi',
                component: () => import('@/views/test/vue-api/SlotApi.vue'),
            },
            {
                path: 'provide',
                name: 'ProvideApi',
                component: () => import('@/views/test/vue-api/ProvideApi.vue'),
            },
            {
                path: 'hooks',
                name: 'HookTest',
                component: () => import('@/views/test/vue-api/HookTest.vue'),
            },
            {
                path: 'test-reactive',
                name: 'TestReactive',
                component: () => import('@/views/test/vue-api/TestReactive.vue'),
            },
            {
                path: 'transition',
                name: 'TransitionApi',
                component: () => import('@/views/test/vue-api/TransitionApi.vue'),
            },
            {
                path: 'directive',
                name: 'Directive',
                component: () => import('@/views/test/vue-api/Directive.vue'),
            },
            {
                path: 'v-model',
                name: 'VueModeal',
                component: () => import('@/views/test/vue-api/VueModel.vue'),
            },
        ]
    },
    {
        path: '/ts',
        name: 'tsAPi',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/test/ts/TsApi.vue'),
        children: [
            {
                path: 'interface',
                name: 'interface',
                // route level code-splitting
                // this generates a separate chunk (About.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import('@/views/test/ts/InterfaceTest.vue'),
            }]
    },
    {
        path: '/xg',
        name: 'XG',
        component: () => import('@/views/test/XgPlayer.vue'),
    },
    {
        path: '/demo',
        name: 'Demo',
        component: () => import('@/views/test/demos/index.vue'),
        children: [
            {
                path: 'jump-by-keyword',
                name: 'JumpByKeyword',
                component: () => import('@/views/test/demos/JumpByKeyword.vue'),
            },
            {
                path: 'v-html',
                name: 'Vhtml',
                component: () => import('@/views/test/demos/TestVHtml.vue'),
            },
            {
                path: 'iframeTest',
                name: 'IframeTest',
                component: () => import('@/views/test/demos/iframeTest.vue')
            }
        ]
    },
    {
        path: '/upload',
        name: 'Upload',
        component: () => import('@/views/test/functional/Upload.vue'),
    },
    {
        path: '/download',
        name: 'Download',
        component: () => import('@/views/test/functional/Download.vue'),
    },
    {
        path: '/myForm',
        name: 'MyForm',
        component: () => import('@/views/test/functional/MyForm.vue'),
    },
    {
        path: '/myUpload',
        name: 'MyUpload',
        component: () => import('@/views/test/functional/MyUpload.vue'),
    },
    {
        path: '/css',
        name: 'Css`',
        component: () => import('@/views/test/css/ApiWrapCss.vue'),
    },
    {
        path: '/formupload',
        name: 'formupload`',
        component: () => import('@/views/test/functional/FormUpload.vue'),
    },
    {
        path: '/stream',
        name: 'Stream',
        component: () => import('@/views/test/functional/Stream.vue'),
    },

    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        // component: () => import('@/views/error/404.vue'),
        redirect: '/404',

    },

]