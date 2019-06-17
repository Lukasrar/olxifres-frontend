import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const MUTATIONS = {
  SET_USUARIO: 'SET_USUARIO',
};

export default new Vuex.Store({
  state: {
    usuario: null,
  },
  mutations: {
    [MUTATIONS.SET_USUARIO](state, usuario) {
      state.usuario = usuario;
    },
  },
  actions: {
    setUsuario({ commit }, usuario) {
      commit(MUTATIONS.SET_USUARIO, usuario);
    },
  },
  getters: {
    getUsuario: state => state.usuario,
  },
});
