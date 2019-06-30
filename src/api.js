import axios from 'axios';

const client = axios.create({
  baseURL: process.env.VUE_APP_API_ENDPOINT,
});

const api = {
  get(url, params, config) {
    return client.get(url, params, config);
  },

  post(url, params, config) {
    return client.post(url, params, config);
  },

  put(url, params, config) {
    return client.put(url, params, config);
  },
};

export default {
  install(Vue) {
    Vue.prototype.$api = api;
  },
};
