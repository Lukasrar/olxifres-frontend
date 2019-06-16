<template>
  <div class="login">
    <div class="login-screen">
      <div class="app-title">
        <h1 class="app-title">LOGIN</h1>
      </div>
      <form class="login-form" @submit.prevent="fazerLogin">
        <div class="control-group">
          <label for="login-eamil" class="label-form">E-mail</label>
          <input v-model="email" type="email" class="login-field" placeholder="Informe seu e-mail">
        </div>
        <div class="control-group">
          <label for="login-pass" class="label-form">Senha</label>
          <input
            v-model="senha"
            type="password"
            class="login-field"
            placeholder="Informe sua senha"
          >
        </div>
        <!-- <input type="submit" class="btn" value="Login"> -->
        <input type="submit" class="btn" value="Login">
        <div class="links">
          <button class="login-link" @click="navegarTelaCadastro">Não possui conta?</button>
          <button class="login-link" @click="navegarEsqueciMinhaSenha">Esqueci minha senha</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      senha: ""
    };
  },
  methods: {
    fazerLogin() {
      //
      console.log("fazendo login....");
    },
    navegarTelaCadastro() {
      this.$router.push({ name: "cadastrar" });
    },
    navegarEsqueciMinhaSenha() {
      this.$router.push({ name: "esqueci-senha" });
    }
  }
};
</script>

<style scoped>
</style>
