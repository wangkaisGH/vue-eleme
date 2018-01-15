// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import '../static/mui/css/mui.css'
import '../static/mui/js/mui.js'
// 字体图标
import '../static/icon/iconfont.css'
import '../static/icon/iconfont.js'
import Mint from 'mint-ui'
Vue.use(Mint)
Vue.prototype.$http = axios
Vue.config.productionTip = false
// Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
