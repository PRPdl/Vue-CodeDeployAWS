import Vue from 'vue'
import Router from 'vue-router'
import test from '@/components/test'
import main from '@/components/mainComponent'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/main',
      name: 'main',
      component: main
    }
  ],

})
