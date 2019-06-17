<template>
  <form class="form login login-screen" @submit.prevent="fazerRegistro">
    <div v-if="etapa" class="animated fadeInLeft login-form" id="firstForm">
      <h1 class="app-title">REGISTRO</h1>

      <div class="control-group">
        <label for="name" class="label-form">Nome</label>
        <input type="text" class="login-field" placeholder="Informe seu nome" v-model="nome">
        <transition name="slide-fade">
          <p class="help-log" v-if="nomeInvalido">Favor, insira um nome válido.</p>
        </transition>
      </div>

      <div class="control-group">
        <label for="senha" class="label-form">Senha</label>
        <input type="password" class="login-field" placeholder="Informe sua senha" v-model="senha">
        <transition name="slide-fade">
          <p class="help-log" v-if="senhaInvalido">Favor, insira uma senha válida.</p>
        </transition>
      </div>

      <div class="control-group">
        <label for="conf-senha" class="label-form">Confirmar senha</label>
        <input type="password" class="login-field" placeholder="Confirme senha" v-model="confSenha">
        <transition name="slide-fade">
          <p class="help-log" v-if="confSenhaInvalido">As senhas não conferem.</p>
        </transition>
      </div>

      <div class="control-group">
        <label for="email" class="label-form">E-mail</label>
        <input type="email" class="login-field" placeholder="Informe seu e-mail" v-model="email">
        <transition name="slide-fade">
          <p class="help-log" v-if="emailInvalido">Favor, insira um e-mail válido.</p>
        </transition>
      </div>

      <div class="control-group">
        <label for="cpf" class="label-form">Cpf</label>
        <input type="text" class="login-field" placeholder="Informe seu cpf" v-model="cpf">
        <transition name="slide-fade">
          <p class="help-log" v-if="cpfInvalido">Favor, insira um cpf válido.</p>
        </transition>
      </div>
      <div class="control-group">
        <label for="telefone" class="label-form">Telefone</label>
        <input
          type="text"
          class="login-field"
          placeholder="Informe seu numero de telefone"
          v-model="telefone"
        >
        <transition name="slide-fade">
          <p class="help-log" v-if="telInvalido">Favor, insira um telefone válido.</p>
        </transition>
      </div>

      <input type="button" class="btn" value="Continuar registro" @click="etapa = !etapa">
      <div class="links">
        <a class="login-link" @click="$router.push({ name: 'login' })">Já possui conta?</a>
      </div>
    </div>

    <div v-if="!etapa" class="animated fadeInLeft login-form" id="secondForm" action="/registrar">
      <h1 class="app-title">REGISTRO</h1>

      <div class="control-group">
        <label for="cidade" class="label-form">Cidade</label>
        <input type="text" class="login-field" placeholder="Informe a cidade" v-model="cidade">
      </div>

      <div class="control-group">
        <label for="estado" class="label-form">Estado</label>
        <input type="text" class="login-field" placeholder="Informe o estado" v-model="estado">
      </div>

      <div class="control-group">
        <label for="Logradouro" class="label-form">Logradouro</label>
        <input type="text" class="login-field" placeholder="Logradouro" v-model="logradouro">
      </div>

      <div class="control-group">
        <label for="bairro" class="label-form">Bairro</label>
        <input type="text" class="login-field" placeholder="Informe seu bairro" v-model="bairro">
      </div>

      <div class="control-group">
        <label for="numero" class="label-form">Numero</label>
        <input type="number" class="login-field" placeholder="Informe o numero" v-model="numero">
      </div>

      <div class="control-group">
        <label for="cep" class="label-form">Cep</label>
        <input type="text" class="login-field" placeholder="Informe o cep" v-model="cep">
      </div>

      <input type="button" class="btn" value="Voltar" @click="etapa = !etapa">
      <input type="submit" class="btn" value="Completar registro">

      <div class="links">
        <a class="login-link" @click="$router.push({ name: 'login' })">Já possui conta?</a>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'Cadastrar',
  data() {
    return {
      etapa: true,
      nome: '',
      senha: '',
      confSenha: '',
      email: '',
      telefone: '',
      cidade: '',
      estado: '',
      logradouro: '',
      bairro: '',
      numero: '',
      cpf: '',
      cep: '',

      //flags de validacao

      nomeInvalido: false,
      senhaInvalido: false,
      confSenhaInvalido: false,
      emailInvalido: false,
      cpfInvalido: false,
      telInvalido: false,
    };
  },
  methods: {
    fazerLogin() {
      //
      console.log('fazendo login....');
    },
  },
};
</script>
<style>
</style>
