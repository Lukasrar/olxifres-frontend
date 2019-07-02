import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import store from './store';

Vue.use(Router);

const validarUsuarioLogado = (to, from, next) => {
  if (!store.state.usuario) {
    return next('login');
  }
  return next();
};

const router = new Router({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },

  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'OLXifres - Leilão online de gado',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
      meta: {
        title: 'Informações sobre a equipe - OLXifres',
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
      meta: {
        title: 'Logar-se - OLXifres',
      },
    },
    {
      path: '/cadastrar',
      name: 'cadastrar',
      component: () => import('./views/Cadastrar.vue'),
      meta: {
        title: 'Cadastrar-se - OLXifres',
      },
    },
    {
      path: '/esqueci-senha',
      name: 'esqueci-senha',
      component: () => import('./views/EsqueciSenha.vue'),
      meta: {
        title: 'Resgate de senha - OLXifres',
      },
    },
    {
      path: '/leiloes',
      name: 'leiloes',
      component: () => import('./views/Leiloes.vue'),
      meta: {
        title: 'Leilões disponíveis - OLXifres',
      },
    },
    {
      path: '/leilao/:idLeilao',
      name: 'leilao',
      component: () => import('./views/Leilao.vue'),
      beforeEnter: validarUsuarioLogado,
    },
    {
      path: '/criar-leilao',
      name: 'criar-leilao',
      component: () => import('./views/CriarLeilao.vue'),
      beforeEnter: validarUsuarioLogado,
    },
    {
      path: '/contato',
      name: 'contato',
      component: () => import('./views/Contato.vue'),
      meta: {
        title: 'Entre em contato - OLXifres',
      },
    },
    {
      path: '/minha-conta',
      name: 'minha-conta',
      component: () => import('./views/MinhaConta.vue'),
      beforeEnter: validarUsuarioLogado,
      meta: {
        title: 'Edição de conta - OLXifres',
      },
    },
  ],
});

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags
    .map(tagDef => {
      const tag = document.createElement('meta');

      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key]);
      });

      // We use this to track which meta tags we create, so we don't interfere with other ones.
      tag.setAttribute('data-vue-router-controlled', '');

      return tag;
    })
    // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag));

  next();
});

export default router;
