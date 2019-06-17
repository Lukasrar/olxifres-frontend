import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import money from 'v-money';

import api from './api';
Vue.config.productionTip = false;

import dotenv from 'dotenv';

dotenv.config();

Vue.use(money)
Vue.use(api);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
