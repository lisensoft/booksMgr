import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const RouterModel = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
