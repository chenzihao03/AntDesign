import Vue from 'vue'
import App from './App'
import router from './common/router'
import store from './common/store'
import Antd from 'ant-design-vue'
import Fragment from 'vue-fragment'
import '@/assets/css/index.css'
import 'ant-design-vue/dist/antd.css'
import VueDraggableResizable from 'vue-draggable-resizable'
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'
import {Pagination} from 'element-ui'
import echarts from 'echarts'
import Contextmenu from "vue-contextmenujs"


Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;
Vue.use(Antd);
Vue.use(Fragment.Plugin);
Vue.use(Pagination);
Vue.use(Contextmenu);
Vue.component('vue-draggable-resizable', VueDraggableResizable);

new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});
