<template>
  <form class="form login login-screen" @submit.prevent="validaForm" novalidate>
    <div class="animated fadeInLeft login-form" id="firstForm">
      <transition name="slide-fade">
        <ErrorBox v-if="errouRegistro" :tituloErro="tituloErro" :sugestao="sugestao"/>
      </transition>
      <h1 class="app-title">Cadastrar</h1>

      <div class="control-group" v-bind:class="{ 'error': nomeHasError }">
        <label for="name" class="label-form">Nome*</label>
        <input type="text" class="login-field" placeholder="Informe seu nome" v-model="nome">
        <div class="error-message" v-if="nomeInvalido"> Por favor, informe o seu nome completo no campo acima. </div>
      </div>

      <div class="control-group" v-bind:class="{ 'error': emailHasError }">
        <label for="email" class="label-form">E-mail*</label>
        <input type="email" class="login-field" placeholder="Informe seu e-mail" v-model="email" 
          oninvalid="this.setCustomValidity('Você deve informar um e-mail válido no formato: usuario@email.com')"
          oninput="this.setCustomValidity('')">
        <div class="error-message" v-if="emailInvalido"> Por favor, informe um email válido no campo acima. <br> Formato: usuario@email.com </div>
      </div>

      <div class="control-group" v-bind:class="{ 'error': senhaHasError }">
        <label for="senha" class="label-form">Senha*</label>
        <input type="password" class="login-field" placeholder="Informe sua senha" v-model="senha">
        <div class="error-message" v-if="senhaInvalida"> Por favor, informe sua senha no campo acima. </div>
      </div>

      <div class="control-group" v-bind:class="{ 'error': senha2HasError }">
        <label for="conf-senha" class="label-form">Confirmar senha*</label>
        <input type="password" class="login-field" placeholder="Confirme senha" v-model="confSenha">
        <div class="error-message" v-if="senha2Invalida"> Por favor, informe sua senha no campo acima. </div>
        <div class="error-message" v-if="senha2Desigual"> As senhas digitadas não correspondem. </div>        
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
      nomeInvalido: false,
      emailInvalido: false,
      senhaInvalida: false,
      senha2Invalida: false,
      senha2Desigual: false,
      has_some_error: false,
    };
  },  
  methods: {
    validaForm() {
      this.has_some_error = false;

      if (this.nome.trim() == '') {
        this.nomeInvalido = true;
        this.nomeHasError = true;
        this.has_some_error = true;
      } else {
        this.nomeInvalido = false;
        this.nomeHasError = false;
      }
      
      if (this.email.trim() == '') {
        this.emailInvalido = true;
        this.emailHasError = true;
        this.has_some_error = true;
      } else {
        this.emailInvalido = false;
        this.emailHasError = false;
      }
      
      if (this.senha.trim() == '') {
        this.senhaInvalida = true;
        this.senhaHasError = true;
        this.has_some_error = true;
      } else {
        this.senhaInvalida = false;
        this.senhaHasError = false;
      }
      
      if (this.confSenha.trim() == '') {
        this.senha2Desigual = false;
        this.senha2Invalida = true;
        this.senha2HasError = true;
        this.has_some_error = true;
      } else {
        if (this.confSenha.trim() != this.senha.trim()) {
          this.senha2Invalida = false;
          this.senha2Desigual = true;
          this.senha2HasError = true;
          this.has_some_error = true;
        } else {
          this.senha2Invalida = false;
          this.senha2Desigual = false;
          this.senha2HasError = false;
        }
      }
      
      if (!has_some_error) {
        this.fazerLogin();
      }
    },
    fazerRegistro() {
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
