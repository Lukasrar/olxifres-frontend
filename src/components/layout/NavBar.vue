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
        <li v-if="!dropDown">
          <router-link tag="a" to="/">Início</router-link>
        </li>
      </transition>
      <transition name="slide-fade">
        <li v-if="!dropDown">
          <router-link tag="a" to="/leiloes">Leilões</router-link>
        </li>
      </transition>
      <transition name="slide-fade">
        <li v-if="!dropDown">
          <router-link tag="a" to="/about">Sobre nós</router-link>
        </li>
      </transition>
      <transition name="slide-fade">
        <li v-if="!dropDown">
          <router-link tag="a" to="/contato">Contato</router-link>
        </li>
      </transition>
      <li>
        <div>
          <a
            class="fa fa-user"
            aria-hidden="true"
            v-if="!dropDown"
            v-on:click="dropDown = !dropDown; active = !active"
          ></a>
          <a
            class="fa fa-user"
            aria-hidden="true"
            v-bind:class="{'active': active}"
            v-if="dropDown"
            v-on:click="dropDown = !dropDown; active = !active"
          >
            <span>Cancelar</span>
          </a>
        </div>
      </li>
      <li>
        <transition name="slide-fade">
          <div v-if="dropDown" class="dropdown">
            <router-link tag="a" to="/login">Login</router-link>
            <router-link tag="a" to="/cadastrar">Registro</router-link>
            <router-link tag="a" to="/cadastrar">Editar Conta</router-link>
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
      dropDown: false,
      active: false,
    };
  },
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-in;
}
.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active em versões anteriores a 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.dropdown {
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
