<template>
  <header class="header">
    <div class="coluna-small-7 coluna-larg-2">
      <div class="container-logo">
        <router-link tag="a" to="/">
          <img
            alt="Imagem da logomarca da empresa com a palavra Olxifres na cor preto e verde."
            class="logo"
            src="../../assets/img/logo.png"
          />
        </router-link>
      </div>
    </div>
    <input class="menu-btn" type="checkbox" id="menu-btn" />
    <ul class="menu">
      <transition name="slide-fade">
        <li>
          <router-link tag="a" to="/">Início</router-link>
        </li>
      </transition>
      <transition name="slide-fade">
        <li>
          <router-link tag="a" to="/leiloes">Leilões</router-link>
        </li>
      </transition>
      <transition name="slide-fade">
        <li>
          <router-link tag="a" to="/contato">Contato</router-link>
        </li>
      </transition>
      <li>
        <div>
          <router-link tag="a" :to="rota">
            <i class="fa fa-user" aria-hidden="true" />
            <span v-html="textoLogin"></span>
          </router-link>
        </div>
      </li>
    </ul>
    <label class="menu-icon" for="menu-btn">
      <span class="navicon"></span>
    </label>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'NavBar',
  computed: {
    ...mapGetters([['getUsuario']]),
    textoLogin() {
      if (this.getUsuario) {
        return ' Minha conta';
      }
      return ' Login';
    },
    rota() {
      if (this.getUsuario) {
        return '/minha-conta';
      }
      return '/login';
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: row;
  font-size: 15px;
}

.active {
  background-color: brown;
}
</style>
