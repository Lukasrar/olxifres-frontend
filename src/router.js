import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
    },
    {
      path: '/cadastrar',
      name: 'cadastrar',
      component: () => import('./views/Cadastrar.vue'),
    },
    {
      path: '/esqueci-senha',
      name: 'esqueci-senha',
      component: () => import('./views/EsqueciSenha.vue'),
    },
    {
      path: '/leiloes',
      name: 'leiloes',
      component: () => import('./views/Leiloes.vue'),
    },
    {
      path: '/leilao/:idLeilao',
      name: 'leilao',
      component: () => import('./views/Leilao.vue'),
    },
    {
      path: '/criar-leilao',
      name: 'criar-leilao',
      component: () => import('./views/CriarLeilao.vue'),
    },
  ],
});
