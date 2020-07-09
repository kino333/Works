import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Bs from '../views/Bs.vue'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Bs',
    component: Bs
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router