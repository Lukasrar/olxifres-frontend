<template>
  <div class="login">
    <vue-headful
        title="Login de usuário | Olxifres"
        description="Página disponível para efetuar o login no sistema de leilões."
    />
    <div class="login-screen">
      <form class="login-form" @submit.prevent="fazerLogin" novalidate>
        <h1 class="app-title">Entrar</h1>
        <div class="control-group" :class="{ 'error' : !$v.email.required && $v.$error}">
          <label class="label-form">E-mail</label>
          <input v-model="email" type="email" class="login-field" placeholder="Informe seu e-mail" 
          oninvalid="this.setCustomValidity('Você deve informar um e-mail válido no formato: usuario@email.com')"
          oninput="this.setCustomValidity('')">
          <div class="error-message"> Por favor, informe um email válido no campo acima. <br> Formato: usuario@email.com </div>
        </div>
        <div class="control-group" :class="{ 'error' : !$v.senha.required && $v.$error}">

          <label for="login-pass" class="label-form">Senha</label>
          <input
            v-model="senha"
            type="password"
            class="login-field"
            placeholder="Informe sua senha"
          >
          <div class="error-message">Por favor, informe a sua senha no campo acima.</div>
        </div>
        <!-- <input type="submit" class="btn" value="Login"> -->
        <input type="submit" class="btn" value="Login">
        <transition name="fade">
          <ErrorBox v-if="errouLogin" :tituloErro="tituloErro" :sugestao="sugestao"/>
        </transition>
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
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { setTimeout } from 'timers';
import ErrorBox from '../components/layout/ErrorBox';
import { required, email } from 'vuelidate/lib/validators';

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
      tituloErro: 'Usuário ou senha incorretos!',
      sugestao: 'Houve um erro ao tentar realizar seu login. Por favor, confirme suas informações e tente novamente.',
      esqueciSenha: false,
    };
  },
  validations: {
    email: {
      required,
    },
    senha: {
      required,
    },
  },
  computed: {
    emailValidation() {
      return (!this.$v.email.required || !this.$v.email.email) && this.$v.$error;
    },
  },
  methods: {
    ...mapActions(['setUsuario']),
    async validaForm() {
      this.$v.$touch();

      if (this.$v.$error) return;

      await this.fazerLogin();
    },
    async fazerLogin() {
      const { email, senha } = this;
      this.errouLogin = false;
      try {
        const usuario = (await this.$api.post('/login', { email, senha })).data.data[0];
        this.setUsuario(usuario);
        this.$router.push({ name: 'leiloes' });
      } catch (err) {
        // const informacoesIncorretas = !!err.response.data.error;
        this.errouLogin = true;
        setTimeout(() => {
          this.errouLogin = false;
        }, 10000);
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
