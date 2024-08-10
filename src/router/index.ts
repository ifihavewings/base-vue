import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import routes from './routes'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    ...routes,
    {
      path: '/:catchAll(.*)',
      redirect: '/'
    }
  
  ]
})
router.beforeEach((to, from, next) => {
  console.log('====================================');
  console.log(to,from, next);
  console.log('====================================');
  next()
})

export default router
