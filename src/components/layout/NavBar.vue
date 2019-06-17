<template>
  <header class="header">
    <div class="coluna-small-5 coluna-larg-2">
      <div class="container-logo">
        <router-link tag="a" to="/">
          <img class="logo" src="../../assets/img/logo.png">
        </router-link>
      </div>
    </div>
    <input class="menu-btn" type="checkbox" id="menu-btn">
    <ul class="menu">
      <transition name="slide-fade">
        <li v-if="!mostra">
          <router-link tag="a" to="/">Início</router-link>
        </li>
      </transition>
      <transition name="slide-fade">
        <li v-if="!mostra">
          <router-link tag="a" to="/leiloes">Leilões</router-link>
        </li>
      </transition>
      <transition name="slide-fade">
        <li v-if="!mostra">
          <router-link tag="a" to="/about">Sobre nós</router-link>
        </li>
      </transition>
      <transition name="slide-fade">
        <li v-if="!mostra">
          <router-link tag="a" to="/contato">Contato</router-link>
        </li>
      </transition>
      <li>
        <div>
          <a
            class="fa fa-user"
            aria-hidden="true"
            v-if="!mostra"
            v-on:click="mostra = !mostra; active = !active"
          ></a>
          <a
            v-bind:class="{'active': active}"
            v-if="mostra"
            v-on:click="mostra = !mostra; active = !active"
          >
            <span>Cancelar</span>
          </a>
        </div>
      </li>
      <li>
        <transition name="slide-fade">
          <div v-if="mostra" class="login-container" v-on:click="mostra = !mostra; active = !active">
            <router-link tag="a" to="/login">Login</router-link>
            <router-link tag="a" to="/cadastrar">Registro</router-link>
            <router-link tag="a" to="/editar-conta">Editar Conta</router-link>
          </div>
        </transition>
      </li>
    </ul>
    <label class="menu-icon" for="menu-btn">
      <span class="navicon"></span>
    </label>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      mostra: false,
      active: false,
    };
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
