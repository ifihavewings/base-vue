export default [
    {
        path: '/automatics',
        name: 'Automatics',
        // route level code-splitting
        // this generates a separate chunk (Documentation.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('./pages/AutoIndex.vue'),
        children: [
            {
                path: 'userList',
                name: 'UserList',
                component: () => import('./pages/UserList.vue')
            },
            
        ]
    },

]