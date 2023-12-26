import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

import RepairList from '../views/RepairList.vue';

import RepairDetail from '../views/RepairDetail.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/repair-list',
      name: 'repairList',
      component:RepairDetail
    },
    {
      path: '/repair-detail',
      name: 'repairDetail',
      component:RepairDetail
    }
  ]
})

export default router
