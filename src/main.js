// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
/* eslint-disable no-new */

import  moment  from  "moment"   // 引入事件模块
import  "moment/locale/zh-cn"  // 引入中文包
moment.locale('zh-cn');   // 设置中文/
Vue.filter('dateformat', function(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {

  return moment(dataStr).format(pattern)
  
  })
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
