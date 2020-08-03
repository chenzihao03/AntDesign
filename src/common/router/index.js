import Vue from 'vue'
import Router from 'vue-router'
// /* Layout */
import HomeLayout from '@/common/layout/homeLayout/index'
import ScreenLayout from '@/common/layout/screenLayout/index'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(Router);

export const constantRoutes = [{
  path: '/',
  name: 'home',
  component: HomeLayout,
  hidden: true,
  meta: {title: '作业管理', icon: 'slack'},
}, {
  path: '/task',
  name: '作业管理',
  component: HomeLayout,
  redirect: '/task/schedule',
  meta: {title: '作业管理', icon: 'slack'},
  children: [{
    path: 'schedule',
    name: '排程操作平台',
    component: () => import('@/model/aps/apsschedule'),
    meta: {title: '排程操作平台'}
  }, {
    path: 'dispatch',
    name: '排程任务指派',
    component: () => import('@/model/aps/apsdispatch'),
    meta: {title: '排程任务指派'}
  }]
}, {
  path: '/screen',
  name: '报表设计',
  component: ScreenLayout,
  redirect: '/screen/board',
  meta: {title: '报表设计', icon: 'area-char'},
  children: [{
    path: 'board',
    name: '大屏设计器',
    component: () => import('@/model/screen/sys/home'),
    meta: {title: '大屏设计器', target: "_blank"}
  }]
}, {
  path: '/board',
  name: '大屏管理',
  hidden: true,
  component: ScreenLayout,
  redirect: '/board/board',
  meta: {title: '大屏管理', icon: 'area-char'},
  children: [{
    path: 'board',
    name: '大屏管理',
    component: () => import('@/model/screen/sys/home'),
    meta: {title: '大屏管理'}
  }]
}, {
  path: '/newBoard',
  name: '新建大屏',
  hidden: true,
  component: () => import('@/model/screen/sys/newboard')
}, {
  path: '/my',
  name: '我的',
  component: HomeLayout,
  redirect: '/homes/homes',
  meta: {title: '我的', icon: 'slack'},
  children: [{
    path: 'homes',
    name: '测试',
    component: () => import('@/model/aps/apsregular'),
    meta: {title: '测试'}
  }]
}];

const createRouter = () => new Router({
  mode: 'hash',//去掉url的#
  scrollBehavior: () => ({y: 0}),
  routes: constantRoutes
});

const router = createRouter();

/**
 * 路由重复调用报错的问题
 */
const routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
};

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher
}

// 注册全局钩子用来拦截导航
router.beforeEach((to, from, next) => {
  NProgress.start();
  if (to.meta.title == "大屏设计器") {
    document.title = "数据大屏"
  }
  if (to.name == "新建大屏") {
    document.title = "数据大屏"
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});

//抛出这个这个实例对象方便外部读取以及访问
export default router
