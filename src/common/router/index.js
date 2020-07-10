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
      hidden: true,
      meta: {title: '作业管理', icon: 'slack'},
    }, {
      path: '/homes',
      name: '作业管理',
      component: Layout,
      redirect: '/homes/homes',
      meta: {title: '我的管理', icon: 'slack'},
      children: [{
        path: 'homes',
        name: '排程操作平台',
        component: () => import('@/model/aps/apsregular'),
        meta: {title: '123', icon: 'slack'}
      }]
    }, {
      path: '/my',
      name: '我的',
      component: Layout,
      redirect: '/homes/homes',
      meta: {title: '我的', icon: 'slack'},
      children: [{
        path: 'homes',
        name: '测试',
        component: () => import('@/model/aps/apsdispatch'),
        meta: {title: '测试', icon: 'slack'}
      }]
    }
  ]
});
