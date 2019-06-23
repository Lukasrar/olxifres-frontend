import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueNoty from 'vuejs-noty';

import 'vuejs-noty/dist/vuejs-noty.css';

import api from './api';
Vue.config.productionTip = false;

import Vuelidate from 'vuelidate';

import dotenv from 'dotenv';

dotenv.config();

Vue.use(api);
Vue.use(Vuelidate);
Vue.use(VueNoty, {
  timeout: 1500,
  progressBar: true,
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
