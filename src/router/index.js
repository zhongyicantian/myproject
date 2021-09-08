import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import vuetext from '@/components/text'
import kongzhitiao from '@/components/kongzhitiao'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/vuetext',
      name: 'vuetext',
      component: vuetext
    },
    {
      path:'/kongzhitiao',
      name:'kongzhitiao',
      component:kongzhitiao
    },
  ]
})
