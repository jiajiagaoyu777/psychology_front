import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueAxios,axios)
Vue.use(ElementUI)

Vue.config.productionTip = false

//导入bootstrap3相关的css/JS文件
import "bootstrap/dist/css/bootstrap.css"
// import "bootstrap/dist/js/bootstrap.js"

// 导入页面布局相关的样式文件
import "./assets/css/top.css"
import "./assets/css/index.css"
import "./assets/css/layout.css"
import "./assets/css/footer.css"

import "./assets/css/login.css"
import "./assets/css/reg.css"

import "./assets/css/webindex.css"

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
