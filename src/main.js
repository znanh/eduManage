import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import echarts from './plugins/echarts'
import '../src/assets/less/index.less'
import { Loading } from 'element-ui'
import './plugins/vxetable.js'
// import "vxe-table/lib/style.css";
// import * as echarts from 'echarts'oi

Vue.config.productionTip = false
Vue.prototype.$loadingService = Loading.service

Vue.prototype.$echarts = echarts
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
