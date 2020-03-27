import Vue from 'vue'
import App from './App'
import router from './router'
import Antd from 'ant-design-vue';
import Fragment from 'vue-fragment'
import '@/common/styles/index.css'
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false;
Vue.use(Antd);
Vue.use(Fragment.Plugin);

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
