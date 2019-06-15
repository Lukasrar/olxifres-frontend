<template>
  <form class="form login login-screen" @submit.prevent="fazerRegistro">
    <div v-if="etapa" class="animated fadeInLeft login-form" id="firstForm">
      <div class="app-title">
        <h1>REGISTRO</h1>
      </div>

      <div class="control-group">
        <label for="name" class="label-form">Nome</label>
        <input type="text" class="login-field" placeholder="Informe seu nome" v-model="nome">
      </div>

      <div class="control-group">
        <label for="senha" class="label-form">Senha</label>
        <input type="password" class="login-field" placeholder="Informe sua senha" v-model="senha">
      </div>

      <div class="control-group">
        <label for="conf-senha" class="label-form">Confirmar senha</label>
        <input type="password" class="login-field" placeholder="Confirme senha" v-model="confSenha">
      </div>

      <div class="control-group">
        <label for="email" class="label-form">E-mail</label>
        <input type="email" class="login-field" placeholder="Informe seu e-mail" v-model="email">
      </div>

      <div class="control-group">
        <label for="cpf" class="label-form">Cpf</label>
        <input type="text" class="login-field" placeholder="Informe seu cpf" v-model="cpf">
      </div>
      <div class="control-group">
        <label for="telefone" class="label-form">Telefone</label>
        <input
          type="text"
          class="login-field"
          placeholder="Informe seu numero de telefone"
          v-model="telefone"
        >
      </div>

      <input type="button" class="btn" value="Continuar registro" @click="etapa = !etapa">
      <div class="links">
        <a class="login-link" @click="jaPossuiConta">Já possui conta?</a>
      </div>
    </div>

    <div v-if="!etapa" class="animated fadeInLeft login-form" id="secondForm" action="/registrar">
      <div class="app-title">
        <h1>REGISTRO</h1>
      </div>
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
        <a class="login-link" @click="jaPossuiConta">Já possui conta?</a>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "Cadastrar",
  data() {
    return {
      etapa: true,
      nome: "",
      senha: "",
      confSenha: "",
      email: "",
      cpf: "",
      telefone: "",
      cidade: "",
      estado: "",
      logradouro: "",
      bairro: "",
      numero: "",
      cpf: "",
      cep: ""
    };
  },
  methods: {
    fazerLogin() {
      //
      console.log("fazendo login....");
    },
    jaPossuiConta() {
      this.$router.push({ name: "login" });
    }
  }
};
</script>
<style>
</style>
