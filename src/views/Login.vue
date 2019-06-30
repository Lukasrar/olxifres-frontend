<template>
  <div class="login">
    <div class="login-screen">
      <transition name="slide-fade">
        <ErrorBox v-if="errouLogin" :tituloErro="tituloErro" :sugestao="sugestao"/>
      </transition>
      <form class="login-form" @submit.prevent="validaForm" novalidate>
        <h1 class="app-title">Entrar</h1>
        <div class="control-group" v-bind:class="{ 'error': emailHasError }">
          <label class="label-form">E-mail</label>
          <input v-model="email" type="email" class="login-field" placeholder="Informe seu e-mail" 
          oninvalid="this.setCustomValidity('Você deve informar um e-mail válido no formato: usuario@email.com')"
          oninput="this.setCustomValidity('')">
          <div class="error-message" v-if="emailInvalido"> Por favor, informe um email válido no campo acima. <br> Formato: usuario@email.com </div>
        </div>
        <div class="control-group" v-bind:class="{ 'error': senhaHasError }">
          <label for="login-pass" class="label-form">Senha</label>
          <input
            v-model="senha"
            type="password"
            class="login-field"
            placeholder="Informe sua senha"
          >
          <div class="error-message" v-if="senhaInvalida">Por favor, informe a sua senha no campo acima.</div>
        </div>
        <!-- <input type="submit" class="btn" value="Login"> -->
        <input type="submit" class="btn" value="Login">
        <div class="links">
          <button
            class="login-link"
            @click.prevent="$router.push({ name: 'cadastrar' })"
          >Não possui conta?</button>
          <button
            class="login-link"
            @click.prevent="esqueciSenha = !esqueciSenha"
          >Esqueci minha senha</button>
        </div>
      </form>

      <!-- <form class="login-form" v-if="esqueciSenha">
        <h1 class="app-title">Recuperar senha</h1>
        <div class="recuperar-senha">
          <p>Iremos lhe enviar um email que contém um link para redefinir sua senha, basta apenas informar o e-mail registrado.</p>
        </div>
        <div class="control-group">
          <label for="recEmail" class="label-form">E-mail</label>
          <input v-model="email" type="email" class="login-field" placeholder="Informe seu email.">
          <transition name="slide-fade">
            <p class="help-log" v-if="emailInvalido">Favor, insira um e-mail válido.</p>
          </transition>
          <input type="submit" class="btn" value="Enviar">
          <input type="button" class="btn" value="Cancelar" @click.prevent='esqueciSenha = !esqueciSenha'>
        </div>
      </form> -->
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { setTimeout } from 'timers';
import ErrorBox from '../components/layout/ErrorBox';

export default {
  name: 'Login',
  components: {
    ErrorBox,
  },
  data() {
    return {
      email: 'lukasrar@hotmail.com',
      senha: 'lukas123',
      errouLogin: false,
      emailInvalido: false,
      senhaInvalida: false,
      tituloErro: 'Usuário ou senha incorreto!',
      sugestao: 'Houve um erro ao realizar seu login, por gentileza confirme suas informações e tente novamente',
      esqueciSenha: false,
      has_some_error: false,
    };
  },
  methods: {
    validaForm() {      
      if (this.email.trim() == '') {
        this.emailInvalido = true;
        this.emailHasError = true;
        this.has_some_error = true;
      }
      
      if (this.senha.trim() == '') {
        this.senhaInvalida = true;
        this.senhaHasError = true;
        this.has_some_error = true;
      }

      if (!has_some_error) {
        this.fazerLogin();
      }
    },

    ...mapActions(['setUsuario']),
    async fazerLogin() {
      const { email, senha } = this;
      this.errouLogin = false;
      try {
        const usuario = (await this.$api.post('/login', { email, senha })).data.data[0];
        this.setUsuario(usuario);
        this.$router.push({ name: 'leiloes' });
      } catch (err) {
        const informacoesIncorretas = !!err.response.data.error;
        this.errouLogin = true;
        setTimeout(() => {
          this.errouLogin = false;
        }, 3000);
      }
    },
  },
};
</script>

<style scoped>
.recuperar-senha {
  max-width: 320px;
  margin-bottom: 20px;
  padding: 0;
}

.recuperar-senha p {
  text-align: justify;
  color: green;
  font-weight: bold;
  margin: 0;
  padding: 0;
}
</style>
