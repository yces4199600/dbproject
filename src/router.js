import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '@/page/Index.vue'
import List from '@/page/List.vue'

const routes = [
  {
    path: '/index',
    redirect: {
      name: 'Index'
    }
  },
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/List',
    name: 'List',
    component: List

  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkExactActiveClass: 'active',
  routes
})

export default router;
