<template>
  <form class="form login login-screen" @submit.prevent="fazerRegistro">
    <div class="animated fadeInLeft login-form" id="firstForm">
      <transition name="slide-fade">
        <ErrorBox v-if="errouRegistro" :tituloErro="tituloErro" :sugestao="sugestao"/>
      </transition>
      <h1 class="app-title">Cadastrar</h1>

      <div class="control-group">
        <label for="name" class="label-form">Nome*</label>
        <input type="text" class="login-field" placeholder="Informe seu nome" v-model="nome">
        <div class="error-message"> Por favor, informe o seu nome completo no campo acima. </div>
      </div>

      <div class="control-group">
        <label for="email" class="label-form">E-mail*</label>
        <input type="email" class="login-field" placeholder="Informe seu e-mail" v-model="email">
        <div class="error-message"> Por favor, informe seu email no campo acima. </div>
      </div>

      <div class="control-group">
        <label for="senha" class="label-form">Senha*</label>
        <input type="password" class="login-field" placeholder="Informe sua senha" v-model="senha">
        <div class="error-message"> Por favor, informe sua senha no campo acima. </div>
      </div>

      <div class="control-group">
        <label for="conf-senha" class="label-form">Confirmar senha*</label>
        <input type="password" class="login-field" placeholder="Confirme senha" v-model="confSenha">
        <div class="error-message"> Por favor, informe sua senha no campo acima. </div>
      </div>

      <input type="submit" class="btn" value="Continuar registro">
      <div class="links">
        <a class="login-link" @click="$router.push({ name: 'login' })">Já possui conta?</a>
      </div>
    </div>
  </form>
</template>

<script>
import ErrorBox from '../components/layout/ErrorBox';
export default {
  name: 'Cadastrar',
  components: {
    ErrorBox,
  },
  data() {
    return {
      errouRegistro: false,
      nome: '',
      email: '',
      senha: '',
      confSenha: '',
      tituloErro: 'E-mail ou CPF já cadastrados em nosso sistema',
      sugestao: 'Por gentiliza informe um E-mail e/ou um CPF válido.',
    };
  },
  methods: {
    fazerRegistro() {
      //
      this.errouRegistro = true;

      setTimeout(() => {
        this.errouRegistro = false;
      }, 3000);
    },
  },
};
</script>
<style>
</style>
