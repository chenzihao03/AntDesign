import Vue from 'vue'
import Router from 'vue-router'

// /* Layout */
import Layout from '@/common/layout/index'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout,
      meta: {title: '作业管理', icon: 'slack'},
    }, {
      path: '/homes',
      name: '作业管理',
      component: Layout,
      redirect: '/homes/homes',
      meta: {title: '作业管理', icon: 'fa fa-tasks'},
      children: [{
        path: 'homes',
        name: '排程操作平台',
        component: () => import('@/components/HelloWorld'),
        meta: {title: '123', icon: 'slack'}
      }]
    }
  ]
})
