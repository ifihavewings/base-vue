export default [
    {
        path: '/printer',
        name: 'Printer',
        // route level code-splitting
        // this generates a separate chunk (Documentation.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('./Printer.vue'),
    },

]