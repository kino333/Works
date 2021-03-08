import Vue from 'vue'
import VueRouter from 'vue-router'
import todo from '../views/todo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: todo
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
