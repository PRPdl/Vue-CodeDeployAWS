import Vue from 'vue'
import Router from 'vue-router'
import test from '@/components/test'
import main from '@/components/mainComponent'
import userPage from '@/components/userPage'
import NotFound from '@/components/NotFound'
import profile from '@/components/base_components/profile'
import store from '@/store'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [

    {
      path: '/test',
      name: 'test',
      component: test,
      meta: {
        requiresAuth: true,
        title: 'Test'
      }
    },
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/login'),
      meta: {
        title: "Login"
      }
    },
    {
      path: '/user/:id',
      name: 'userPage',
      component: userPage,
      props: true,
      meta: {
        requiresAuth: true,
        title: 'Profile'
      },
      children: [

        {
          path: 'profile',
          name: 'proflie',
          component: profile,
          props: true,
        },
        {
          path: 'setting',
          name: 'setting',
          component: () => import('@/components/base_components/setting'),
          props: true,
        },
        {
          path: '*',
          name: 'NotFound',
          component: NotFound,
          props: false
        }
      ]
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
      props: false,
      meta: {
        title: "404 Err"
      }
    }
  ],

});

router.beforeEach((to, from, next) => {
  console.log('Hit guard')
  if (to.matched.some(record => record.meta.requiresAuth) && !store.user) {
     
    next('/login')
  }
  else {
    next();
  }
});

router.afterEach((to) => {
if(to.meta.title){
  document.title = to.meta.title
}
});


export default router;
