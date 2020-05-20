import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/conditions',
    name: 'Trail Conditions',
    component: () => import('../views/Conditions.vue')
  },
  {
    path: '/trails',
    name: 'Trails',
    component: () => import('../views/Trails.vue')
  },
  {
    path: '/visit',
    name: 'Visit / Rentals',
    component: () => import('../views/Visit.vue')
  },

]

const router = new VueRouter({
  routes,
  linkActiveClass: undefined,

})

export default router
