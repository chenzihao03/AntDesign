import Vue from 'vue'
import App from './App'
import router from './common/router'
import Antd from 'ant-design-vue';
import Fragment from 'vue-fragment'
import '@/common/styles/index.css'
import 'ant-design-vue/dist/antd.css';
//引入Font Awesome图标库
import 'font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false;
Vue.use(Antd);
Vue.use(Fragment.Plugin);

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
