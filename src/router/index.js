import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/championship',
    name: 'Championship',
    component: () => import( '../views/Championship.vue')
  },
  {
    path: '/teams',
    name: 'Teams',
    component: () => import( '../views/Teams.vue')
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: () => import( '../views/Calendar.vue')
  },
  {
    path: '/seasons',
    name: 'Seasons',
    component: () => import( '../views/Seasons.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
