export default [
    {
        path: '/implementations',
        name: 'Implementations',
        // route level code-splitting
        // this generates a separate chunk (Documentation.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/implementations/Index.vue'),
        children: [
            
            {
                path: 'testCustomForm',
                name: 'TestCustomForm',
                component: () => import('@/views/implementations/TestCustomForm.vue')
            },
        ]
    },

]