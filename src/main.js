import Vue from 'vue'
import App from './App.vue'
import router from '@/router';
import store from "@/store";

import './assets/css/global.css'


import { Input, Icon, Button } from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// import 'element-ui/lib/theme-chalk/index.css';

// Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
// Vue.use(VueRouter);
Vue.component('el-input', Input);
Vue.component('el-icon', Icon);
Vue.component('el-button', Button);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
