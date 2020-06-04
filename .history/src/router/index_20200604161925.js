import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path : '/home',
      redirect : '/'
    },
  {
    path: '/',
    name: 'Home',
    component: Home  // 首页
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('../views/detail/Detail')
  },
  {
    path: '/parent',
    name: 'Parent',
    component: () => import('../views/parent/Parent'),
    children : [
      {
        path : 'child-one',
        name : 'Child-one',
        component : () => import('../views/child/Child-one')
      },
      {
        path : 'child-two',
        name : 'Child-two',
        component : () => import('../views/child/Child-two')
      }
    ]
  },
  {
    path: '*',
    component: () => import('../views/err/Err')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
