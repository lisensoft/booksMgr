import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const RouterModel = new Router({
  routes: [
    {
      path: '*',
      redirect: {
        path: '/'
      }
    },
    {
      path: '/hello',
      name: 'hello',
      component: resolve => require(['@/components/helloWorld'], resolve)
    },
    {
      path: '/',
      name: '主页',
      redirect: '/bill',
      meta: {
        keepAlive: true
      },
      component: resolve => require(['@/views/layout'], resolve), // resolve => require(['../views/layout/Layout'], resolve),
      children: [{
        path: 'bill',
        name: '开单',
        component: resolve => require(['@/views/bill'], resolve),
        meta: {
          keepAlive: true
        }
      },
      {
        path: '/hello',
        name: 'hello',
        component: resolve => require(['@/components/helloWorld'], resolve)
      },
      {
        path: 'reconcile',
        name: '对帐',
        component: resolve => require(['@/views/reconcile'], resolve),
        meta: {
          keepAlive: true
        }
      },
      {
        path: 'history',
        name: '历史',
        component: resolve => require(['@/views/history'], resolve),
        meta: {
          keepAlive: true
        }
      },
      {
        path: 'user',
        name: '我的',
        component: resolve => require(['@/views/user'], resolve),
        meta: {
          keepAlive: true
        }
      }
      ]
    }
  ]
})
RouterModel.beforeEach((to, from, next) => {
  if (from.fullPath === '/') {
    Bmob.initialize('e67df222c241f05847465de1439a3249', '0a3776e20a24d1316deedc8732f2cc05')
  }
  next()
})

export default RouterModel

