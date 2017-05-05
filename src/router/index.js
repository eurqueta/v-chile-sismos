import Vue from 'vue'
import Router from 'vue-router'
import ListaSismo from '@/components/ListaSismo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'lista-sismo',
      component: ListaSismo
    }
  ]
})
