import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

// const view = filename => {
//   return _ => import(/* webpackChunkName: "[request]" */ `../views/${ filename }.vue`)
// }

const routes = [
  {
    path: '/:lang?',
    name: 'index',
    component: Index
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
