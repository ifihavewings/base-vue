export default [
    {
        path: '/documentations',
        name: 'Documentations',
        // route level code-splitting
        // this generates a separate chunk (Documentation.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/documentations/Documentations.vue'),
        children: [
            {
                path: 'templateSyntax',
                name: 'TemplateSyntax',
                component: () => import('@/views/documentations/TemplateSyntax.vue')
            },
            {
                path: 'directives',
                name: 'Directives',
                component: () => import('@/views/documentations/Directives.vue')
            },
            {
                path: 'eventHanding',
                name: 'EventHanding',
                component: () => import('@/views/documentations/EventHanding.vue')
            },
        ]
    },

]