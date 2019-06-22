import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import api from './api';
Vue.config.productionTip = false;

import Vuelidate from 'vuelidate';

import dotenv from 'dotenv';

dotenv.config();

Vue.use(api);
Vue.use(Vuelidate);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
