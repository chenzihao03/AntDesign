import Vue from 'vue'
import Router from 'vue-router'

// /* Layout */
import Layout from '@/common/layout/index'

Vue.use(Router);


export const constantRoutes = [{
  path: '*', // 页面不存在的情况下会跳到404页面
  redirect: '/error',
  name: 'notFound',
  hidden: true,
}, {
  path: '/error',
  component: () => import('@/common/components/error/index'),
  hidden: true,
}, {
  path: '/',
  name: 'home',
  component: Layout,
  meta: {title: '首页', icon: 'fa fa-home'},
}, {
  path: '/task',
  name: '作业管理',
  component: Layout,
  redirect: '/task/apsSchedule',
  meta: {title: '作业管理', icon: 'fa fa-tasks'},
  children: [{
    path: 'apsSchedule',
    name: '排程操作平台',
    component: () => import('@/components/HelloWorld'),
    meta: {title: '排程操作平台', icon: 'fa fa-window-restore'}
  }]
}];

const createRouter = () => new Router({
  mode: 'history',//去掉url的#
  base: '/AntDesign',
  scrollBehavior: () => ({y: 0}),
  routes: constantRoutes
});

const router = createRouter();

/**
 * 路由重复调用报错的问题
 */
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
};

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher
}

// // 注册全局钩子用来拦截导航
// router.beforeEach((to, from, next) => {
//   const token = store.state.token;
//   if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
//     if (token) { // 通过vuex state获取当前的token是否存在
//       next()
//     } else {
//       next({
//         path: '/login'
//       })
//     }
//   } else {
//     next()
//   }
// });

//抛出这个这个实例对象方便外部读取以及访问
export default router

