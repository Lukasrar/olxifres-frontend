import axios from 'axios';

const client = axios.create({
  baseURL: process.env.VUE_APP_API_ENDPOINT,
});

const api = {
  get(url, params) {
    return client.get(url, params);
  },

  post(url, params) {
    return client.post(url, params);
  },
};

export default {
  install(Vue) {
    Vue.prototype.$api = api;
  },
};
